<script>
    import { onMount } from 'svelte';
  
    onMount(() => {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.head.appendChild(script);
    });
  </script>
  
  <svelte:head>
    <title>Free Consultation - Dozy Designs</title>
  </svelte:head>
  
  <div class="consultation-container">
    <div class="consultation-card">
      <h1 class="consultation-heading">Free Consultation</h1>
      <p class="consultation-description">Schedule your complimentary 60-minute consultation to discuss your website design, development, or AI full-stack implementation needs.</p>
      
      <div 
        class="calendly-inline-widget" 
        data-url="https://calendly.com/contact-dozydonut"
        style="min-width:320px;height:700px;">
      </div>
    </div>
  </div>
  
  <div class="return-home-btn-free-consultation">
    <a href="/web-design" class="return-link">Return to Dozy Designs Home</a>
  </div>
  