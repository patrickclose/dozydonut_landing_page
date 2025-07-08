<script>
    import '../style.css';
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
  </script>
  
  <Header />
  <div class="home-container">
    <slot />
    <Footer />
  </div>

  <style lang="postcss">
    .home-container {

    }
  
    /* If you want to ensure the footer stays at the bottom */
    :global(.home-container > :first-child) {
      flex: 1;
    }
  </style>