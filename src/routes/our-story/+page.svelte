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
    <title>Our Story - Dozy Donut</title>
  </svelte:head>
  
  <div class="our-story-container fade-in">
    <h1 class="h1-our-story fade-in delay-1">Igniting a Culture of Innovation</h1>
    <p class="p-our-story fade-in delay-1">Founded in 2023 by Patrick Close and Sarah Ybarra, Dozy Donut is a dynamic partnership blending technical expertise and creative vision. Our team is based in Southeast Wisconsin and Chicago, where we architect digital environments that challenge perceptions and empower users to become active changemakers.</p>
    <p class="p-our-story fade-in delay-1">We don't just build websites and apps &mdash; we craft landscapes that resonate with your audience and drive meaningful engagement. Our work spans from seamless web designs to productivity boosting digital tools.</p>
    
    <h2 class="h2-our-story fade-in delay-2">Our Core Values</h2>
    
    <h3 class="h3-our-story fade-in delay-2">Embrace the Creative Journey</h3>
    <p class="p-our-story fade-in delay-2">We believe in the power of exploration and continuous learning. Our approach combines expertise with an open mind, always seeking new perspectives and innovative solutions. We're not afraid to venture into uncharted territory to deliver truly unique results.</p>
    
    <h3 class="h3-our-story fade-in delay-2">Collaborative Synergy</h3>
    <p class="p-our-story fade-in delay-2">Our strength lies in our diversity of thought and skills. Both AI enthusiasts invested in the latest web technologies, Patrick has worked in full-stack development for a decade, while Sarah is a self-taught designer and freelance writer. This collaborative spirit extends to our client relationships, creating partnerships that thrive on mutual growth and success.</p>
    
    <h3 class="h3-our-story fade-in delay-3">Exceed Expectations, Always</h3>
    <p class="p-our-story fade-in delay-3">We're not content with merely meeting expectations &mdash; we strive to surpass them. By infusing creativity, technical prowess, and strategic thinking into every project, we deliver solutions that not only solve problems but also open new possibilities for our clients.</p>
    
    <h3 class="h3-our-story fade-in delay-3">Balance Innovation with Empathy</h3>
    <p class="p-our-story fade-in delay-3">While we push the boundaries of what's possible in digital design and technology, we never lose sight of the human element. Our creations are built to connect, engage, and inspire real people in meaningful ways.</p>
    
    <div class="about-image fade-in delay-4">
      <img src="images/patrick-and-sarah.png" alt="Patrick and Sarah, co-owners of Dozy Designs" class="team-photo">
      <p class="image-caption">Patrick and Sarah, Co-Owners</p>
    </div>
    
    <a href="/contact" class="arrow-link fade-in delay-4">Join us in shaping the future of the digital landscape.</a>
  </div>