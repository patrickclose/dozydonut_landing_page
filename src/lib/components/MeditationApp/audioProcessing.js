/**
 * Audio processing utilities for meditation app
 */
export class AudioManager {
    constructor() {
      this.audioContext = null;
      this.audioElements = {};
      this.currentAudio = null;
    }
  
    initialize() {
      if (!this.audioContext) {
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
      }
      return this;
    }
  
    async preloadAudio(audioMap) {
      // Preload all audio files
      const loadPromises = Object.entries(audioMap).map(async ([key, path]) => {
        const response = await fetch(`/static/audio/${path}`);
        const arrayBuffer = await response.arrayBuffer();
        const audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer);
        
        this.audioElements[key] = audioBuffer;
      });
      
      await Promise.all(loadPromises);
      return this;
    }
  
    play(key) {
      if (!this.audioElements[key]) {
        console.error(`Audio '${key}' not found`);
        return Promise.reject(new Error(`Audio '${key}' not found`));
      }
      
      // Stop any currently playing audio
      if (this.currentAudio) {
        this.stop();
      }
      
      // Create and play the new audio source
      const source = this.audioContext.createBufferSource();
      source.buffer = this.audioElements[key];
      source.connect(this.audioContext.destination);
      source.start(0);
      
      this.currentAudio = source;
      
      // Return a promise that resolves when audio completes
      return new Promise(resolve => {
        source.onended = () => {
          this.currentAudio = null;
          resolve();
        };
      });
    }
  
    stop() {
      if (this.currentAudio) {
        try {
          this.currentAudio.stop();
        } catch (e) {
          console.warn("Error stopping audio:", e);
        }
        this.currentAudio = null;
      }
    }
  }
  
  /**
   * Visualizes breathing patterns with SVG
   */
  export class BreathingVisualizer {
    constructor(svgElement) {
      this.svg = svgElement;
      this.circle = null;
      this.text = null;
      this.progressRing = null;
      this.setup();
    }
    
    setup() {
      // Create circle element
      this.circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      this.circle.setAttribute("cx", "50%");
      this.circle.setAttribute("cy", "50%");
      this.circle.setAttribute("r", "50");
      this.circle.setAttribute("fill", "rgba(99, 102, 241, 0.2)");
      this.circle.setAttribute("stroke", "rgba(99, 102, 241, 0.6)");
      this.circle.setAttribute("stroke-width", "4");
      
      // Create text element
      this.text = document.createElementNS("http://www.w3.org/2000/svg", "text");
      this.text.setAttribute("x", "50%");
      this.text.setAttribute("y", "50%");
      this.text.setAttribute("text-anchor", "middle");
      this.text.setAttribute("dominant-baseline", "middle");
      this.text.setAttribute("font-size", "24px");
      this.text.setAttribute("font-weight", "bold");
      
      // Create progress ring
      this.progressRing = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      this.progressRing.setAttribute("cx", "50%");
      this.progressRing.setAttribute("cy", "50%");
      this.progressRing.setAttribute("r", "120");
      this.progressRing.setAttribute("fill", "none");
      this.progressRing.setAttribute("stroke", "#4f46e5");
      this.progressRing.setAttribute("stroke-width", "8");
      this.progressRing.setAttribute("stroke-dasharray", "754");
      this.progressRing.setAttribute("transform", "rotate(-90, 50%, 50%)");
      this.progressRing.setAttribute("stroke-linecap", "round");
      
      // Add elements to SVG
      this.svg.appendChild(this.progressRing);
      this.svg.appendChild(this.circle);
      this.svg.appendChild(this.text);
    }
    
    updateBreathingCircle(size, duration) {
      // Animate the circle size with CSS transitions
      this.circle.style.transition = `r ${duration}s ease-in-out`;
      this.circle.setAttribute("r", size);
    }
    
    updateTimer(seconds) {
      this.text.textContent = Math.ceil(seconds);
    }
    
    updateProgress(percent) {
      const circumference = 754; // 2 * Math.PI * 120
      const offset = circumference - (circumference * percent / 100);
      this.progressRing.setAttribute("stroke-dashoffset", offset);
    }
  }