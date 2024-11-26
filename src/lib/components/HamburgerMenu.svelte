<script>
    export let checked = false;
    export let scrolled = false;
    export let menuOpen = false;
</script>

<label class={`cursor-pointer`}>
    <input type="checkbox" class="hidden" bind:checked={checked} />
    <svg 
        viewBox="0 0 100 100" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="5" 
        class="w-12 h-12 text-gray-700 transition-transform duration-300"
        class:text-off-white={!menuOpen && scrolled}
        class:text-gray-700={!menuOpen && !scrolled}
    >
        <path class="top" d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20" />
        <path class="middle" d="m 30,50 h 40" />
        <path class="bottom" d="m 70,67 h -40 c 0,0 -7.5,-0.802118, -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20" />
    </svg>
</label>

<style lang="postcss">
    :root {
        --transition-duration: 300ms;
    }

    /* SVG Hamburger Animation */
    svg, .middle {
        transition: transform var(--transition-duration) ease;
    }

    .top, .bottom {
        transition: stroke-dashoffset var(--transition-duration) ease-out;
    }

    .top {
        stroke-dasharray: 40 160;
    }

    .middle {
        transform-origin: 50%;
    }

    .bottom {
        stroke-dasharray: 40 85;
    }

    /* Checkbox checked: rotate hamburger icon */
    label:has(input:checked) svg {
        transform: rotate(45deg);

        .top,
        .bottom {
            stroke-dashoffset: -64px;
        }

        .middle {
            transform: rotate(90deg);
        }
    }
</style>
