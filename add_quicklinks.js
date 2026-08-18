const fs = require('fs');

const files = [
    'index.html',
    'about.html',
    'blogs.html',
    'case-studies.html',
    'contact.html',
    'industries.html',
    'services.html',
    'service_template.html',
    '404.html'
];

const quickLinks = `
        <div class="footer-col gsap-footer">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="login.html">Sign In</a></li>
            <li><a href="signup.html">Register</a></li>
            <li><a href="contact.html">Support</a></li>
            <li><a href="case-studies.html">Case Studies</a></li>
            <li><a href="404.html">FAQ</a></li>
          </ul>
        </div>`;

for (const file of files) {
    if (!fs.existsSync(file)) continue;
    let html = fs.readFileSync(file, 'utf8');
    
    if (html.includes('<h4>Quick Links</h4>')) {
        console.log(`Already has Quick Links: ${file}`);
        continue;
    }
    
    // update grid-template-columns
    html = html.replace('grid-template-columns: 1.5fr 1fr 1fr 1fr;', 'grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr;');
    html = html.replace('grid-template-columns: 2fr 1fr 1fr 1fr;', 'grid-template-columns: 2fr 1fr 1fr 1fr 1fr;');
    
    // insert column
    const searchStr = `
          <h4>Resources</h4>
          <ul>
            <li><a href="404.html">Careers</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="404.html">Client Portal</a></li>
            <li><a href="404.html">Developer Portal</a></li>
            <li><a href="404.html">Compliance</a></li>
          </ul>
        </div>`;
        
    if (html.includes(searchStr)) {
        html = html.replace(searchStr, searchStr + quickLinks);
        fs.writeFileSync(file, html, 'utf8');
        console.log(`Updated footer in ${file}`);
    } else {
        console.log(`Could not find resources block in ${file}`);
    }
}
