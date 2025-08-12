<script>
    import { onMount } from 'svelte';

    onMount(() => {
        const handleScroll = () => {
            let scrollPosition = window.scrollY;
            let windowHeight = window.innerHeight;
            let scrollProgress = scrollPosition / (document.body.scrollHeight - windowHeight);
            document.body.style.setProperty('--scroll', scrollProgress);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });
</script>

<svelte:head>
    <title>Dozy Donut | Web Design & Development</title>
    <meta name="description" content="Transform your web traffic into revenue with our professional web design and development services. Mobile-first, high-converting websites.">
</svelte:head>

<!-- Hero Section -->
<section id="hero-section">
    <div class="hero-container">
        <div class="hero-content">
            <h1 class="h1-design">
                The <span class="highlight">Fastest</span> Way to Turn Your Web Traffic Into Revenue.
            </h1>
            <p class="hero-subtitle">
                Transform your website into a revenue-generating machine with our professional web design and development services.
            </p>
            <div class="hero-cta">
                <a href="/free-consultation" class="primary-cta">Get Your Free Consultation</a>
                <a href="#services" class="secondary-cta">See Our Services</a>
            </div>
        </div>
    </div>
</section>

<!-- Services & Process Section -->
<section id="services-process-section">
    <!-- Top Bar - What We Do and How It Works side by side -->
    <div class="top-bar-container">
        <div class="top-bar-column">
            <h2 id="services" class="section-heading">What We Do</h2>
            
            <!-- Audit Offering Box -->
            <div class="audit-offer-container">
                <div class="audit-box featured">
                    <div class="featured-banner">Featured Offering</div>
                    <h3>Complete Website Audit & Strategy Session</h3>
                    <p>Get a comprehensive analysis of your current website's performance, user experience, and conversion opportunities with actionable recommendations.</p>
                    <div class="audit-price">
                        <span class="price-amount">$495</span>
                        <span class="price-note">or FREE consultation</span>
                    </div>
                    <a class="audit-btn" href="/free-consultation">Schedule Free Consultation</a>
                </div>
            </div>
        </div>
        
        <div class="top-bar-column">
            <h2 class="section-heading">How It Works</h2>
            <div class="dropdown-list">
                <details class="how-details" open>
                    <summary><h3 class="toggle-heading">Schedule Consultation</h3></summary>
                    <p class="toggle-paragraph">Schedule a <a href="/free-consultation">FREE consultation</a> where we will go over your branding and business needs.</p>
                </details>
                <details class="how-details">
                    <summary><h3 class="toggle-heading">Purchase Package</h3></summary>
                    <p class="toggle-paragraph">Purchase your package and let us do the rest. We'll update you throughout the process.</p>
                </details>
                <details class="how-details">
                    <summary><h3 class="toggle-heading">Enjoy Your Website</h3></summary>
                    <p class="toggle-paragraph">🎉🎉🎉</p>
                </details>
            </div>
        </div>
    </div>

    <!-- Full Width Bar - Our Website Services -->
    <div class="full-width-services">
        <h2 class="offerings-subheading">Our Website Services</h2>
        <div class="dropdown-list">
            <details class="how-details web-dev-section" open>
                <summary><h3 class="toggle-heading">Web Development and Performance</h3></summary>
                <div class="toggle-paragraph web-dev-content">
                    <div class="web-dev-svg">
                        <svg width="480" height="480" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 116.093C36.7353 80.1737 75.5446 56 120 56C164.455 56 203.265 80.1737 224 116.093" stroke="#5F6368" stroke-width="0.5" stroke-dasharray="2 2"/>
                            <rect width="128" height="88" transform="matrix(1 0 -0.188924 0.981992 96 45)" fill="white" stroke="#5F6368"/>
                            <mask id="mask0" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="79" y="45" width="145" height="87">
                            <rect width="128" height="88" transform="matrix(1 0 -0.188924 0.981992 96 45)" fill="white"/>
                            </mask>
                            <g mask="url(#mask0)">
                            <path d="M117.609 99.0096L116.098 106.866M113.609 99.0096L112.853 102.938M121.609 99.0096L120.476 104.902" stroke="#5F6368"/>
                            <path d="M117.264 121.595C117.932 118.124 115.718 115.311 112.319 115.311C112.19 115.311 112.061 115.315 111.932 115.323C111.614 109.895 107.564 105.884 101.825 105.884C97.2148 105.884 92.6985 108.472 89.8528 112.304C89.3595 112.215 88.8437 112.168 88.3083 112.168C83.2103 112.168 78.2655 116.389 77.2638 121.595" stroke="#5F6368"/>
                            <path d="M154.397 115.703C154.898 113.1 153.1 110.99 150.381 110.99C150.278 110.99 150.175 110.993 150.072 110.999C149.765 106.928 146.487 103.92 141.895 103.92C138.207 103.92 134.619 105.861 132.379 108.735C131.984 108.668 131.571 108.633 131.142 108.633C127.064 108.633 123.149 111.799 122.397 115.703" stroke="#5F6368"/>
                            <path d="M113.576 78.3878C114.528 73.4424 117.795 68.7855 122.395 65.8183L124.221 64.6399L125.595 65.8183C129.053 68.7855 130.528 73.4424 129.576 78.3878L126.176 96.0636H110.176L113.576 78.3878Z" fill="#FFEEDD" stroke="#5F6368"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M117.231 70.5318H128.944C128.227 68.718 127.098 67.1084 125.595 65.8183L124.221 64.6399L122.395 65.8183C120.395 67.1084 118.647 68.718 117.231 70.5318Z" fill="#FF6633"/>
                            <path d="M117.231 70.5318L116.846 70.2864L116.271 71.0228H117.137L117.231 70.5318ZM128.944 70.5318L128.85 71.0228H129.716L129.425 70.2864L128.944 70.5318ZM125.595 65.8183L125.97 65.4255L125.97 65.4255L125.595 65.8183ZM124.221 64.6399L124.597 64.2471L124.339 64.0261L123.997 64.2471L124.221 64.6399ZM122.395 65.8183L122.619 66.2111L122.395 65.8183ZM117.137 71.0228H128.85L129.039 70.0408H117.326L117.137 71.0228ZM125.219 66.2111C126.676 67.4609 127.769 69.0202 128.464 70.7773L129.425 70.2864C128.685 68.4159 127.521 66.7559 125.97 65.4255L125.219 66.2111ZM123.846 65.0327L125.219 66.2111L125.97 65.4255L124.597 64.2471L123.846 65.0327ZM122.619 66.2111L124.446 65.0327L123.997 64.2471L122.17 65.4255L122.619 66.2111ZM117.617 70.7773C118.988 69.0202 120.682 67.4609 122.619 66.2111L122.17 65.4255C120.108 66.7559 118.305 68.4159 116.846 70.2864L117.617 70.7773Z" fill="#5F6368"/>
                            <path d="M104.176 96.0636H110.176L111.309 90.1716L104.176 96.0636Z" fill="#FF6633"/>
                            <path d="M127.309 90.1716L126.176 96.0636H132.176L127.309 90.1716Z" fill="#FF6633"/>
                            <path d="M104.176 96.0636H110.176L111.309 90.1716L104.176 96.0636Z" stroke="#5F6368"/>
                            <path d="M127.309 90.1716L126.176 96.0636H132.176L127.309 90.1716Z" stroke="#5F6368"/>
                            <circle r="4" transform="matrix(1 0 -0.188924 0.981992 121.388 79.3697)" fill="white" stroke="#5F6368"/>
                            <rect width="64" height="88" transform="matrix(1 0 -0.188924 0.981992 160 45)" fill="#303030" stroke="#5F6368"/>
                            <path d="M172.93 59.5396H205.581" stroke="#FF3399" stroke-linejoin="round"/>
                            <path d="M207.266 56.7839L209.213 59.4874M171.025 62.3469L169.203 59.5394L171.025 62.3469Z" stroke="#FF3399" stroke-linecap="square" stroke-linejoin="round"/>
                            <path d="M206.31 62.2948L209.213 59.4873" stroke="#FF3399" stroke-linecap="square" stroke-linejoin="round"/>
                            <path d="M178.683 70.5613H206.767M167.082 70.5613H172.122H167.082Z" stroke="#9933FF" stroke-linejoin="round"/>
                            <path d="M197.665 81.5834H204.804M164.962 81.5834H170.001H164.962ZM176.878 81.5834H191.681H176.878Z" stroke="#FF3399" stroke-linejoin="round"/>
                            <path d="M188.311 92.5533H202.484M162.851 92.5533H167.891H162.851ZM174.452 92.5533H182.011H174.452Z" stroke="#9933FF" stroke-linejoin="round"/>
                            <path d="M172.699 103.575H188.867M160.731 103.575H165.77H160.731Z" stroke="#FF3399" stroke-linejoin="round"/>
                            </g>
                            <rect width="168" height="8" transform="matrix(1 0 -0.188924 0.981992 39.3748 131.415)" fill="#DADCE0" stroke="#5F6368"/>
                            <rect width="128" height="8" transform="matrix(1 0 -0.188924 0.981992 39.3748 131.415)" fill="white" stroke="#5F6368"/>
                            <circle r="2" transform="matrix(1 0 -0.188924 0.981992 100.867 50.892)" fill="#3399FF" stroke="#5F6368"/>
                            <circle r="2" transform="matrix(1 0 -0.188924 0.981992 107.867 50.892)" fill="#CCEEFF" stroke="#5F6368"/>
                            <circle r="2" transform="matrix(1 0 -0.188924 0.981992 114.867 50.892)" fill="#66CCFF" stroke="#5F6368"/>
                            <rect width="32" height="64" rx="4" transform="matrix(1 0 0.180862 0.983508 19.9998 55)" fill="#DADCE0" stroke="#5F6368"/>
                            <rect width="32" height="64" rx="4" transform="matrix(1 0 0.180862 0.983508 23 55)" fill="white" stroke="#5F6368"/>
                            <path d="M46.4153 95.3237L48.043 104.175M42.4153 95.3237L43.2292 99.7495M50.4153 95.3237L51.6361 101.962" stroke="#5F6368"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M39.7265 79.5876H47.3148C46.1961 77.6571 44.5798 75.9455 42.6164 74.6702C41.1219 75.9455 40.1352 77.6571 39.7265 79.5876ZM50.4433 92.3732H41.3004L41.3521 92.6543H50.495L50.4433 92.3732Z" fill="#FF6633"/><path d="M39.6986 83.6622C39.048 80.1243 40.129 76.7929 42.6165 74.6702C45.8846 76.7929 48.1909 80.1243 48.8415 83.6622L50.4951 92.6543L41.3522 92.6543L39.6986 83.6622Z" fill="#FFEEDD" stroke="#5F6368"/>
                            <path d="M172.19 56.8359L169.203 59.5394" stroke="#FF3399" stroke-linecap="square" stroke-linejoin="round"/><path d="M39.7265 79.5876L39.2278 79.4093L39.086 80.0794H39.817L39.7265 79.5876ZM47.3148 79.5876L47.4052 80.0794H48.1362L47.7479 79.4093L47.3148 79.5876ZM42.6164 74.6702L42.844 74.2768L42.5033 74.0555L42.244 74.2768L42.6164 74.6702ZM50.4433 92.3732H50.9433L50.8529 91.8815H50.3529L50.4433 92.3732ZM41.3004 92.3732L41.21 91.8815H40.71L40.8004 92.3732H41.3004ZM41.3521 92.6543H40.8521L40.9426 93.1461H41.4426L41.3521 92.6543ZM50.495 92.6543L50.5854 93.1461H51.0854L50.995 92.6543H50.495ZM39.817 80.0794H47.4052L47.2243 79.0959H39.6361L39.817 80.0794ZM42.3887 75.0636C44.2662 76.2831 45.8118 77.9197 46.8816 79.7659L47.7479 79.4093C46.5804 77.3944 44.8934 75.6079 42.844 74.2768L42.3887 75.0636ZM40.2253 79.7659C40.6161 77.9197 41.5597 76.2831 42.9887 75.0636L42.244 74.2768C40.6842 75.6079 39.6543 77.3944 39.2278 79.4093L40.2253 79.7659ZM50.3529 91.8815H41.21L41.3909 92.865H50.5337L50.3529 91.8815ZM41.8521 92.6543L41.8004 92.3732H40.8004L40.8521 92.6543H41.8521ZM50.4046 92.1626H41.2617L41.4426 93.1461H50.5854L50.4046 92.1626ZM49.9433 92.3732L49.995 92.6543H50.995L50.9433 92.3732H49.9433Z" fill="#5F6368"/>
                            <path d="M37.9243 92.6541H41.3529L40.7328 89.2821L37.9243 92.6541Z" fill="#FF6633"/>
                            <path d="M49.8756 89.2821L50.4957 92.6541H53.9243L49.8756 89.2821Z" fill="#FF6633"/>
                            <path d="M37.9243 92.6541H41.3529L40.7328 89.2821L37.9243 92.6541Z" stroke="#5F6368"/>
                            <path d="M49.8756 89.2821L50.4957 92.6541H53.9243L49.8756 89.2821Z" stroke="#5F6368"/>
                            <circle r="2.28572" transform="matrix(1 0 0.180862 0.983508 44.2445 83.5213)" fill="white" stroke="#5F6368"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M178.8 200C179.587 196.123 180 192.11 180 188C180 154.863 153.137 128 120 128C86.8629 128 60 154.863 60 188C60 192.11 60.4132 196.123 61.2002 200H178.8Z" fill="white"/>
                            <path d="M61.2002 200C60.4132 196.123 60 192.11 60 188C60 154.863 86.8629 128 120 128C153.137 128 180 154.863 180 188C180 192.11 179.587 196.123 178.8 200" stroke="#5F6368" stroke-width="0.5" stroke-dasharray="2 2"/>
                            <path d="M126 164.847C124.093 164.295 122.08 164 120 164C112.372 164 105.651 167.97 101.705 174" stroke="#5F6368" stroke-width="0.5" stroke-dasharray="2 2"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M167.991 187.082C167.634 160.881 146.282 139.75 119.995 139.75C93.7082 139.75 72.3565 160.881 72 187.084C72.0416 187.459 72.3595 187.75 72.7454 187.75H87.9955C87.9955 187.75 87.9955 187.75 87.9955 187.75C87.9955 170.077 102.322 155.75 119.995 155.75C137.669 155.75 151.995 170.077 151.995 187.75L167.245 187.75C167.632 187.75 167.95 187.458 167.991 187.082Z" fill="#CCEEFF"/>
                            <path d="M167.991 187.082L168.488 187.137L168.491 187.106L168.491 187.076L167.991 187.082ZM72 187.084L71.5 187.077L71.4996 187.108L71.5031 187.139L72 187.084ZM87.9955 187.75V188.25H88.4955V187.75H87.9955ZM151.995 187.75H151.495V188.25H151.995V187.75ZM167.245 187.75V188.25V187.75ZM168.491 187.076C168.13 160.601 146.556 139.25 119.995 139.25V140.25C146.008 140.25 167.138 161.16 167.491 187.089L168.491 187.076ZM119.995 139.25C93.4344 139.25 71.8602 160.601 71.5 187.077L72.5 187.091C72.8527 161.161 93.9821 140.25 119.995 140.25V139.25ZM72.7454 187.25C72.6171 187.25 72.5108 187.153 72.4969 187.029L71.5031 187.139C71.5725 187.764 72.1019 188.25 72.7454 188.25V187.25ZM87.9955 187.25H72.7454V188.25H87.9955V187.25ZM87.4955 187.75C87.4955 187.75 87.4955 187.75 87.4955 187.75C87.4955 187.75 87.4955 187.75 87.4955 187.75C87.4955 187.75 87.4955 187.75 87.4955 187.75V187.75V187.75C87.4955 187.75 87.4955 187.75 87.4955 187.75C87.4955 187.75 87.4955 187.75 87.4955 187.75C87.4955 187.75 87.4955 187.75 87.4955 187.75C87.4955 187.75 87.4955 187.75 87.4955 187.75V187.75V187.75C87.4955 187.75 87.4955 187.75 87.4955 187.75C87.4955 187.75 87-4955 187.75 87.4955 187.75C87.4955 187.75 87.4955 187.75 87.4955 187.75H88.4955C88.4955 187.75 88.4955 187.75 88.4955 187.75C88.4955 187.75 88.4955 187.75 88.4955 187.75C88.4955 187.75 88.4955 187.75 88.4955 187.75V187.75V187.75C88.4955 187.75 88.4955 187.75 88.4955 187.75C88.4955 187.75 88.4955 187.75 88.4955 187.75C88.4955 187.75 88.4955 187.75 88.4955 187.75C88.4955 187.75 88.4955 187.75 88.4955 187.75V187.75V187.75C88.4955 187.75 88.4955 187.75 88.4955 187.75C88.4955 187.75 88.4955 187.75 88.4955 187.75C88.4955 187.75 88.4955 187.75 88.4955 187.75H87.4955ZM119.995 155.25C102.046 155.25 87.4955 169.801 87.4955 187.75H88.4955C88.4955 170.353 102.598 156.25 119.995 156.25V155.25ZM152.495 187.75C152.495 169.801 137.945 155.25 119.995 155.25V156.25C137.392 156.25 151.495 170.353 151.495 187.75H152.495ZM167.245 187.25L151.995 187.25V188.25L167.245 188.25V187.25ZM167.494 187.028C167.48 187.153 167.374 187.25 167.245 187.25V188.25C167.89 188.25 168.419 187.763 168.488 187.137L167.494 187.028Z" fill="#5F6368"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M167.991 187.083C167.95 187.458 167.632 187.75 167.246 187.75H151.996C151.996 178.914 148.414 170.914 142.623 165.123L153.937 153.809C162.477 162.349 167.814 174.093 167.991 187.083Z" fill="#CC66FF"/>
                            <path d="M167.991 187.083L168.488 187.137L168.491 187.107L168.491 187.076L167.991 187.083ZM151.996 187.75H151.496L151.496 188.25H151.996V187.75ZM142.623 165.123L142.269 164.769L141.916 165.123L142.269 165.476L142.623 165.123ZM153.937 153.809L154.29 153.455L153.937 153.102L153.583 153.455L153.937 153.809ZM167.494 187.028C167.48 187.153 167.374 187.25 167.246 187.25V188.25C167.89 188.25 168.42 187.763 168.488 187.137L167.494 187.028ZM167.246 187.25H151.996V188.25H167.246V187.25ZM152.496 187.75C152.496 178.776 148.857 170.65 142.977 164.769L142.269 165.476C147.97 171.177 151.496 179.051 151.496 187.75H152.496ZM142.977 165.476L154.29 154.163L153.583 153.455L142.269 164.769L142.977 165.476ZM153.583 154.163C162.035 162.614 167.316 174.235 167.491 187.089L168.491 187.076C168.312 173.951 162.919 162.084 154.29 153.455L153.583 154.163Z" fill="#5F6368"/>
                            <path d="M135.269 193.077C134.492 195.251 133.233 197.292 131.492 199.032C125.201 205.323 115.003 205.323 108.713 199.032C102.423 192.742 102.423 182.544 108.713 176.254C110.454 174.513 112.494 173.254 114.668 172.476L147.873 157.883C149.133 157.329 150.417 158.612 149.863 159.873L135.269 193.077Z" fill="white" stroke="#5F6368"/>
                            <circle cx="119.995" cy="187.75" r="8" transform="rotate(45 119.995 187.75)" fill="#0066FF" stroke="#5F6368"/>
                            <path d="M145.414 156C138.358 150.353 129.551 147 120 147C110.449 147 101.642 150.353 94.5864 156" stroke="#5F6368" stroke-width="0.5" stroke-dasharray="2 2"/>
                            <circle cx="22.5" cy="188.75" r="5" fill="#66CCFF"/>
                            <rect x="176.25" y="25" width="7.5" height="7.5" fill="#CC66FF"/>
                            <path d="M210 188.75L215.413 198.125H204.587L210 188.75Z" fill="#FF66CC"/>
                        </svg>
                    </div>
                    <div class="web-dev-text">
                        <p>We provide custom CMS enhancements, integrating Cloudinary with AVIF CDN for optimized image delivery on Squarespace, enhancing performance, customization, and security.</p>
                        <p style="margin-top: 1rem;">Featured project: We created a <a href="https://squarespace-recipe-generator.vercel.app/" target="_blank" rel="noopener noreferrer" style="color: var(--primary-color); text-decoration: underline;">Squarespace Recipe Generator</a>, a tool for recipe makers with code block templates, temperature conversion, and scaling, showcasing our expertise in practical content creation tools.</p>
                    </div>
                </div>
            </details>
            <details class="how-details">
                <summary><h3 class="toggle-heading">Mobile, Tablet & Desktop Design</h3></summary>
                <div class="toggle-paragraph responsive-design-content">
                    <div class="responsive-design-svg">
                        <svg fill="#00c9ec" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 396.494 396.494" xml:space="preserve">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <g>
                                    <path d="M304.42,330.901h-43.219c-1.56,0-2.834-1.273-2.834-2.834v-10.52c0-1.559-1.275-2.834-2.834-2.834h-60.475 c-1.56,0-2.835,1.275-2.835,2.834v10.52c0,1.561-1.275,2.834-2.835,2.834h-32.491c-1.56,0-2.835,1.275-2.835,2.834v12.17 c0,1.559,1.275,2.834,2.835,2.834h147.521c1.559,0,2.834-1.275,2.834-2.834v-12.17C307.254,332.179,305.979,330.901,304.42,330.901 z"></path>
                                    <g>
                                        <path d="M377.032,46.368h-308.4c-10.73,0-19.459,8.73-19.459,19.462c0,0,0,37.109,0,50.761c0,6.711-0.498,7.66,4.004,7.66 c2.391,0,5.039,0,7.72,0c3.778,0,3.003-0.949,3.003-7.785c0-13.621,0-50.636,0-50.636c0-2.565,2.168-4.733,4.732-4.733h308.4 c2.563,0,4.731,2.168,4.731,4.733v189.999h-219.87c0,0-7.749-0.014-7.749,10.006c0,5.941,0,17.823,0,23.766 c0,10.006,8,10.006,8,10.006h214.888c10.729,0,19.461-8.729,19.461-19.459V65.83C396.493,55.099,387.763,46.368,377.032,46.368z M222.833,282.804c-4.845,0-8.771-3.926-8.771-8.768s3.926-8.77,8.771-8.77c4.84,0,8.767,3.928,8.767,8.77 S227.673,282.804,222.833,282.804z"></path>
                                        <path d="M124.125,141.633H12.559C5.632,141.633,0,147.266,0,154.193v183.372c0,6.926,5.632,12.561,12.559,12.561h111.566 c6.923,0,12.559-5.635,12.559-12.561V154.193C136.684,147.266,131.048,141.633,124.125,141.633z M54.58,154.443h27.523 c1.313,0,2.38,1.064,2.38,2.381c0,1.314-1.066,2.379-2.38,2.379H54.58c-1.315,0-2.379-1.065-2.379-2.379 C52.201,155.507,53.265,154.443,54.58,154.443z M68.175,341.304c-3.59,0-6.5-2.91-6.5-6.5s2.91-6.5,6.5-6.5s6.5,2.91,6.5,6.5 S71.765,341.304,68.175,341.304z M125.893,322.2c0,1.676-1.342,3.047-2.98,3.047H13.774c-1.639,0-2.98-1.371-2.98-3.047V169.825 c0-1.676,1.342-3.046,2.98-3.046h109.139c1.639,0,2.98,1.371,2.98,3.046V322.2z"></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div class="responsive-design-text">
                        <p>Easy navigation meets responsive design. Your site will adapt to all devices, letting visitors find what they need fast, wherever they are.</p>
                    </div>
                </div>
            </details>
            <details class="how-details">
                <summary><h3 class="toggle-heading">Content & Branding</h3></summary>
                <div class="toggle-paragraph">
                    <ul class="ul-design">
                        <li><span class="sub-heading">Brand Identity</span> | Color palette, logos, favicon, fonts</li>
                        <li><span class="sub-heading">Graphics</span> | Graphs, illustrations, banners, icons</li>
                        <li><span class="sub-heading">Copywriting</span> | Product descriptions, CTAs, SEO meta tags, FAQs, forms, and more</li>
                    </ul>
                </div>
            </details>
        </div>
    </div>
</section>

<!-- Pricing Section -->
<section id="pricing-section">
    <div class="pricing-container">
        <div class="inner-container">
            <h2 id="pricing" class="section-heading">Website Packages</h2>
            <p class="section-subtitle">Get 10% off our Essential package - $500 savings for first-time customers</p>
            <div class="price-box-container">
                <div class="price-box">
                    <h2>Professional</h2>
                    <p>Our most advanced features for customer conversion, blogs, email marketing integration, and more.</p>
                    <div class="regular-price-box">
                        <div class="price-detail">$9,995</div>
                        <p class="detail">*Starts from 10 pages</p>
                    </div>
                    <a class="buy-btn-a" href="/package-professional">Learn More</a>
                </div>
                <div class="price-box recommended">
                    <div class="recommend-banner">We Recommend</div>
                    <h2>Essential</h2>
                    <p>Reach your customers with a simple, complete website without the hassle of managing extra features.</p>
                    <div class="price">
                        <div class="old-price-box">
                            <span class="old-price">$4,995</span>
                            <p class="detail">*Up to 5 pages</p>
                        </div>
                        <div class="new-price-box">
                            <span class="new-price">$4,495</span>
                            <div class="new-customer">
                                <p>For new customers</p>
                            </div>
                        </div>
                    </div>
                    <a class="buy-btn-a" href="/package-essential">Learn More</a>
                </div>
                <div class="price-box">
                    <h2>Basic</h2>
                    <p>Maintain an online presence with minimal maintenance required.</p>
                    <div class="regular-price-box">
                        <div class="price-detail">$1,995</div>
                        <p class="detail">*One page website</p>
                    </div>
                    <a class="buy-btn-a" href="/package-basic">Learn More</a>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    :root {
        --primary-color: #00c9ec;
        --secondary-color: #000000;
        --black: #000000;
        --white: #ffffff;
        --transition: background-color .3s cubic-bezier(.165,.84,.44,1),box-shadow .3s cubic-bezier(.165,.84,.44,1);
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        line-height: 1.6;
        overflow-x: hidden;
    }

    html {
        scroll-behavior: smooth;
    }

    section {
        min-height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2rem 1rem;
    }

    .section-heading {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 2rem;
        text-align: center;
    }

    /* Hero Section */
    /* Global Section Styling */
    section {
        padding: 4rem 1rem;
    }

    .section-heading {
        font-size: clamp(2rem, 4vw, 3rem);
        font-weight: 700;
        text-align: center;
        margin-bottom: 1rem;
        color: var(--black);
    }

    .section-subtitle {
        font-size: 1.1rem;
        text-align: center;
        color: #666;
        margin-bottom: 3rem;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
        line-height: 1.5;
    }

    /* Hero Section */
    #hero-section {
        background: linear-gradient(135deg, #f8fafb 0%, #ffffff 100%);
        padding: 6rem 1rem 4rem;
        text-align: center;
    }

    .hero-container {
        max-width: 1000px;
        margin: 0 auto;
    }

    .h1-design {
        font-size: clamp(2.5rem, 6vw, 4rem);
        font-weight: 800;
        line-height: 1.1;
        margin-bottom: 1.5rem;
        color: var(--black);
    }

    .highlight {
        color: var(--primary-color);
        font-style: italic;
    }

    .hero-subtitle {
        font-size: 1.2rem;
        color: #555;
        margin-bottom: 2.5rem;
        max-width: 700px;
        margin-left: auto;
        margin-right: auto;
        line-height: 1.5;
    }

    .hero-cta {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
    }

    .primary-cta {
        background: var(--primary-color);
        color: white;
        padding: 1rem 2rem;
        border-radius: 4px;
        box-shadow: 0 4px 4px #08080814,0 1px 2px #08080833,inset 0 6px 12px #ffffff1f,inset 0 1px 1px #fff3;
        text-decoration: none;
        font-weight: 600;
        font-size: 1.1rem;
        transition: var(--transition);
        border: 2px solid var(--primary-color);
    }

    .primary-cta:hover {
        background: #00a8c7;
        border-color: #00a8c7;
        transform: translateY(-2px);
    }

    .secondary-cta {
        background: transparent;
        color: var(--black);
        padding: 1rem 2rem;
        border-radius: 4px;
        box-shadow: 0 4px 4px #08080814,0 1px 2px #08080833,inset 0 6px 12px #ffffff1f,inset 0 1px 1px #fff3;
        text-decoration: none;
        font-weight: 600;
        font-size: 1.1rem;
        transition: var(--transition);
        border: 1px solid var(--black);
    }

    .secondary-cta:hover {
        background: var(--black);
        color: white;
        transform: translateY(-2px);
    }

    .cta-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        margin-top: 2rem;
    }

    .cta-button-deal {
        background: var(--primary-color);
        color: var(--white);
        padding: 1rem 2rem;
        border: 2px solid var(--primary-color);
        border-radius: 4px;
        font-size: 1.1rem;
        font-weight: 600;
        cursor: pointer;
        text-decoration: none;
        display: inline-block;
        max-width: 350px;
        text-align: center;
        transition: var(--transition);
        box-shadow: 0 4px 15px rgba(212, 57, 37, 0.2);
    }

    .cta-button-deal:hover {
        background-color: var(--white);
        color: var(--primary-color);
        transform: translateY(-3px);
        box-shadow: 0 6px 20px rgba(212, 57, 37, 0.3);
    }

    .cta-micro-copy {
        font-size: 0.9rem;
        color: rgba(51, 51, 51, 0.8);
        text-align: center;
        margin: 0;
        line-height: 1.1;
    }

    /* Services & Process Section */
    #services-process-section {
        background-color: var(--white);
        display: flex;
        flex-direction: column;
    }

    /* Services & Process Section */
    /* #services-process-section {
        background: #fafbfc;
    } */

    /* Top Bar Layout */
    .top-bar-container {
        display: grid;
        gap: 10px;
        padding: 20px;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1rem;
        margin-bottom: 3rem;
    }

    .top-bar-column {
        padding: 1rem;
    }

    /* Full Width Services Section */
    .full-width-services {
        max-width: 800px;
        margin: 0 auto;
        padding: 0 2rem;
    }

    @media (max-width: 768px) {
        .top-bar-column {
            padding: 0;
        }

        p {
            text-align: left;
        }

        .hero-cta {
            align-items: start;
        }

        .section-heading {
            text-align: left;
        }

        h3 {
            text-align: left;
        }

        .h1-design {
            text-align: left;
        }

        .hero-subtitle {
            text-align: left;
        }
        
        .top-bar-container {
            grid-template-columns: 1fr;
            margin-bottom: 2rem;
        }

        .full-width-services {
            padding: 0;
        }
    }

    .dropdown-list {
        display: flex;
        flex-direction: column;
        text-align: center;
        gap: 1rem;
    }

    .how-details {
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        padding: 1.5rem;
        background: var(--light-bg);
        transition: var(--transition);
    }

    .how-details[open] {
        border-color: var(--primary-color);
        box-shadow: 0 5px 15px rgba(0,0,0,0.08);
    }

    .toggle-heading {
        font-size: 1.3rem;
        font-weight: 600;
        cursor: pointer;
        list-style: none;
        display: block;
    }

    /* Hide default triangle markers */
    summary {
        list-style: none;
    }

    summary::-webkit-details-marker {
        display: none;
    }

    .toggle-paragraph {
        margin-top: 1rem;
        padding-top: 1rem;
        border-top: 1px solid #e0e0e0;
    }

    .toggle-paragraph a {
        color: var(--primary-color);
        text-decoration: none;
        font-weight: 600;
        transition: var(--transition);
    }

    .toggle-paragraph a:hover {
        color: #00a8c7;
        text-decoration: underline;
    }

    .ul-design {
        text-align: left;
        list-style: none;
        padding: 0;
    }

    .ul-design li {
        margin-bottom: 0.8rem;
        padding-left: 1.5rem;
        position: relative;
    }

    .ul-design li::before {
        content: '•';
        color: var(--primary-color);
        position: absolute;
        left: 0;
        font-weight: bold;
    }

    .sub-heading {
        font-weight: 600;
        color: var(--primary-color);
    }

    /* Web Development Section Styling */
    .web-dev-content {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        align-items: center;
        text-align: center;
    }

    .web-dev-text {
        width: 100%;
    }

    .web-dev-svg {
        display: flex;
        justify-content: center;
        align-items: center;
        order: -1;
    }

    .web-dev-svg svg {
        width: 100%;
        height: auto;
        max-width: 240px;
    }

    /* Responsive Design Section Styling */
    .responsive-design-content {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        align-items: center;
        text-align: center;
    }

    .responsive-design-text {
        width: 100%;
    }

    .responsive-design-svg {
        display: flex;
        justify-content: center;
        align-items: center;
        order: -1;
    }

    .responsive-design-svg svg {
        width: 100%;
        height: auto;
        max-width: 240px;
    }

    @media (max-width: 768px) {
        .web-dev-content {
            flex-direction: column;
            gap: 1.5rem;
        }

        .web-dev-svg {
            width: 100%;
            justify-content: center;
            order: -1;
        }

        .web-dev-svg svg {
            max-width: 240px;
        }

        .responsive-design-content {
            flex-direction: column;
            gap: 1.5rem;
        }

        .responsive-design-svg {
            width: 100%;
            justify-content: center;
            order: -1;
        }

        .responsive-design-svg svg {
            max-width: 240px;
        }
    }

    /* Pricing Section */
    #pricing-section {
        background: linear-gradient(to bottom, 
            rgba(245,245,245,0) 0%,
            rgba(245,245,245,0.2) 10%, 
            rgba(245,245,245,0.4) 20%, 
            rgba(245,245,245,0.6) 30%, 
            rgba(245,245,245,0.8) 40%, 
            rgba(245,245,245,1) 50%,
            rgba(245,245,245,0.8) 60%, 
            rgba(245,245,245,0.6) 70%, 
            rgba(245,245,245,0.4) 80%, 
            rgba(245,245,245,0.2) 90%, 
            rgba(245,245,245,0) 100%
        );
        padding: 4rem 0;
    }

    .pricing-container h2 {
        font-size: clamp(1.8rem, 4vw, 2.5rem);
        font-weight: 800;
        margin-bottom: 1rem;
    }

    .subtitle {
        font-size: 1.2rem;
        max-width: 700px;
        margin: 0 auto 3rem;
        color: #555;
    }

    /* Audit Offering Styles */
    .audit-offer-container {
        margin: 2rem 0;
        display: flex;
        justify-content: center;
    }

    .audit-box {
        background-color: var(--white);
        border: 2px solid var(--primary-color);
        border-radius: 10px;
        padding: 2rem;
        max-width: 500px;
        width: 100%;
        position: relative;
        text-align: center;
        transition: var(--transition);
        box-shadow: 0 10px 25px rgba(0, 201, 236, 0.1);
    }

    .audit-box:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 40px rgba(0, 201, 236, 0.15);
    }

    .featured-banner {
        position: absolute;
        top: -12px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--primary-color);
        color: var(--white);
        padding: 0.3rem 1.5rem;
        border-radius: 20px;
        font-size: 0.9rem;
        font-weight: 600;
    }

    .audit-box h3 {
        font-size: 1.5rem;
        margin: 1.5rem 0 1rem;
        font-weight: 700;
        color: var(--black);
    }

    .audit-box p {
        font-size: 1rem;
        margin-bottom: 1.5rem;
        color: #555;
        line-height: 1.5;
    }

    .audit-price {
        margin: 1.5rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
    }

    .price-amount {
        font-size: 2rem;
        font-weight: 700;
        color: var(--primary-color);
    }

    .price-note {
        font-size: 1rem;
        color: #666;
        font-weight: 500;
    }

    .audit-btn {
        display: inline-block;
        background: var(--primary-color);
        color: var(--white);
        border: 2px solid var(--primary-color);
        padding: 1rem 2rem;
        border-radius: 4px;
        box-shadow: 0 4px 4px #08080814,0 1px 2px #08080833,inset 0 6px 12px #ffffff1f,inset 0 1px 1px #fff3;
        text-decoration: none;
        font-weight: 600;
        font-size: 1rem;
        transition: var(--transition);
        margin-top: 1rem;
    }

    .audit-btn:hover {
        background: #00a8c7;
        border-color: #00a8c7;
        transform: translateY(-2px);
    }

    .offerings-subheading {
        font-size:2rem;
        margin: 3rem 0 1.5rem;
        font-weight: 600;
        color: var(--black);
        text-align: center;
    }

    /* Pricing Section */
    #pricing-section {
        padding-right: 3rem;
        padding-left: 3rem;
    }

    .pricing-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1rem;
    }

    .inner-container {
        width: 100%;
        padding: 0 4rem;
        max-width: 1000px;
        margin: 0 auto;
    }

    .price-box-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
        gap: 1.75rem;
        max-width: 100%;
        margin: 0 auto;
        padding: 0;
        text-align: center;
    }

    .price-box {
        background-color: var(--white);
        border: 2px solid #000;
        border-radius: 10px;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        position: relative;
        text-align: center;
        transition: var(--transition);
        box-shadow: 0 5px 15px rgba(0,0,0,0.05);
    }

    .price-box:hover {
        transform: translateY(-10px);
        box-shadow: 0 15px 30px rgba(0,0,0,0.1);
    }

    .recommended {
        border-color: var(--primary-color);
        transform: scale(1.05);
        z-index: 2;
    }

    .recommended:hover {
        transform: scale(1.05) translateY(-10px);
    }

    .recommend-banner {
        position: absolute;
        top: -12px;
        right: 20px;
        background: var(--primary-color);
        color: var(--white);
        padding: 0.3rem 1rem;
        border-radius: 20px;
        font-size: 0.9rem;
        font-weight: 600;
    }

    .price-box h2 {
        font-size: 1.8rem;
        font-weight: 700;
    }

    .price-box p {
        font-weight: 400;
        line-height: 1.6;
        margin-bottom: 0.5rem;
        flex-grow: 1;
    }

    .regular-price-box, .old-price-box, .new-price-box {
        margin-bottom: 1.5rem;
    }

    .price-detail, .old-price, .new-price {
        font-size: 2rem;
        font-weight: 700;
        color: var(--secondary-color);
    }

    .old-price {
        text-decoration: line-through;
        color: #999;
        margin-right: 0.5rem;
    }

    .new-price {
        color: var(--primary-color);
    }

    .detail {
        font-size: 0.9rem;
        color: #666;
        margin: 0.3rem 0;
    }

    .new-customer p {
        background: rgba(212, 57, 37, 0.1);
        color: var(--primary-color);
        padding: 0.3rem 0.8rem;
        border-radius: 20px;
        display: inline-block;
        font-size: 0.85rem;
        font-weight: 500;
        margin-top: 0.5rem;
    }

    .buy-btn-a {
        display: inline-block;
        background: transparent;
        color: var(--black);
        border: 1px solid var(--black);
        box-shadow: 0 4px 4px #08080814,0 1px 2px #08080833,inset 0 6px 12px #ffffff1f,inset 0 1px 1px #fff3;
        padding: 1rem 1.5rem;
        border-radius: 4px;
        text-decoration: none;
        font-weight: 600;
        text-align: center;
        transition: var(--transition);
        margin-top: auto;
        font-size: 1rem;
    }

    .buy-btn-a:hover {
        background: var(--black);
        color: var(--white);
        transform: translateY(-2px);
    }

    .recommended .buy-btn-a {
        background: var(--primary-color);
        border-color: var(--primary-color);
        color: var(--white);
    }

    .recommended .buy-btn-a:hover {
        background: #00a8c7;
        border-color: #00a8c7;
        transform: translateY(-2px);
    }

    /* Responsive Improvements */
    @media (max-width: 1024px) {
        h2 {
            text-align: left;
        }
         
        .audit-price {
            align-items: unset;
        }

        .audit-box {
            text-align: left;
        }

        .section-subtitle {
            text-align: left;
        }

        .price-detail {
            text-align: left;
        }

        .old-price-box {
            text-align: left;
        }

        .new-price-box {
            text-align: left;
        }
        
        .price-box-container {
            text-align: left;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        }
        
        .recommended {
            transform: scale(1.02);
        }
    }

    @media (max-width: 768px) {
        #pricing-section {
            padding-right: 0;
            padding-left: 0;
        }

        .offerings-subheading {
            text-align: left;
        }

        section {
            padding: 3rem 1rem;
        }

        #hero-section {
            padding: 4rem 1.5rem 3rem;
        }
        
        .section-heading {
            font-size: 2rem;
        }
        
        .h1-design {
            font-size: clamp(2rem, 8vw, 3rem);
        }

        .hero-cta {
            flex-direction: column;
            align-items: left;
        }
        
        .services-process-container {
            gap: 2rem;
            grid-template-columns: 1fr;
        }
        
        .audit-box {
            padding: 1.5rem;
            margin: 0;
        }

        .audit-box h3 {
            font-size: 1.3rem;
        }

        .audit-btn {
            padding: 0.8rem 1.5rem;
            font-size: 0.9rem;
        }
        
        .pricing-container {
            padding: 0 1rem;
        }

        .inner-container {
            padding: 0 1rem;
            max-width: 100%;
        }

        .price-box-container {
            grid-template-columns: 1fr;
            gap: 3.5rem;
        }
        
        .recommended {
            transform: scale(1);
        }
        
        .section-column .section-heading {
            text-align: left;
        }
    }

    @media (max-width: 480px) {
        .cta-button-deal {
            padding: 0.8rem 1.5rem;
            font-size: 1rem;
        }
        
        .price-box {
            padding: 1.5rem;
        }
    }

    /* Accessibility Improvements */
    @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    }

    /* Focus Styles */
    a:focus, button:focus {
        outline: 2px solid var(--primary-color);
        outline-offset: 2px;
    }
</style>
