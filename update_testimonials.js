const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const startTag = '<section class="testimonials"';
const start = html.indexOf(startTag);
const end = html.indexOf('</section>', start) + 10;

const oldTestimonials = html.substring(start, end);

const newTestimonials = `
<section class="testimonials" style="position: relative; overflow: hidden; padding: 6rem 0;">
    <style>
        .testimonial-slider-container {
            position: relative;
            max-width: 900px;
            margin: 3rem auto 0 auto;
            overflow: hidden;
        }
        .testimonial-track {
            display: flex;
            transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .testimonial-slide {
            min-width: 100%;
            display: flex;
            align-items: center;
            gap: 3rem;
            padding: 2rem;
            box-sizing: border-box;
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 16px;
        }
        .testimonial-img-wrapper {
            flex-shrink: 0;
            width: 220px;
            height: 220px;
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid rgba(255,255,255,0.1);
        }
        .testimonial-img-wrapper img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .testimonial-content {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .testimonial-stars {
            color: var(--color-gold);
            font-size: 1.1rem;
            margin-bottom: 1.2rem;
            letter-spacing: 2px;
        }
        .testimonial-quote {
            font-size: 1.2rem;
            line-height: 1.6;
            font-family: var(--font-serif);
            margin-bottom: 1.5rem;
            color: var(--color-white);
            font-style: italic;
        }
        .testimonial-author-name {
            font-weight: bold;
            font-size: 1rem;
            color: var(--color-white);
            margin-bottom: 0.2rem;
        }
        .testimonial-author-title {
            font-size: 0.85rem;
            color: var(--color-text-muted);
        }
        .testimonial-dots {
            display: flex;
            justify-content: center;
            gap: 0.8rem;
            margin-top: 2.5rem;
        }
        .test-dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: rgba(255,255,255,0.2);
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .test-dot.active {
            background: var(--color-gold);
            transform: scale(1.2);
        }
        @media (max-width: 768px) {
            .testimonial-slide {
                flex-direction: column;
                text-align: center;
                padding: 1.5rem;
                gap: 1.5rem;
            }
            .testimonial-img-wrapper {
                width: 160px;
                height: 160px;
            }
        }
    </style>
    <div class="container" style="position: relative; z-index: 1;">
      <div class="tag gsap-fade"><i class="fa-solid fa-circle text-gold" style="font-size: 6px;"></i> CLIENT VOICES</div>
      <h2 class="gsap-fade">What it is like to work with us</h2>
      
      <div class="testimonial-slider-container">
          <div class="testimonial-track" id="testTrack">
              
              <!-- Slide 1 -->
              <div class="testimonial-slide">
                  <div class="testimonial-img-wrapper">
                      <img src="assets/leader1.webp" alt="Client 1">
                  </div>
                  <div class="testimonial-content">
                      <div class="testimonial-stars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                      <div class="testimonial-quote">"Their researchers found us a VP of Engineering in five weeks after two agencies failed for six months. They actually understand what we needed, not just the job title."</div>
                      <div class="testimonial-author-name">Priya Sharma</div>
                      <div class="testimonial-author-title">Founder, TechEdge Solutions</div>
                  </div>
              </div>

              <!-- Slide 2 -->
              <div class="testimonial-slide">
                  <div class="testimonial-img-wrapper">
                      <img src="assets/leader2.webp" alt="Client 2">
                  </div>
                  <div class="testimonial-content">
                      <div class="testimonial-stars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                      <div class="testimonial-quote">"Relentless rebuilt our entire onboarding experience in six weeks. New hires now hit their first milestone twice as fast, and our managers finally trust the process."</div>
                      <div class="testimonial-author-name">Sarah Kline</div>
                      <div class="testimonial-author-title">CEO, Arcadia Health</div>
                  </div>
              </div>

              <!-- Slide 3 -->
              <div class="testimonial-slide">
                  <div class="testimonial-img-wrapper">
                      <img src="assets/leader3.webp" alt="Client 3">
                  </div>
                  <div class="testimonial-content">
                      <div class="testimonial-stars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                      <div class="testimonial-quote">"Stackly refused to hand us a deck and leave. They sat with our plant managers until the plan worked on the floor. The value tracker was the difference."</div>
                      <div class="testimonial-author-name">Tom Bassey</div>
                      <div class="testimonial-author-title">CFO, Meridian Bank</div>
                  </div>
              </div>

          </div>
          
          <div class="testimonial-dots">
              <div class="test-dot active" onclick="goToSlide(0)"></div>
              <div class="test-dot" onclick="goToSlide(1)"></div>
              <div class="test-dot" onclick="goToSlide(2)"></div>
          </div>
      </div>
    </div>
    
    <script>
        let currentSlide = 0;
        const track = document.getElementById('testTrack');
        const dots = document.querySelectorAll('.test-dot');
        
        function goToSlide(index) {
            currentSlide = index;
            track.style.transform = \`translateX(-\${currentSlide * 100}%)\`;
            
            dots.forEach((dot, i) => {
                if (i === currentSlide) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }
        
        // Auto play
        setInterval(() => {
            let nextSlide = (currentSlide + 1) % 3;
            goToSlide(nextSlide);
        }, 6000);
    </script>
</section>`;

html = html.replace(oldTestimonials, newTestimonials);
fs.writeFileSync('index.html', html, 'utf8');
console.log('Updated testimonials!');
