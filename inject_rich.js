const fs = require('fs');

const file = 'dashboard_admin.html';
let html = fs.readFileSync(file, 'utf8');

const usersContent = `
      <!-- 2. USER MANAGEMENT -->
      <section id="users" class="section-content">
        <div class="section-header" style="margin-bottom: 1.5rem;">
          <h1 style="font-size: 2rem;">User Management</h1>
          <p style="font-size: 0.95rem;">Detailed overview of platform users, access levels, and security metrics.</p>
        </div>
        
        <div class="dash-grid" style="grid-template-columns: 1fr 1fr 1fr; gap: 1rem; margin-bottom: 2rem;">
            <div class="dash-card" style="padding: 1.5rem; display: flex; align-items: center; gap: 1rem;">
                <div style="background: rgba(16,185,129,0.1); color: var(--color-emerald); padding: 1rem; border-radius: 8px; font-size: 1.5rem;"><i class="fa-solid fa-users"></i></div>
                <div>
                    <h3 style="margin: 0 0 0.25rem 0; font-size: 0.9rem; color: var(--color-text-muted);">Total Active Users</h3>
                    <div style="font-size: 1.5rem; font-weight: bold;">12,458</div>
                </div>
            </div>
            <div class="dash-card" style="padding: 1.5rem; display: flex; align-items: center; gap: 1rem;">
                <div style="background: rgba(245,158,11,0.1); color: #f59e0b; padding: 1rem; border-radius: 8px; font-size: 1.5rem;"><i class="fa-solid fa-user-shield"></i></div>
                <div>
                    <h3 style="margin: 0 0 0.25rem 0; font-size: 0.9rem; color: var(--color-text-muted);">Admin Accounts</h3>
                    <div style="font-size: 1.5rem; font-weight: bold;">42</div>
                </div>
            </div>
            <div class="dash-card" style="padding: 1.5rem; display: flex; align-items: center; gap: 1rem;">
                <div style="background: rgba(239,68,68,0.1); color: #ef4444; padding: 1rem; border-radius: 8px; font-size: 1.5rem;"><i class="fa-solid fa-user-lock"></i></div>
                <div>
                    <h3 style="margin: 0 0 0.25rem 0; font-size: 0.9rem; color: var(--color-text-muted);">Locked Accounts</h3>
                    <div style="font-size: 1.5rem; font-weight: bold;">15</div>
                </div>
            </div>
        </div>

        <div class="dash-card" style="padding: 0; margin-bottom: 2rem;">
            <div style="padding: 1.5rem; border-bottom: 1px solid rgba(255,255,255,0.05); display: flex; justify-content: space-between; align-items: center;">
                <h3 style="margin: 0; font-family: var(--font-serif); font-size: 1.2rem;">Recent User Activity</h3>
                <button class="btn-primary" style="padding: 0.5rem 1rem; font-size: 0.85rem;"><i class="fa-solid fa-plus"></i> Add User</button>
            </div>
            <div class="table-container">
                <table class="data-table" style="margin: 0; width: 100%;">
                    <thead>
                        <tr>
                            <th style="padding: 1rem;">User Name</th>
                            <th>Role</th>
                            <th>Department</th>
                            <th>Status</th>
                            <th>Last Login</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding: 1rem; font-weight: bold;">Michael Chen</td>
                            <td>System Admin</td>
                            <td>Engineering</td>
                            <td><span style="color: var(--color-emerald); background: rgba(16,185,129,0.1); padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.75rem;">Active</span></td>
                            <td style="color: var(--color-text-muted);">2 mins ago</td>
                        </tr>
                        <tr>
                            <td style="padding: 1rem; font-weight: bold;">Sarah Jenkins</td>
                            <td>Manager</td>
                            <td>Operations</td>
                            <td><span style="color: var(--color-emerald); background: rgba(16,185,129,0.1); padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.75rem;">Active</span></td>
                            <td style="color: var(--color-text-muted);">1 hour ago</td>
                        </tr>
                        <tr>
                            <td style="padding: 1rem; font-weight: bold;">David Rodriguez</td>
                            <td>Analyst</td>
                            <td>Finance</td>
                            <td><span style="color: #f59e0b; background: rgba(245,158,11,0.1); padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.75rem;">Away</span></td>
                            <td style="color: var(--color-text-muted);">4 hours ago</td>
                        </tr>
                        <tr>
                            <td style="padding: 1rem; font-weight: bold;">Emma Watson</td>
                            <td>Consultant</td>
                            <td>Strategy</td>
                            <td><span style="color: #ef4444; background: rgba(239,68,68,0.1); padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.75rem;">Offline</span></td>
                            <td style="color: var(--color-text-muted);">2 days ago</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </section>
`;

