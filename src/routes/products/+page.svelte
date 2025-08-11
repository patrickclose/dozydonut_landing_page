<script>
  import { onMount } from 'svelte';
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

  .products-container {
    background: var(--light-gray);
    padding: 6rem 1rem 4rem;
    min-height: 100vh;
    max-width: 1000px;
    margin: 0 auto;
  }

  .products-heading {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--secondary-color);
    margin-bottom: 3rem;
    text-align: center;
    line-height: 1.2;
  }

  .product-content {
    background: var(--white);
    border-radius: 12px;
    padding: 3rem 2rem;
    margin-bottom: 2rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid var(--border-gray);
  }

  .product-title {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--secondary-color);
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .product-description {
    font-size: 1rem;
    color: var(--text-gray);
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }

  .cta-buttons-home {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }

  .cta-btn-home {
    display: inline-block;
    background: var(--primary-color);
    color: var(--white);
    padding: 1rem 2rem;
    border-radius: 4px;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.1rem;
    text-align: center;
    transition: var(--transition);
    border: 2px solid var(--primary-color);
  }

  .cta-btn-home:hover {
    background: #00a8c7;
    border-color: #00a8c7;
    transform: translateY(-2px);
  }

  /* Mobile Responsiveness */
  @media (max-width: 768px) {
    .products-container {
      padding: 5rem 1rem 2rem;
    }

    .product-content {
      padding: 2rem 1rem;
    }

    .products-heading {
      font-size: 2rem;
    }

    .product-title {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    .products-container {
      margin: 0 0.5rem;
    }

    .products-heading {
      font-size: 1.8rem;
    }

    .product-title {
      font-size: 1.4rem;
    }
  }
</style>

<svelte:head>
  <title>Products - Dozy Donut</title>
</svelte:head>

<div class="products-container">
  <h1 class="products-heading">AI Powered Web Design. Web Development. Knowledge Frameworks.</h1>
  
  <div class="product-content">
    <h2 class="product-title">Dozy AI</h2>
    <p class="product-description">
      Enhance your productivity with artificial intelligence technologies that prioritize data security. 
      Our application allows you to make AI-driven knowledge searches that exclusively utilize your company's proprietary data, 
      ensuring both relevance and confidentiality.
    </p>
    <p class="product-description">
      When queried, the AI sifts through your organization's collective knowledge base 
      to generate precise, contextually appropriate responses. This approach not only accelerates information retrieval but also guarantees 
      that the insights provided are tailored to your specific business environment.
    </p>
    <p class="product-description">
      By integrating this secure AI solution, companies can 
      optimize their operations, empower employees with rapid access to accurate information, and maintain control over sensitive data, 
      all while capitalizing on the efficiency gains offered by advanced AI technology.
    </p>
    <div class="cta-buttons-home">
      <a href="/dozy-ai" class="cta-btn-home">Learn more</a>
    </div>
  </div>
  
  <div class="product-content">
    <h2 class="product-title">Dozy Designs</h2>
    <p class="product-description">
      Dozy Designs provides comprehensive website design and development services for entrepreneurs and small businesses. 
      We offer a streamlined approach to creating an online presence, focusing on simplicity and effectiveness. 
    </p>
    <p class="product-description">
      Our services include responsive web design that works across all devices, custom web development without relying on pre-built templates 
      or content management systems, and comprehensive branding and content creation. 
      We handle everything from the technical aspects of building a website to the creative elements of establishing your brand identity online.
    </p>
  </div>

  <div class="product-content">
    <h2 class="product-title">Dozy Performance</h2>
    <p class="product-description">
      Dozy Performance specializes in comprehensive website performance audits and optimization services. We utilize modern best practices 
      to diagnose and resolve performance issues, ensuring your website achieves optimal PageSpeed.web.dev scores and provides exceptional user experiences.
    </p>
    <p class="product-description">
      Our performance audit methodology includes Core Web Vitals assessment, image optimization analysis, JavaScript and CSS efficiency evaluation, 
      server response time optimization, and mobile performance testing. We provide detailed diagnostic reports with actionable recommendations 
      that directly address PageSpeed Insights findings.
    </p>
    <p class="product-description">
      Beyond diagnostics, we implement cutting-edge solutions including lazy loading, image compression and next-gen format conversion, 
      code splitting, critical CSS inlining, and CDN integration. Our approach ensures your website not only passes performance tests 
      but delivers measurably faster load times and improved conversion rates.
    </p>
    <div class="cta-buttons-home">
      <a href="/free-consultation" class="cta-btn-home">Get Performance Audit</a>
    </div>
  </div>

  <div class="product-content">
    <h2 class="product-title">Dozy Security</h2>
    <p class="product-description">
      Dozy Security offers professional penetration testing services to help organizations identify and address security vulnerabilities 
      before they can be exploited by malicious actors. Our comprehensive security assessments provide detailed insights into your 
      system's defensive capabilities and potential weak points.
    </p>
    <p class="product-description">
      Our penetration testing methodology includes network security assessments, web application testing, wireless network evaluation, 
      and social engineering assessments. We deliver actionable reports with prioritized recommendations, helping you strengthen your 
      security posture while maintaining operational efficiency and regulatory compliance.
    </p>
    <p class="product-description">
      Whether you're a small business looking to establish baseline security or an enterprise organization requiring comprehensive 
      security validation, our tailored approach ensures that testing aligns with your specific infrastructure, compliance requirements, 
      and business objectives.
    </p>
    <div class="cta-buttons-home">
      <a href="/dozy-security" class="cta-btn-home">Learn more</a>
    </div>
  </div>
</div>