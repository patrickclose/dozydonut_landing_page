<svelte:head>
  <title>Smart Vending Machines - Dozy Donut</title>
  <meta name="description" content="Modern smart vending machines for gyms, clinics, and apartment complexes. Self-service convenience with AI-powered checkout.">
</svelte:head>

<!-- Skip Links -->
<a href="#main-content" class="skip-link">Skip to Main Content</a>
<a href="#nav" class="skip-link">Skip to Navigation</a>
<a href="#footer" class="skip-link">Skip to Footer</a>

<main id="main-content" class="vending-main">
  <div class="vending-hero">
    <div class="vending-container">
      <div class="vending-header">
        <div class="vending-brand">
          <p class="vending-subtitle">Smart Vending</p>
        </div>
      </div>

      <div class="vending-content">
        <div class="vending-text">
          <h1 class="vending-main-title">THE <span class="highlight">FUTURE</span><br/>OF CONSUMER<br/>CONVENIENCE.</h1>
          <p class="vending-description">We offer a premier unattended retail experience for gyms, clinics, apartment complexes, and more:</p>
          
          <div class="vending-machine-mobile">
            <div class="machine-container-mobile">
              <img src="/images/vending_machine.png" alt="Modern Smart Vending Machine" class="machine-image-mobile" loading="lazy" />
            </div>
          </div>

          <ul class="vending-features">
            <li><strong>Self-service</strong> grab & go smart machines.</li>
            <li><strong>Products tailored to your clients,</strong> residents, and guests.</li>
            <li><strong>AI-powered secure checkout.</strong></li>
            <li><strong>Fully card operated.</strong> No more fishing for cash or coins.</li>
            <li>A portion of the proceeds <strong>donated to the cause of your choice.</strong></li>
            <li>We cover <strong>100% of installation, set up and maintenance.</strong></li>
          </ul>
        </div>
        
        <div class="vending-machine">
          <div class="machine-container">
            <img src="/images/vending_machine.png" alt="Modern Smart Vending Machine" class="machine-image" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="vending-cta">
    <div class="cta-content">
      <h2 class="cta-title">Give us a call and see if modern vending is right for your business.</h2>
      <div class="cta-contact">
        <p class="contact-info">Contact <a href="tel:+17737339445" class="phone-link">(773) 733-9445</a> or email <a href="mailto:contact@dozydonut.com" class="email-link">contact@dozydonut.com</a> now to book an appointment!</p>
      </div>
    </div>
  </div>
</main>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }

  .skip-link {
    position: absolute;
    top: -40px;
    left: 6px;
    background: #000;
    color: #fff;
    padding: 8px;
    z-index: 1000;
    text-decoration: none;
  }

  .skip-link:focus {
    top: 6px;
  }

  .vending-main {
    font-family: 'Nourd', 'Merriweather', serif;
    line-height: 1.6;
  }

  .vending-hero {
    min-height: 100vh;
    color: #000;
    padding: 80px 20px 40px;
    background: linear-gradient(135deg, #f5f7fa 0%, #e4edf5 100%);
  }

  .vending-container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .vending-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 40px;
  }

  .vending-brand {
    text-align: left;
  }

  .vending-subtitle {
    font-size: 1.5rem;
    font-weight: 300;
    margin: 5px 0 0 0;
    letter-spacing: 1px;
    color: #333;
  }

  .vending-content {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 60px;
    align-items: center;
    justify-content: space-between;
  }

  .vending-text {
    max-width: 600px;
  }

  .vending-main-title {
    font-size: 4rem;
    font-weight: 900;
    line-height: 0.9;
    margin-bottom: 30px;
    color: #000;
  }

  .highlight {
    color: #26c6da;
  }

  .vending-description {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 50px;
    font-style: italic;
    color: #333;
  }

  .vending-features {
    list-style: none;
    padding: 0;
    margin: 0;
    color: #000;
  }

  .vending-features li {
    font-size: 1.1rem;
    margin-bottom: 15px;
    position: relative;
    padding-left: 25px;
    font-weight: 300;
  }

  .vending-features li::before {
    content: "•";
    position: absolute;
    left: 0;
    color: #26c6da;
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 1.1;
  }

  .vending-machine {
    justify-self: end;
  }

  .machine-container {
    width: 450px;
    height: 500px;
    perspective: 1000px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .machine-image {
    max-width: 100%;
    height: auto;
    filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.2));
    border-radius: 10px;
  }

  .vending-cta {
    background: #000;
    color: white;
    padding: 60px 20px;
    text-align: center;
  }

  .cta-content {
    max-width: 1000px;
    margin: 0 auto;
  }

  .cta-title {
    font-size: 1.8rem;
    font-weight: 300;
    margin-bottom: 30px;
    font-style: italic;
  }

  .contact-info {
    font-size: 1.2rem;
    font-weight: 400;
    margin: 0;
  }

  .phone-link,
  .email-link {
    color: #26c6da;
    text-decoration: none;
    font-weight: 600;
  }

  .phone-link:hover,
  .email-link:hover {
    color: #4dd0e1;
    text-decoration: underline;
  }

  .vending-machine-mobile {
    display: none;
  }

  @media (max-width: 768px) {
    .vending-machine-mobile {
      display: block;
      margin: 30px 0;
      text-align: center;
    }

    .machine-container-mobile {
      width: 90%;
      max-width: 350px;
      height: auto;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .machine-image-mobile {
      width: 100%;
      height: auto;
      object-fit: contain;
      border-radius: 15px;
      filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.2));
    }

    .vending-machine {
        display: none;
    }

    .vending-hero {
      padding: 100px 20px 40px;
    }

    .vending-header {
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin-bottom: 30px;
    }

    .vending-content {
      grid-template-columns: 1fr;
      gap: 40px;
      text-align: center;
    }

    .vending-text {
      max-width: none;
    }

    .vending-main-title {
      font-size: 2.5rem;
    }

    .vending-description {
      font-size: 1.2rem;
      margin-bottom: 30px;
    }

    .vending-features {
      text-align: left;
      margin: 0 auto;
      max-width: 400px;
    }

    .machine-container {
      width: 250px;
      height: 320px;
    }

    .cta-title {
      font-size: 1.4rem;
    }

    .contact-info {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    .vending-main-title {
      font-size: 2rem;
    }

    .vending-features li::before {
        display: none;
    }

    .vending-features li {
      padding-left: 0;
      font-size: 1rem;
    }

    .machine-container {
      width: 200px;
      height: 280px;
    }

    .cta-title {
      font-size: 1.2rem;
    }
  }
</style>