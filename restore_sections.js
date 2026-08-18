const fs = require('fs');

let html = fs.readFileSync('dashboard_admin.html', 'utf8');

const usersSection = `
      <!-- 2. USER MANAGEMENT -->
      <section id="users" class="section-content">
        <div class="section-header">
          <h1>User Management</h1>
          <p>Manage platform access, roles, and security policies.</p>
        </div>
        <div class="dash-grid">
          <div class="dash-card">
            <h3>Active Users</h3>
            <div class="card-value">1,492</div>
            <p class="card-trend up"><i class="fa-solid fa-arrow-up"></i> +12% this month</p>
          </div>
          <div class="dash-card">
            <h3>Pending Approvals</h3>
            <div class="card-value">18</div>
            <p style="color: var(--color-gold);">Action required</p>
          </div>
        </div>
        <div class="table-container">
          <table class="data-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Role</th>
                <th>Status</th>
                <th>Last Login</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>john.doe@enterprise.com</td>
                <td>Client Admin</td>
                <td><span class="status-badge status-active">Active</span></td>
                <td>2 mins ago</td>
                <td><button class="btn-outline-gold" style="padding: 0.25rem 0.75rem; font-size: 0.8rem;">Edit</button></td>
              </tr>
              <tr>
                <td>sarah.j@techcorp.io</td>
                <td>Viewer</td>
                <td><span class="status-badge status-pending">Pending</span></td>
                <td>Never</td>
                <td><button class="btn-outline-gold" style="padding: 0.25rem 0.75rem; font-size: 0.8rem;">Review</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
`;

const systemSection = `
      <!-- 3. SYSTEM HEALTH -->
      <section id="system" class="section-content">
        <div class="section-header">
          <h1>System Health</h1>
          <p>Real-time infrastructure and security monitoring.</p>
        </div>
        <div class="dash-grid">
          <div class="dash-card">
            <h3>Server Uptime</h3>
            <div class="card-value">99.999%</div>
            <p class="card-trend up">All systems operational</p>
          </div>
          <div class="dash-card">
            <h3>Average Latency</h3>
            <div class="card-value">42ms</div>
            <p class="card-trend up">Optimal performance</p>
          </div>
        </div>
        <div style="background: #000; padding: 1.5rem; border-radius: 8px; font-family: monospace; color: #0f0; margin-top: 1rem; max-height: 200px; overflow-y: auto;">
          > [SYS] All nodes reporting healthy status.<br>
          > [SEC] 0 intrusion attempts detected.<br>
          > [DB] Database replication lag: 0.01s.<br>
          > [NET] Bandwidth utilization at 12%.<br>
          > [SYS] Routine diagnostic completed successfully.
        </div>
      </section>
`;

if (!html.includes('id="users"')) {
    const insertPos = html.indexOf('<!-- 4. UTILIZATION -->');
    if (insertPos !== -1) {
        html = html.substring(0, insertPos) + usersSection + systemSection + html.substring(insertPos);
        fs.writeFileSync('dashboard_admin.html', html, 'utf8');
        console.log('Restored users and system sections.');
    } else {
        // If utilization doesn't exist, just insert before the end of content-area
        const endContent = html.indexOf('</div>\n    </div>\n  </main>');
        if (endContent !== -1) {
            html = html.substring(0, endContent) + usersSection + systemSection + html.substring(endContent);
            fs.writeFileSync('dashboard_admin.html', html, 'utf8');
            console.log('Restored users and system sections at the end.');
        } else {
            console.log('Could not find insertion point.');
        }
    }
} else {
    console.log('Sections already exist.');
}
