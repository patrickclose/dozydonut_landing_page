<!-- File: src/routes/+layout.svelte -->
<script>
    import { page } from '$app/stores';
    import { fade, fly } from 'svelte/transition';
    import Header from '$lib/components/Header.svelte';
    import '../app.css';
    import Footer from '$lib/components/Footer.svelte';
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
    p {
        font-family: 'Poppins', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }
    
    main {
        position: relative;
        min-height: 100vh;
    }
    
    .page-transition {
        position: relative;
        width: 100%;
    }
</style>

<Header />
<main>
    {#key $page.url.pathname}
        <div 
            class="page-transition"
            in:fade={{ duration: 300, delay: 150 }}
            out:fade={{ duration: 150 }}
        >
            <slot />
        </div>
    {/key}
</main>
<Footer />
