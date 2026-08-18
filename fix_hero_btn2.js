const fs = require('fs');

let css = fs.readFileSync('styles.css', 'utf8');

if (!css.includes('.btn-outline-light')) {
    css += `
.btn-outline-light {
  background-color: transparent;
  color: var(--color-white);
  padding: 0.75rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;
  text-decoration: none;
  border-radius: 4px;
}
.btn-outline-light:hover {
  border-color: var(--color-white);
  background-color: rgba(255, 255, 255, 0.1);
}
`;
    fs.writeFileSync('styles.css', css, 'utf8');
}

let html = fs.readFileSync('index.html', 'utf8');

// I will replace what I just did with the new button class.
const oldLink = '<a href="404.html" class="hero-link" style="color: var(--color-white); text-decoration: none; font-weight: bold; border-bottom: 1px solid var(--color-gold); padding-bottom: 2px; transition: color 0.3s ease;">View Firm Overview';
const newLink = '<a href="404.html" class="btn-outline-light">View Firm Overview';

if (html.includes(oldLink)) {
    html = html.replace(oldLink, newLink);
    fs.writeFileSync('index.html', html, 'utf8');
    console.log('Fixed hero button with btn-outline-light!');
} else {
    // maybe I need to catch the original if it didn't replace
    console.log('Could not find the target string to replace.');
}

