$lines = Get-Content "dashboard_admin.html" -Raw
$idx = $lines.IndexOf('<span>Storage (S3/RDS)</span><span>$15,100</span></div>')
if ($idx -ne -1) {
    $cut_point = $lines.IndexOf("`n", $idx)
    $lines = $lines.Substring(0, $cut_point + 1)
}

$rest_of_file = @"
                <div style="display: flex; justify-content: space-between; font-size: 0.85rem;"><span>Bandwidth & Edge</span><span>`$7,600</span></div>
            </div>
            <div class="dash-card" style="padding: 1.5rem;">
                <h3 style="margin: 0 0 1rem 0; font-size: 1.1rem;"><i class="fa-solid fa-chart-line"></i> Q4 Revenue Forecast</h3>
                <div style="height: 120px; background: rgba(0,0,0,0.3); border-radius: 8px; display: flex; align-items: flex-end; justify-content: space-around; padding: 1rem;">
                    <div style="width: 15%; height: 60%; background: var(--color-text-muted); border-radius: 4px 4px 0 0;"></div>
                    <div style="width: 15%; height: 75%; background: var(--color-text-muted); border-radius: 4px 4px 0 0;"></div>
                    <div style="width: 15%; height: 95%; background: var(--color-emerald); border-radius: 4px 4px 0 0;"></div>
                    <div style="width: 15%; height: 85%; background: rgba(16,185,129,0.3); border-radius: 4px 4px 0 0; border: 1px dashed var(--color-emerald);"></div>
                </div>
            </div>
        </div>
        
        <!-- Additional Revenue Metrics -->
        <div class="dash-card" style="margin-top: 2rem;">
            <h3 style="margin: 0 0 1.5rem 0; font-size: 1.2rem;">Recent High-Value Collections</h3>
            <table style="width: 100%; border-collapse: collapse; text-align: left;">
                <thead>
                    <tr style="border-bottom: 1px solid rgba(255,255,255,0.1); color: var(--color-text-muted); font-size: 0.85rem;">
                        <th style="padding: 1rem 0; font-weight: normal;">Client</th>
                        <th style="padding: 1rem 0; font-weight: normal;">Invoice ID</th>
                        <th style="padding: 1rem 0; font-weight: normal;">Amount</th>
                        <th style="padding: 1rem 0; font-weight: normal;">Status</th>
                    </tr>
                </thead>
                <tbody style="font-size: 0.95rem;">
                    <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                        <td style="padding: 1rem 0; font-weight: bold;">Omega Corp</td>
                        <td style="padding: 1rem 0; color: var(--color-text-muted);">INV-1092</td>
                        <td style="padding: 1rem 0; font-weight: bold; color: var(--color-gold);">`$145,000</td>
                        <td style="padding: 1rem 0;"><span style="padding: 0.2rem 0.6rem; border-radius: 12px; font-size: 0.75rem; background: rgba(16,185,129,0.2); color: #10b981;">Cleared</span></td>
                    </tr>
                    <tr>
                        <td style="padding: 1rem 0; font-weight: bold;">Stark Industries</td>
                        <td style="padding: 1rem 0; color: var(--color-text-muted);">INV-1093</td>
                        <td style="padding: 1rem 0; font-weight: bold; color: var(--color-gold);">`$320,000</td>
                        <td style="padding: 1rem 0;"><span style="padding: 0.2rem 0.6rem; border-radius: 12px; font-size: 0.75rem; background: rgba(245,158,11,0.2); color: #f59e0b;">Pending</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
      </section>

      <!-- 4. UTILIZATION -->
      <section id="utilization" class="section-content">
        <div class="section-header" style="margin-bottom: 1.5rem;">
          <h1 style="font-size: 2rem;">Utilization</h1>
          <p style="font-size: 0.95rem;">Detailed overview and metrics for Utilization.</p>
        </div>
        
        <!-- Block 1: Utilization Dials -->
        <div class="dash-grid" style="grid-template-columns: repeat(4, 1fr); margin-bottom: 2rem; gap: 1rem;">
            <div class="dash-card" style="text-align: center; padding: 1.5rem;">
                <h3 style="color: var(--color-text-muted); font-size: 0.85rem; text-transform: uppercase;">Compute Nodes</h3>
                <div style="position: relative; width: 70px; height: 70px; margin: 1rem auto;">
                    <svg viewBox="0 0 36 36" style="width:100%; height:100%;">
                        <path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="3"></path>
                        <path class="circle" stroke-dasharray="85, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="var(--color-emerald)" stroke-width="3"></path>
                    </svg>
                    <div style="position: absolute; top:50%; left:50%; transform:translate(-50%,-50%); font-weight:bold; font-size:1rem;">85%</div>
                </div>
            </div>
            <div class="dash-card" style="text-align: center; padding: 1.5rem;">
                <h3 style="color: var(--color-text-muted); font-size: 0.85rem; text-transform: uppercase;">Storage I/O</h3>
                <div style="position: relative; width: 70px; height: 70px; margin: 1rem auto;">
                    <svg viewBox="0 0 36 36" style="width:100%; height:100%;">
                        <path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="3"></path>
                        <path class="circle" stroke-dasharray="45, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#6366f1" stroke-width="3"></path>
                    </svg>
                    <div style="position: absolute; top:50%; left:50%; transform:translate(-50%,-50%); font-weight:bold; font-size:1rem;">45%</div>
                </div>
            </div>
            <div class="dash-card" style="text-align: center; padding: 1.5rem;">
                <h3 style="color: var(--color-text-muted); font-size: 0.85rem; text-transform: uppercase;">Network Bandwidth</h3>
                <div style="position: relative; width: 70px; height: 70px; margin: 1rem auto;">
                    <svg viewBox="0 0 36 36" style="width:100%; height:100%;">
                        <path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="3"></path>
                        <path class="circle" stroke-dasharray="92, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#ef4444" stroke-width="3"></path>
                    </svg>
                    <div style="position: absolute; top:50%; left:50%; transform:translate(-50%,-50%); font-weight:bold; font-size:1rem;">92%</div>
                </div>
            </div>
            <div class="dash-card" style="text-align: center; padding: 1.5rem;">
                <h3 style="color: var(--color-text-muted); font-size: 0.85rem; text-transform: uppercase;">Consultant Bench</h3>
                <div style="position: relative; width: 70px; height: 70px; margin: 1rem auto;">
                    <svg viewBox="0 0 36 36" style="width:100%; height:100%;">
                        <path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="3"></path>
                        <path class="circle" stroke-dasharray="10, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#f97316" stroke-width="3"></path>
                    </svg>
                    <div style="position: absolute; top:50%; left:50%; transform:translate(-50%,-50%); font-weight:bold; font-size:1rem;">10%</div>
                </div>
            </div>
        </div>

        <!-- Block 2: Topography -->
        <div class="dash-card" style="height: 250px; display: flex; flex-direction: column; margin-bottom: 2rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                <h3 style="margin: 0; font-size: 1.1rem;">Live Network Topography</h3>
                <span style="font-size: 0.75rem; color: var(--color-emerald);"><i class="fa-solid fa-circle"></i> Live</span>
            </div>
            <div style="flex: 1; background: rgba(0,0,0,0.5); border-radius: 8px; border: 1px solid rgba(255,255,255,0.05); display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden;">
                <!-- Abstract lines to represent topography -->
                <div style="position: absolute; width: 100%; height: 100%; background-image: repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(16,185,129,0.05) 40px, rgba(16,185,129,0.05) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(16,185,129,0.05) 40px, rgba(16,185,129,0.05) 41px);"></div>
                <i class="fa-solid fa-network-wired" style="font-size: 4rem; color: var(--color-emerald); opacity: 0.3;"></i>
            </div>
        </div>

        <!-- Block 3: API & Services -->
        <div class="dash-grid" style="grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
            <div class="dash-card" style="padding: 1.5rem;">
                <h3 style="margin: 0 0 1rem 0; font-size: 1.1rem;"><i class="fa-solid fa-code"></i> API Endpoints Latency</h3>
                <table style="width: 100%; font-size: 0.85rem;">
                    <tr><td style="padding: 0.5rem 0; border-bottom: 1px solid rgba(255,255,255,0.05);">/v1/auth</td><td style="text-align: right; color: var(--color-emerald);">42ms</td></tr>
                    <tr><td style="padding: 0.5rem 0; border-bottom: 1px solid rgba(255,255,255,0.05);">/v2/analytics/query</td><td style="text-align: right; color: #f97316;">310ms</td></tr>
                    <tr><td style="padding: 0.5rem 0;">/v1/billing/invoice</td><td style="text-align: right; color: var(--color-emerald);">89ms</td></tr>
                </table>
            </div>
            <div class="dash-card" style="padding: 1.5rem;">
                <h3 style="margin: 0 0 1rem 0; font-size: 1.1rem;"><i class="fa-solid fa-microchip"></i> Microservices Status</h3>
                <table style="width: 100%; font-size: 0.85rem;">
                    <tr><td style="padding: 0.5rem 0; border-bottom: 1px solid rgba(255,255,255,0.05);">Auth-Service</td><td style="text-align: right; color: var(--color-emerald);">Healthy (9 instances)</td></tr>
                    <tr><td style="padding: 0.5rem 0; border-bottom: 1px solid rgba(255,255,255,0.05);">Data-Ingestion</td><td style="text-align: right; color: var(--color-emerald);">Healthy (14 instances)</td></tr>
                    <tr><td style="padding: 0.5rem 0;">PDF-Generator</td><td style="text-align: right; color: #ef4444;">Failing (Restarting)</td></tr>
                </table>
            </div>
        </div>

        <!-- Workload Distribution -->
        <div class="dash-card" style="margin-top: 2rem;">
            <h3 style="margin: 0 0 1.5rem 0; font-size: 1.2rem;">Cluster Workload Distribution</h3>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
                <div>
                    <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                        <span style="font-size: 0.9rem;">Cluster Alpha (US-East)</span>
                        <span style="font-size: 0.9rem; font-weight: bold; color: #ef4444;">92%</span>
                    </div>
                    <div style="width: 100%; height: 8px; background: rgba(255,255,255,0.1); border-radius: 4px;"><div style="width: 92%; height: 100%; background: #ef4444; border-radius: 4px;"></div></div>
                </div>
                <div>
                    <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                        <span style="font-size: 0.9rem;">Cluster Beta (EU-West)</span>
                        <span style="font-size: 0.9rem; font-weight: bold; color: #f59e0b;">74%</span>
                    </div>
                    <div style="width: 100%; height: 8px; background: rgba(255,255,255,0.1); border-radius: 4px;"><div style="width: 74%; height: 100%; background: #f59e0b; border-radius: 4px;"></div></div>
                </div>
                <div>
                    <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                        <span style="font-size: 0.9rem;">Cluster Gamma (AP-South)</span>
                        <span style="font-size: 0.9rem; font-weight: bold; color: #10b981;">41%</span>
                    </div>
                    <div style="width: 100%; height: 8px; background: rgba(255,255,255,0.1); border-radius: 4px;"><div style="width: 41%; height: 100%; background: #10b981; border-radius: 4px;"></div></div>
                </div>
            </div>
        </div>
      </section>

      <!-- 5. TALENT & RECRUITING -->
      <section id="talent" class="section-content">
        <div class="section-header" style="margin-bottom: 1.5rem;">
          <h1 style="font-size: 2rem;">Talent & Recruiting</h1>
          <p style="font-size: 0.95rem;">Detailed overview and metrics for Talent & Recruiting.</p>
        </div>
        
        <!-- Block 1: Recruiting Pipeline -->
        <div class="dash-card" style="padding: 0; margin-bottom: 2rem;">
            <div style="padding: 1.5rem; border-bottom: 1px solid rgba(255,255,255,0.05); display: flex; justify-content: space-between; align-items: center;">
                <h3 style="margin: 0; font-family: var(--font-serif); font-size: 1.2rem;">Candidate Pipeline</h3>
                <button onclick="window.location.href='404.html'" class="btn-primary" style="padding: 0.5rem 1rem; font-size: 0.85rem;"><i class="fa-solid fa-plus"></i> Post Requisition</button>
            </div>
            <div class="table-container">
                <table class="data-table" style="margin: 0; width: 100%;">
                    <thead>
                        <tr>
                            <th style="padding: 1rem;">Name</th>
                            <th>Role Applied</th>
                            <th>Stage</th>
                            <th>Fit Score</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding: 1rem; font-weight: bold;">Alice Freeman</td>
                            <td>Senior Strategy Analyst</td>
                            <td>Final Interview</td>
                            <td><span style="color: var(--color-emerald); font-weight: bold;">94%</span></td>
                            <td>
                                <button onclick="window.location.href='404.html'" class="btn-primary" style="padding: 0.2rem 0.5rem; font-size: 0.75rem; background: var(--color-emerald); border: none; margin-right: 0.5rem;">Offer</button>
                                <button onclick="window.location.href='404.html'" class="btn-outline" style="padding: 0.2rem 0.5rem; font-size: 0.75rem;">Reject</button>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 1rem; font-weight: bold;">John Doherty</td>
                            <td>Data Engineer L4</td>
                            <td>Technical Screen</td>
                            <td><span style="color: var(--color-gold); font-weight: bold;">82%</span></td>
                            <td>
                                <button onclick="window.location.href='404.html'" class="btn-primary" style="padding: 0.2rem 0.5rem; font-size: 0.75rem; margin-right: 0.5rem;">Advance</button>
                                <button onclick="window.location.href='404.html'" class="btn-outline" style="padding: 0.2rem 0.5rem; font-size: 0.75rem;">Reject</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Block 2: Internal Training -->
        <h3 style="font-family: var(--font-serif); font-size: 1.3rem; margin-bottom: 1rem;">Internal Training Modules</h3>
        <div class="dash-grid" style="grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
            <div class="dash-card" style="display: flex; gap: 1.5rem; align-items: center;">
                <div style="width: 70px; height: 70px; background: rgba(255,255,255,0.05); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                    <i class="fa-solid fa-shield-halved" style="font-size: 2rem; color: var(--color-emerald);"></i>
                </div>
                <div style="flex: 1;">
                    <h4 style="margin: 0 0 0.25rem 0;">Q4 Security Compliance</h4>
                    <p style="color: var(--color-text-muted); font-size: 0.8rem; margin: 0 0 0.5rem 0;">Mandatory for all active consultants.</p>
                    <div style="width: 100%; height: 4px; background: rgba(255,255,255,0.1); border-radius: 2px;">
                        <div style="width: 76%; height: 100%; background: var(--color-emerald); border-radius: 2px;"></div>
                    </div>
                    <p style="font-size: 0.75rem; color: var(--color-emerald); margin-top: 0.25rem;">76% Completion Rate</p>
                </div>
            </div>
            <div class="dash-card" style="display: flex; gap: 1.5rem; align-items: center;">
                <div style="width: 70px; height: 70px; background: rgba(255,255,255,0.05); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                    <i class="fa-solid fa-handshake" style="font-size: 2rem; color: #f97316;"></i>
                </div>
                <div style="flex: 1;">
                    <h4 style="margin: 0 0 0.25rem 0;">Client Communication Ethics</h4>
                    <p style="color: var(--color-text-muted); font-size: 0.8rem; margin: 0 0 0.5rem 0;">For newly onboarded partners.</p>
                    <div style="width: 100%; height: 4px; background: rgba(255,255,255,0.1); border-radius: 2px;">
                        <div style="width: 42%; height: 100%; background: #f97316; border-radius: 2px;"></div>
                    </div>
                    <p style="font-size: 0.75rem; color: #f97316; margin-top: 0.25rem;">42% Completion Rate</p>
                </div>
            </div>
        </div>
        
        <!-- Block 3: Retention & Pulse -->
        <div class="dash-grid" style="grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
            <div class="dash-card" style="padding: 1.5rem;">
                <h3 style="margin: 0 0 1rem 0; font-size: 1.1rem;"><i class="fa-solid fa-heart-pulse"></i> Employee Satisfaction</h3>
                <div style="font-size: 2.2rem; margin-bottom: 0.5rem; color: var(--color-emerald);">4.6/5.0</div>
                <p style="font-size: 0.85rem; color: var(--color-text-muted);">Based on October internal survey (N=142)</p>
            </div>
            <div class="dash-card" style="padding: 1.5rem;">
                <h3 style="margin: 0 0 1rem 0; font-size: 1.1rem;"><i class="fa-solid fa-door-open"></i> Annual Churn Rate</h3>
                <div style="font-size: 2.2rem; margin-bottom: 0.5rem; color: var(--color-gold);">8.2%</div>
                <p style="font-size: 0.85rem; color: var(--color-text-muted);">Well below industry average of 14%</p>
            </div>
        </div>
        
        <!-- Recent Hires -->
        <div class="dash-card" style="margin-top: 2rem;">
            <h3 style="margin: 0 0 1.5rem 0; font-size: 1.2rem;">Recent Onboardings</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
                <div style="padding: 1rem; background: rgba(0,0,0,0.2); border-radius: 6px; display: flex; align-items: center; gap: 1rem;">
                    <div style="width: 40px; height: 40px; border-radius: 50%; background: rgba(16,185,129,0.2); color: #10b981; display: flex; align-items: center; justify-content: center; font-weight: bold;">JS</div>
                    <div>
                        <div style="font-weight: bold;">James Smith</div>
                        <div style="font-size: 0.8rem; color: var(--color-text-muted);">Senior Data Engineer</div>
                    </div>
                </div>
                <div style="padding: 1rem; background: rgba(0,0,0,0.2); border-radius: 6px; display: flex; align-items: center; gap: 1rem;">
                    <div style="width: 40px; height: 40px; border-radius: 50%; background: rgba(59,130,246,0.2); color: #3b82f6; display: flex; align-items: center; justify-content: center; font-weight: bold;">EL</div>
                    <div>
                        <div style="font-weight: bold;">Emily Larson</div>
                        <div style="font-size: 0.8rem; color: var(--color-text-muted);">Cloud Architect</div>
                    </div>
                </div>
                <div style="padding: 1rem; background: rgba(0,0,0,0.2); border-radius: 6px; display: flex; align-items: center; gap: 1rem;">
                    <div style="width: 40px; height: 40px; border-radius: 50%; background: rgba(245,158,11,0.2); color: #f59e0b; display: flex; align-items: center; justify-content: center; font-weight: bold;">MW</div>
                    <div>
                        <div style="font-weight: bold;">Michael Wong</div>
                        <div style="font-size: 0.8rem; color: var(--color-text-muted);">Security Analyst</div>
                    </div>
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

Set-Content "dashboard_admin.html" -Value ($lines + $rest_of_file)
