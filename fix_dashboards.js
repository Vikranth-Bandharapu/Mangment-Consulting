const fs = require('fs');

function fixDashboards(filename) {
    if (!fs.existsSync(filename)) return;
    let html = fs.readFileSync(filename, 'utf8');

    // 1. Fix the "Extreme Mobile Override"
    // Remove the bad body override and add proper overlay/no-scroll logic
    const oldMedia = /\/\* EXTREME MOBILE OVERRIDE INJECTED DIRECTLY \*\/[\s\S]*?body\.no-scroll \.content-area \{ overflow: hidden !important; touch-action: none; \}/;

    const newMedia = `/* EXTREME MOBILE OVERRIDE INJECTED DIRECTLY */
      .sidebar-overlay {
        display: none;
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.6);
        z-index: 2147483646; /* One less than sidebar */
        opacity: 0;
        transition: opacity 0.3s ease;
      }
      .sidebar-overlay.active {
        display: block;
        opacity: 1;
      }
      
      @media (max-width: 768px) {
        body {
          display: flex !important; /* Keep flex so height 100vh works */
        }
        .sidebar {
          position: fixed !important;
          top: 0 !important;
          left: -100vw !important;
          width: 280px !important;
          height: 100vh !important;
          z-index: 2147483647 !important;
          background-color: var(--color-navy) !important;
          border-right: 1px solid rgba(255,255,255,0.1) !important;
          transition: left 0.3s ease-in-out !important;
          display: flex !important;
        }
        .sidebar.active {
          left: 0 !important;
        }
        .main-wrapper {
          margin-left: 0 !important;
          width: 100vw !important;
          max-width: 100vw !important;
          /* overflow-x: hidden !important; removed because it breaks sticky headers sometimes */
        }
        .content-area {
          padding: 1rem !important; /* Fix padding on mobile! */
        }
        /* Fix the header alignment */
        .dash-header-mobile-pad {
          padding: 1.5rem 1rem 0 1rem !important;
        }
        .user-profile-card {
          min-width: 0 !important;
          width: 100% !important;
          flex-direction: column !important;
          text-align: center !important;
          word-break: break-all !important;
        }
        .dash-grid, .kpi-grid, .pipeline-grid {
          display: flex !important;
          flex-direction: column !important;
          width: 100% !important;
        }
        .table-container {
          width: 100% !important;
          overflow-x: auto !important;
        }
        .mobile-sidebar-btn {
          display: block !important;
        }
      }
      body.no-scroll { overflow: hidden !important; touch-action: none; }
      body.no-scroll .main-wrapper { pointer-events: none; filter: blur(2px); }
      body.no-scroll .sidebar { pointer-events: auto; filter: none; }`;

    html = html.replace(oldMedia, newMedia);

    // 2. Add the overlay div just before <aside class="sidebar">
    if (!html.includes('sidebar-overlay')) {
        html = html.replace(/<aside class="sidebar">/, '<div class="sidebar-overlay" onclick="toggleMobileMenu()"></div>\n  <aside class="sidebar">');
    }

    // 3. Fix the toggle functions
    // Replace the inline onclicks with a proper function
    const oldBtnClick = /onclick="document\.querySelector\('\.sidebar'\)\.classList\.toggle\('active'\); document\.body\.classList\.toggle\('no-scroll'\);"/g;
    html = html.replace(oldBtnClick, 'onclick="toggleMobileMenu()"');

    // Replace the nav link click closing
    const oldNavClose = /document\.querySelector\('\.sidebar'\)\.classList\.remove\('active'\); \/\/ Close sidebar on mobile\s*document\.body\.classList\.remove\('no-scroll'\);/g;
    html = html.replace(oldNavClose, 'if(window.innerWidth <= 768) toggleMobileMenu();');

    // 4. Inject the toggle function if not exists
    if (!html.includes('function toggleMobileMenu()')) {
        const toggleFunc = `
      function toggleMobileMenu() {
        const sidebar = document.querySelector('.sidebar');
        const overlay = document.querySelector('.sidebar-overlay');
        const isActive = sidebar.classList.contains('active');
        
        if (isActive) {
          sidebar.classList.remove('active');
          if(overlay) overlay.classList.remove('active');
          document.body.classList.remove('no-scroll');
        } else {
          sidebar.classList.add('active');
          if(overlay) overlay.classList.add('active');
          document.body.classList.add('no-scroll');
        }
      }`;
        html = html.replace(/<\/script>\s*<\/body>/, toggleFunc + '\n  </script>\n</body>');
    }

    // 5. Add dash-header-mobile-pad class to the top header
    // Look for <div style="padding: 1.5rem 3rem 0 3rem; display: flex; justify-content: space-between; align-items: center;">
    html = html.replace(/<div style="padding: 1\.5rem 3rem 0 3rem;/g, '<div class="dash-header-mobile-pad" style="padding: 1.5rem 3rem 0 3rem;');

    fs.writeFileSync(filename, html, 'utf8');
}

fixDashboards('dashboard_client.html');
fixDashboards('dashboard_admin.html');
console.log("Dashboards fixed.");
