<script>
    function handleSubmit(event) {
      event.preventDefault();
      // Add form submission logic
    }
  </script>
  
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
  </main>