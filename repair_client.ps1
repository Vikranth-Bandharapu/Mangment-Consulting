$lines = Get-Content "dashboard_client.html" -Raw
$idx = $lines.IndexOf('DevOps Team - Yesterday</p>')
if ($idx -ne -1) {
    # Find the next <div style="position: relative;"> after idx
    $cut_point = $lines.IndexOf('<div style="position: relative;">', $idx)
    if ($cut_point -ne -1) {
        $lines = $lines.Substring(0, $cut_point)
    }
}

$rest_of_file = @"
                <div style="position: relative;">
                    <div style="position: absolute; left: -1.9rem; top: 0; width: 12px; height: 12px; border-radius: 50%; background: rgba(255,255,255,0.2);"></div>
                    <h4 style="margin: 0 0 0.25rem 0; font-size: 0.95rem;">Kickoff Meeting</h4>
                    <p style="color: var(--color-text-muted); font-size: 0.8rem; margin: 0;">Oct 1st, 2026</p>
                </div>
            </div>
        </div>
      </section>

      <!-- 3. FINANCIALS -->
      <section id="financials" class="section-content">
        <div class="section-header" style="margin-bottom: 1.5rem;">
          <h1 style="font-size: 2rem;">Financials</h1>
          <p style="font-size: 0.95rem;">Detailed overview and metrics for Financials.</p>
        </div>
        
        <div class="dash-grid" style="grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-bottom: 2rem;">
            <div class="dash-card" style="padding: 1.5rem; border-top: 4px solid var(--color-gold);">
                <h3 style="color: var(--color-text-muted); font-size: 0.85rem; text-transform: uppercase;">Total Billed (YTD)</h3>
                <div class="card-value" style="font-size: 2.2rem; margin: 0.5rem 0;">`$4.2M</div>
                <p style="color: var(--color-emerald); font-size: 0.8rem; font-weight: bold;"><i class="fa-solid fa-arrow-trend-up"></i> +8.4% vs last year</p>
            </div>
            <div class="dash-card" style="padding: 1.5rem; border-top: 4px solid #ef4444;">
                <h3 style="color: var(--color-text-muted); font-size: 0.85rem; text-transform: uppercase;">Outstanding Invoices</h3>
                <div class="card-value" style="font-size: 2.2rem; margin: 0.5rem 0;">`$850K</div>
                <p style="color: #ef4444; font-size: 0.8rem; font-weight: bold;"><i class="fa-solid fa-circle-exclamation"></i> 2 invoices overdue</p>
            </div>
            <div class="dash-card" style="padding: 1.5rem; border-top: 4px solid #10b981;">
                <h3 style="color: var(--color-text-muted); font-size: 0.85rem; text-transform: uppercase;">Projected Q4 Spend</h3>
                <div class="card-value" style="font-size: 2.2rem; margin: 0.5rem 0;">`$1.1M</div>
                <p style="color: var(--color-text-muted); font-size: 0.8rem;">Aligned with budget forecasts</p>
            </div>
        </div>

        <div class="dash-card" style="margin-bottom: 2rem;">
            <h3 style="margin: 0 0 1.5rem 0; font-family: var(--font-serif); font-size: 1.3rem;">Recent Invoices</h3>
            <table class="data-table" style="margin: 0; width: 100%;">
                <thead>
                    <tr>
                        <th style="padding: 1rem;">Invoice #</th>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 1rem; font-weight: bold; color: var(--color-gold);">INV-2026-089</td>
                        <td>Oct 15, 2026</td>
                        <td>Phase 2 Consulting Retainer</td>
                        <td style="font-weight: bold;">`$125,000</td>
                        <td><span style="padding: 0.2rem 0.6rem; border-radius: 12px; font-size: 0.75rem; background: rgba(245,158,11,0.2); color: #f59e0b;">Pending</span></td>
                        <td><button class="btn-outline" style="padding: 0.3rem 0.6rem; font-size: 0.75rem;" onclick="window.location.href='404.html'">Pay Now</button></td>
                    </tr>
                    <tr>
                        <td style="padding: 1rem; font-weight: bold; color: var(--color-gold);">INV-2026-074</td>
                        <td>Sep 01, 2026</td>
                        <td>Data Center Architecture Review</td>
                        <td style="font-weight: bold;">`$85,000</td>
                        <td><span style="padding: 0.2rem 0.6rem; border-radius: 12px; font-size: 0.75rem; background: rgba(16,185,129,0.2); color: #10b981;">Paid</span></td>
                        <td><a href="404.html" style="color: var(--color-gold); font-size: 0.85rem; text-decoration: none;">Receipt</a></td>
                    </tr>
                    <tr>
                        <td style="padding: 1rem; font-weight: bold; color: var(--color-gold);">INV-2026-062</td>
                        <td>Aug 15, 2026</td>
                        <td>Security Compliance Audit</td>
                        <td style="font-weight: bold;">`$45,000</td>
                        <td><span style="padding: 0.2rem 0.6rem; border-radius: 12px; font-size: 0.75rem; background: rgba(16,185,129,0.2); color: #10b981;">Paid</span></td>
                        <td><a href="404.html" style="color: var(--color-gold); font-size: 0.85rem; text-decoration: none;">Receipt</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
      </section>

      <!-- 4. ANALYTICS -->
      <section id="analytics" class="section-content">
        <div class="section-header" style="margin-bottom: 1.5rem;">
          <h1 style="font-size: 2rem;">Analytics</h1>
          <p style="font-size: 0.95rem;">Detailed overview and metrics for Analytics.</p>
        </div>
        
        <div class="dash-grid" style="grid-template-columns: 2fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
            <div class="dash-card">
                <h3 style="margin: 0 0 1.5rem 0; font-family: var(--font-serif); font-size: 1.3rem;">Operational Efficiency Trend</h3>
                <div style="height: 250px; background: rgba(0,0,0,0.3); border-radius: 8px; display: flex; align-items: flex-end; justify-content: space-between; padding: 1rem; position: relative;">
                    <!-- Mock line chart SVG -->
                    <svg viewBox="0 0 100 40" style="position: absolute; top:0; left:0; width:100%; height:100%; padding: 1rem; overflow: visible;">
                        <polyline fill="none" stroke="var(--color-gold)" stroke-width="2" points="0,35 20,25 40,30 60,15 80,20 100,5" stroke-linejoin="round" stroke-linecap="round"/>
                        <circle cx="0" cy="35" r="1.5" fill="var(--color-gold)"/>
                        <circle cx="20" cy="25" r="1.5" fill="var(--color-gold)"/>
                        <circle cx="40" cy="30" r="1.5" fill="var(--color-gold)"/>
                        <circle cx="60" cy="15" r="1.5" fill="var(--color-gold)"/>
                        <circle cx="80" cy="20" r="1.5" fill="var(--color-gold)"/>
                        <circle cx="100" cy="5" r="1.5" fill="var(--color-gold)"/>
                    </svg>
                    <div style="width: 10%; height: 100%; border-right: 1px dashed rgba(255,255,255,0.1);"></div>
                    <div style="width: 10%; height: 100%; border-right: 1px dashed rgba(255,255,255,0.1);"></div>
                    <div style="width: 10%; height: 100%; border-right: 1px dashed rgba(255,255,255,0.1);"></div>
                    <div style="width: 10%; height: 100%; border-right: 1px dashed rgba(255,255,255,0.1);"></div>
                    <div style="width: 10%; height: 100%; border-right: 1px dashed rgba(255,255,255,0.1);"></div>
                </div>
            </div>
            
            <div class="dash-card">
                <h3 style="margin: 0 0 1.5rem 0; font-family: var(--font-serif); font-size: 1.3rem;">Key Drivers</h3>
                <div style="display: flex; flex-direction: column; gap: 1.2rem;">
                    <div>
                        <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 0.25rem;">
                            <span>Automation Workflows</span>
                            <span style="color: var(--color-emerald); font-weight: bold;">45% Impact</span>
                        </div>
                        <div style="width: 100%; height: 6px; background: rgba(255,255,255,0.1); border-radius: 3px;">
                            <div style="width: 45%; height: 100%; background: var(--color-emerald); border-radius: 3px;"></div>
                        </div>
                    </div>
                    <div>
                        <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 0.25rem;">
                            <span>Cloud Consolidation</span>
                            <span style="color: var(--color-gold); font-weight: bold;">32% Impact</span>
                        </div>
                        <div style="width: 100%; height: 6px; background: rgba(255,255,255,0.1); border-radius: 3px;">
                            <div style="width: 32%; height: 100%; background: var(--color-gold); border-radius: 3px;"></div>
                        </div>
                    </div>
                    <div>
                        <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 0.25rem;">
                            <span>Process Re-engineering</span>
                            <span style="color: #3b82f6; font-weight: bold;">23% Impact</span>
                        </div>
                        <div style="width: 100%; height: 6px; background: rgba(255,255,255,0.1); border-radius: 3px;">
                            <div style="width: 23%; height: 100%; background: #3b82f6; border-radius: 3px;"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <!-- 5. MARKET INTEL -->
      <section id="market" class="section-content">
        <div class="section-header" style="margin-bottom: 1.5rem;">
          <h1 style="font-size: 2rem;">Market Intel</h1>
          <p style="font-size: 0.95rem;">Detailed overview and metrics for Market Intel.</p>
        </div>
        
        <div class="dash-grid" style="grid-template-columns: 1fr 1fr; gap: 1.5rem;">
            <div class="dash-card" style="padding: 0; overflow: hidden; display: flex; flex-direction: column;">
                <div style="height: 180px; background-image: url('stackly_boardroom_outcomes_1786436446072.jpg'); background-size: cover; background-position: center;"></div>
                <div style="padding: 1.5rem;">
                    <span style="font-size: 0.75rem; color: var(--color-gold); text-transform: uppercase; font-weight: bold; letter-spacing: 1px;">Q4 Strategy Report</span>
                    <h3 style="margin: 0.5rem 0; font-family: var(--font-serif); font-size: 1.3rem;">Competitor M&A Landscape</h3>
                    <p style="color: var(--color-text-muted); font-size: 0.9rem; margin-bottom: 1rem; line-height: 1.5;">An analysis of recent consolidation in the enterprise SaaS sector, highlighting potential threat vectors and acquisition targets.</p>
                    <a href="404.html" style="color: var(--color-gold); font-size: 0.9rem; text-decoration: none; font-weight: bold;"><i class="fa-solid fa-file-pdf"></i> Download Full Report (3.2 MB)</a>
                </div>
            </div>
            
            <div class="dash-card" style="padding: 0; overflow: hidden; display: flex; flex-direction: column;">
                <div style="height: 180px; background-image: url('case_study_2_1786437200403.jpg'); background-size: cover; background-position: center;"></div>
                <div style="padding: 1.5rem;">
                    <span style="font-size: 0.75rem; color: var(--color-gold); text-transform: uppercase; font-weight: bold; letter-spacing: 1px;">Macro Trends</span>
                    <h3 style="margin: 0.5rem 0; font-family: var(--font-serif); font-size: 1.3rem;">Regulatory Shifts in EMEA</h3>
                    <p style="color: var(--color-text-muted); font-size: 0.9rem; margin-bottom: 1rem; line-height: 1.5;">Upcoming data privacy mandates scheduled for Q1 2027 and their projected impact on cross-border data flows.</p>
                    <a href="404.html" style="color: var(--color-gold); font-size: 0.9rem; text-decoration: none; font-weight: bold;"><i class="fa-solid fa-file-pdf"></i> Download Briefing (1.8 MB)</a>
                </div>
            </div>
        </div>
      </section>

    </main>

  <script>
    // Tab switching logic
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.section-content');

    navItems.forEach(item => {
      item.addEventListener('click', () => {
        // Remove active from all nav items
        navItems.forEach(n => n.classList.remove('active'));
        // Add active to clicked
        item.classList.add('active');

        // Hide all sections
        sections.forEach(s => s.classList.remove('active'));
        // Show target section
        const targetId = item.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');
          document.querySelector('.sidebar').classList.remove('active'); // Close sidebar on mobile
      });
    });

    // Populate email from localStorage if available
    const savedEmail = localStorage.getItem('registeredEmail');
    if (savedEmail) {
      const emailDisplay = document.getElementById('userEmailDisplay');
      if (emailDisplay) emailDisplay.textContent = savedEmail;
    }

    // Custom Cursor Logic
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    if (cursorDot && cursorOutline) {
      window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
        gsap.to(cursorOutline, {
          x: posX,
          y: posY,
          duration: 0.15,
          ease: 'power2.out'
        });
      });
      const clickables = document.querySelectorAll('a, button, .nav-item, input');
      clickables.forEach(el => {
        el.addEventListener('mouseenter', () => cursorOutline.classList.add('hovering'));
        el.addEventListener('mouseleave', () => cursorOutline.classList.remove('hovering'));
      });
    }
  </script>
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const loggedInEmail = localStorage.getItem('loggedInEmail');
      if (!loggedInEmail) {
        window.location.href = 'login.html';
      } else {
        const emailDisplay = document.getElementById('userEmailDisplay');
        if (emailDisplay) {
          emailDisplay.innerText = loggedInEmail;
        }
      }
    });
  </script>
</body>
</html>
"@

Set-Content "dashboard_client.html" -Value ($lines + $rest_of_file)
