const fs = require('fs');

function cleanMobileHeader(file) {
    let html = fs.readFileSync(file, 'utf8');

    // Find the dash-mobile-header block
    const headerStart = html.indexOf('<div class="dash-mobile-header"');
    if (headerStart !== -1) {
        const contentAreaStart = html.indexOf('<div class="content-area">', headerStart);
        if (contentAreaStart !== -1) {
            // We want to replace everything between <div class="dash-mobile-header"...> and </div> (before content-area)
            // with a simpler version that just has the hamburger menu on the right
            const startTagEnd = html.indexOf('>', headerStart) + 1;
            
            const newHeaderContent = `
    <div style="display: flex; align-items: center; justify-content: flex-end; width: 100%;">
      <button class="mobile-sidebar-btn" onclick="toggleMobileMenu()" style="display: block; background: transparent; border: none; color: white; font-size: 1.5rem; cursor: pointer; padding: 0;">
        <i class="fa-solid fa-bars"></i>
      </button>
    </div>
  </div>
    `;
            html = html.substring(0, startTagEnd) + newHeaderContent + html.substring(contentAreaStart);
        }
    }

    fs.writeFileSync(file, html, 'utf8');
}

cleanMobileHeader('dashboard_client.html');
cleanMobileHeader('dashboard_admin.html');
console.log('Mobile header cleaned up!');