const systemContent = `
      <!-- 3. SYSTEM HEALTH -->
      <section id="system" class="section-content">
        <div class="section-header" style="margin-bottom: 1.5rem;">
          <h1 style="font-size: 2rem;">System Health</h1>
          <p style="font-size: 0.95rem;">Real-time infrastructure monitoring and operational status.</p>
        </div>
        
        <div class="dash-grid" style="grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-bottom: 2rem;">
            <div class="dash-card" style="padding: 1.5rem; border-top: 3px solid var(--color-emerald);">
                <h3 style="margin: 0 0 0.5rem 0; font-size: 0.9rem; color: var(--color-text-muted);">API Uptime</h3>
                <div style="font-size: 1.8rem; font-weight: bold; color: var(--color-emerald);">99.99%</div>
                <div style="font-size: 0.75rem; margin-top: 0.5rem;"><i class="fa-solid fa-arrow-up text-emerald"></i> Stable</div>
            </div>
            <div class="dash-card" style="padding: 1.5rem; border-top: 3px solid var(--color-emerald);">
                <h3 style="margin: 0 0 0.5rem 0; font-size: 0.9rem; color: var(--color-text-muted);">Avg Latency</h3>
                <div style="font-size: 1.8rem; font-weight: bold;">42ms</div>
                <div style="font-size: 0.75rem; margin-top: 0.5rem;"><i class="fa-solid fa-arrow-down text-emerald"></i> -5ms from yesterday</div>
            </div>
            <div class="dash-card" style="padding: 1.5rem; border-top: 3px solid #f59e0b;">
                <h3 style="margin: 0 0 0.5rem 0; font-size: 0.9rem; color: var(--color-text-muted);">Database Load</h3>
                <div style="font-size: 1.8rem; font-weight: bold; color: #f59e0b;">78%</div>
                <div style="font-size: 0.75rem; margin-top: 0.5rem;"><i class="fa-solid fa-arrow-up text-gold"></i> Spiking</div>
            </div>
            <div class="dash-card" style="padding: 1.5rem; border-top: 3px solid var(--color-emerald);">
                <h3 style="margin: 0 0 0.5rem 0; font-size: 0.9rem; color: var(--color-text-muted);">Error Rate</h3>
                <div style="font-size: 1.8rem; font-weight: bold;">0.01%</div>
                <div style="font-size: 0.75rem; margin-top: 0.5rem;"><i class="fa-solid fa-check text-emerald"></i> Normal</div>
            </div>
        </div>

        <div class="dash-grid" style="grid-template-columns: 2fr 1fr; gap: 1.5rem;">
            <div class="dash-card">
                <h3 style="margin: 0 0 1.5rem 0; font-family: var(--font-serif); font-size: 1.2rem;">Server Instances</h3>
                <div style="display: flex; flex-direction: column; gap: 1.5rem;">
                    <div>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                            <span style="font-weight: bold;">US-East-1 (Primary)</span>
                            <span style="color: var(--color-emerald);">Operational</span>
                        </div>
                        <div style="width: 100%; height: 6px; background: rgba(255,255,255,0.1); border-radius: 3px;"><div style="width: 100%; height: 100%; background: var(--color-emerald); border-radius: 3px;"></div></div>
                    </div>
                    <div>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                            <span style="font-weight: bold;">EU-Central (Failover)</span>
                            <span style="color: var(--color-emerald);">Operational</span>
                        </div>
                        <div style="width: 100%; height: 6px; background: rgba(255,255,255,0.1); border-radius: 3px;"><div style="width: 100%; height: 100%; background: var(--color-emerald); border-radius: 3px;"></div></div>
                    </div>
                    <div>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                            <span style="font-weight: bold;">AP-South-1 (Analytics)</span>
                            <span style="color: #f59e0b;">Degraded</span>
                        </div>
                        <div style="width: 100%; height: 6px; background: rgba(255,255,255,0.1); border-radius: 3px;"><div style="width: 75%; height: 100%; background: #f59e0b; border-radius: 3px;"></div></div>
                    </div>
                </div>
            </div>
            
            <div class="dash-card">
                <h3 style="margin: 0 0 1.5rem 0; font-family: var(--font-serif); font-size: 1.2rem;">System Alerts</h3>
                <div style="display: flex; flex-direction: column; gap: 1rem;">
                    <div style="display: flex; gap: 1rem; align-items: flex-start; padding-bottom: 1rem; border-bottom: 1px solid rgba(255,255,255,0.05);">
                        <i class="fa-solid fa-triangle-exclamation" style="color: #f59e0b; margin-top: 0.2rem;"></i>
                        <div>
                            <div style="font-weight: bold; font-size: 0.9rem;">High DB CPU Usage</div>
                            <div style="font-size: 0.8rem; color: var(--color-text-muted);">AP-South-1 reached 85% CPU capacity.</div>
                        </div>
                    </div>
                    <div style="display: flex; gap: 1rem; align-items: flex-start;">
                        <i class="fa-solid fa-circle-info" style="color: #3b82f6; margin-top: 0.2rem;"></i>
                        <div>
                            <div style="font-weight: bold; font-size: 0.9rem;">Backup Completed</div>
                            <div style="font-size: 0.8rem; color: var(--color-text-muted);">Daily snapshot finished successfully.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
`;

