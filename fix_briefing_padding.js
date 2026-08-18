const fs = require('fs');

let html = fs.readFileSync('dashboard_client.html', 'utf8');

// Update the hero banner padding to align the text left with the header
let oldPadding = 'class="hero-banner-text" style="position: relative; padding: 2rem 1.5rem;';
let newPadding = 'class="hero-banner-text" style="position: relative; padding: 2rem 0;';
html = html.replace(oldPadding, newPadding);

// Also fix the image path just in case
let oldImg = "url('stackly_hero_building_1786436367086.jpg')";
let newImg = "url('assets/stackly_hero_building_1786436367086.webp')";
html = html.replace(oldImg, newImg);

fs.writeFileSync('dashboard_client.html', html, 'utf8');
console.log('Fixed Strategic Executive Briefing padding and image path');
