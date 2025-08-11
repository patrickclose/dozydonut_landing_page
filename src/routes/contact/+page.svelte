<script>
  import { onMount } from 'svelte';

  function handleSubmit(event) {
    event.preventDefault();
    // Add form submission logic
  }
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

  .skip-link {
    position: absolute;
    top: -40px;
    left: 6px;
    background: var(--primary-color);
    color: var(--white);
    padding: 8px;
    text-decoration: none;
    z-index: 10000;
    border-radius: 4px;
  }

  .skip-link:focus {
    top: 6px;
  }

  .contact-container {
    background: var(--light-gray);
    padding: 6rem 1rem 4rem;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 800px;
    margin: 0 auto;
  }

  .contact-heading {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--secondary-color);
    margin-bottom: 2rem;
    text-align: center;
  }

  .contact-form {
    background: var(--white);
    border-radius: 12px;
    padding: 3rem 2rem;
    width: 100%;
    max-width: 600px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid var(--border-gray);
  }

  .contact-form-group {
    margin-bottom: 1.5rem;
  }

  .contact-form-group label {
    display: block;
    font-weight: 600;
    color: var(--secondary-color);
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }

  .contact-form-group input,
  .contact-form-group textarea {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 2px solid var(--border-gray);
    border-radius: 8px;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    color: var(--secondary-color);
    background: var(--white);
    transition: var(--transition);
    box-sizing: border-box;
  }

  .contact-form-group input:focus,
  .contact-form-group textarea:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(0, 201, 236, 0.1);
  }

  .contact-form-group textarea {
    min-height: 120px;
    resize: vertical;
  }

  .contact-submit-button {
    display: block;
    width: 100%;
    background: var(--primary-color);
    color: var(--white);
    padding: 1rem 2rem;
    border: 2px solid var(--primary-color);
    border-radius: 4px;
    font-family: 'Poppins', sans-serif;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
    margin-top: 1rem;
  }

  .contact-submit-button:hover {
    background: #00a8c7;
    border-color: #00a8c7;
    transform: translateY(-2px);
  }

  .contact-submit-button:focus {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }

  /* Contact Information Section */
  .contact-info {
    background: var(--white);
    border-radius: 12px;
    padding: 2rem;
    margin-top: 2rem;
    width: 100%;
    max-width: 600px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid var(--border-gray);
    text-align: center;
  }

  .contact-info h2 {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--secondary-color);
    margin-bottom: 1.5rem;
  }

  .contact-details {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .contact-item {
    font-size: 1rem;
    color: var(--text-gray);
  }

  .contact-item a {
    color: var(--primary-color);
    text-decoration: none;
    font-weight: 500;
    transition: var(--transition);
  }

  .contact-item a:hover {
    color: #00a8c7;
    text-decoration: underline;
  }

  /* Mobile Responsiveness */
  @media (max-width: 768px) {
    .contact-container {
      padding: 5rem 1rem 2rem;
    }

    .contact-form {
      padding: 2rem 1rem;
    }

    .contact-info {
      padding: 1.5rem 1rem;
    }

    .contact-heading {
      font-size: 2rem;
    }
  }

  @media (max-width: 480px) {
    .contact-container {
      margin: 0 0.5rem;
    }

    .contact-heading {
      font-size: 1.8rem;
    }

    .contact-form-group input,
    .contact-form-group textarea {
      font-size: 0.9rem;
    }
  }
</style>

<svelte:head>
  <title>Contact Us - Dozy Donut</title>
</svelte:head>

<!-- Skip Links -->
<a href="#main-content" class="skip-link">Skip to Main Content</a>
<a href="#nav" class="skip-link">Skip to Navigation</a>
<a href="#footer" class="skip-link">Skip to Footer</a>

<main class="contact-container" id="main-content">
  <h1 class="contact-heading">Get In Touch</h1>
  
  <form class="contact-form" id="contactForm" on:submit={handleSubmit}>
    <div class="contact-form-group">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" required aria-required="true">
    </div>
    <div class="contact-form-group">
      <label for="email">Email</label>
      <input type="email" id="email" name="email" required aria-required="true">
    </div>
    <div class="contact-form-group">
      <label for="subject">Subject</label>
      <input type="text" id="subject" name="subject" required aria-required="true">
    </div>
    <div class="contact-form-group">
      <label for="message">Message</label>
      <textarea id="message" name="message" required aria-required="true"></textarea>
    </div>
    <button type="submit" class="contact-submit-button">Send Message</button>
  </form>

  <div class="contact-info">
    <h2>Contact Information</h2>
    <div class="contact-details">
      <div class="contact-item">
        <strong>Email:</strong> <a href="mailto:contact@dozydonut.com">contact@dozydonut.com</a>
      </div>
      <div class="contact-item">
        <strong>Phone:</strong> <a href="tel:+17737339445">+1 (773) 733-9445</a>
      </div>
      <div class="contact-item">
        <strong>Location:</strong> Based in Milwaukee, Madison, Chicago
      </div>
    </div>
  </div>
</main>