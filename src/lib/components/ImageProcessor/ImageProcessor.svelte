<script>
    import { onMount } from 'svelte';

    // References to DOM elements
    let canvas;
    let loadingIndicator;
    let fileInput;
    let ctx;
    let originalImageData = null;
    let loading;

    // Default values for sliders
    const DEFAULT_VALUES = {
        smoothing: 0,
        vibrance: 50,
        lineStrength: 50,
    };  
  
    // Slider states
    let smoothing = DEFAULT_VALUES.smoothing;
    let vibrance = DEFAULT_VALUES.vibrance;
    let lineStrength = DEFAULT_VALUES.lineStrength;
  
    // For drop zone preview
    let previewSrc = '';
    let worker;

    // Process the image using the current slider values.
    function processImage() {
        if (!originalImageData) return;
        loading = true;

        worker.postMessage({
            imageData: originalImageData,
            smoothing: +smoothing,
            vibrance: +vibrance,
            lineStrength: +lineStrength
        });
    }
  
    // Simple debounce implementation.
    function debounce(func, wait) {
      let timeout;
      return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
      };
    }
    const debouncedProcessImage = debounce(processImage, 150);
  
    // --- File and Image Handling ---
    function handleUploadChange(event) {
      if (event.target.files && event.target.files[0]) {
        const file = event.target.files[0];
        handleFile(file);
      }
    }
    
    async function handleDrop(event) {
      event.preventDefault();
      console.log()
      
        // Handle direct file drops
        if (event.dataTransfer.files?.length > 0) {
            handleFile(event.dataTransfer.files[0]);
            return;
        }

   // Handle Discord's special URL drops
   const transfer = event.dataTransfer;
   const urlTypes = ['text/uri-list', 'text/plain'];
   const rawUrl = urlTypes.map(t => transfer.getData(t)).find(u => u && u.startsWith('http'));

   if (rawUrl) {
            try {
                loading = true;
                
                // Parse and validate URL
                const url = new URL(rawUrl);
                const validExtensions = /\.(png|jpe?g|gif|webp)$/i;
                if (!validExtensions.test(url.pathname)) {
                    throw new Error('Unsupported image format');
                }

                // Use rotating CORS proxies
                const proxies = [
                    'https://corsproxy.org/?',
                    'https://api.codetabs.com/v1/proxy/?quest='
                ];
                
                const response = await fetch(
                    proxies[Math.floor(Math.random() * proxies.length)] + 
                    encodeURIComponent(url.href)
                );

                if (!response.ok) throw new Error(`Failed to fetch: ${response.status}`);
                
                // Verify content type
                const contentType = response.headers.get('content-type');
                if (!contentType?.startsWith('image/')) {
                    throw new Error('URL does not point to an image');
                }

                // Create File object with proper metadata
                const blob = await response.blob();
                const filename = url.pathname.split('/').pop() || 'discord-image.png';
                const file = new File([blob], filename, { 
                    type: blob.type,
                    lastModified: Date.now()
                });

                handleFile(file);
            } catch (error) {
                console.error('Drop error:', error);
                alert(`Image load failed: ${error.message}`);
            } finally {
                loading = false;
            }
        }
    }
    
    function handlePaste(event) {
      const items = event.clipboardData?.items;
      if (items) {
        for (const item of items) {
          if (item.type.startsWith('image')) {
            const file = item.getAsFile();
            handleFile(file);
            break;
          }
        }
      }
    }


    async function handleFile(file) {
        if (!file.type.startsWith('image/')) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            previewSrc = e.target.result;
            const img = new Image();
            
            img.onerror = () => {
                console.error('Failed to load image');
                alert('Failed to process image. Please try another file.');
            };
            
            img.onload = () => {
                try {
                    canvas.width = img.naturalWidth;
                    canvas.height = img.naturalHeight;
                    ctx.drawImage(img, 0, 0);
                    originalImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                    processImage();
                } catch (error) {
                    console.error('Canvas error:', error);
                    alert('Error processing image - possible CORS issue');
                }
            };
            
            img.src = e.target.result;
        };
        
        reader.readAsDataURL(file);
    }

    function triggerFileInput() {
      console.log("Drop zone clicked!"); // Debugging line
      fileInput.click(); // Programmatically trigger the file input dialog
    }
  
    // Reactive statement: re-run processing when image data or slider values change.
    $: if (originalImageData) {
      debouncedProcessImage();
    }

    $: controlsDisabled = !!originalImageData;
  

    function reset() {
      console.log("Resetting values to defaults...");
      smoothing = DEFAULT_VALUES.smoothing;
      vibrance = DEFAULT_VALUES.vibrance;
      lineStrength = DEFAULT_VALUES.lineStrength;
    }

    // Add download settings
    const downloadSettings = {
      maxWidth: 2000,
      format: 'image/jpeg',
      quality: 0.85
    };

    async function downloadProcessedImage() {
        if (!canvas) return;
        
        try {
            loading = true;
            
            // Create a temporary canvas for resizing
            const tempCanvas = document.createElement('canvas');
            const scale = Math.min(1, downloadSettings.maxWidth / canvas.width);
            tempCanvas.width = canvas.width * scale;
            tempCanvas.height = canvas.height * scale;
            
            // Draw scaled image to temp canvas
            const tempCtx = tempCanvas.getContext('2d');
            tempCtx.imageSmoothingEnabled = true;
            tempCtx.imageSmoothingQuality = 'high';
            tempCtx.drawImage(canvas, 0, 0, tempCanvas.width, tempCanvas.height);
            
            // Convert to blob with compression
            const blob = await new Promise((resolve) => {
                tempCanvas.toBlob(
                    (blob) => resolve(blob),
                    downloadSettings.format,
                    downloadSettings.quality
                );
            });
            
            if (!blob) throw new Error('Failed to create image blob');
            
            // Create and trigger download
            const url = URL.createObjectURL(blob);
            const extension = downloadSettings.format === 'image/jpeg' ? 'jpg' : 'png';
            const a = document.createElement('a');
            a.href = url;
            a.download = `processed-image.${extension}`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            
            // Show file size in console for debugging
            console.log(`Downloaded image size: ${(blob.size / 1024).toFixed(2)}KB`);
        } catch (error) {
            console.error('Download failed:', error);
            alert('Failed to download image. Please try again.');
        } finally {
            loading = false;
        }
    }

    onMount(() => {
        loading = false;
        ctx = canvas.getContext('2d');

        worker = new Worker(new URL('../ImageProcessor/imageWorker.js', import.meta.url), { type: 'module' });

        worker.onmessage = function (event) {
            ctx.putImageData(event.data, 0, 0);
            const processedImageURL = canvas.toDataURL('image/png');
            loading = false;
        };
    });
  
  </script>
  
  <div class="container">
    <h2>Image Processor</h2>
 
    <div id="loading" bind:this={loading}>Processing...</div>
    <br />

    <!-- Drop Zone using Svelte's declarative event directives -->
    <button class="drop-zone"
      tabindex="0"
      class:disabled={!controlsDisabled}
      aria-label={controlsDisabled ? 'Processing complete' : 'Upload image'}
      on:dragenter|preventDefault
      on:drop|preventDefault={handleDrop}
      on:paste={handlePaste}
      on:click={triggerFileInput}
    >
      {#if previewSrc}
        <img src={previewSrc} alt="Preview" class="preview" />
      {:else}
        <svg class="upload-icon" viewBox="0 0 92 92">
          <path d="M89,58.8V86c0,2.8-2.2,5-5,5H8c-2.8,0-5-2.2-5-5V58.8c0-2.8,2.2-5,5-5s5,2.2,5,5V81h66V58.8c0-2.8,2.2-5,5-5S89,56,89,58.8z M29.6,29.9L41,18.2v43.3c0,2.8,2.2,5,5,5s5-2.2,5-5V18.3l11.4,11.6c1,1,2.3,1.5,3.6,1.5c1.3,0,2.5-0.5,3.5-1.4c2-1.9,2-5.1,0.1-7.1L49.6,2.5C48.6,1.5,47.3,1,46,1c-1.3,0-2.6,0.5-3.6,1.5L22.5,22.9c-1.9,2-1.9,5.1,0.1,7.1C24.5,31.9,27.7,31.8,29.6,29.9z"/>
        </svg>
        <p>Click to upload file</p>
        <p>or</p>
        <p>Drag and drop an image here or paste it</p>
      {/if}
    </button>
    <div 
      class="controls"
      class:disabled={!controlsDisabled}
    >
      <input
        type="file"
        bind:this={fileInput}
        on:change={handleUploadChange}
        accept="image/*"
        class="hidden"
      />
      <div class="slider-container">
        <label for="smoothing">Smoothing:</label>
        <input
          id="smoothing"
          type="range"
          min="0"
          max="20"
          bind:value={smoothing}
          on:input={debouncedProcessImage}
          disabled={!controlsDisabled}
        />
        <span>{smoothing}</span>
      </div>
      <div class="slider-container">
        <label for="vibrance">Color Vibrance:</label>
        <input
          id="vibrance"
          type="range"
          min="0"
          max="100"
          bind:value={vibrance}
          on:input={debouncedProcessImage}
          disabled={!controlsDisabled}
        />
        <span>{vibrance}</span>
      </div>
      <div class="slider-container">
        <label for="lineStrength">Line Enhancement:</label>
        <input
          id="lineStrength"
          type="range"
          min="0"
          max="100"
          bind:value={lineStrength}
          on:input={debouncedProcessImage}
          disabled={!controlsDisabled}
        />
        <span>{lineStrength}</span>
      </div>
      <div>
        <button on:click={reset} disabled={!controlsDisabled}>
          Reset sliders
        </button>
      </div>
    </div>
    <button 
        on:click={downloadProcessedImage}
        class="download-button"
        disabled={!originalImageData || loading}
    >
        Download Processed Image
    </button>
    {#if loading}
      <p>Processing ...</p>
    {/if}
    <canvas 
      id="canvas" 
      bind:this={canvas}
      class:hidden={!originalImageData}
      crossOrigin="anonymous"
    ></canvas>
  </div>

  
  <style>
    .hidden {
        display: none;
    }
    .upload-icon {
        width: 50px;
        height: 50px;
        margin-bottom: 15px;
        fill: #666;
    }
    .drop-zone {
        width: 100%;
        height: 200px;
        border: 2px dashed #ccc;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: white;
        cursor: pointer;
        margin: 20px 0;
        position: relative;
    }

    .drop-zone p {
        color: #666;
        margin: 5px 0;
    }

    .preview {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }

    .container {
      max-width: 800px;
      margin: 0 auto;
      text-align: center;
      background: #f5f5f5;
      padding: 20px;
      border-radius: 8px;
    }
    .controls {
      margin: 20px 0;
      padding: 20px;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .slider-container {
      margin: 10px 0;
      text-align: left;
    }
    label {
      display: inline-block;
      width: 150px;
    }
    #canvas {
      margin-top: 20px;
      max-width: 100%;
      border: 1px solid #ccc;
      background: white;
    }
    #loading {
      margin-top: 10px;
      color: #666;
      display: none;
    }

    .download-button {
        background-color: #4CAF50;
        color: white;
        padding: 12px 24px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
        transition: all 0.3s ease;
        margin-top: 20px;
    }

    .download-button:hover:not(:disabled) {
        background-color: #45a049;
        transform: translateY(-1px);
        box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    }

    .download-button:disabled {
        background-color: #cccccc;
        cursor: not-allowed;
        opacity: 0.7;
    }

    .download-button:active:not(:disabled) {
        transform: translateY(0);
    }
  </style>
  