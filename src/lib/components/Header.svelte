<script>
    import HamburgerMenu from './HamburgerMenu.svelte';
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';
    import { clickOutside } from '$lib/actions/clickOutside.js';
    
    let scrolled = false;
    let menuOpen = false;

    onMount(() => {
        // Initialize scrolled state
        scrolled = window.scrollY > 50;

        const handleScroll = () => {
            scrolled = window.scrollY > 50;
        };

        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                menuOpen = false;
            }
        };

        // Add event listeners
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    });

</script>

<header
    class="sticky top-0 z-30 transition-all duration-300 h-20 px-4 "
    class:bg-black={menuOpen}
    class:bg-white-opacity={!menuOpen && scrolled}
    class:bg-transparent={!menuOpen && !scrolled}
    class:text-white={menuOpen}
    class:text-gray-800={!menuOpen && !scrolled}
>
    <section class="header-container flex navbar flex items-center justify-between w-full h-full">
        <!-- Hamburger Menu (visible on mobile) -->
        <div class="flex-none lg:hidden">
            <HamburgerMenu
                class="btn btn-square btn-ghost"
                bind:checked={menuOpen}
                {scrolled}
                {menuOpen}
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
            />
        </div>

        <!-- Logo Section -->
        <div class="flex-1 text-center lg:text-left">
            <a
                href="/"
                class="text-2xl font-semibold"
                class:text-off-white={!menuOpen && scrolled}
                class:text-white={menuOpen}
            >
                dozydonut
            </a>
        </div>

        <!-- Add a placeholder div to balance the hamburger menu width -->
        <div class="flex-none w-12 lg:hidden"></div>

        <!-- Navigation Links -->
        <nav class="hidden lg:flex lg:space-x-6 lg:items-center" aria-label="Main navigation">
            <ul class="flex space-x-4">
                <li>
                    <a
                        class="hover:text-gray-900 transition duration-200"
                        class:text-off-white={!menuOpen && scrolled}
                        class:text-white={menuOpen}
                        href="/products"
                        >Products</a
                    >
                </li>
                <li>
                    <a
                        class="hover:text-gray-900 transition duration-200"
                        class:text-off-white={!menuOpen && scrolled}
                        class:text-white={menuOpen}
                        href="/vending"
                        >Smart Vending</a
                    >
                </li>
                <li>
                    <a
                        class="hover:text-gray-900 transition duration-200"
                        class:text-off-white={!menuOpen && scrolled}
                        class:text-white={menuOpen}
                        href="/dozy-ai"
                        >Dozy AI</a
                    >
                </li>
                <li>
                    <a
                        class="hover:text-gray-900 transition duration-200"
                        class:text-off-white={!menuOpen && scrolled}
                        class:text-white={menuOpen}
                        href="/our-story"
                        >Our Story</a
                    >
                </li>
                <li>
                    <a
                        class="hover:text-gray-900 transition duration-200"
                        class:text-off-white={!menuOpen && scrolled}
                        class:text-white={menuOpen}
                        href="/contact"
                        >Contact</a
                    >
                </li>
            </ul>
        </nav>
    </section>

    {#if menuOpen}
        <section
            class="collapsible z-40 w-full"
            class:bg-black={menuOpen}
            class:text-white={menuOpen}
            transition:fly="{{ y: -100, duration: 300 }}"
        >
            <nav>
                <ul class="flex flex-col items-center gap-2">
                    <li><a href="/products" on:click={() => menuOpen = false}>Products</a></li>
                    <li><a href="/vending" on:click={() => menuOpen = false}>Smart Vending</a></li>
                    <li><a href="/dozy-ai" on:click={() => menuOpen = false}>Dozy AI</a></li>
                    <li><a href="/our-story" on:click={() => menuOpen = false}>Our Story</a></li>
                    <li><a href="/contact" on:click={() => menuOpen = false}>Contact</a></li>
                </ul>
            </nav>
        </section>
    {/if}
</header>

<style lang="postcss">
    /* Ensure header content is centered */
    .header-container {
        max-width: 1200px;
        margin: 0 auto;
        width: 100%;
        box-sizing: border-box;
    }

    header {
        position: fixed;
        width: 100%;
        z-index: 30;
        top: 0;
        left: 0;
        height: 5rem;
    }

    .collapsible {
        position: fixed;
        left: 0;
        width: 100%;
        background-color: rgba(36, 36, 36, 0.9); /* Match the faded background */
        z-index: 29;
        padding: 2rem 0;
        overflow: hidden;
    }

    .collapsible nav ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem; /* Increase gap between menu items */
    }

    .collapsible nav ul li a {
        font-size: 1.25rem; /* Larger font size */
        color: white;
        text-decoration: none;
        transition: opacity 0.2s ease;
    }

    .collapsible nav ul li a {
        font-size: 1.25rem;
        color: white;
        text-decoration: none;
        transition: all 0.2s ease;
        position: relative;
        padding-bottom: 2px;
    }

    .collapsible nav ul li a::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        bottom: 0;
        left: 50%;
        background-color: white;
        transition: all 0.2s ease;
        transform: translateX(-50%);
    }

    .collapsible nav ul li a:hover::after {
        width: 100%;
    }
    /* Add transition for smooth open/close */
    .collapsible {
        transition: transform 0.3s ease-in-out;
    }

    /* .collapsible[open] {
        transform: translateY(0);
    } */

    .navbar {
        transition: background-color 0.3s ease, color 0.3s ease;
    }

    .bg-transparent {
        background-color: transparent;
    }

    .bg-white-opacity {
        background-color: rgba(36, 36, 36, 0.9);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .bg-black {
        background-color: rgba(36, 36, 36, 0.95);
    }

    .text-gray-800 {
        color: #2d3748;
    }

    .text-off-white {
        color: #f0f0f0;
    }

    .text-white {
        color: white;
    }

    a {
        font-size: 1.75rem; /* Slightly larger for emphasis */
    }

    ul {
        gap: 1rem;
    }

    ul li a {
        font-size: 1.1rem; /* Standardize link size */
        position: relative;
        color: inherit; /* Maintain text color */
        text-decoration: none; /* Remove default underline */
        padding-bottom: 2px; /* Space for the underline */
        transition: color 0.2s ease-in-out; /* Smooth text color change */
    }

    ul li a::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        bottom: 0;
        left: 50%;
        background-color: currentColor; /* Match underline color to text color */
        transition: width 0.3s ease, left 0.3s ease; /* Smooth animation */
        /* transform: translateX(-50%); */
    }

    .text-gray-800::after {
        background-color: black; /* Black underline for black text */
    }

    ul li a:hover::after {
        width: 100%; /* Expand underline to full width */
        left: 0; /* Center align it */
    }

    .text-white::after {
        background-color: white; /* White underline for white text */
    }

</style>


