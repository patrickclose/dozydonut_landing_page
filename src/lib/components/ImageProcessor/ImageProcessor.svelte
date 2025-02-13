<script>
    import { onMount } from 'svelte';

    // References to DOM elements
    let canvas;
    let downloadLink;
    let loading;
    let fileInput;
    let ctx;
    let originalImageData = null;

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
      
        // Try files first
        if (event.dataTransfer.files?.length > 0) {
            const file = event.dataTransfer.files[0];
            handleFile(file);
            event.dataTransfer.clearData();
            return;
        }

        // Handle Discord URL drags
        const urlTypes = ['text/uri-list', 'text/plain'];
        const url = urlTypes.map(t => event.dataTransfer.getData(t)).find(u => u.startsWith('http'));
        if (url) {
            try {
                // Validate Discord CDN URL
                if (!url.match(/\.(png|jpe?g|gif|webp)$/i)) {
                    throw new Error('Invalid image URL');
                }

                // Use alternative CORS proxy
                const proxyUrl = 'https://api.allorigins.win/raw?url=';
                const response = await fetch(proxyUrl + encodeURIComponent(url));
                
                if (!response.ok) throw new Error('Network response was not ok');
                
                const blob = await response.blob();
                const file = new File([blob], 'discord-image.png', { 
                    type: blob.type || 'image/png' 
                });
                
                handleFile(file);
            } catch (error) {
                console.error('Error loading Discord image:', error);
                alert('Could not load image from Discord. Please download and upload manually.');
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

    onMount(() => {
        loading = false;
        ctx = canvas.getContext('2d');

        worker = new Worker(new URL('../ImageProcessor/imageWorker.js', import.meta.url), { type: 'module' });

        worker.onmessage = function (event) {
            ctx.putImageData(event.data, 0, 0);
            const processedImageURL = canvas.toDataURL('image/png');
            downloadLink.href = processedImageURL;
            downloadLink.download = 'processed-sketch.png';
            downloadLink.style.display = 'inline-block';
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
      on:drop={handleDrop}
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
    <a id="downloadLink" bind:this={downloadLink} style="display: none;">
      Download Processed Image
    </a>
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
    #downloadLink {
      margin: 5px;
      padding: 8px 16px;
      background-color: #4caf50;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      text-decoration: none;
      display: inline-block;
    }
    #loading {
      margin-top: 10px;
      color: #666;
      display: none;
    }
  </style>
  