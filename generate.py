import re

with open('index.html', 'r', encoding='utf-8') as f:
    index_html = f.read()

# Extract header
header_match = re.search(r'(<header.*?</header>)', index_html, re.DOTALL)
header = header_match.group(1) if header_match else ""

# Extract footer
footer_match = re.search(r'(<footer.*?</footer>)', index_html, re.DOTALL)
footer = footer_match.group(1) if footer_match else ""

# Base template for all subpages
template = f'''<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Stackly | {{title}}</title>
  <link rel="stylesheet" href="styles.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
  <!-- Custom Cursor -->
  <div class="cursor-dot"></div>
  <div class="cursor-outline"></div>

  <!-- 1. Navigation -->
  {header}

  <!-- 2. Hero Section -->
  <section class="hero" id="{{vanta_id}}">
    <div class="hero-bg-orb"></div>
    <div class="container">
      <div class="hero-content">
        <div class="tag gsap-hero"><i class="fa-solid fa-circle text-gold" style="font-size: 6px;"></i> {{subtitle}}</div>
        <h1 class="gsap-hero split-text">{{hero_title}}</h1>
        <p class="gsap-hero">{{hero_desc}}</p>
      </div>
      <div class="hero-image-wrapper gsap-hero-img">
        <img src="assets/hero.webp" alt="Stackly {{title}}" class="hero-image-parallax">
      </div>
    </div>
  </section>

  <!-- 3. Key Offerings Grid -->
  <section class="capabilities" style="position: relative; overflow: hidden; background-color: #0b132b; color: white;">
    <div class="orb orb-gold"></div>
    <div class="container" style="position: relative; z-index: 1;">
      <div class="tag gsap-fade" style="color: white; border-color: rgba(255,255,255,0.2);"><i class="fa-solid fa-circle text-gold" style="font-size: 6px;"></i> CORE AREAS</div>
      <div class="capabilities-header gsap-fade">
        <h2 style="color: white;">{{grid_title}}</h2>
        <p style="color: rgba(255,255,255,0.8);">{{grid_desc}}</p>
      </div>
      <div class="cap-grid bento-grid">
        <a href="404.html" class="cap-card card-button gsap-stagger bento-wide">
          <h4>Strategic Insight</h4>
          <p>Uncovering the unseen levers of performance.</p>
        </a>
        <a href="404.html" class="cap-card card-button gsap-stagger bento-wide">
          <h4>Execution Rigor</h4>
          <p>Deploying solutions that stick to the very core.</p>
        </a>
        <a href="404.html" class="cap-card card-button gsap-stagger bento-small">
          <h4>Scale</h4>
          <p>Global capability models.</p>
        </a>
        <a href="404.html" class="cap-card card-button gsap-stagger bento-small">
          <h4>Focus</h4>
          <p>Concentrated effort metrics.</p>
        </a>
      </div>
    </div>
  </section>

  <!-- 4. Number Stats -->
  <section class="outcomes">
    <div class="container">
      <div class="tag gsap-fade"><i class="fa-solid fa-circle text-gold" style="font-size: 6px;"></i> IMPACT</div>
      <h2 class="gsap-fade">Measurable results globally.</h2>
      <div class="outcomes-grid">
        <div class="outcome-card gsap-stagger-outcome">
          <div class="img-wrapper">
            <img src="assets/port.webp" alt="Port" class="parallax-img">
          </div>
          <div class="outcome-stat">+<span class="counter" data-target="45">0</span>%</div>
          <h4>PERFORMANCE LIFT</h4>
          <p>Across key industrial clusters.</p>
        </div>
        <div class="outcome-card gsap-stagger-outcome">
          <div class="img-wrapper">
            <img src="assets/boardroom.webp" alt="Boardroom" class="parallax-img">
          </div>
          <div class="outcome-stat">$<span class="counter" data-target="150">0</span>M</div>
          <h4>VALUE UNLOCKED</h4>
          <p>Capital optimization at scale.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 5. Horizontal Scroll -->
  <section class="horizontal-scroll-wrapper" style="padding-top: 8rem; border-top: 1px solid var(--color-border);">
    <div class="container">
      <div class="cap-title-row gsap-fade">
        <h2 style="font-size: 2.5rem;">Deep Dives</h2>
        <a href="404.html" class="btn-outline">Explore All</a>
      </div>
      <div class="case-grid horizontal-scroll-container">
        <a href="404.html" class="case-card card-button gsap-stagger-case">
          <div class="case-img"><img src="assets/case1.webp" alt="Image" class="scale-img"></div>
          <div class="case-content">
            <div class="tag">SECTOR</div>
            <h3>Transformation Agenda</h3>
            <p>18-month execution roadmap.</p>
          </div>
        </a>
        <a href="404.html" class="case-card card-button gsap-stagger-case">
          <div class="case-img"><img src="assets/case2.webp" alt="Image" class="scale-img"></div>
          <div class="case-content">
            <div class="tag">SECTOR</div>
            <h3>Supply Chain Reset</h3>
            <p>Global redistribution models.</p>
          </div>
        </a>
        <a href="404.html" class="case-card card-button gsap-stagger-case">
          <div class="case-img"><img src="assets/boardroom.webp" alt="Image" class="scale-img"></div>
          <div class="case-content">
            <div class="tag">SECTOR</div>
            <h3>Digital Platforms</h3>
            <p>Integrating complex data lakes.</p>
          </div>
        </a>
      </div>
    </div>
  </section>

  <!-- 6. Partners -->
  <section class="partners gsap-fade" style="border-top: 1px solid var(--color-border); margin-top: 5rem;">
    <div class="container">
      <div class="tag" style="justify-content: center;">ECOSYSTEM PARTNERS</div>
      <div class="partners-logos">
        <span>STRATOS</span>
        <span>MERIDIAN</span>
        <span>AETHER</span>
        <span>VANGUARD</span>
      </div>
    </div>
  </section>

  <!-- 7. Our Philosophy (List style) -->
  <section class="philosophy">
    <div class="orb orb-pink"></div>
    <div class="container philosophy-container">
      <div class="philosophy-left">
        <div class="tag tag-light"><i class="fa-solid fa-circle text-gold" style="font-size: 6px;"></i> OUR APPROACH</div>
        <h2>A direct, unforgiving approach.</h2>
      </div>
      <div class="philosophy-right">
        <div class="phil-item gsap-phil-item">
          <div class="phil-num">01</div>
          <div class="phil-content">
            <h3>Diagnostic Focus</h3>
            <p>Finding the absolute truth behind the data.</p>
          </div>
        </div>
        <div class="phil-item gsap-phil-item">
          <div class="phil-num">02</div>
          <div class="phil-content">
            <h3>Structural Design</h3>
            <p>Building operating models that cannot fail.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 8. Leadership -->
  <section class="leadership">
    <div class="container">
      <div class="tag gsap-fade"><i class="fa-solid fa-circle text-gold" style="font-size: 6px;"></i> LEADERSHIP</div>
      <h2 class="gsap-fade" style="margin-bottom: 4rem;">Guiding the mandate.</h2>
      <div class="leader-grid">
        <a href="404.html" class="leader-card card-button gsap-stagger-leader">
          <div class="leader-img" style="background-image: url('assets/leader1.webp'); background-color: #e2e8f0;"></div>
          <div class="leader-info">
            <h3>Managing Partner</h3>
            <div class="leader-title">GLOBAL HEAD</div>
            <p>25 years advising top sovereign wealth funds.</p>
          </div>
        </a>
        <a href="404.html" class="leader-card card-button gsap-stagger-leader">
          <div class="leader-img" style="background-image: url('assets/leader2.webp'); background-color: #cbd5e1;"></div>
          <div class="leader-info">
            <h3>Senior Partner</h3>
            <div class="leader-title">OPERATIONS</div>
            <p>Specialist in algorithmic business transformations.</p>
          </div>
        </a>
      </div>
    </div>
  </section>

  <!-- 9. Testimonials -->
  <section class="testimonials" style="position: relative; overflow: hidden;">
    <div class="container" style="position: relative; z-index: 1;">
      <div class="tag gsap-fade"><i class="fa-solid fa-circle text-gold" style="font-size: 6px;"></i> CLIENT VOICES</div>
      <h2 class="gsap-fade">What it is like to work with us</h2>
      <div class="test-grid">
        <div class="test-card gsap-stagger-test">
          <p class="test-text">"Stackly refused to hand us a deck and leave. They sat with our plant managers until the plan worked."</p>
          <div class="test-author">Elena Vasquez</div>
        </div>
        <div class="test-card gsap-stagger-test">
          <p class="test-text">"Clear thinking, no theatre. Our teams still use the operating rhythm they built with us."</p>
          <div class="test-author">Tom Bassey</div>
        </div>
      </div>
    </div>
  </section>

  <!-- 10. Insights Grid -->
  <section class="insights">
    <div class="container">
      <div class="cap-title-row gsap-fade">
        <div>
          <div class="tag" style="margin-bottom: 0.5rem;"><i class="fa-solid fa-book-open text-gold"></i> PERSPECTIVES</div>
          <h3>Thinking that shapes markets</h3>
        </div>
        <a href="404.html" class="btn-outline">All Insights <i class="fa-solid fa-arrow-right-long"></i></a>
      </div>
      <div class="insights-grid">
        <a href="404.html" class="insight-card card-button gsap-stagger-insight">
          <div class="insight-img"><img src="assets/insights.webp" alt="Insights" class="scale-img"></div>
          <div class="insight-content">
            <div class="tag">RESEARCH</div>
            <h4>The Future of Logistics</h4>
          </div>
        </a>
        <a href="404.html" class="insight-card card-button gsap-stagger-insight">
          <div class="insight-img"><img src="assets/case2.webp" alt="Insights" class="scale-img"></div>
          <div class="insight-content">
            <div class="tag">BRIEF</div>
            <h4>Margin Compression in 2027</h4>
          </div>
        </a>
      </div>
    </div>
  </section>

  <!-- 11. CTA -->
  <section class="cta">
    <div class="orb orb-pink"></div>
    <div class="container" style="display: flex; flex-direction: column; align-items: flex-start;">
      <div class="tag tag-light gsap-fade"><i class="fa-solid fa-circle text-gold" style="font-size: 6px;"></i> ENGAGE</div>
      <h2 class="gsap-fade">Position your firm for the next macroeconomic landscape.</h2>
      <div class="cta-actions gsap-fade">
        <button class="btn-gold">INITIATE DISCUSSION <i class="fa-solid fa-arrow-right-long"></i></button>
      </div>
    </div>
  </section>

  <!-- 12. Footer -->
  {footer}

  <script src="https://unpkg.com/@studio-freight/lenis@1.0.39/dist/lenis.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
  <script src="https://unpkg.com/split-type"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.globe.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.fog.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.topology.min.js"></script>
  <script src="script.js"></script>
</body>
</html>
'''

