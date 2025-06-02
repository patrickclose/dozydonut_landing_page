<script>
  import { fade, slide } from 'svelte/transition';
  import ImageProcessor from '../../lib/components/ImageProcessor/ImageProcessor.svelte';

  let selectedApp = null;
  
  const apps = [
    {
      id: 'image-processor',
      title: 'Image Processor',
      description: 'Transform and enhance your images with advanced processing tools',
      icon: 'image'
    }
    // {
    //   id: 'meditation',
    //   title: 'Guided Meditation',
    //   description: 'Find peace and focus with guided meditation sessions',
    //   icon: 'play-circle'
    // }
  ];
  
  function getIcon(iconName) {
    switch(iconName) {
      case 'image':
        return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`;
      case 'play-circle':
        return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>`;
      default:
        return '';
    }
  }
</script>
  
<svelte:head>
  <title>Dozy App Gallery</title>
</svelte:head>

<div class="min-h-screen bg-gray-50 p-8">
  <div class="max-w-6xl mx-auto">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">Dozy App Gallery</h1>
      <p class="text-gray-600">Select an app to get started</p>
    </div>

    {#if !selectedApp}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
           transition:slide>
        {#each apps as app}
          <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 cursor-pointer">
            <div class="flex items-center justify-between">
              <div class="p-3 bg-gray-100 rounded-lg">
                {@html getIcon(app.icon)}
              </div>
            </div>
            <h2 class="text-xl font-semibold mt-4">{app.title}</h2>
            <p class="text-gray-600 mt-2">{app.description}</p>
            <button 
              class="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mt-4"
              on:click={() => selectedApp = app.id}
            >
              Launch App
            </button>
          </div>
        {/each}
      </div>
    {:else}
      <div class="bg-white rounded-lg shadow-md p-6" transition:slide>
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-semibold">
            {apps.find(app => app.id === selectedApp)?.title}
          </h2>
          <button 
            class="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
            on:click={() => selectedApp = null}
          >
            Back to Apps
          </button>
        </div>
        <div class="min-h-[500px]">
          {#if selectedApp === 'image-processor'}
            <ImageProcessor />
          {:else if selectedApp === 'meditation'}
            <!-- Meditation app component will go here -->
            <div class="flex items-center justify-center h-full text-gray-500">
              Meditation App Content
            </div>
          {/if}
        </div>
      </div>
    {/if}
  </div>
</div>
  