<svelte:head>
  <title>Smart Vending Machines - Dozy Donut</title>
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
          <h2 class="vending-main-title">THE <span class="highlight">FUTURE</span><br/>OF CONSUMER<br/>CONVENIENCE.</h2>
          <p class="vending-description">We offer a premier unattended retail experience for gyms, clinics, apartment complexes, and more:</p>
          
          <div class="vending-machine-mobile">
            <div class="machine-container-mobile">
              <img src="/images/vending_machine.png" alt="Modern Smart Vending Machine" class="machine-image-mobile" />
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
            <img src="/images/vending_machine.png" alt="Modern Smart Vending Machine" class="machine-image" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="vending-cta">
    <div class="cta-content">
      <h3 class="cta-title">Give us a call and see if modern vending is right for your business.</h3>
      <div class="cta-contact">
        <p class="contact-info">Contact <a href="tel:+17737339445" class="phone-link">(773) 733-9445</a> or email <a href="mailto:contact@dozydonut.com" class="email-link">contact@dozydonut.com</a> now to book an appointment!</p>
      </div>
    </div>
  </div>
</main>

<style>
      /* Import Nourd Font Family */
  @font-face {
    font-family: 'Nourd';
    src: url('/fonts/nourd_regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Nourd';
    src: url('/fonts/nourd_light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Nourd';
    src: url('/fonts/nourd_medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Nourd';
    src: url('/fonts/nourd_semi_bold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Nourd';
    src: url('/fonts/nourd_bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Nourd';
    src: url('/fonts/nourd_heavy.ttf') format('truetype');
    font-weight: 800;
    font-style: normal;
  }

  .vending-main {
    font-family: 'Nourd', 'Merriweather', serif;
    line-height: 1.6;
  }

  .vending-hero {
    min-height: 100vh;
    color: black;
    padding: 80px 20px 40px;
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

  .vending-title {
    font-size: 2rem;
    font-weight: 300;
    letter-spacing: 2px;
    margin: 0;
    line-height: 1.2;
  }

  .vending-subtitle {
    font-size: 1.5rem;
    font-weight: 300;
    margin: 5px 0 0 0;
    letter-spacing: 1px;
  }

  .vending-logo {
    width: 80px;
    height: 80px;
  }

  .donut-icon {
    width: 100%;
    height: 100%;
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
    color: black;
  }

  .highlight {
    color: #26c6da;
  }

  .vending-description {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 50px;
    font-style: italic;
    color: black;
  }

  .vending-features {
    list-style: none;
    padding: 0;
    margin: 0;
    color: black;
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
    color: black;
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
  }

  .machine-body {
    /* width: 100%;
    height: 100%; */
    background-image: url("/images/vending_machine.png");
    /* background: linear-gradient(to bottom, #2c2c2c 0%, #1a1a1a 100%);
    border-radius: 20px;
    border: 3px solid #333;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    overflow: hidden; */
  }

  .machine-display {
    height: 60px;
    background: #000;
    margin: 15px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .display-screen {
    width: 90%;
    height: 70%;
    background: linear-gradient(45deg, #1e3c72 0%, #2a5298 100%);
    border-radius: 5px;
  }

  .machine-shelves {
    flex: 1;
    padding: 0 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .shelf {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
    height: 70px;
    padding: 10px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
  }

  .product {
    border-radius: 6px;
    height: 50px;
  }

  .product-1 { background: #ff6b6b; }
  .product-2 { background: #4ecdc4; }
  .product-3 { background: #45b7d1; }
  .product-4 { background: #96ceb4; }
  .product-5 { background: #feca57; }
  .product-6 { background: #ff9ff3; }
  .product-7 { background: #54a0ff; }
  .product-8 { background: #5f27cd; }
  .product-9 { background: #00d2d3; }
  .product-10 { background: #ff9f43; }
  .product-11 { background: #10ac84; }
  .product-12 { background: #ee5a6f; }
  .product-13 { background: #c44569; }
  .product-14 { background: #3742fa; }
  .product-15 { background: #2ed573; }
  .product-16 { background: #ffa502; }

  .machine-bottom {
    height: 80px;
    padding: 15px;
  }

  .pickup-area {
    width: 100%;
    height: 100%;
    background: #000;
    border-radius: 10px;
    border: 2px solid #333;
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
      background: transparent;
      padding: 0;
    }

    .machine-image-mobile {
      width: 100%;
      height: auto;
      object-fit: contain;
      border-radius: 15px;
      filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.5));
      background: transparent;
    }

    .vending-machine {
        display: none;
    }

    .vending-hero {
      padding: 100px 20px 0px;
    }

    .vending-header {
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin-bottom: 30px;
    }

    .vending-logo {
      margin-top: 20px;
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

    .machine-container {
      width: 250px;
      height: 400px;
      margin: 0 auto;
    }

    .cta-title {
      font-size: 1.4rem;
    }

    .contact-info {
      font-size: 1rem;
    }
  }

  @media (max-width: 768px) {
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
      height: 320px;
    }

    .shelf {
      height: 50px;
      padding: 5px;
    }

    .product {
      height: 40px;
    }
  }
</style>