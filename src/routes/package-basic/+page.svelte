<script>
    import { onMount } from 'svelte';
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

    :root {
        --primary-color: #00c9ec;
        --secondary-color: #000000;
        --white: #ffffff;
        --light-gray: #f8fafb;
        --text-gray: #555;
        --border-gray: #e0e0e0;
        --transition: all 0.3s ease;
    }

    :global(body) {
        font-family: 'Poppins', sans-serif;
        background: var(--light-gray);
        margin: 0;
        padding: 0;
        line-height: 1.6;
        color: var(--secondary-color);
    }

    .package-container {
        background: var(--light-gray);
        padding: 6rem 1rem 4rem;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: flex-start;
    }

    .package-card {
        background: var(--white);
        border-radius: 12px;
        padding: 3rem 2rem;
        max-width: 900px;
        width: 100%;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        border: 1px solid var(--border-gray);
    }

    .package-heading {
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--secondary-color);
        margin-bottom: 1rem;
        text-align: center;
    }

    .package-price-big {
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--primary-color);
        text-align: center;
        margin-bottom: 1.5rem;
    }

    .dollar-sign {
        font-weight: 700;
    }

    .description {
        font-size: 1.1rem;
        color: var(--text-gray);
        text-align: center;
        margin-bottom: 3rem;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
    }

    .features {
        display: grid;
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .feature-section {
        background: var(--light-gray);
        padding: 2rem;
        border-radius: 8px;
        border: 1px solid var(--border-gray);
    }

    .h2-package-subheading {
        font-size: 1.8rem;
        font-weight: 700;
        color: var(--secondary-color);
        margin-bottom: 1.5rem;
        text-align: center;
    }

    .h3-package-subheading {
        font-size: 1.4rem;
        font-weight: 600;
        color: var(--secondary-color);
        margin-bottom: 1rem;
        text-align: center;
    }

    .feature-list {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .feature-item {
        display: flex;
        align-items: center;
        padding: 0.5rem 0;
        border-bottom: 1px solid var(--border-gray);
    }

    .feature-item:last-child {
        border-bottom: none;
    }

    .feature-item::before {
        content: '✓';
        color: var(--primary-color);
        font-weight: 700;
        margin-right: 0.75rem;
        font-size: 1.2rem;
    }

    .feature-item p {
        margin: 0;
        color: var(--text-gray);
        font-weight: 500;
    }

    .start-button {
        display: inline-block;
        background: var(--primary-color);
        color: var(--white);
        padding: 1rem 2rem;
        border-radius: 50px;
        text-decoration: none;
        font-weight: 600;
        font-size: 1.1rem;
        text-align: center;
        margin: 2rem auto 0;
        transition: var(--transition);
        border: 2px solid var(--primary-color);
    }

    .start-button:hover {
        background: #00a8c7;
        border-color: #00a8c7;
        transform: translateY(-2px);
    }

    /* Mobile Responsiveness */
    @media (max-width: 768px) {
        .package-container {
            padding: 5rem 1rem 2rem;
        }

        .package-card {
            padding: 2rem 1rem;
        }

        .package-heading {
            font-size: 2rem;
        }

        .package-price-big {
            font-size: 2rem;
        }

        .description {
            font-size: 1rem;
        }

        .feature-section {
            padding: 1.5rem;
        }
    }

    @media (max-width: 480px) {
        .package-card {
            margin: 0 0.5rem;
        }

        .package-heading {
            font-size: 1.8rem;
        }

        .package-price-big {
            font-size: 1.8rem;
        }
    }
</style>

<div class="package-container">
    <div class="package-card">
        <h1 class="package-heading">Basic Package</h1>
        <div class="package-price-big">
            <span class="dollar-sign">$</span>1,995
        </div>
        <p class="description">
            Maintain an online presence with minimal maintenance required.
        </p>

        <!-- Uncomment this anchor tag if needed for navigation -->
        <!-- <a href="./checkout-billing.html" class="start-button">Get Started</a> -->

        <div class="features">
            <div class="feature-section">
                <h2 class="h2-package-subheading">What You Get</h2>
                <h3 class="h3-package-subheading">1 Custom-Built Page</h3>
                <ul class="feature-list">
                    <li class="feature-item"><p>Navigation Bar</p></li>
                    <li class="feature-item"><p>Hero Section</p></li>
                    <li class="feature-item"><p>Services/Products Section</p></li>
                    <li class="feature-item"><p>About Us Section</p></li>
                    <li class="feature-item"><p>Reviews/Testimonials</p></li>
                    <li class="feature-item"><p>Contact Section</p></li>
                    <li class="feature-item"><p>Footer</p></li>
                </ul>
            </div>
            <div class="feature-section">
                <h3 class="h3-package-subheading">Comprehensive Features</h3>
                <ul class="feature-list">
                    <li class="feature-item"><p>Custom Domain Setup</p></li>
                    <li class="feature-item"><p>Social Media Integration</p></li>
                    <li class="feature-item"><p>Professional Branding</p></li>
                    <li class="feature-item"><p>SEO Optimization</p></li>
                    <li class="feature-item"><p>Google Registration</p></li>
                    <li class="feature-item"><p>Responsive Design</p></li>
                    <li class="feature-item"><p>ADA Compliance</p></li>
                    <li class="feature-item"><p>SSL Certificate</p></li>
                    <li class="feature-item"><p>60-Day Support</p></li>
                </ul>
            </div>
        </div>
    </div>
</div>