document.addEventListener('DOMContentLoaded', () => {
  // Register GSAP Plugins
  gsap.registerPlugin(ScrollTrigger);

  /* --- 1. Custom Cursor --- */
  const cursorDot = document.querySelector('.cursor-dot');
  const cursorOutline = document.querySelector('.cursor-outline');
  
  if(cursorDot && cursorOutline) {
    window.addEventListener('mousemove', (e) => {
      const posX = e.clientX;
      const posY = e.clientY;
      
      // Fast dot
      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;
      
      // Slower outline (GSAP makes it smooth)
      gsap.to(cursorOutline, {
        x: posX,
        y: posY,
        duration: 0.15,
        ease: 'power2.out'
      });
    });

    // Hover state for interactive elements
    const interactives = document.querySelectorAll('a, button, .card-button, .btn-primary, .btn-gold, .btn-outline');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursorOutline.classList.add('hovering');
      });
      el.addEventListener('mouseleave', () => {
        cursorOutline.classList.remove('hovering');
      });
    });
  }

  /* --- 2. Vanta WebGL Backgrounds --- */
  if (window.VANTA) {
    if (document.getElementById('vanta-bg')) {
      window.VANTA.NET({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xc8a97e,
        backgroundColor: 0x0b132b,
        points: 12.00,
        maxDistance: 22.00,
        spacing: 18.00
      });
    }
    
    document.querySelectorAll('.capabilities').forEach(el => {
      window.VANTA.WAVES({
        el: el,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x111c3a,
        shininess: 45.00,
        waveHeight: 15.00,
        waveSpeed: 0.50,
        zoom: 1.00
      });
    });

    document.querySelectorAll('.industries').forEach(el => {
      window.VANTA.WAVES({
        el: el,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x111c3a,
        shininess: 40.00,
        waveHeight: 15.00,
        waveSpeed: 0.70,
        zoom: 0.90
      });
    });
    
    document.querySelectorAll('.testimonials').forEach(el => {
      window.VANTA.GLOBE({
        el: el,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xc8a97e,
        color2: 0x10b981,
        backgroundColor: 0x0b132b,
        size: 0.8
      });
    });
    
    document.querySelectorAll('.footprint').forEach(el => {
      window.VANTA.FOG({
        el: el,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: 0xc8a97e,
        midtoneColor: 0x10b981,
        lowlightColor: 0x111c3a,
        baseColor: 0x0b132b,
        blurFactor: 0.60,
        speed: 1.50,
        zoom: 1.20
      });
    });

    document.querySelectorAll('.topology').forEach(el => {
      window.VANTA.TOPOLOGY({
        el: el,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xc8a97e,
        backgroundColor: 0x0b132b
      });
    });
  }

  /* --- 3. SplitType Cinematic Text Reveals --- */
  const splitElements = document.querySelectorAll('.split-text');
  if (typeof SplitType !== 'undefined') {
    splitElements.forEach(el => {
      const split = new SplitType(el, { types: 'lines, words, chars' });
      el.style.visibility = 'visible';
      
      const animConfig = {
        y: 40,
        opacity: 0,
        rotationX: -90,
        stagger: 0.02,
        duration: 0.8,
        ease: 'back.out(1.7)'
      };

      if (el.classList.contains('gsap-hero')) {
        // Play immediately for hero
        gsap.from(split.chars, animConfig);
      } else {
        // Play on scroll for others
        animConfig.scrollTrigger = {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        };
        gsap.from(split.chars, animConfig);
      }
    });
  } else {
    // Fallback if SplitType fails to load
    splitElements.forEach(el => {
      el.style.visibility = 'visible';
    });
  }

  /* --- 4. Hero Animations --- */
  const heroTl = gsap.timeline();
  
  heroTl.from('.gsap-hero:not(.split-text)', {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out'
  }, "+=0.5")
  .from('.gsap-hero-img', {
    scale: 0.9,
    opacity: 0,
    duration: 1.5,
    ease: 'power2.out'
  }, "-=0.8");

  // Parallax effect for hero image
  gsap.to('.hero-image-parallax', {
    yPercent: 20,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  });

  /* --- 5. Generic Fade Ups --- */
  gsap.utils.toArray('.gsap-fade').forEach(el => {
    gsap.from(el, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  /* --- 6. Staggered Grids --- */
  const staggerClasses = [
    { container: '.cap-grid', selector: '.gsap-stagger' },
    { container: '.outcomes-grid', selector: '.gsap-stagger-outcome' },
    { container: '.ind-grid', selector: '.gsap-stagger-ind' },
    { container: '.test-grid', selector: '.gsap-stagger-test' },
    { container: '.leader-grid', selector: '.gsap-stagger-leader' },
    { container: '.footprint-grid', selector: '.gsap-stagger-foot' },
    { container: '.insights-grid', selector: '.gsap-stagger-insight' },
    { container: '.careers-content', selector: '.gsap-stagger-career' },
    { container: '.case-grid', selector: '.gsap-stagger-case' }
  ];

  staggerClasses.forEach(item => {
    const containers = document.querySelectorAll(item.container);
    containers.forEach(container => {
      const elements = container.querySelectorAll(item.selector);
      if (elements.length > 0) {
        gsap.fromTo(elements, {
          y: 60,
          opacity: 0
        }, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        });
      }
    });
  });

  /* --- 7. Horizontal Scroll (Case Studies) --- */
  let horizontalSection = document.querySelector('.horizontal-scroll-container');
  if (horizontalSection) {
    let mm = gsap.matchMedia();
    mm.add("(min-width: 900px)", () => {
      // Calculate how far to scroll
      function getScrollAmount() {
        let containerWidth = horizontalSection.scrollWidth;
        return -(containerWidth - window.innerWidth + 200); // 200px buffer
      }

      const tween = gsap.to(horizontalSection, {
        x: getScrollAmount,
        ease: "none"
      });

      ScrollTrigger.create({
        trigger: ".case-studies",
        start: "top 10%",
        end: () => `+=${getScrollAmount() * -1}`,
        pin: true,
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true
      });
    });
  }

  /* --- 8. Philosophy Pinning --- */
  let mmPin = gsap.matchMedia();
  mmPin.add("(min-width: 900px)", () => {
    ScrollTrigger.create({
      trigger: '.philosophy-container',
      start: 'top 20%',
      end: 'bottom bottom',
      pin: '.philosophy-left',
      pinSpacing: false
    });
  });

  gsap.utils.toArray('.gsap-phil-item').forEach(item => {
    gsap.from(item, {
      x: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: item,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  /* --- 9. Number Counters --- */
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    
    ScrollTrigger.create({
      trigger: counter,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(counter, {
          innerHTML: target,
          duration: 2,
          ease: 'power2.out',
          snap: { innerHTML: 1 },
          onUpdate: function() {
            counter.innerHTML = Math.round(this.targets()[0].innerHTML);
          }
        });
      }
    });
  });

  /* --- 10. Slide Left & Footer --- */
  gsap.utils.toArray('.gsap-slide-left').forEach(el => {
    gsap.fromTo(el, 
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  });

  gsap.from('.gsap-footer', {
    y: 30,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: 'footer',
      start: 'top 95%',
      toggleActions: 'play none none reverse'
    }
  });
});



