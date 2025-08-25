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
    <title>Web Performance: Why Your Site Speed Matters More Than You Think | Dozy Donut</title>
    <meta name="description" content="Understanding web performance impact on business metrics. Learn what slows sites down, how to diagnose issues, and practical optimization techniques.">
</svelte:head>

<!-- Hero Section -->
<section id="hero-section">
    <div class="hero-container">
        <div class="hero-content">
            <h1 class="h1-design">
                Why Your <span class="highlight">Website Speed</span> Actually Matters
            </h1>
            <p class="hero-subtitle">
                Most site owners don't realize how much performance impacts their bottom line. Here's what we've learned from optimizing sites like TheCulinaryPro.com and how to diagnose your own site's issues.
            </p>
            <div class="hero-cta">
                <a href="#diagnostics" class="primary-cta">Check Your Site</a>
                <a href="#insights" class="secondary-cta">See Real Data</a>
            </div>
        </div>
    </div>
</section>

<!-- Performance Reality Check -->
<section id="overview-section">
    <div class="overview-container">
        <h2 class="section-heading">The Hidden Performance Tax</h2>
        <div class="overview-content">
            <div class="overview-column">
                <h3 class="overview-subheading">What Actually Happens</h3>
                <p>A 3-second delay doesn't just annoy users—it cascades through your entire business. Search rankings drop. Ad viewability plummets. Conversion rates crater. Most site owners only see the tip of the iceberg.</p>
                
                <h3 class="overview-subheading">TheCulinaryPro.com: A Real Example</h3>
                <p>Culinary techniques educational website with 35K monthly users. Professional cooking tutorials and technique guides, but 5-second load times were killing their AdSense revenue. Here's what the numbers looked like before and after optimization.</p>
            </div>
            
            <div class="overview-column">
                <div class="metrics-box">
                    <h3 class="metrics-heading">Performance Impact Analysis</h3>
                    <div class="metric-item">
                        <span class="metric-label">Page Abandonment</span>
                        <span class="metric-improvement">53% leave after 3s</span>
                    </div>
                    <div class="metric-item">
                        <span class="metric-label">SEO Ranking Factor</span>
                        <span class="metric-improvement">Core Web Vitals are critical</span>
                    </div>
                    <div class="metric-item">
                        <span class="metric-label">Ad Revenue Loss</span>
                        <span class="metric-improvement">Slower = lower RPM</span>
                    </div>
                    <div class="metric-item">
                        <span class="metric-label">Mobile Reality</span>
                        <span class="metric-improvement">70% of traffic, highest bounce</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- DIY Performance Diagnostics -->
<section id="results-section">
    <div class="results-container">
        <h2 id="diagnostics" class="section-heading">How to Diagnose Your Site's Performance Issues</h2>
        <div class="results-grid">
            
            <!-- Free Tools -->
            <div class="result-card featured">
                <div class="featured-banner">Start Here</div>
                <h3>Free Performance Testing Tools</h3>
                <div class="process-description">
                    <p>Before you can fix performance issues, you need to understand what's actually slow. These tools will give you the data you need.</p>
                    <div class="diagnostic-tools">
                        <div class="tool-item">
                            <strong>Google PageSpeed Insights</strong>
                            <span>Real user data + lab testing</span>
                        </div>
                        <div class="tool-item">
                            <strong>WebPageTest.org</strong>
                            <span>Detailed waterfall analysis</span>
                        </div>
                        <div class="tool-item">
                            <strong>GTmetrix</strong>
                            <span>Performance scoring + recommendations</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- What to Look For -->
            <div class="result-card">
                <h3>Red Flags to Watch For</h3>
                <div class="process-description">
                    <p>These metrics tell you if you have a performance problem and roughly how severe it is.</p>
                    <div class="diagnostic-checklist">
                        <div class="check-item critical">
                            <span class="metric">LCP > 2.5s</span>
                            <span class="meaning">Main content loads too slowly</span>
                        </div>
                        <div class="check-item critical">
                            <span class="metric">FID > 100ms</span>
                            <span class="meaning">Site feels unresponsive to clicks</span>
                        </div>
                        <div class="check-item critical">
                            <span class="metric">CLS > 0.1</span>
                            <span class="meaning">Content jumps around while loading</span>
                        </div>
                        <div class="check-item critical">
                            <span class="metric">Total load > 3s</span>
                            <span class="meaning">Users start abandoning</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Common Culprits -->
            <div class="result-card">
                <h3>Most Common Performance Killers</h3>
                <div class="process-description">
                    <p>In our experience, these issues cause 80% of performance problems. Check yours first.</p>
                    <div class="common-issues">
                        <div class="issue-item">
                            <strong>Unoptimized Images</strong>
                            <span>Usually 60-70% of page weight</span>
                        </div>
                        <div class="issue-item">
                            <strong>Render-blocking CSS/JS</strong>
                            <span>Prevents page from displaying</span>
                        </div>
                        <div class="issue-item">
                            <strong>No Caching</strong>
                            <span>Every visit re-downloads everything</span>
                        </div>
                        <div class="issue-item">
                            <strong>Slow Hosting</strong>
                            <span>Server response > 600ms</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>

