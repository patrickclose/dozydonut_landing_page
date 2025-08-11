<script>
    import { onMount } from 'svelte';

    onMount(() => {
        const handleScroll = () => {
            let scrollPosition = window.scrollY;
            let windowHeight = window.innerHeight;
            let scrollProgress = scrollPosition / (document.body.scrollHeight - windowHeight);
            document.body.style.setProperty('--scroll', scrollProgress);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });
</script>

<svelte:head>
    <title>Dozy Donut | Web Design & Development</title>
    <meta name="description" content="Transform your web traffic into revenue with our professional web design and development services. Mobile-first, high-converting websites.">
</svelte:head>

<!-- Hero Section -->
<section id="hero-section">
    <div class="hero-container">
        <div class="hero-content">
            <h1 class="h1-design">
                The <span class="highlight">Fastest</span> Way to Turn Your Web Traffic Into Revenue.
            </h1>
            <p class="hero-subtitle">
                Transform your website into a revenue-generating machine with our professional web design and development services.
            </p>
            <div class="hero-cta">
                <a href="/free-consultation" class="primary-cta">Get Your Free Consultation</a>
                <a href="#services" class="secondary-cta">See Our Services</a>
            </div>
        </div>
    </div>
</section>

<!-- Services & Process Section -->
<section id="services-process-section">
    <div class="services-process-container">
        <div class="section-column">
            <h2 id="services" class="section-heading">What We Do</h2>
            
            <!-- Audit Offering Box -->
            <div class="audit-offer-container">
                <div class="audit-box featured">
                    <div class="featured-banner">Featured Offering</div>
                    <h3>Complete Website Audit & Strategy Session</h3>
                    <p>Get a comprehensive analysis of your current website's performance, user experience, and conversion opportunities with actionable recommendations.</p>
                    <div class="audit-price">
                        <span class="price-amount">$495</span>
                        <span class="price-note">or FREE consultation</span>
                    </div>
                    <a class="audit-btn" href="/free-consultation">Schedule Free Consultation</a>
                </div>
            </div>
            
            <h3 class="offerings-subheading">Our Website Services</h3>
            <div class="dropdown-list">
                <details class="how-details">
                    <summary><h3 class="toggle-heading">Mobile, Tablet & Desktop Design</h3></summary>
                    <p class="toggle-paragraph">Easy navigation meets responsive design. Your site will adapt to all devices, letting visitors find what they need fast, wherever they are.</p>
                </details>
                <details class="how-details">
                    <summary><h3 class="toggle-heading">Web Development</h3></summary>
                    <div class="toggle-paragraph">
                        <p>We specialize in custom CMS enhancements, including integrating Cloudinary with AVIF CDN hosting for optimized image delivery on Squarespace sites. Our solutions improve performance, customization capabilities, and security while seamlessly integrating with your existing platform.</p>
                        
                        <p style="margin-top: 1rem;">Featured project: We developed a <a href="https://squarespace-recipe-generator.vercel.app/" target="_blank" rel="noopener noreferrer" style="color: var(--primary-color); text-decoration: underline;">Squarespace Recipe Generator</a> - a custom code generator that creates Squarespace code block templates for recipe makers. This tool includes temperature conversion between Celsius and Fahrenheit and recipe scaling functionality, demonstrating our expertise in creating practical development tools for content creators.</p>
                    </div>
                </details>
                <details class="how-details">
                    <summary><h3 class="toggle-heading">Content & Branding</h3></summary>
                    <div class="toggle-paragraph">
                        <ul class="ul-design">
                            <li><span class="sub-heading">Brand Identity</span> | Color palette, logos, favicon, fonts</li>
                            <li><span class="sub-heading">Graphics</span> | Graphs, illustrations, banners, icons</li>
                            <li><span class="sub-heading">Copywriting</span> | Product descriptions, CTAs, SEO meta tags, FAQs, forms, and more</li>
                        </ul>
                    </div>
                </details>
            </div>
        </div>
        
        <div class="section-column">
            <h2 class="section-heading">How It Works</h2>
            <div class="dropdown-list">
                <details class="how-details">
                    <summary><h3 class="toggle-heading">Schedule Consultation</h3></summary>
                    <p class="toggle-paragraph">Schedule a <a href="/free-consultation">FREE consultation</a> where we will go over your branding and business needs.</p>
                </details>
                <details class="how-details">
                    <summary><h3 class="toggle-heading">Purchase Package</h3></summary>
                    <p class="toggle-paragraph">Purchase your package and let us do the rest. We'll update you throughout the process.</p>
                </details>
                <details class="how-details">
                    <summary><h3 class="toggle-heading">Enjoy Your Website</h3></summary>
                    <p class="toggle-paragraph">Enjoy your new website!</p>
                </details>
            </div>
        </div>
    </div>
</section>

<!-- Pricing Section -->
<section id="pricing-section">
    <div class="pricing-container">
        <div class="inner-container">
            <h2 id="pricing" class="section-heading">Website Packages</h2>
            <p class="section-subtitle">Get 10% off our Essential package - $500 savings for first-time customers</p>
            <div class="price-box-container">
                <div class="price-box">
                    <h2>Professional</h2>
                    <p>Our most advanced features for customer conversion, blogs, email marketing integration, and more.</p>
                    <div class="regular-price-box">
                        <div class="price-detail">$9,995</div>
                        <p class="detail">*Starts from 10 pages</p>
                    </div>
                    <a class="buy-btn-a" href="/package-professional">Learn More</a>
                </div>
                <div class="price-box recommended">
                    <div class="recommend-banner">We Recommend</div>
                    <h2>Essential</h2>
                    <p>Reach your customers with a simple, complete website without the hassle of managing extra features.</p>
                    <div class="price">
                        <div class="old-price-box">
                            <span class="old-price">$4,995</span>
                            <p class="detail">*Up to 5 pages</p>
                        </div>
                        <div class="new-price-box">
                            <span class="new-price">$4,495</span>
                            <div class="new-customer">
                                <p>For new customers</p>
                            </div>
                        </div>
                    </div>
                    <a class="buy-btn-a" href="/package-essential">Learn More</a>
                </div>
                <div class="price-box">
                    <h2>Basic</h2>
                    <p>Maintain an online presence with minimal maintenance required.</p>
                    <div class="regular-price-box">
                        <div class="price-detail">$1,995</div>
                        <p class="detail">*One page website</p>
                    </div>
                    <a class="buy-btn-a" href="/package-basic">Learn More</a>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    :root {
        --primary-color: #00c9ec;
        --secondary-color: #000000;
        --black: #000000;
        --white: #ffffff;
        --transition: all 0.3s ease;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        line-height: 1.6;
        overflow-x: hidden;
    }

    html {
        scroll-behavior: smooth;
    }

    section {
        min-height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2rem 1rem;
    }

    .section-heading {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 2rem;
        text-align: center;
    }

    /* Hero Section */
    /* Global Section Styling */
    section {
        padding: 4rem 1rem;
    }

    .section-heading {
        font-size: clamp(2rem, 4vw, 3rem);
        font-weight: 700;
        text-align: center;
        margin-bottom: 1rem;
        color: var(--black);
    }

    .section-subtitle {
        font-size: 1.1rem;
        text-align: center;
        color: #666;
        margin-bottom: 3rem;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
        line-height: 1.5;
    }

    /* Hero Section */
    #hero-section {
        background: linear-gradient(135deg, #f8fafb 0%, #ffffff 100%);
        padding: 6rem 1rem 4rem;
        text-align: center;
    }

    .hero-container {
        max-width: 1000px;
        margin: 0 auto;
    }

    .h1-design {
        font-size: clamp(2.5rem, 6vw, 4rem);
        font-weight: 800;
        line-height: 1.1;
        margin-bottom: 1.5rem;
        color: var(--black);
    }

    .highlight {
        color: var(--primary-color);
        font-style: italic;
    }

    .hero-subtitle {
        font-size: 1.2rem;
        color: #555;
        margin-bottom: 2.5rem;
        max-width: 700px;
        margin-left: auto;
        margin-right: auto;
        line-height: 1.5;
    }

    .hero-cta {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
    }

    .primary-cta {
        background: var(--primary-color);
        color: white;
        padding: 1rem 2rem;
        border-radius: 50px;
        text-decoration: none;
        font-weight: 600;
        font-size: 1.1rem;
        transition: var(--transition);
        border: 2px solid var(--primary-color);
    }

    .primary-cta:hover {
        background: #00a8c7;
        border-color: #00a8c7;
        transform: translateY(-2px);
    }

    .secondary-cta {
        background: transparent;
        color: var(--black);
        padding: 1rem 2rem;
        border-radius: 50px;
        text-decoration: none;
        font-weight: 600;
        font-size: 1.1rem;
        transition: var(--transition);
        border: 2px solid var(--black);
    }

    .secondary-cta:hover {
        background: var(--black);
        color: white;
        transform: translateY(-2px);
    }

    .cta-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        margin-top: 2rem;
    }

    .cta-button-deal {
        background: var(--primary-color);
        color: var(--white);
        padding: 1rem 2rem;
        border: 2px solid var(--primary-color);
        border-radius: 50px;
        font-size: 1.1rem;
        font-weight: 600;
        cursor: pointer;
        text-decoration: none;
        display: inline-block;
        max-width: 350px;
        text-align: center;
        transition: var(--transition);
        box-shadow: 0 4px 15px rgba(212, 57, 37, 0.2);
    }

    .cta-button-deal:hover {
        background-color: var(--white);
        color: var(--primary-color);
        transform: translateY(-3px);
        box-shadow: 0 6px 20px rgba(212, 57, 37, 0.3);
    }

    .cta-micro-copy {
        font-size: 0.9rem;
        color: rgba(51, 51, 51, 0.8);
        text-align: center;
        margin: 0;
        line-height: 1.1;
    }

    /* Services & Process Section */
    #services-process-section {
        background-color: var(--white);
    }

    /* Services & Process Section */
    #services-process-section {
        background: #fafbfc;
    }

    .services-process-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: 3rem;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1rem;
    }

    @media (max-width: 768px) {
        .services-process-container {
            grid-template-columns: 1fr;
        }
    }

    .section-column {
        padding: 1rem;
    }

    .dropdown-list {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .how-details {
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        padding: 1.5rem;
        background: var(--light-bg);
        transition: var(--transition);
    }

    .how-details[open] {
        border-color: var(--primary-color);
        box-shadow: 0 5px 15px rgba(0,0,0,0.08);
    }

    .toggle-heading {
        font-size: 1.3rem;
        font-weight: 600;
        cursor: pointer;
        list-style: none;
        display: block;
    }

    /* Hide default triangle markers */
    summary {
        list-style: none;
    }

    summary::-webkit-details-marker {
        display: none;
    }

    .toggle-paragraph {
        margin-top: 1rem;
        padding-top: 1rem;
        border-top: 1px solid #e0e0e0;
    }

    .ul-design {
        list-style: none;
        padding: 0;
    }

    .ul-design li {
        margin-bottom: 0.8rem;
        padding-left: 1.5rem;
        position: relative;
    }

    .ul-design li::before {
        content: '•';
        color: var(--primary-color);
        position: absolute;
        left: 0;
        font-weight: bold;
    }

    .sub-heading {
        font-weight: 600;
        color: var(--primary-color);
    }

    /* Pricing Section */
    #pricing-section {
        background: linear-gradient(to bottom, 
            rgba(245,245,245,0) 0%,
            rgba(245,245,245,0.2) 10%, 
            rgba(245,245,245,0.4) 20%, 
            rgba(245,245,245,0.6) 30%, 
            rgba(245,245,245,0.8) 40%, 
            rgba(245,245,245,1) 50%,
            rgba(245,245,245,0.8) 60%, 
            rgba(245,245,245,0.6) 70%, 
            rgba(245,245,245,0.4) 80%, 
            rgba(245,245,245,0.2) 90%, 
            rgba(245,245,245,0) 100%
        );
        padding: 4rem 0;
    }

    .pricing-container h2 {
        font-size: clamp(1.8rem, 4vw, 2.5rem);
        font-weight: 800;
        margin-bottom: 1rem;
    }

    .subtitle {
        font-size: 1.2rem;
        max-width: 700px;
        margin: 0 auto 3rem;
        color: #555;
    }

    /* Audit Offering Styles */
    .audit-offer-container {
        margin: 2rem 0;
        display: flex;
        justify-content: center;
    }

    .audit-box {
        background-color: var(--white);
        border: 2px solid var(--primary-color);
        border-radius: 10px;
        padding: 2rem;
        max-width: 500px;
        width: 100%;
        position: relative;
        text-align: center;
        transition: var(--transition);
        box-shadow: 0 10px 25px rgba(0, 201, 236, 0.1);
    }

    .audit-box:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 40px rgba(0, 201, 236, 0.15);
    }

    .featured-banner {
        position: absolute;
        top: -12px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--primary-color);
        color: var(--white);
        padding: 0.3rem 1.5rem;
        border-radius: 20px;
        font-size: 0.9rem;
        font-weight: 600;
    }

    .audit-box h3 {
        font-size: 1.5rem;
        margin: 1.5rem 0 1rem;
        font-weight: 700;
        color: var(--black);
    }

    .audit-box p {
        font-size: 1rem;
        margin-bottom: 1.5rem;
        color: #555;
        line-height: 1.5;
    }

    .audit-price {
        margin: 1.5rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
    }

    .price-amount {
        font-size: 2rem;
        font-weight: 700;
        color: var(--primary-color);
    }

    .price-note {
        font-size: 1rem;
        color: #666;
        font-weight: 500;
    }

    .audit-btn {
        display: inline-block;
        background: var(--primary-color);
        color: var(--white);
        border: 2px solid var(--primary-color);
        padding: 1rem 2rem;
        border-radius: 50px;
        text-decoration: none;
        font-weight: 600;
        font-size: 1rem;
        transition: var(--transition);
        margin-top: 1rem;
    }

    .audit-btn:hover {
        background: #00a8c7;
        border-color: #00a8c7;
        transform: translateY(-2px);
    }

    .offerings-subheading {
        font-size: 1.3rem;
        margin: 3rem 0 1.5rem;
        font-weight: 600;
        color: var(--black);
    }

    /* Pricing Section */
    #pricing-section {
        background: #ffffff;
    }

    .pricing-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1rem;
    }

    .inner-container {
        width: 100%;
        padding: 0 2rem;
        max-width: 800px;
        margin: 0 auto;
    }

    .price-box-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        max-width: 100%;
        margin: 0 auto;
        padding: 0;
    }

    .price-box {
        background-color: var(--white);
        border: 2px solid #000;
        border-radius: 10px;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        position: relative;
        text-align: left;
        transition: var(--transition);
        box-shadow: 0 5px 15px rgba(0,0,0,0.05);
    }

    .price-box:hover {
        transform: translateY(-10px);
        box-shadow: 0 15px 30px rgba(0,0,0,0.1);
    }

    .recommended {
        border-color: var(--primary-color);
        transform: scale(1.05);
        z-index: 2;
    }

    .recommended:hover {
        transform: scale(1.05) translateY(-10px);
    }

    .recommend-banner {
        position: absolute;
        top: -12px;
        right: 20px;
        background: var(--primary-color);
        color: var(--white);
        padding: 0.3rem 1rem;
        border-radius: 20px;
        font-size: 0.9rem;
        font-weight: 600;
    }

    .price-box h2 {
        font-size: 1.8rem;
        margin: 1.5rem 0 1rem;
        font-weight: 700;
    }

    .price-box p {
        font-weight: 400;
        line-height: 1.6;
        margin-bottom: 1.5rem;
        flex-grow: 1;
    }

    .regular-price-box, .old-price-box, .new-price-box {
        margin-bottom: 1.5rem;
    }

    .price-detail, .old-price, .new-price {
        font-size: 2rem;
        font-weight: 700;
        color: var(--secondary-color);
    }

    .old-price {
        text-decoration: line-through;
        color: #999;
        margin-right: 0.5rem;
    }

    .new-price {
        color: var(--primary-color);
    }

    .detail {
        font-size: 0.9rem;
        color: #666;
        margin: 0.3rem 0;
    }

    .new-customer p {
        background: rgba(212, 57, 37, 0.1);
        color: var(--primary-color);
        padding: 0.3rem 0.8rem;
        border-radius: 20px;
        display: inline-block;
        font-size: 0.85rem;
        font-weight: 500;
        margin-top: 0.5rem;
    }

    .buy-btn-a {
        display: inline-block;
        background: transparent;
        color: var(--black);
        border: 2px solid var(--black);
        padding: 1rem 1.5rem;
        border-radius: 50px;
        text-decoration: none;
        font-weight: 600;
        text-align: center;
        transition: var(--transition);
        margin-top: auto;
        font-size: 1rem;
    }

    .buy-btn-a:hover {
        background: var(--black);
        color: var(--white);
        transform: translateY(-2px);
    }

    .recommended .buy-btn-a {
        background: var(--primary-color);
        border-color: var(--primary-color);
        color: var(--white);
    }

    .recommended .buy-btn-a:hover {
        background: #00a8c7;
        border-color: #00a8c7;
        transform: translateY(-2px);
    }

    /* Responsive Improvements */
    @media (max-width: 1024px) {
        .price-box-container {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        }
        
        .recommended {
            transform: scale(1.02);
        }
    }

    @media (max-width: 768px) {
        section {
            padding: 3rem 1rem;
        }

        #hero-section {
            padding: 4rem 1rem 3rem;
        }
        
        .section-heading {
            font-size: 2rem;
        }
        
        .h1-design {
            font-size: clamp(2rem, 8vw, 3rem);
        }

        .hero-cta {
            flex-direction: column;
            align-items: center;
        }

        .primary-cta,
        .secondary-cta {
            width: 100%;
            max-width: 280px;
        }
        
        .services-process-container {
            gap: 2rem;
            grid-template-columns: 1fr;
        }
        
        .audit-box {
            padding: 1.5rem;
            margin: 0;
        }

        .audit-box h3 {
            font-size: 1.3rem;
        }

        .audit-btn {
            padding: 0.8rem 1.5rem;
            font-size: 0.9rem;
        }
        
        .pricing-container {
            padding: 0 1rem;
        }

        .inner-container {
            padding: 0 1rem;
            max-width: 100%;
        }

        .price-box-container {
            grid-template-columns: 1fr;
            gap: 1.5rem;
        }
        
        .recommended {
            transform: scale(1);
        }
        
        .section-column .section-heading {
            text-align: center;
        }
    }

    @media (max-width: 480px) {
        .cta-button-deal {
            padding: 0.8rem 1.5rem;
            font-size: 1rem;
        }
        
        .price-box {
            padding: 1.5rem;
        }
    }

    /* Accessibility Improvements */
    @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    }

    /* Focus Styles */
    a:focus, button:focus {
        outline: 2px solid var(--primary-color);
        outline-offset: 2px;
    }
</style>
