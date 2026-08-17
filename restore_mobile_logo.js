const fs = require('fs');

function restoreMobileLogo(file) {
    let html = fs.readFileSync(file, 'utf8');

    const targetBlock = `<div style="display: flex; align-items: center; justify-content: flex-end; width: 100%;">
      <button class="mobile-sidebar-btn" onclick="toggleMobileMenu()" style="display: block; background: transparent; border: none; color: white; font-size: 1.5rem; cursor: pointer; padding: 0;">
        <i class="fa-solid fa-bars"></i>
      </button>
    </div>`;

    const logoHref = file.includes('admin') ? 'dashboard_admin.html' : 'dashboard_client.html';

    const newBlock = `<div style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
      <a href="${logoHref}"><img src="assets/logo.webp" alt="Stackly Logo" style="height: 24px;"></a>
      <button class="mobile-sidebar-btn" onclick="toggleMobileMenu()" style="display: block; background: transparent; border: none; color: white; font-size: 1.5rem; cursor: pointer; padding: 0;">
        <i class="fa-solid fa-bars"></i>
      </button>
    </div>`;

    html = html.replace(targetBlock, newBlock);

    fs.writeFileSync(file, html, 'utf8');
}

restoreMobileLogo('dashboard_client.html');
restoreMobileLogo('dashboard_admin.html');
console.log('Mobile logo restored!');
