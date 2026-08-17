const fs = require('fs');

function fixSidebar(file) {
    let html = fs.readFileSync(file, 'utf8');

    // 1. Add background color to sidebar-footer and sidebar-header CSS to prevent scroll overlap
    if (!html.includes('background: #080d1f; z-index: 10;')) {
        html = html.replace('.sidebar-footer {', '.sidebar-footer {\n      background: #080d1f;\n      z-index: 10;\n      position: relative;');
        html = html.replace('.sidebar-header {', '.sidebar-header {\n      background: #080d1f;\n      z-index: 10;\n      position: relative;\n      white-space: nowrap;');
    }

    // 2. Restore logo in sidebar-header
    const clientLogo = `<a href="dashboard_client.html"><img src="assets/logo.webp" alt="Logo" style="height: 30px;"></a>`;
    const adminLogo = `<a href="dashboard_admin.html"><img src="assets/logo.webp" alt="Logo" style="height: 30px;"></a>`;
    const logoHtml = file.includes('admin') ? adminLogo : clientLogo;

    if (file.includes('client')) {
        const targetHeaderClient = `<div class="sidebar-header">
      <span style="font-weight: bold; font-size: 1.8rem; font-family: var(--font-serif);">Client Portal</span>
    </div>`;
        const newHeaderClient = `<div class="sidebar-header" style="white-space: nowrap;">
      ${logoHtml}
      <span style="font-weight: bold; font-size: 1.8rem; font-family: var(--font-serif);">Client Portal</span>
    </div>`;
        html = html.replace(targetHeaderClient, newHeaderClient);
    } else {
        const targetHeaderAdmin = `<div class="sidebar-header" style="white-space: nowrap;">
      <span style="font-weight: bold; font-size: 1.8rem; font-family: var(--font-serif);">Admin Portal</span>
    </div>`;
        const newHeaderAdmin = `<div class="sidebar-header" style="white-space: nowrap;">
      ${logoHtml}
      <span style="font-weight: bold; font-size: 1.8rem; font-family: var(--font-serif);">Admin Portal</span>
    </div>`;
        html = html.replace(targetHeaderAdmin, newHeaderAdmin);
    }
    
    // Also decrease the font-size of Client Portal slightly to ensure it fits with the logo
    html = html.replace(/font-size: 1\.8rem; font-family: var\(--font-serif\);\">Client Portal/g, 'font-size: 1.5rem; font-family: var(--font-serif);\">Client Portal');
    html = html.replace(/font-size: 1\.8rem; font-family: var\(--font-serif\);\">Admin Portal/g, 'font-size: 1.5rem; font-family: var(--font-serif);\">Admin Portal');


    fs.writeFileSync(file, html, 'utf8');
}

fixSidebar('dashboard_client.html');
fixSidebar('dashboard_admin.html');
console.log('Sidebar perfectly fixed!');
