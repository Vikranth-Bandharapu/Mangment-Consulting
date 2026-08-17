const fs = require('fs');
let html = fs.readFileSync('dashboard_client.html', 'utf8');
const brokenStart = html.indexOf('</style>');
const brokenEnd = html.indexOf('<h1 style="font-size: 2rem; margin-bottom: 0;">Dashboard Overview</h1>');

const replacement = `</style>
</head>
<body>

  <!-- Custom Cursor -->
  <div class="cursor-dot"></div>
  <div class="cursor-outline"></div>

  <!-- SIDEBAR -->
  <aside class="sidebar">
    <div class="sidebar-header">
      <a href="dashboard_client.html"><img src="assets/logo.webp" alt="Logo" style="height: 30px;"></a>
      <span style="font-weight: bold; font-size: 1.8rem; font-family: var(--font-serif);">Client Portal</span>
    </div>
    <div class="sidebar-nav" id="sidebarNav">
      <div class="nav-item active" data-target="overview"><i class="fa-solid fa-house"></i> Overview</div>
      <div class="nav-item" data-target="projects"><i class="fa-solid fa-briefcase"></i> Active Projects</div>
      <div class="nav-item" data-target="financials"><i class="fa-solid fa-file-invoice-dollar"></i> Financials</div>
      <div class="nav-item" data-target="analytics"><i class="fa-solid fa-chart-line"></i> Analytics</div>
      <div class="nav-item" data-target="market"><i class="fa-solid fa-globe"></i> Market Intel</div>
    </div>
    <div class="sidebar-footer">
      <a href="index.html" class="btn-logout"><i class="fa-solid fa-arrow-right-from-bracket"></i> Secure Logout</a>
    </div>
  </aside>

  <!-- MAIN -->
  <main class="main-wrapper">
  <div class="dash-mobile-header" style="justify-content: flex-start; gap: 1rem; padding: 1rem;">
    <button class="mobile-sidebar-btn" onclick="toggleMobileMenu()" style="display: block; background: transparent; border: none; color: white; font-size: 1.5rem; cursor: pointer; padding: 0;">
      <i class="fa-solid fa-bars"></i>
    </button>
    <div><a href="dashboard_client.html"><img src="assets/logo.webp" alt="Stackly Logo" style="height: 24px;"></a></div>
  </div>
    <div class="dash-header-mobile-pad" style="padding: 1.5rem 1rem 0 1rem; display: flex; justify-content: space-between; align-items: center;">
      <h3 style="margin: 0; font-family: var(--font-serif); font-size: 1.5rem; font-weight: normal; letter-spacing: 1px; text-transform: uppercase;">Client Portal</h3>
      <div style="position: relative; cursor: pointer;" onclick="window.location.href='404.html'">
        <i class="fa-solid fa-envelope" style="font-size: 1.5rem; color: var(--color-gold);"></i>
        <span style="position: absolute; top: -5px; right: -8px; background: #ef4444; color: white; font-size: 0.65rem; font-weight: bold; padding: 2px 5px; border-radius: 50%;">3</span>
      </div>
    </div>
    <div class="content-area">

      <!-- User Profile Header -->
      <div class="user-profile-card">
        <div class="avatar-large">
           <i class="fa-solid fa-user-tie"></i>
        </div>
        <div class="profile-info">
          <div class="profile-name" style="word-break: break-all; font-size: 1.1rem;">
             <span class="profile-email" id="userEmailDisplay">client@enterprise.com</span>
          </div>
          <div class="profile-role">CLIENT PORTAL</div>
        </div>
      </div>
      
      <!-- 1. DASHBOARD OVERVIEW -->
      <section id="overview" class="section-content active">
        <div class="section-header" style="margin-bottom: 2rem;">
          `;

html = html.substring(0, brokenStart) + replacement + html.substring(brokenEnd);
fs.writeFileSync('dashboard_client.html', html, 'utf8');
console.log('Successfully fixed dashboard_client.html');
