const fs = require('fs');

const files = ['dashboard_client.html', 'dashboard_admin.html'];

files.forEach(file => {
    if (!fs.existsSync(file)) return;
    let html = fs.readFileSync(file, 'utf8');

    // Fix the extension and path for careers_bg
    html = html.replace(/url\('careers_bg_1786437139342\.jpg'\)/g, "url('assets/careers_bg_1786437139342.webp')");

    fs.writeFileSync(file, html, 'utf8');
    console.log(`Updated paths in ${file}`);
});
