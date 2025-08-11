<!-- File: src/routes/+layout.svelte -->
<script>
    import Header from '$lib/components/Header.svelte';
    // Import your global styles if you have them
    import '../app.css';
    import Footer from '$lib/components/Footer.svelte';
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
    p {
        font-family: 'Poppins', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }
</style>

<Header />
<main>
    <slot />
</main>
<Footer />
