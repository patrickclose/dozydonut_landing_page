<script>
    import { onMount } from 'svelte';
  
    onMount(() => {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.head.appendChild(script);

      // Wait for script to load and then initialize with date restrictions
      script.onload = () => {
        // Calculate date range (today to 7 days from now)
        const today = new Date();
        const nextWeek = new Date();
        nextWeek.setDate(today.getDate() + 7);
        
        const formatDate = (date) => {
          return date.toISOString().split('T')[0];
        };

        // Initialize Calendly widget with date restrictions
        if (window.Calendly) {
          window.Calendly.initInlineWidget({
            url: `https://calendly.com/contact-dozydonut?hide_gdpr_banner=1&primary_color=00c9ec&a1=${formatDate(today)}&a2=${formatDate(nextWeek)}`,
            parentElement: document.querySelector('.calendly-inline-widget'),
            prefill: {},
            utm: {}
          });
        }
      };

      // Fallback if script is already loaded
      if (window.Calendly) {
        const today = new Date();
        const nextWeek = new Date();
        nextWeek.setDate(today.getDate() + 7);
        
        const formatDate = (date) => {
          return date.toISOString().split('T')[0];
        };

        window.Calendly.initInlineWidget({
          url: `https://calendly.com/contact-dozydonut?hide_gdpr_banner=1&primary_color=00c9ec&a1=${formatDate(today)}&a2=${formatDate(nextWeek)}`,
          parentElement: document.querySelector('.calendly-inline-widget'),
          prefill: {},
          utm: {}
        });
      }
    });
  </script>
  
  <svelte:head>
    <title>Free Consultation - Dozy Designs</title>
  </svelte:head>
  
  <div class="consultation-container">
    <div class="consultation-card">
      <h1 class="consultation-heading">Free Consultation</h1>
      <p class="consultation-description">Schedule your complimentary 60-minute consultation where we'll analyze your website using pagespeed.web.dev diagnostics, audit your current performance metrics, and provide actionable solutions to optimize your web performance and user experience.</p>
      
      <!-- Performance Audit Example -->
      <div class="performance-example">
        <img src="/images/low_web_perf.png" alt="Website Performance Audit Results" class="performance-image">
        <p class="image-attribution"><em>Performance audit results from theculinarypro.com - client case study example</em></p>
      </div>
      
      <div 
        class="calendly-inline-widget" 
        data-url="https://calendly.com/contact-dozydonut?hide_gdpr_banner=1&primary_color=00c9ec"
        style="min-width:320px;height:700px;"
        data-auto-load="false">
      </div>
    </div>
  </div>
  
  <div class="return-home-btn-free-consultation">
    <a href="/" class="return-link">Return to Homepage</a>
  </div>

<style>
  :root {
    --primary-color: #00c9ec;
    --secondary-color: #000000;
    --white: #ffffff;
    --light-gray: #f8fafb;
    --text-gray: #555;
    --border-gray: #e0e0e0;
    --transition: all 0.3s ease;
  }

  /* Page Background */
  :global(body) {
    background: var(--light-gray) !important;
    min-height: 100vh;
  }

  .consultation-container {
    background: var(--light-gray);
    padding: 6rem 1rem 4rem;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .consultation-card {
    background: var(--white);
    border-radius: 12px;
    padding: 3rem 2rem;
    max-width: 900px;
    width: 100%;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid var(--border-gray);
  }

  .consultation-heading {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--secondary-color);
    margin-bottom: 1rem;
    text-align: center;
  }

  .consultation-description {
    font-size: 1.1rem;
    color: var(--text-gray);
    line-height: 1.6;
    text-align: center;
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .performance-example {
    margin: 2rem 0;
    text-align: center;
  }

  .performance-image {
    width: 100%;
    max-width: 600px;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    border: 1px solid var(--border-gray);
  }

  .image-attribution {
    font-size: 0.9rem;
    color: var(--text-gray);
    margin-top: 0.5rem;
    font-style: italic;
  }

  .calendly-inline-widget {
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid var(--border-gray);
  }

  .return-home-btn-free-consultation {
    text-align: center;
    padding: 2rem 1rem;
    background: var(--light-gray);
  }

  .return-link {
    display: inline-block;
    background: var(--primary-color);
    color: var(--white);
    padding: 0.8rem 2rem;
    border-radius: 4px;
    text-decoration: none;
    font-weight: 600;
    transition: var(--transition);
    border: 2px solid var(--primary-color);
  }

  .return-link:hover {
    background: #00a8c7;
    border-color: #00a8c7;
    transform: translateY(-2px);
  }

  /* Mobile Responsiveness */
  @media (max-width: 768px) {
    .consultation-container {
      padding: 5rem 1rem 2rem;
    }

    .consultation-card {
      padding: 2rem 1rem;
    }

    .consultation-heading {
      font-size: 2rem;
    }

    .consultation-description {
      font-size: 1rem;
    }

    .performance-image {
      max-width: 100%;
      margin: 0 1rem;
    }

    .calendly-inline-widget {
      min-width: 280px !important;
      height: 600px !important;
    }
  }

  @media (max-width: 480px) {
    .consultation-card {
      margin: 0 0.5rem;
    }

    .calendly-inline-widget {
      height: 550px !important;
    }
  }
</style>