const oldUsersStr = '<!-- 2. USER MANAGEMENT -->\n      <section id="users" class="section-content">\n        <div class="section-header">\n          <h1>User Management</h1>\n          <p>Detailed overview and metrics for User Management.</p>\n        </div>\n        <div class="dash-card">\n          <p>Table placeholder for User Management data goes here.</p>\n        </div>\n      </section>';

const oldSystemStr = '<!-- 3. SYSTEM HEALTH -->\n      <section id="system" class="section-content">\n        <div class="section-header">\n          <h1>System Health</h1>\n          <p>Detailed overview and metrics for System Health.</p>\n        </div>\n        <div class="dash-card">\n          <p>Charts and metrics for System Health go here.</p>\n        </div>\n      </section>';


if (html.includes(oldUsersStr)) {
    html = html.replace(oldUsersStr, usersContent);
} else {
    // try replacing dynamically
    let s1 = html.indexOf('<!-- 2. USER MANAGEMENT -->');
    let e1 = html.indexOf('<!-- 3. SYSTEM HEALTH -->');
    if (s1 !== -1 && e1 !== -1) {
        html = html.substring(0, s1) + usersContent + '\n\n      ' + html.substring(e1);
    }
}

if (html.includes(oldSystemStr)) {
    html = html.replace(oldSystemStr, systemContent);
} else {
    let s2 = html.indexOf('<!-- 3. SYSTEM HEALTH -->');
    let e2 = html.indexOf('<!-- 4. UTILIZATION -->');
    if (s2 !== -1 && e2 !== -1) {
        html = html.substring(0, s2) + systemContent + '\n\n      ' + html.substring(e2);
    }
}

fs.writeFileSync(file, html, 'utf8');
console.log('Restored rich content for users and system!');