pages = [
    {
        "file": "services.html",
        "title": "Services",
        "vanta_id": "vanta-bg-waves",
        "subtitle": "CORE OFFERINGS",
        "hero_title": "Rethinking limits of <span class=\"text-gold text-italic\">performance.</span>",
        "hero_desc": "We build operational resilience for high-volatility environments.",
        "grid_title": "Six practices, one team.",
        "grid_desc": "Architecting solutions designed to perform under stress."
    },
    {
        "file": "industries.html",
        "title": "Industries",
        "vanta_id": "vanta-bg-fog",
        "subtitle": "SECTOR EXPERTISE",
        "hero_title": "Navigating complex <span class=\"text-gold text-italic\">markets.</span>",
        "hero_desc": "Deep industry knowledge that shortens the diagnostic process.",
        "grid_title": "Where we operate.",
        "grid_desc": "From financial services to heavy manufacturing."
    },
    {
        "file": "about.html",
        "title": "About",
        "vanta_id": "vanta-bg-net",
        "subtitle": "OUR FIRM",
        "hero_title": "A direct approach to <span class=\"text-gold text-italic\">results.</span>",
        "hero_desc": "We don't just deliver blueprints. We deliver outcomes.",
        "grid_title": "Built on evidence.",
        "grid_desc": "Rigor in every analysis, perfection in execution."
    },
    {
        "file": "case-studies.html",
        "title": "Case Studies",
        "vanta_id": "vanta-bg-globe",
        "subtitle": "PROVEN IMPACT",
        "hero_title": "Results our clients can <span class=\"text-gold text-italic\">point at.</span>",
        "hero_desc": "Real-world execution tracking and value capture.",
        "grid_title": "Generating enterprise value.",
        "grid_desc": "Case studies from the front lines of global business."
    },
    {
        "file": "blogs.html",
        "title": "Blogs & Insights",
        "vanta_id": "vanta-bg-topology",
        "subtitle": "PERSPECTIVES",
        "hero_title": "Thinking that shapes <span class=\"text-gold text-italic\">markets.</span>",
        "hero_desc": "Research, whitepapers, and executive briefs from our partners.",
        "grid_title": "Latest Intelligence.",
        "grid_desc": "Stay ahead of macroeconomic and structural shifts."
    }
]

for p in pages:
    content = template.format(
        header=header,
        footer=footer,
        title=p["title"],
        vanta_id=p["vanta_id"],
        subtitle=p["subtitle"],
        hero_title=p["hero_title"],
        hero_desc=p["hero_desc"],
        grid_title=p["grid_title"],
        grid_desc=p["grid_desc"]
    )
    with open(p["file"], "w", encoding="utf-8") as out:
        out.write(content)

print("Generated all 5 pages successfully.")