<!-- Actionable Insights Section -->
<section id="implementation-section">
    <div class="implementation-container">
        <h2 id="insights" class="section-heading">What We Learned from TheCulinaryPro.com</h2>
        <div class="dropdown-list">
            
            <details class="implementation-details" open>
                <summary><h3 class="toggle-heading">The Image Optimization Reality</h3></summary>
                <div class="toggle-paragraph">
                    <p>Images accounted for 78% of TheCulinaryPro.com's page weight. High-quality cooking technique photos and tutorial images were beautiful but each one was 2-4MB. Here's what actually moved the needle:</p>
                    <div class="insight-content">
                        <div class="before-after-insight">
                            <div class="before-state">
                                <strong>Before:</strong> 
                                <ul>
                                    <li>Average image: 2.3MB</li>
                                    <li>Format: JPEG at 95% quality</li>
                                    <li>No lazy loading</li>
                                    <li>Full resolution served to mobile</li>
                                </ul>
                            </div>
                            <div class="after-state">
                                <strong>Image Optimization Solutions:</strong>
                                <ul>
                                    <li>Cloudinary CDN with AVIF format (85% smaller than JPEG)</li>
                                    <li>Automatic fallback to WebP for older browsers</li>
                                    <li>Dynamic responsive sizing via URL parameters</li>
                                    <li>Smart lazy loading with intersection observer</li>
                                </ul>
                            </div>
                        </div>
                        <div class="key-insight">
                            <strong>Key insight:</strong> AVIF format through Cloudinary CDN delivered the biggest impact—85% smaller files with identical visual quality. The CDN automatically serves AVIF to supported browsers and falls back to WebP/JPEG for others, making the optimization transparent to users while dramatically reducing bandwidth.
                        </div>
                    </div>
                </div>
            </details>

            <details class="implementation-details">
                <summary><h3 class="toggle-heading">The JavaScript Problem Most Sites Have</h3></summary>
                <div class="toggle-paragraph">
                    <p>TheCulinaryPro.com had 14 different JavaScript files loading on every page. Social widgets, analytics, ads, tutorial ratings—all blocking the main content.</p>
                    <div class="insight-content">
                        <div class="js-analysis">
                            <div class="critical-js">
                                <strong>Actually critical JS (loaded first):</strong>
                                <ul>
                                    <li>Navigation menu functionality</li>
                                    <li>Tutorial print/bookmark button</li>
                                </ul>
                            </div>
                            <div class="deferred-js">
                                <strong>Deferred until after page load:</strong>
                                <ul>
                                    <li>Google Analytics</li>
                                    <li>Social sharing widgets</li>
                                    <li>Comment system</li>
                                    <li>Tutorial rating stars</li>
                                    <li>Related techniques slider</li>
                                </ul>
                            </div>
                        </div>
                        <div class="key-insight">
                            <strong>Key insight:</strong> Users don't interact with social buttons or rating systems until after they've learned the cooking technique. Delaying these by 2-3 seconds had zero impact on user experience but massive impact on load times.
                        </div>
                    </div>
                </div>
            </details>

            <details class="implementation-details">
                <summary><h3 class="toggle-heading">Why Caching Made the Biggest Revenue Difference</h3></summary>
                <div class="toggle-paragraph">
                    <p>TheCulinaryPro.com's server was in the US, but 40% of their traffic came from Europe and Asia. Every visit meant a round trip across the globe.</p>
                    <div class="insight-content">
                        <div class="caching-impact">
                            <div class="geo-performance">
                                <strong>Before CDN:</strong>
                                <ul>
                                    <li>US visitors: 2.1s average load</li>
                                    <li>Europe visitors: 4.8s average load</li>
                                    <li>Asia visitors: 6.2s average load</li>
                                </ul>
                            </div>
                            <div class="geo-performance">
                                <strong>After CDN + caching:</strong>
                                <ul>
                                    <li>All regions: 1.2-1.8s average load</li>
                                    <li>Repeat visitors: 0.8s average load</li>
                                    <li>Mobile improvement: 70% faster</li>
                                </ul>
                            </div>
                        </div>
                        <div class="key-insight">
                            <strong>Key insight:</strong> The revenue increase came primarily from international traffic that previously had terrible experiences. AdSense RPM jumped 60% for non-US visitors once they could actually see the ads.
                        </div>
                    </div>
                </div>
            </details>

            <details class="implementation-details">
                <summary><h3 class="toggle-heading">The Mobile Performance Reality Check</h3></summary>
                <div class="toggle-paragraph">
                    <p>Mobile accounted for 72% of TheCulinaryPro.com's traffic but had a 68% bounce rate vs 34% on desktop. The educational content looked fine on mobile, but performance was killing engagement.</p>
                    <div class="insight-content">
                        <div class="mobile-stats">
                            <div class="problem-analysis">
                                <strong>The mobile performance problem:</strong>
                                <ul>
                                    <li>Recipe cards loaded all content at once</li>
                                    <li>Images weren't optimized for small screens</li>
                                    <li>Ads caused layout shifts while loading</li>
                                    <li>Font files weren't prioritized properly</li>
                                </ul>
                            </div>
                        </div>
                        <div class="key-insight">
                            <strong>Key insight:</strong> Mobile users judge sites within 1-2 seconds. They were leaving before the recipe even appeared. Progressive loading (content first, then images, then ads) cut mobile bounce rate in half.
                        </div>
                    </div>
                </div>
            </details>

        </div>
    </div>
