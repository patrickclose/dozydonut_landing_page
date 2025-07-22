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
  
  <section id="hero-section">
    <div class="hero-container">
      <div class="hero-content">
        <div class="main-grid">
          <div class="main-content fade-in delay-1">
            <h1 class="h1-design">The <span class="italics">Fastest</span> Way to Turn Your Web Traffic Into Revenue.</h1>
            <div class="cta-box">
              <a href="#pricing" class="cta-button-deal">Claim my performance checklist</a>
              <p class="cta-micro-copy">No signup required.</p>

            </div>

          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="services-process-section">
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
  </section>

  <section id="pricing-section">
    <div class="pricing-container">
      <div class="inner-container">
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
  </section>

<style>
  .italics {
    color: #d43925;
    font-style: italic;
  }

  .h1-design {
    font-weight: 650;
  }

  body {
    overflow-x: hidden;
  }

  html {
    scroll-behavior: smooth;
  }

  #hero-section {
  }

  #services-process-section {
  }

  section {
    height: 100dvh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .cta-box {
    display: grid;
    justify-content: left;
    grid-template-rows: auto auto;
    gap: 0.3rem;
    justify-items: center;
    margin-top: 32px;
    max-width: 100%;
  }

  .cta-micro-copy {
  font-size: 0.9rem;
  color: rgba(51, 51, 51, 0.8);
  text-align: center;
  margin: 0;
  line-height: 1.1;
}

.cta-button-deal {
  background: #d43925;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  font-size: 1.3rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  width: 100%;
  max-width: 350px;
  text-align: center;
  transition: all 0.3s ease;
}

.cta-button-deal:hover {
    background-color: whitesmoke;
    color: black;
    border: 0px solid black;
}


.free-checklist {
  align-content: last baseline;
  text-align: left;
  width: fit-content;
}


h1 {
  text-wrap: pretty;  
}

a {
  text-wrap: balance;
}

.pricing-container {
       width: 100vw;
       left: 50%;
       right: 50%;
       margin-left: -50vw;
       margin-right: -50vw;
       text-align: center;
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
       padding-top: 200px;
       margin-top: -75px;
       box-sizing: border-box;
   }


  .inner-container {
       max-width: 1600px;
       width: 100%;
       margin: 0 auto;
       padding: 0 20px;
   }

   .price-box-container {
       display: flex;
       justify-content: center;
       gap: 20px;
       max-width: 1400px;
       margin: 0 auto;
       padding: 0 20px;
   }

   .pricing-container h2 {
       font-size: 2.5em;
       font-weight: bold;
       margin-bottom: 10px;
   }

   @media (max-width: 480px) {
       .pricing-container h2 {
           font-size: 2em;
       }
   }

   .price-box {
      flex: 1;
      min-width: 250px;
      max-width: 350px;
      background-color: whitesmoke;
      border: 2px solid #000;
      border-radius: 10px;
      padding: 30px;
      display: flex;
      flex-direction: column;
      position: relative;
      text-align: left;
      overflow: hidden;
  }

  .price-box h2 {
    font-family: 'Nourd', 'Merriweather', serif;
    margin-top: 40px;
    font-weight: bold;
    margin-bottom: 15px;
  }

  .price-box p {
      font-weight: 100;
      line-height: 1.5;
      margin-bottom: 20px;
  }

  /* Web-Design.html */

.hero-container {
    max-width: 1600px;
    margin: 0 auto;
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 40px;
    padding-top: 0;
    margin-bottom: 140px;
    position: sticky;
    top: 0;
    z-index: 1;
    /* height: 85vw; */
    pointer-events: none; /* This allows clicks to pass through */
}

.hero-container::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(245,245,245,1) 100%); */
    opacity: 0;
    transition: opacity 0.3s ease-out;
    pointer-events: none;
}

@media (max-width: 768px) {
    /* .hero-container {
        height: 200vw;
    } */

    .cta-button-deal {
        padding: 0.875rem 1.5rem; /* Instead of 14px 24px */
        font-size: 1.1rem;
    }
}

@media (prefers-reduced-motion: no-preference) {
    .hero-container {
        animation: fade-out 0.75s ease-out forwards;
        animation-play-state: paused;
        animation-delay: calc(var(--scroll) * -1s);
    }
}
</style>