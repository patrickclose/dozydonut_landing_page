<script>
    import { onMount, onDestroy } from 'svelte';
    
    // Meditation states
    const STATES = {
      IDLE: 'idle',
      INTRO: 'intro',
      INHALE: 'inhale',
      HOLD: 'hold',
      EXHALE: 'exhale',
      FINISHED: 'finished'
    };
    
    // Audio files
    const audioFiles = {
      intro: 'hello-and-welcome-to-this-guid-american-female-2025-02-17.wav',
      inhale: 'bring-your-attention-to-your-n-american-female-2025-02-17.wav',
      hold: 'focus-on-your-arms-and-feel-r-american-female-2025-02-17.wav',
      exhale: 'slowly-exhale-american-female-2025-02-17.wav',
      release: 'release-any-tightness-in-your-american-female-2025-02-17.wav'
    };
    
    // State variables
    let currentState = STATES.IDLE;
    let audioPlayer;
    let timerInterval;
    let timerDuration = 0;
    let timerRemaining = 0;
    let breathCount = 0;
    let maxBreaths = 10;
    let circleSize = 100;
    let instructions = '';
    let audioQueue = [];
    
    // Timer durations in seconds
    const timers = {
      inhale: 4,
      hold: 7,
      exhale: 8
    };
    
    onMount(() => {
      audioPlayer = new Audio();
      audioPlayer.addEventListener('ended', handleAudioEnded);
    });
    
    onDestroy(() => {
      if (audioPlayer) {
        audioPlayer.removeEventListener('ended', handleAudioEnded);
      }
      clearInterval(timerInterval);
    });
    
    function startMeditation() {
      currentState = STATES.INTRO;
      breathCount = 0;
      playAudio(audioFiles.intro);
      instructions = "Welcome to your meditation session. Get comfortable and prepare to focus on your breath.";
    }
    
    function handleAudioEnded() {
      if (audioQueue.length > 0) {
        const nextAudio = audioQueue.shift();
        playAudio(nextAudio);
        return;
      }
      
      switch (currentState) {
        case STATES.INTRO:
          startBreathingCycle();
          break;
        case STATES.INHALE:
          startHoldBreath();
          break;
        case STATES.HOLD:
          startExhale();
          break;
        case STATES.EXHALE:
          breathCount++;
          if (breathCount >= maxBreaths) {
            finishMeditation();
          } else {
            startBreathingCycle();
          }
          break;
      }
    }
    
    function playAudio(filename) {
      if (!filename) return;
      audioPlayer.src = `/static/audio/${filename}`;
      audioPlayer.play().catch(err => console.error("Audio play failed:", err));
    }
    
    function queueAudio(filenames) {
      audioQueue = [...filenames];
      if (audioQueue.length > 0) {
        const firstAudio = audioQueue.shift();
        playAudio(firstAudio);
      }
    }
    
    function startBreathingCycle() {
      currentState = STATES.INHALE;
      circleSize = 100;
      instructions = "Breathe in deeply through your nose";
      startTimer(timers.inhale, true);
      playAudio(audioFiles.inhale);
    }
    
    function startHoldBreath() {
      currentState = STATES.HOLD;
      instructions = "Hold your breath";
      startTimer(timers.hold, false);
      playAudio(audioFiles.hold);
    }
    
    function startExhale() {
      currentState = STATES.EXHALE;
      instructions = "Slowly exhale through your mouth";
      startTimer(timers.exhale, false);
      playAudio(audioFiles.exhale);
    }
    
    function finishMeditation() {
      currentState = STATES.FINISHED;
      clearInterval(timerInterval);
      instructions = "Meditation complete. Take a moment to notice how you feel.";
      playAudio(audioFiles.release);
    }
    
    function startTimer(duration, isInhale) {
      clearInterval(timerInterval);
      timerDuration = duration;
      timerRemaining = duration;
      
      timerInterval = setInterval(() => {
        timerRemaining -= 0.1;
        
        // Update circle size based on breathing phase
        if (isInhale) {
          circleSize = 100 + (200 * (1 - timerRemaining / timerDuration));
        } else if (currentState === STATES.EXHALE) {
          circleSize = 300 - (200 * (1 - timerRemaining / timerDuration));
        }
        
        if (timerRemaining <= 0) {
          clearInterval(timerInterval);
        }
      }, 100);
    }
    
    function getProgressPercent() {
      return (timerDuration - timerRemaining) / timerDuration * 100;
    }
    
    function resetSession() {
      clearInterval(timerInterval);
      if (audioPlayer) {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
      }
      currentState = STATES.IDLE;
      circleSize = 100;
      instructions = '';
    }
  </script>
  
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
    <div class="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
      <h1 class="text-2xl font-bold text-center mb-6 text-indigo-700">Breath Meditation</h1>
      
      {#if currentState === STATES.IDLE}
        <div class="text-center mb-8">
          <p class="mb-4">Take a moment to center yourself with guided breathing exercises.</p>
          <button 
            on:click={startMeditation}
            class="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Begin Meditation
          </button>
        </div>
        
        <div class="border-t pt-4 mt-4">
          <h2 class="font-semibold mb-2">Session Settings</h2>
          <div class="flex items-center mb-4">
            <label for="breathCount" class="w-32">Breath Cycles:</label>
            <input 
              type="range" 
              id="breathCount" 
              min="3" 
              max="20" 
              bind:value={maxBreaths} 
              class="flex-1"
            />
            <span class="ml-2 w-8 text-center">{maxBreaths}</span>
          </div>
        </div>
      {:else}
        <div class="text-center mb-6">
          <p class="text-lg mb-2">{instructions}</p>
          {#if currentState !== STATES.INTRO && currentState !== STATES.FINISHED}
            <p class="text-sm text-gray-500">Breath {breathCount + 1} of {maxBreaths}</p>
          {/if}
        </div>
        
        <div class="relative flex justify-center items-center h-64 mb-6">
          <!-- Breathing circle -->
          <div 
            class="absolute rounded-full transition-all duration-300"
            style="width: {circleSize}px; height: {circleSize}px; 
                   background-color: rgba(99, 102, 241, 0.2); 
                   border: 4px solid rgba(99, 102, 241, 0.6);"
          ></div>
          
          <!-- Timer display -->
          {#if currentState !== STATES.INTRO && currentState !== STATES.FINISHED}
            <div class="z-10 text-2xl font-bold">
              {Math.max(0, Math.ceil(timerRemaining))}
            </div>
            
            <!-- Progress circle -->
            <svg class="absolute w-full h-full">
              <circle
                cx="50%"
                cy="50%"
                r="120"
                fill="none"
                stroke="#e5e7eb"
                stroke-width="8"
              />
              <circle
                cx="50%"
                cy="50%"
                r="120"
                fill="none"
                stroke="#4f46e5"
                stroke-width="8"
                stroke-dasharray="754"
                stroke-dashoffset={754 - (754 * getProgressPercent() / 100)}
                transform="rotate(-90, 50%, 50%)"
                stroke-linecap="round"
              />
            </svg>
          {/if}
        </div>
        
        <div class="flex justify-center mt-4">
          <button 
            on:click={resetSession}
            class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
          >
            {currentState === STATES.FINISHED ? 'New Session' : 'End Session'}
          </button>
        </div>
      {/if}
    </div>
  </div>