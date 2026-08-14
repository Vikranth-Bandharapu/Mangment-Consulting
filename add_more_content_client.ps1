$file = "c:\Users\admin\Desktop\Mangement Consulting\dashboard_client.html"
$content = Get-Content $file -Raw

$block1 = @"
        <!-- Project Risk Register -->
        <div class="dash-card" style="margin-top: 2rem; padding: 0;">
            <div style="padding: 1.5rem; border-bottom: 1px solid rgba(255,255,255,0.05); display: flex; justify-content: space-between; align-items: center;">
                <h3 style="margin: 0; font-family: var(--font-serif); font-size: 1.3rem;">Project Risk Register</h3>
                <span style="font-size: 0.8rem; color: var(--color-text-muted);">Updated Today</span>
            </div>
            <div class="table-container">
                <table class="data-table" style="margin: 0; width: 100%;">
                    <thead>
                        <tr>
                            <th style="padding: 1rem;">Project</th>
                            <th>Risk Item</th>
                            <th>Impact</th>
                            <th>Mitigation Strategy</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding: 1rem; font-weight: bold;">Data Center Migration</td>
                            <td>Hardware supply chain delays</td>
                            <td><span style="color: #ef4444; font-weight: bold;">High</span></td>
                            <td style="font-size: 0.9rem; color: var(--color-text-muted);">Sourced alternative vendors in EMEA region</td>
                        </tr>
                        <tr>
                            <td style="padding: 1rem; font-weight: bold;">Retail Store AI Vision</td>
                            <td>Data privacy compliance review</td>
                            <td><span style="color: #f59e0b; font-weight: bold;">Medium</span></td>
                            <td style="font-size: 0.9rem; color: var(--color-text-muted);">Engaged legal council for GDPR validation</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </section>

      <!-- 3. FINANCIALS -->
"@
$content = $content -replace "</section>\s*<!-- 3\. FINANCIALS -->", $block1

$block2 = @"
        <!-- Expense Breakdown & Renewals -->
        <div class="dash-grid" style="grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-top: 2rem;">
            <div class="dash-card">
                <h3 style="margin: 0 0 1rem 0; font-family: var(--font-serif); font-size: 1.2rem;">Q4 Expense Breakdown</h3>
                <div style="display: flex; flex-direction: column; gap: 0.8rem;">
                    <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 0.5rem;">
                        <span style="color: var(--color-text-muted);">Cloud Infrastructure</span>
                        <span style="font-weight: bold;">`$420,000</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 0.5rem;">
                        <span style="color: var(--color-text-muted);">Consulting Fees</span>
                        <span style="font-weight: bold;">`$350,000</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 0.5rem;">
                        <span style="color: var(--color-text-muted);">Software Licenses</span>
                        <span style="font-weight: bold;">`$180,000</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; padding-bottom: 0.5rem;">
                        <span style="color: var(--color-text-muted);">Travel & Expenses</span>
                        <span style="font-weight: bold;">`$75,000</span>
                    </div>
                </div>
            </div>
            <div class="dash-card">
                <h3 style="margin: 0 0 1rem 0; font-family: var(--font-serif); font-size: 1.2rem;">Upcoming Contract Renewals</h3>
                <div style="display: flex; flex-direction: column; gap: 1rem;">
                    <div style="background: rgba(0,0,0,0.2); padding: 1rem; border-radius: 8px;">
                        <div style="font-weight: bold; margin-bottom: 0.25rem;">AWS Enterprise Support</div>
                        <div style="display: flex; justify-content: space-between; font-size: 0.85rem;">
                            <span style="color: var(--color-text-muted);">Renews Nov 15, 2026</span>
                            <span style="color: var(--color-gold);">`$120,000/yr</span>
                        </div>
                    </div>
                    <div style="background: rgba(0,0,0,0.2); padding: 1rem; border-radius: 8px;">
                        <div style="font-weight: bold; margin-bottom: 0.25rem;">Stackly Security Retainer</div>
                        <div style="display: flex; justify-content: space-between; font-size: 0.85rem;">
                            <span style="color: var(--color-text-muted);">Renews Dec 01, 2026</span>
                            <span style="color: var(--color-gold);">`$250,000/yr</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <!-- 4. ANALYTICS -->
"@
$content = $content -replace "</section>\s*<!-- 4\. ANALYTICS -->", $block2

