const fs = require('fs');

function fixMobileScroll(file) {
    let html = fs.readFileSync(file, 'utf8');

    // 1. Change 100vh to 100dvh in sidebar mobile override to fix cutoff
    html = html.replace(/height: 100vh !important;/g, 'height: 100dvh !important; /* fallback */\n          height: 100vh !important;');
    // Actually, wait, if I put 100vh !important AFTER 100dvh, it overrides it. I need 100dvh AFTER.
    html = html.replace(/height: 100vh !important;/g, 'height: 100vh !important;\n          height: 100dvh !important;');

    // 2. Ensure flex-direction is column explicitly on mobile sidebar
    html = html.replace(/display: flex;\s*\n\s*\}/g, 'display: flex;\n          flex-direction: column !important;\n        }');

    // 3. Add extra padding to the bottom of sidebar-footer on mobile
    if (html.includes('@media (max-width: 768px) {')) {
        const footerPadding = `\n        .sidebar-footer { padding-bottom: calc(1.5rem + env(safe-area-inset-bottom, 2rem)) !important; }`;
        html = html.replace('.content-area { padding: 1rem !important; }', '.content-area { padding: 1rem !important; }' + footerPadding);
    }

    fs.writeFileSync(file, html, 'utf8');
}

fixMobileScroll('dashboard_client.html');
fixMobileScroll('dashboard_admin.html');
console.log('Mobile scroll/height fixed!');
