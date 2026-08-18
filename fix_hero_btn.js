const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const targetStr = '<a href="404.html" class="btn-outline" style="border: none;">View Firm Overview';

if (html.includes(targetStr)) {
    // Instead of using btn-outline, let's just make it a clean text link that works on dark backgrounds
    const replacement = '<a href="404.html" class="hero-link" style="color: var(--color-white); text-decoration: none; font-weight: bold; border-bottom: 1px solid var(--color-gold); padding-bottom: 2px; transition: color 0.3s ease;">View Firm Overview';
    html = html.replace(targetStr, replacement);
    fs.writeFileSync('index.html', html, 'utf8');
    console.log('Fixed hero button!');
} else {
    console.log('Could not find the target string.');
}
