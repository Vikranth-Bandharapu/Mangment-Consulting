const fs = require('fs');

let html = fs.readFileSync('dashboard_client.html', 'utf8');

let oldPadding = 'class="hero-banner-text" style="position: relative; padding: 2rem 0;';
let newPadding = 'class="hero-banner-text" style="position: relative; padding: 2rem 1.5rem;';
html = html.replace(oldPadding, newPadding);

fs.writeFileSync('dashboard_client.html', html, 'utf8');
console.log('Restored Strategic Executive Briefing padding');
