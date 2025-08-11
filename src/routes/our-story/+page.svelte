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

  .our-story-container {
    background: var(--light-gray);
    padding: 6rem 1rem 4rem;
    min-height: 100vh;
    max-width: 1000px;
    margin: 0 auto;
  }

  .h1-our-story {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--secondary-color);
    margin-bottom: 2rem;
    text-align: center;
    line-height: 1.2;
  }

  .h2-our-story {
    font-size: 2rem;
    font-weight: 700;
    color: var(--secondary-color);
    margin: 3rem 0 2rem;
    text-align: center;
    border-bottom: 3px solid var(--primary-color);
    padding-bottom: 0.5rem;
    display: inline-block;
    width: 100%;
  }

  .h3-our-story {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--primary-color);
    margin: 2.5rem 0 1rem;
    position: relative;
  }

  .h3-our-story::before {
    content: '';
    position: absolute;
    left: -1.5rem;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 2rem;
    background: var(--primary-color);
    border-radius: 2px;
  }

  .p-our-story {
    font-size: 1.1rem;
    color: var(--text-gray);
    margin-bottom: 1.5rem;
    line-height: 1.7;
    text-align: justify;
  }

  .about-image {
    background: var(--white);
    border-radius: 12px;
    padding: 2rem;
    margin: 3rem 0;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid var(--border-gray);
    text-align: center;
  }

  .team-photo {
    max-width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    margin-bottom: 1rem;
  }

  .image-caption {
    font-size: 1rem;
    color: var(--text-gray);
    font-weight: 500;
    margin: 0;
    font-style: italic;
  }

  .arrow-link {
    display: inline-block;
    background: var(--primary-color);
    color: var(--white);
    padding: 1rem 2rem;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.1rem;
    text-align: center;
    transition: var(--transition);
    border: 2px solid var(--primary-color);
    margin: 2rem auto;
    display: block;
    max-width: 400px;
    text-align: center;
    position: relative;
  }

  .arrow-link:hover {
    background: #00a8c7;
    border-color: #00a8c7;
    transform: translateY(-2px);
  }

  .arrow-link::after {
    content: '→';
    margin-left: 0.5rem;
    font-size: 1.2rem;
    transition: var(--transition);
  }

  .arrow-link:hover::after {
    transform: translateX(5px);
  }

  /* Value sections styling */
  .our-story-container > h3:not(.h2-our-story) + p {
    background: var(--white);
    padding: 1.5rem;
    border-radius: 8px;
    border-left: 4px solid var(--primary-color);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    margin-bottom: 2rem;
  }

  /* Introduction paragraphs styling */
  .our-story-container > p:nth-of-type(1),
  .our-story-container > p:nth-of-type(2) {
    background: var(--white);
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    border: 1px solid var(--border-gray);
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }

  /* Mobile Responsiveness */
  @media (max-width: 768px) {
    .our-story-container {
      padding: 5rem 1rem 2rem;
    }

    .h1-our-story {
      font-size: 2rem;
    }

    .h2-our-story {
      font-size: 1.7rem;
    }

    .h3-our-story {
      font-size: 1.3rem;
      padding-left: 1.5rem;
    }

    .p-our-story {
      font-size: 1rem;
      text-align: left;
    }

    .our-story-container > p:nth-of-type(1),
    .our-story-container > p:nth-of-type(2) {
      padding: 1.5rem;
      font-size: 1.1rem;
    }

    .about-image {
      padding: 1.5rem;
    }

    .arrow-link {
      font-size: 1rem;
      padding: 0.8rem 1.5rem;
    }
  }

  @media (max-width: 480px) {
    .our-story-container {
      margin: 0 0.5rem;
    }

    .h1-our-story {
      font-size: 1.8rem;
    }

    .h2-our-story {
      font-size: 1.5rem;
    }

    .h3-our-story {
      font-size: 1.2rem;
    }
  }

  /* Animation classes for smooth entrance effects */
  .fade-in {
    opacity: 1;
    animation: fadeInUp 0.8s ease-out;
  }

  .delay-1 {
    animation-delay: 0.1s;
  }

  .delay-2 {
    animation-delay: 0.2s;
  }

  .delay-3 {
    animation-delay: 0.3s;
  }

  .delay-4 {
    animation-delay: 0.4s;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Focus styles for accessibility */
  .arrow-link:focus {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }
</style>

<svelte:head>
  <title>Our Story - Dozy Donut</title>
</svelte:head>

<div class="our-story-container">
  <h1 class="h1-our-story fade-in delay-1">Igniting a Culture of Innovation</h1>
  <p class="p-our-story fade-in delay-1">Founded in 2023 by Patrick Close and Sarah Ybarra, Dozy Donut is a dynamic partnership blending technical expertise and creative vision. Our team is based in Madison and Milwaukee, where we architect digital experiences that transform how businesses connect with their audiences and drive meaningful growth.</p>
  <p class="p-our-story fade-in delay-1">We don't just build websites and applications &mdash; we craft digital solutions that resonate with your audience and drive measurable results. Our expertise spans from high-converting web designs and performance optimization to innovative productivity tools that streamline business operations.</p>
  
  <h2 class="h2-our-story fade-in delay-2">Our Core Values</h2>
  
  <h3 class="h3-our-story fade-in delay-2">Embrace the Creative Journey</h3>
  <p class="p-our-story fade-in delay-2">We believe in the power of exploration and continuous learning. Our approach combines proven expertise with curiosity-driven innovation, always seeking fresh perspectives and cutting-edge solutions. We thrive on challenging conventional approaches to deliver breakthrough results that set our clients apart.</p>
  
  <h3 class="h3-our-story fade-in delay-2">Collaborative Synergy</h3>
  <p class="p-our-story fade-in delay-2">Our strength lies in our complementary expertise and shared vision. As AI enthusiasts passionate about emerging web technologies, we bring together Patrick's decade of full-stack development experience with Sarah's creative design and content strategy background. This collaborative foundation extends to every client relationship, fostering partnerships built on transparency, innovation, and mutual success.</p>
  
  <h3 class="h3-our-story fade-in delay-3">Exceed Expectations, Always</h3>
  <p class="p-our-story fade-in delay-3">Excellence is our baseline, not our ceiling. We consistently exceed expectations by combining creative problem-solving with technical mastery and strategic insight. Every project becomes an opportunity to deliver solutions that don't just meet current needs, but anticipate future challenges and unlock new growth opportunities for our clients.</p>
  
  <h3 class="h3-our-story fade-in delay-3">Balance Innovation with Empathy</h3>
  <p class="p-our-story fade-in delay-3">Innovation without purpose is just complexity. While we leverage cutting-edge technologies and push creative boundaries, every decision is guided by human-centered design principles. We create digital experiences that genuinely connect with people, solve real problems, and make technology feel intuitive and empowering rather than overwhelming.</p>
  
  <div class="about-image fade-in delay-4">
    <img src="images/patrick-and-sarah.png" alt="Patrick and Sarah, co-owners of Dozy Designs" class="team-photo">
    <p class="image-caption">Patrick and Sarah, Co-Owners</p>
  </div>
  
  <a href="/contact" class="arrow-link fade-in delay-4">Join us in shaping the future of the digital landscape.</a>
</div>