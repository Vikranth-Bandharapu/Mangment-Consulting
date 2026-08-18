const fs = require('fs');

let html = fs.readFileSync('dashboard_client.html', 'utf8');

// Replace the div style
let oldDivStyle = 'style="position: relative; padding: 2rem 1.5rem; width: 100%; box-sizing: border-box; text-align: center; display: flex; flex-direction: column; align-items: center;"';
let newDivStyle = 'style="position: relative; padding: 2rem 1.5rem; width: 100%; box-sizing: border-box; text-align: left; display: flex; flex-direction: column; align-items: flex-start;"';

// Replace the paragraph style
let oldPStyle = '<p style="color: var(--color-text-muted); font-size: 1rem; max-width: 600px; margin: 0 auto;">';
let newPStyle = '<p style="color: var(--color-text-muted); font-size: 1rem; max-width: 600px; margin: 0;">';

html = html.replace(oldDivStyle, newDivStyle);
html = html.replace(oldPStyle, newPStyle);

fs.writeFileSync('dashboard_client.html', html, 'utf8');
console.log('Fixed Strategic Executive Briefing alignment in client dashboard');
