const fs = require('fs');

let html = fs.readFileSync('dashboard_admin.html', 'utf8');

const brokenBlock = `  <!-- Custom Cursor -->
      <div class="nav-item" data-target="utilization"><i class="fa-solid fa-users-gear"></i> Utilization</div>`;

const fixedBlock = `  <!-- Custom Cursor -->
  <div class="cursor-dot"></div>
  <div class="cursor-outline"></div>

  <!-- SIDEBAR -->
  <aside class="sidebar">
    <div class="sidebar-header" style="white-space: nowrap;">
      <span style="font-weight: bold; font-size: 1.8rem; font-family: var(--font-serif);">Admin Portal</span>
    </div>
    <div class="sidebar-nav" id="sidebarNav">
      <div class="nav-item active" data-target="command"><i class="fa-solid fa-satellite-dish"></i> Command Center</div>
      <div class="nav-item" data-target="portfolio"><i class="fa-solid fa-city"></i> Client Portfolio</div>
      <div class="nav-item" data-target="revenue"><i class="fa-solid fa-sack-dollar"></i> Revenue & Billing</div>
      <div class="nav-item" data-target="utilization"><i class="fa-solid fa-users-gear"></i> Utilization</div>`;

html = html.replace(brokenBlock, fixedBlock);

fs.writeFileSync('dashboard_admin.html', html, 'utf8');
console.log('Fixed admin sidebar');
