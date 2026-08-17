const fs = require('fs');

function fixAll(file) {
    let html = fs.readFileSync(file, 'utf8');

    // 1. Fix background color of header and footer to match sidebar
    html = html.replace(/background: #080d1f;\s*z-index: 10;/g, 'background: var(--color-navy); z-index: 10;');

    // 2. Fix cursor JS
    html = html.replace(/cursorDot\.style\.left = `px`;/g, 'cursorDot.style.left = `${posX}px`;');
    html = html.replace(/cursorDot\.style\.top = `px`;/g, 'cursorDot.style.top = `${posY}px`;');

    // 3. Fix scroll/cutoff by significantly increasing padding on mobile, and setting overflow-y auto on sidebar itself as a fallback
    html = html.replace('.sidebar-footer { padding-bottom: calc(1.5rem + env(safe-area-inset-bottom, 2rem)) !important; }', '.sidebar-footer { padding-bottom: 6rem !important; }');
    
    if (html.includes('@media (max-width: 768px) {')) {
         // Also add overflow-y: auto to sidebar itself on mobile just in case
         html = html.replace('flex-direction: column !important;', 'flex-direction: column !important;\n          overflow-y: auto !important;');
    }

    fs.writeFileSync(file, html, 'utf8');
}

fixAll('dashboard_client.html');
fixAll('dashboard_admin.html');
console.log('Fixed cursor, backgrounds, and scrolling cutoff!');
