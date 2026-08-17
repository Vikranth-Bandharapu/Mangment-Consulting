const fs = require('fs');

function updateLogo(file) {
    if (!fs.existsSync(file)) return;
    let html = fs.readFileSync(file, 'utf8');
    
    // Replace href="index.html" with href="#" when it wraps the logo
    html = html.replace(/<a href="index\.html">(\s*<img src="assets\/logo\.webp")/g, '<a href="#">$1');
    html = html.replace(/<a href="index\.html"(><img src="assets\/logo\.webp")/g, '<a href="#"$1');
    
    fs.writeFileSync(file, html, 'utf8');
}

updateLogo('dashboard_client.html');
updateLogo('dashboard_admin.html');
console.log('Fixed logo links');
