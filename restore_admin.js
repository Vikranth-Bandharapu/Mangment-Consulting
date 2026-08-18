const fs = require('fs');
let html = fs.readFileSync('dashboard_admin.html', 'utf8');

// 1. Restore the Sidebar and Custom Cursor
const brokenSidebarStart = html.indexOf('<!-- Custom Cursor -->');
const brokenSidebarEnd = html.indexOf('<!-- MAIN -->');
const correctSidebar = `<!-- Custom Cursor -->
  <div class="cursor-dot"></div>
  <div class="cursor-outline"></div>

  <!-- SIDEBAR -->
  <aside class="sidebar">
    <div class="sidebar-header" style="white-space: nowrap;">
      <a href="dashboard_admin.html"><img src="assets/logo.webp" alt="Logo" style="height: 30px;"></a>
      <span style="font-weight: bold; font-size: 1.5rem; font-family: var(--font-serif);">Admin Portal</span>
    </div>
    <div class="sidebar-nav" id="sidebarNav">
      <div class="nav-item active" data-target="command"><i class="fa-solid fa-server"></i> Command Center</div>
      <div class="nav-item" data-target="users"><i class="fa-solid fa-users"></i> User Management</div>
      <div class="nav-item" data-target="system"><i class="fa-solid fa-heart-pulse"></i> System Health</div>
      <div class="nav-item" data-target="utilization"><i class="fa-solid fa-users-gear"></i> Utilization</div>
      <div class="nav-item" data-target="talent"><i class="fa-solid fa-user-plus"></i> Talent & Recruiting</div>
    </div>
    <div class="sidebar-footer">
      <a href="index.html" class="btn-logout"><i class="fa-solid fa-power-off"></i> Secure Logout</a>
    </div>
  </aside>

  `;
html = html.substring(0, brokenSidebarStart) + correctSidebar + html.substring(brokenSidebarEnd);

// 2. Fix the duplicated Profile Header and the broken COMMAND CENTER tags
const brokenProfileStart = html.indexOf('<!-- User Profile Header -->');
const brokenCommandEnd = html.indexOf('<section id="command" class="section-content active">');

const correctProfile = `<!-- User Profile Header -->
      <div class="user-profile-card" style="width: 100%; box-sizing: border-box; margin-bottom: 0.5rem;">
        <div class="avatar-large">
           <i class="fa-solid fa-user-tie"></i>
        </div>
        <div class="profile-info">
          <div class="profile-name" style="word-break: break-all; font-size: 1.1rem;">
             <span class="profile-email" id="userEmailDisplay">cmd@stackly.agency</span>
          </div>
          <div class="profile-role">ADMIN PORTAL</div>
        </div>
      </div>
      
      `;

html = html.substring(0, brokenProfileStart) + correctProfile + html.substring(brokenCommandEnd);

// 3. Fix the CSS for .nav-item that got flex-direction: column
html = html.replace('.nav-item {\n      display: flex; flex-direction: column; align-items: flex-start; gap: 1.5rem;', '.nav-item {\n      display: flex; align-items: center; gap: 1rem;');

fs.writeFileSync('dashboard_admin.html', html, 'utf8');
console.log('Restored dashboard_admin.html HTML structure.');
