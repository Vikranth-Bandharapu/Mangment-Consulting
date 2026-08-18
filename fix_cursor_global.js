const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\admin\\Desktop\\Mangement Consulting';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const fullPath = path.join(dir, file);
    let html = fs.readFileSync(fullPath, 'utf8');
    
    let changed = false;
    
    // Fix cursorDot left and top
    if (html.includes('cursorDot.style.left = `px`;')) {
        html = html.replace(/cursorDot\.style\.left = `px`;/g, 'cursorDot.style.left = `${posX}px`;');
        changed = true;
    }
    if (html.includes('cursorDot.style.top = `px`;')) {
        html = html.replace(/cursorDot\.style\.top = `px`;/g, 'cursorDot.style.top = `${posY}px`;');
        changed = true;
    }
    
    // Also, just in case, ensure it's not cursorDot.style.left = px; (without backticks)
    if (html.includes('cursorDot.style.left = px;')) {
        html = html.replace(/cursorDot\.style\.left = px;/g, 'cursorDot.style.left = `${posX}px`;');
        changed = true;
    }
    if (html.includes('cursorDot.style.top = px;')) {
        html = html.replace(/cursorDot\.style\.top = px;/g, 'cursorDot.style.top = `${posY}px`;');
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(fullPath, html, 'utf8');
        console.log('Fixed cursor in ' + file);
    }
});
console.log('Done scanning all HTML files.');
