<footer class="dozy-footer">
    <div class="footer-top">
      <div class="cta-container">
        <h2>Sign up for Dozy Donut Digest.</h2>
        <div class="cta-content">
            <iframe
                src="https://dozydonutdigest.substack.com/embed"
                width="100%"
                height="320"
                style="border:1px solid #EEE; background:white;"
                frameborder="0"
                scrolling="no"
                title="Dozy Donut Digest Newsletter Embed"
            ></iframe>
        </div>
      </div>
    </div>
    <div class="footer-divider"></div>
    <div class="footer-middle">
      <nav class="footer-nav">
        <a href="/vending">Smart Vending</a>
        <a href="/dozy-ai">Dozy AI</a>
        <a href="/web-design">Dozy Designs</a>
        <a href="/our-story">Our Story</a>
        <a href="/contact">Contact</a>
      </nav>
    </div>
    <div class="footer-bottom">
      <div class="company-info">
        <p>Based in Milwaukee, Madison, Chicago</p>
        <p><a href="mailto:contact@dozydonut.com" class="logo-link">contact@dozydonut.com</a></p>
        <p>+1 (773) 733 9445</p>
      </div>
      <div class="legal-social">
        <p class="legal-text">©2024 Dozy Donut LLC. All Rights Reserved. Privacy Policy & Terms of Use.</p>
        <div class="social-icons">
          <a href="https://www.linkedin.com/company/dozy-donut-llc/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a href="https://x.com/dozydonut" target="_blank" rel="noopener noreferrer" aria-label="X (formerly Twitter)">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>

    <style>
        a {
          color: white;
        }
        
        /* --- Base Footer Styles (Unified Mobile & Desktop) --- */
        .dozy-footer {
            background-color: #000000;
            color: #ffffff;
            padding: 2rem 1rem;
            line-height: 1.6;
            /* Ensure full width */
            width: 100%;
            box-sizing: border-box;
        }

        .footer-top {
            /* Keep items centered for unified look */
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
            margin-bottom: 2rem;
        }

        .cta-container {
            /* Center content */
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            /* Optional: Add max-width if needed for very wide screens */
            /* max-width: 500px; */
            width: 100%; /* Take full width of parent */
        }

        .cta-container h2 {
             text-align: center; /* Ensure title is centered */
             margin-bottom: 1rem; /* Space below title */
        }

        .cta-content {
            /* Center the iframe content */
            width: 100%;
            display: flex;
            justify-content: center;
        }

        .cta-content iframe {
            /* Ensure iframe takes full width of its container (up to its max-width if set) */
            width: 100%;
            max-width: 500px; /* Limit width for better appearance */
            height: 320px;
            border: 1px solid #EEE;
            background: white;
        }

        .footer-divider {
            height: 1px;
            background-color: #444;
            margin: 2rem 0;
        }

        .footer-middle {
            /* Keep navigation centered */
            text-align: center;
            margin-bottom: 2rem;
        }

        .footer-nav {
            /* Keep links centered and allow wrapping */
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1rem;
        }

        .footer-nav a {
            color: #ffffff;
            text-decoration: none;
            transition: opacity 0.2s ease;
        }

        .footer-nav a:hover {
            opacity: 0.8;
        }

        .footer-bottom {
            /* Stack items vertically and center them */
            display: flex;
            flex-direction: column;
            align-items: center; /* Center horizontally */
            gap: 1rem;
            text-align: center; /* Center text within items */
        }

        .company-info {
            /* Inherited text-align: center from .footer-bottom */
        }

        .company-info p {
            margin: 0.25rem 0;
        }

        .legal-social {
            /* Stack legal text and icons vertically, center content */
            display: flex;
            flex-direction: column;
            align-items: center; /* Center horizontally */
            gap: 0.5rem;
            font-size: 0.875rem;
            color: #ccc;
        }

        .legal-text {
            margin: 0;
            /* Inherited text-align: center */
        }

        .social-icons {
            /* Keep icons centered */
            display: flex;
            gap: 1rem;
        }

        .social-icons a {
            color: #ffffff;
            transition: opacity 0.2s ease;
        }

        .social-icons a:hover {
            opacity: 0.8;
        }

        .social-icons svg {
            display: block;
            width: 24px;
            height: 24px;
        }

        /* --- Removed Media Query ---
        The large screen specific styles (flex-row layouts) have been removed.
        The base styles now define the look for all screen sizes.
        */

    </style>
</footer>
