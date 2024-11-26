<script>
    import { onMount } from 'svelte';
  
    onMount(() => {
      window.addEventListener('scroll', () => {
        let scrollPosition = window.scrollY;
        let windowHeight = window.innerHeight;
        let scrollProgress = scrollPosition / windowHeight;
        document.body.style.setProperty('--scroll', scrollProgress);
      });
    });
  </script>
  
  <svelte:head>
    <title>Dozy Donut | Web Design & Development</title>
  </svelte:head>
  
  <div class="hero-container">
    <div class="hero-content">
      <div class="main-grid">
        <div class="main-content fade-in delay-1">
          <h1 class="h1-design">We build websites for entrepreneurs who need a simpler way to showcase their brand online.</h1>
          <a href="#pricing" class="cta-button fade-in delay-2">See Our Offers</a>
        </div>
      </div>
    </div>
  </div>
  
  <div class="services-process-container">
    <div class="section-column">
      <h2 id="services" class="section-heading">What We Do</h2>
      <div class="dropdown-list">
        <details class="how-details">
          <summary><h3 class="toggle-heading">01 Mobile, Tablet & Desktop Design</h3></summary>
          <p class="toggle-paragraph">Easy navigation meets responsive design. Your site will adapt to all devices, letting visitors find what they need fast, wherever they are.</p>
        </details>
        <details class="how-details">
          <summary><h3 class="toggle-heading">02 Web Development</h3></summary>
          <p class="toggle-paragraph">No page builders or WordPress. Gain control over performance, customization, and security. Process payments, link social media, and display real-time data like customer reviews.</p>
        </details>
        <details class="how-details">
          <summary><h3 class="toggle-heading">03 Content & Branding</h3></summary>
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
          <summary><h3 class="toggle-heading">01 Schedule Consultation</h3></summary>
          <p class="toggle-paragraph">Schedule a <a href="/free-consultation">FREE consultation</a> where we will go over your branding and business needs.</p>
        </details>
        <details class="how-details">
          <summary><h3 class="toggle-heading">02 Purchase Package</h3></summary>
          <p class="toggle-paragraph">Purchase your package and let us do the rest. We'll update you throughout the process.</p>
        </details>
        <details class="how-details">
          <summary><h3 class="toggle-heading">03 Enjoy Your Website</h3></summary>
          <p class="toggle-paragraph">Enjoy your new website!</p>
        </details>
      </div>
    </div>
  </div>
  
  <div class="pricing-container">
    <div>
      <h2 id="pricing">Get <u>10% off</u> our Essential package</h2>
      <p class="subtitle">Boost your business for less with $500 off our most popular package when you sign up as a first time customer with Dozy Donut.</p>
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