</section>

<!-- CTA Section -->
<section id="cta-section">
    <div class="cta-container">
        <h2 class="section-heading">Want Us to Take a Look at Your Site?</h2>
        <p class="cta-subtitle">
            If you're seeing performance issues similar to what TheCulinaryPro.com had, we can run a detailed analysis and show you exactly what's holding your site back.
        </p>
        <div class="cta-actions">
            <a href="/free-consultation" class="primary-cta">Get a Performance Analysis</a>
            <a href="/contact" class="secondary-cta">Ask Questions First</a>
        </div>
    </div>
</section>

<style>
    :root {
        --primary-color: #00c9ec;
        --secondary-color: #000000;
        --black: #000000;
        --white: #ffffff;
        --success-color: #10B981;
        --warning-color: #F59E0B;
        --danger-color: #EF4444;
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
        padding: 4rem 1rem;
    }

    .section-heading {
        font-size: clamp(2rem, 4vw, 3rem);
        font-weight: 700;
        text-align: center;
        margin-bottom: 2rem;
        color: var(--black);
    }

    /* Hero Section - Similar to homepage */
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

    /* Overview Section */
    #overview-section {
        background-color: var(--white);
        min-height: auto;
        padding: 4rem 1rem;
    }

    .overview-container {
        max-width: 1200px;
        margin: 0 auto;
    }

    .overview-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        align-items: start;
    }

    .overview-subheading {
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--primary-color);
        margin-bottom: 1rem;
        margin-top: 2rem;
    }

    .overview-subheading:first-child {
        margin-top: 0;
    }

    .metrics-box {
        background: linear-gradient(135deg, var(--primary-color) 0%, #00a8c7 100%);
        color: white;
        padding: 2rem;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(0, 201, 236, 0.2);
    }

    .metrics-heading {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 1.5rem;
        text-align: center;
    }

    .metric-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 0;
        border-bottom: 1px solid rgba(255,255,255,0.2);
    }

    .metric-item:last-child {
        border-bottom: none;
    }

    .metric-label {
        font-weight: 500;
    }

    .metric-improvement {
        font-weight: 700;
        font-size: 1.1rem;
    }

    /* Results Section */
    #results-section {
        background: linear-gradient(to bottom, 
            rgba(245,245,245,0) 0%,
            rgba(245,245,245,0.4) 50%, 
            rgba(245,245,245,0) 100%
        );
        min-height: auto;
        padding: 4rem 1rem;
    }

    .results-container {
        max-width: 1200px;
        margin: 0 auto;
    }

    .results-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 2rem;
    }

    .result-card {
        background-color: var(--white);
        border: 2px solid #e0e0e0;
        border-radius: 10px;
        padding: 2rem;
        position: relative;
        transition: var(--transition);
        box-shadow: 0 5px 15px rgba(0,0,0,0.05);
    }

    .result-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 30px rgba(0,0,0,0.1);
    }

    .result-card.featured {
        border-color: var(--primary-color);
        box-shadow: 0 10px 25px rgba(0, 201, 236, 0.1);
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

    .result-card h3 {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 1.5rem;
        color: var(--black);
    }

    .metric-explanation {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        text-align: center;
    }

    .metric-visual {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
    }

    .score-range {
        font-size: 2rem;
        font-weight: 800;
        padding: 1rem;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        min-width: 120px;
    }

    .score-range.good {
        background: var(--success-color);
    }

    .score-range.needs-improvement {
        background: var(--warning-color);
    }

    .score-range.poor {
        background: var(--danger-color);
    }

    .range-label {
        font-size: 0.9rem;
        font-weight: 600;
        color: #666;
        text-transform: uppercase;
    }

    .metric-description {
        text-align: left;
    }

    .process-description {
        text-align: left;
    }

    .process-example {
        margin-top: 1.5rem;
        padding: 1rem;
        background: #f8f9fa;
        border-radius: 8px;
        border-left: 4px solid var(--primary-color);
    }

    .example-list {
        list-style: none;
        padding: 0;
        margin: 0.5rem 0;
    }

    .example-list li {
        margin-bottom: 0.5rem;
        padding-left: 1rem;
        position: relative;
    }

    .example-list li::before {
        content: '→';
        color: var(--primary-color);
        position: absolute;
        left: 0;
        font-weight: bold;
    }

    .technique-example {
        margin-top: 1.5rem;
        padding: 1.5rem;
        background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        border-radius: 8px;
        border: 1px solid #e0e0e0;
    }

    .result-highlight {
        display: block;
        margin-top: 1rem;
        padding: 0.8rem;
        background: var(--success-color);
        color: white;
        border-radius: 4px;
        font-weight: 600;
        text-align: center;
    }

    /* New diagnostic elements */
    .diagnostic-tools {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-top: 1rem;
    }

    .tool-item {
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
        padding: 1rem;
        background: #f8f9fa;
        border-radius: 6px;
        border-left: 3px solid var(--primary-color);
    }

    .tool-item strong {
        color: var(--primary-color);
    }

    .tool-item span {
        font-size: 0.9rem;
        color: #666;
    }

    .diagnostic-checklist {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        margin-top: 1rem;
    }

    .check-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.8rem;
        border-radius: 6px;
        border-left: 4px solid var(--warning-color);
    }

    .check-item.critical {
        border-left-color: var(--danger-color);
        background: rgba(239, 68, 68, 0.05);
    }

    .check-item.warning {
        border-left-color: var(--warning-color);
        background: rgba(245, 158, 11, 0.05);
    }

    .check-item .metric {
        font-weight: 600;
        font-family: 'Courier New', monospace;
    }

    .check-item .meaning {
        font-size: 0.9rem;
        color: #666;
    }

    .common-issues {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        margin-top: 1rem;
    }

    .issue-item {
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
        padding: 0.8rem;
        background: rgba(245, 158, 11, 0.05);
        border-radius: 6px;
        border-left: 3px solid var(--warning-color);
    }

    .issue-item strong {
        color: var(--black);
    }

    .issue-item span {
        font-size: 0.9rem;
        color: #666;
    }

    /* Insight content styling */
    .insight-content {
        margin-top: 1.5rem;
        padding: 1.5rem;
        background: #f8f9fa;
        border-radius: 8px;
        border: 1px solid #e0e0e0;
    }

    .before-after-insight {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        margin-bottom: 1.5rem;
    }

    .before-state, .after-state {
        padding: 1rem;
        border-radius: 6px;
    }

    .before-state {
        background: rgba(239, 68, 68, 0.05);
        border-left: 4px solid var(--danger-color);
    }

    .after-state {
        background: rgba(16, 185, 129, 0.05);
        border-left: 4px solid var(--success-color);
    }

    .before-state ul, .after-state ul {
        margin: 0.5rem 0 0 0;
        padding-left: 1.2rem;
        list-style: disc;
    }

    .before-state li, .after-state li {
        margin-bottom: 0.3rem;
        font-size: 0.9rem;
    }

    .js-analysis {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        margin-bottom: 1.5rem;
    }

    .critical-js, .deferred-js {
        padding: 1rem;
        border-radius: 6px;
    }

    .critical-js {
        background: rgba(16, 185, 129, 0.05);
        border-left: 4px solid var(--success-color);
    }

    .deferred-js {
        background: rgba(245, 158, 11, 0.05);
        border-left: 4px solid var(--warning-color);
    }

    .critical-js ul, .deferred-js ul {
        margin: 0.5rem 0 0 0;
        padding-left: 1.2rem;
        list-style: disc;
    }

    .critical-js li, .deferred-js li {
        margin-bottom: 0.3rem;
        font-size: 0.9rem;
    }

    .caching-impact {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        margin-bottom: 1.5rem;
    }

    .geo-performance {
        padding: 1rem;
        border-radius: 6px;
    }

    .geo-performance:first-child {
        background: rgba(239, 68, 68, 0.05);
        border-left: 4px solid var(--danger-color);
    }

    .geo-performance:last-child {
        background: rgba(16, 185, 129, 0.05);
        border-left: 4px solid var(--success-color);
    }

    .geo-performance ul {
        margin: 0.5rem 0 0 0;
        padding-left: 1.2rem;
        list-style: disc;
    }

    .geo-performance li {
        margin-bottom: 0.3rem;
        font-size: 0.9rem;
    }

    .mobile-stats {
        margin-bottom: 1.5rem;
    }

    .problem-analysis {
        padding: 1rem;
        background: rgba(239, 68, 68, 0.05);
        border-left: 4px solid var(--danger-color);
        border-radius: 6px;
    }

    .problem-analysis ul {
        margin: 0.5rem 0 0 0;
        padding-left: 1.2rem;
        list-style: disc;
    }

    .problem-analysis li {
        margin-bottom: 0.3rem;
        font-size: 0.9rem;
    }

    .key-insight {
        padding: 1rem;
        background: linear-gradient(135deg, var(--primary-color), #00a8c7);
        color: white;
        border-radius: 6px;
        font-weight: 500;
        line-height: 1.5;
    }

    .key-insight strong {
        font-weight: 700;
    }

    .revenue-stats {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .revenue-item {
        text-align: center;
        padding: 1rem;
        background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        border-radius: 8px;
    }

    .revenue-number {
        display: block;
        font-size: 2.5rem;
        font-weight: 800;
        color: var(--success-color);
        margin-bottom: 0.5rem;
    }

    .revenue-period {
        font-size: 0.9rem;
        color: #666;
        font-weight: 500;
    }

    .improvements-list {
        list-style: none;
        padding: 0;
    }

    .improvements-list li {
        margin-bottom: 0.8rem;
        padding-left: 1.5rem;
        position: relative;
    }

    .improvements-list li::before {
        content: '✓';
        color: var(--success-color);
        position: absolute;
        left: 0;
        font-weight: bold;
        font-size: 1.1rem;
    }

    /* Implementation Section */
    #implementation-section {
        background-color: var(--white);
        min-height: auto;
        padding: 4rem 1rem;
    }

    .implementation-container {
        max-width: 800px;
        margin: 0 auto;
    }

    .dropdown-list {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .implementation-details {
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        padding: 1.5rem;
        background: #fafbfc;
        transition: var(--transition);
    }

    .implementation-details[open] {
        border-color: var(--primary-color);
        box-shadow: 0 5px 15px rgba(0,0,0,0.08);
    }

    .toggle-heading {
        font-size: 1.3rem;
        font-weight: 600;
        cursor: pointer;
    }

    summary {
        list-style: none;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    summary::-webkit-details-marker {
        display: none;
    }

    summary::after {
        content: '▼';
        color: var(--primary-color);
        font-size: 1rem;
        transition: all 0.3s ease;
    }

    details[open] summary::after {
        transform: rotate(180deg);
        color: #00a8c7;
    }

    summary:hover {
        cursor: pointer;
    }

    summary:hover::after {
        color: #00a8c7;
    }

    .toggle-paragraph {
        margin-top: 1rem;
        padding-top: 1rem;
        border-top: 1px solid #e0e0e0;
    }

    .audit-findings, .optimization-steps, .code-optimizations, .caching-strategies, .mobile-optimizations {
        list-style: none;
        padding: 0;
        margin-top: 1rem;
    }

    .audit-findings li, .optimization-steps li, .code-optimizations li, .caching-strategies li, .mobile-optimizations li {
        margin-bottom: 0.8rem;
        padding-left: 1.5rem;
        position: relative;
    }

    .audit-findings li::before {
        content: '⚠️';
        position: absolute;
        left: 0;
    }

    .optimization-steps li::before, .code-optimizations li::before, .caching-strategies li::before {
        content: '🔧';
        position: absolute;
        left: 0;
    }

    .mobile-optimizations li::before {
        content: '📱';
        position: absolute;
        left: 0;
    }

    /* CTA Section */
    #cta-section {
        background: linear-gradient(135deg, #f8fafb 0%, #ffffff 100%);
        text-align: center;
        min-height: auto;
        padding: 4rem 1rem;
    }

    .cta-container {
        max-width: 800px;
        margin: 0 auto;
    }

    .cta-subtitle {
        font-size: 1.1rem;
        color: #555;
        margin-bottom: 2.5rem;
        line-height: 1.5;
    }

    .cta-actions {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        section {
            padding: 3rem 1rem;
        }

        #hero-section {
            padding: 4rem 1rem 3rem;
        }

        .h1-design {
            font-size: clamp(2rem, 8vw, 3rem);
        }

        .hero-cta, .cta-actions {
            flex-direction: column;
            align-items: center;
        }

        .overview-content {
            grid-template-columns: 1fr;
            gap: 2rem;
        }

        .results-grid {
            grid-template-columns: 1fr;
        }

        .metric-explanation {
            text-align: left;
        }

        .metric-visual {
            align-items: flex-start;
        }

        .before-after-insight {
            grid-template-columns: 1fr;
            gap: 1rem;
        }

        .js-analysis {
            grid-template-columns: 1fr;
            gap: 1rem;
        }

        .caching-impact {
            grid-template-columns: 1fr;
            gap: 1rem;
        }

        .section-heading {
            text-align: left;
        }

        .hero-subtitle, .cta-subtitle {
            text-align: left;
        }

        .h1-design {
            text-align: left;
        }

        #hero-section {
            text-align: left;
        }

        #cta-section {
            text-align: left;
        }

        .cta-actions {
            align-items: flex-start;
        }
    }

    @media (max-width: 480px) {
        .result-card {
            padding: 1.5rem;
        }

        .score {
            font-size: 2rem;
            width: 80px;
            height: 80px;
        }

        .revenue-number {
            font-size: 2rem;
        }
    }

    /* Focus Styles */
    a:focus, button:focus, summary:focus {
        outline: 2px solid var(--primary-color);
        outline-offset: 2px;
    }

    /* Accessibility */
    @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    }
</style>