$block3 = @"
        <!-- User Engagement -->
        <div class="dash-card" style="margin-top: 2rem;">
            <h3 style="margin: 0 0 1.5rem 0; font-family: var(--font-serif); font-size: 1.3rem;">Platform Adoption by Region</h3>
            <div class="dash-grid" style="grid-template-columns: repeat(4, 1fr); gap: 1rem;">
                <div style="background: rgba(255,255,255,0.02); padding: 1.5rem; border-radius: 8px; text-align: center; border: 1px solid rgba(255,255,255,0.05);">
                    <div style="font-size: 2rem; color: var(--color-gold); font-weight: bold; margin-bottom: 0.5rem;">42%</div>
                    <div style="font-size: 0.85rem; color: var(--color-text-muted); text-transform: uppercase;">North America</div>
                </div>
                <div style="background: rgba(255,255,255,0.02); padding: 1.5rem; border-radius: 8px; text-align: center; border: 1px solid rgba(255,255,255,0.05);">
                    <div style="font-size: 2rem; color: var(--color-emerald); font-weight: bold; margin-bottom: 0.5rem;">35%</div>
                    <div style="font-size: 0.85rem; color: var(--color-text-muted); text-transform: uppercase;">EMEA</div>
                </div>
                <div style="background: rgba(255,255,255,0.02); padding: 1.5rem; border-radius: 8px; text-align: center; border: 1px solid rgba(255,255,255,0.05);">
                    <div style="font-size: 2rem; color: #3b82f6; font-weight: bold; margin-bottom: 0.5rem;">18%</div>
                    <div style="font-size: 0.85rem; color: var(--color-text-muted); text-transform: uppercase;">APAC</div>
                </div>
                <div style="background: rgba(255,255,255,0.02); padding: 1.5rem; border-radius: 8px; text-align: center; border: 1px solid rgba(255,255,255,0.05);">
                    <div style="font-size: 2rem; color: #f59e0b; font-weight: bold; margin-bottom: 0.5rem;">5%</div>
                    <div style="font-size: 0.85rem; color: var(--color-text-muted); text-transform: uppercase;">LATAM</div>
                </div>
            </div>
        </div>
      </section>

      <!-- 5. MARKET INTEL -->
"@
$content = $content -replace "</section>\s*<!-- 5\. MARKET INTEL -->", $block3


$block4 = @"
        <!-- Competitor Benchmarking & News -->
        <div class="dash-grid" style="grid-template-columns: 2fr 1fr; gap: 1.5rem; margin-top: 2rem;">
            <div class="dash-card" style="padding: 0;">
                <div style="padding: 1.5rem; border-bottom: 1px solid rgba(255,255,255,0.05);">
                    <h3 style="margin: 0; font-family: var(--font-serif); font-size: 1.3rem;">Competitor Benchmarking (Q3)</h3>
                </div>
                <table class="data-table" style="margin: 0; width: 100%;">
                    <thead>
                        <tr>
                            <th style="padding: 1rem;">Metric</th>
                            <th>Your Company</th>
                            <th>Industry Avg</th>
                            <th>Top Quartile</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding: 1rem; font-weight: bold;">Customer Retention</td>
                            <td style="color: var(--color-emerald); font-weight: bold;">94.2%</td>
                            <td>88.5%</td>
                            <td>93.0%</td>
                        </tr>
                        <tr>
                            <td style="padding: 1rem; font-weight: bold;">Operating Margin</td>
                            <td style="color: var(--color-gold); font-weight: bold;">24.5%</td>
                            <td>21.0%</td>
                            <td>26.2%</td>
                        </tr>
                        <tr>
                            <td style="padding: 1rem; font-weight: bold;">Time-to-Market (Months)</td>
                            <td style="color: var(--color-emerald); font-weight: bold;">4.2</td>
                            <td>6.5</td>
                            <td>4.8</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="dash-card">
                <h3 style="margin: 0 0 1rem 0; font-family: var(--font-serif); font-size: 1.2rem;">Live Sector News</h3>
                <div style="display: flex; flex-direction: column; gap: 1rem;">
                    <div>
                        <div style="font-size: 0.75rem; color: var(--color-emerald); margin-bottom: 0.25rem;">2 Hours Ago &bull; TechCrunch</div>
                        <a href="404.html" style="color: var(--color-white); text-decoration: none; font-weight: bold; font-size: 0.9rem; display: block; margin-bottom: 0.25rem;">Enterprise SaaS spending projected to grow 14% in 2027</a>
                    </div>
                    <div style="border-top: 1px solid rgba(255,255,255,0.05); padding-top: 1rem;">
                        <div style="font-size: 0.75rem; color: var(--color-gold); margin-bottom: 0.25rem;">5 Hours Ago &bull; WSJ</div>
                        <a href="404.html" style="color: var(--color-white); text-decoration: none; font-weight: bold; font-size: 0.9rem; display: block; margin-bottom: 0.25rem;">European regulators signal softer stance on AI mandates</a>
                    </div>
                    <div style="border-top: 1px solid rgba(255,255,255,0.05); padding-top: 1rem;">
                        <div style="font-size: 0.75rem; color: #3b82f6; margin-bottom: 0.25rem;">Yesterday &bull; Bloomberg</div>
                        <a href="404.html" style="color: var(--color-white); text-decoration: none; font-weight: bold; font-size: 0.9rem; display: block; margin-bottom: 0.25rem;">Major consolidation expected in cloud logistics sector</a>
                    </div>
                </div>
            </div>
        </div>
      </section>

    </main>
"@
$content = $content -replace "</section>\s*</main>", $block4

Set-Content $file -Value $content
