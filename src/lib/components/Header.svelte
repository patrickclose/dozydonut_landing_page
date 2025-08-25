<script>
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  import { clickOutside } from '$lib/actions/clickOutside.js';

  // State
  let scrolled = false;
  let menuOpen = false;

  // Scroll handler
  const handleScroll = () => {
    scrolled = window.scrollY > 50;
  };

  // Resize handler (close menu on desktop)
  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      menuOpen = false;
    }
  };

  // Add event listeners
  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  });

  // Close menu when link is clicked
  const closeMenu = () => {
    menuOpen = false;
  };
</script>

<style>
  :root {
    --header-height: 4rem;
    --transition-speed: 0.3s;
    --menu-bg: rgba(0, 0, 0, 0.95);
    --link-hover: #00c9ec;
  }

  .site-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    transition: background-color var(--transition-speed), box-shadow var(--transition-speed);
    background-color: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  }

  .bg-transparent {
    background-color: transparent;
  }

  .bg-white {
    background-color: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .text-white {
    color: #fff;
  }

  .text-gray-800 {
    color: #2d3748;
  }

  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    height: var(--header-height);
    max-width: 1000px;
    margin: 0 auto;
    position: relative;
    z-index: 1001;
  }

  .logo-link {
    font-size: 1.5rem;
    font-weight: 700;
    text-decoration: none;
    color: inherit;
    transition: color var(--transition-speed);
    position: relative;
    z-index: 1001;
  }

  .logo-link:hover {
    color: var(--link-hover);
  }

  .menu-btn {
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background: none;
    border: none;
    cursor: pointer;
    z-index: 1001;
    transition: color var(--transition-speed);
  }

  .menu-btn:hover {
    color: var(--link-hover);
  }

  .menu-btn span {
    display: block;
    width: 25px;
    height: 3px;
    background-color: currentColor;
    border-radius: 4px;
    transition: all var(--transition-speed);
    position: relative;
  }

  .menu-btn span::before,
  .menu-btn span::after {
    content: '';
    display: block;
    width: 25px;
    height: 3px;
    background-color: currentColor;
    border-radius: 4px;
    transition: all var(--transition-speed);
  }

  .menu-btn span::before {
    position: absolute;
    top: -6px;
    left: 0;
  }

  .menu-btn span::after {
    position: absolute;
    top: 6px;
    left: 0;
  }

  .menu-open .menu-btn {
    color: #ffffff;
    z-index: 1002;
    position: relative;
  }

  .menu-open .menu-btn:hover {
    color: var(--link-hover);
  }

  .menu-open .menu-btn span {
    background-color: transparent;
  }

  .menu-open .menu-btn span::before {
    top: 0;
    transform: rotate(45deg);
    background-color: currentColor;
    transition: all var(--transition-speed);
  }

  .menu-open .menu-btn span::after {
    top: 0;
    transform: rotate(-45deg);
    background-color: currentColor;
    transition: all var(--transition-speed);
  }

  nav {
    background-color: transparent;
    display: flex;
  }

  nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 1.5rem;
  }

  nav li {
    margin: 0;
  }

  .nav-link {
    color: inherit;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    padding: 0.5rem 0;
    position: relative;
    transition: color var(--transition-speed);
  }

  .nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--link-hover);
    transition: width var(--transition-speed);
  }

  .nav-link:hover::after,
  .nav-link.active::after {
    width: 100%;
  }

  .nav-link:hover,
  .nav-link.active {
    color: var(--link-hover);
  }

  .mobile-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    background: var(--menu-bg);
    z-index: 999;
    display: none;
    cursor: pointer;
  }

  /* Desktop Styles */
  @media (min-width: 1024px) {
    nav {
      position: static;
      width: auto;
      height: auto;
      background: transparent;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      transform: none;
      opacity: 1;
      z-index: auto;
    }

    nav ul {
      flex-direction: row;
      gap: 1.5rem;
      text-align: left;
    }

    .nav-link {
      font-family: 'Poppins', sans-serif;
      font-size: 1rem;
    }
  }

  /* Mobile Styles */
  @media (max-width: 1023px) {
    .mobile-overlay {
      display: block;
    }
    .menu-btn {
      display: flex;
    }

    .header-container {
      padding: 0 1.5rem;
    }

    .logo-link {
      color: #2d3748 !important;
    }

    .logo-link:hover {
      color: var(--link-hover) !important;
    }

    .menu-open .logo-link {
      color: white !important;
    }

    .menu-open .logo-link:hover {
      color: var(--link-hover) !important;
    }

    nav {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background: transparent;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transform: translateX(-100%);
      transition: transform var(--transition-speed) ease, opacity var(--transition-speed) ease;
      opacity: 0;
      color: white;
      z-index: 1000;
    }

    .menu-open nav {
      transform: translateX(0);
      opacity: 1;
    }

    nav ul {
      flex-direction: column;
      gap: 2rem;
      text-align: center;
    }

    .nav-link {
      font-size: 1.25rem;
      color: white;
      transition: color var(--transition-speed);
      position: relative;
      padding: 0.5rem 0;
    }

    .nav-link:hover {
      color: var(--link-hover);
    }

    .nav-link::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 2px;
      background-color: var(--link-hover);
      transition: width var(--transition-speed);
    }

    .nav-link:hover::after {
      width: 80%;
    }
  }
</style>

<header
  class="site-header text-gray-800"
  class:menu-open={menuOpen}
>
  <section class="header-container">
    <!-- Logo -->
    <div>
      <a href="/" class="logo-link" on:click={closeMenu}>DozyDonut</a>
    </div>

    <!-- Hamburger Button -->
    <button
      class="menu-btn"
      aria-label="Toggle menu"
      aria-expanded={menuOpen}
      on:click={() => menuOpen = !menuOpen}
    >
      <span></span>
    </button>

    <!-- Mobile Overlay -->
    {#if menuOpen}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div class="mobile-overlay" on:click={() => menuOpen = false}></div>
    {/if}

    <!-- Navigation -->
    <nav aria-label="Main navigation">
      <ul>
        <li><a href="/products" class="nav-link" on:click={closeMenu}>Products</a></li>
        <li><a href="/web-performance" class="nav-link" on:click={closeMenu}>Web Performance</a></li>
        <li><a href="/vending" class="nav-link" on:click={closeMenu}>Smart Vending</a></li>
        <li><a href="/dozy-ai" class="nav-link" on:click={closeMenu}>Dozy AI</a></li>
        <li><a href="/our-story" class="nav-link" on:click={closeMenu}>Our Story</a></li>
        <li><a href="/contact" class="nav-link" on:click={closeMenu}>Contact</a></li>
      </ul>
    </nav>
  </section>
</header>
