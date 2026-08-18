const fs = require('fs');

let html = fs.readFileSync('dashboard_client.html', 'utf8');

let oldP = '<p style="color: var(--color-text-muted); font-size: 1rem; max-width: 600px; margin: 0;">';
let newP = '<p style="color: rgba(255, 255, 255, 0.9); font-size: 1rem; max-width: 600px; margin: 0; text-shadow: 0 2px 4px rgba(0,0,0,0.6);">';

html = html.replace(oldP, newP);

// Also add a text-shadow to the h2 just to be safe so the title is also very readable against the building image
let oldH2 = '<h2 style="font-family: var(--font-serif); font-size: 2rem; margin-bottom: 0.5rem; color: var(--color-white);">';
let newH2 = '<h2 style="font-family: var(--font-serif); font-size: 2rem; margin-bottom: 0.5rem; color: var(--color-white); text-shadow: 0 2px 4px rgba(0,0,0,0.6);">';
html = html.replace(oldH2, newH2);

fs.writeFileSync('dashboard_client.html', html, 'utf8');
console.log('Fixed text color and added shadow');
