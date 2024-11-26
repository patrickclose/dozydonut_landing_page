<script>
    import '../style.css';
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
  </script>
  
  <Header />
  <div class="home-container pt-24">
    <slot />
    <Footer />
  </div>

  <style lang="postcss">
    .home-container {
      min-height: 100vh; /* Ensures full viewport height */
      display: flex;
      flex-direction: column;
      --header-spacing: 6rem; /* Changed from 8rem to 6rem to match pt-24 */
      padding-top: var(--header-spacing);
    }
  
    /* If you want to ensure the footer stays at the bottom */
    :global(.home-container > :first-child) {
      flex: 1;
    }
  </style>