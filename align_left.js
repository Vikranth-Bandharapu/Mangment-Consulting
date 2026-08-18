const fs = require('fs');

const files = ['dashboard_client.html', 'dashboard_admin.html'];

files.forEach(file => {
    if (!fs.existsSync(file)) return;
    let html = fs.readFileSync(file, 'utf8');

    // Find the Dashboard Overview header and modify its style
    // The user specifically wants the "Dashboard Overview" title and description aligned left.
    // They are inside a div with class="section-header" and inline style "text-align: center;"
    // We can just replace 'text-align: center;' with 'text-align: left;' globally for these section headers
    // Because it's generally good practice to have them all consistent.
    
    html = html.replace(/class="section-header" style="margin-bottom: 0\.5rem; text-align: center;"/g, 'class="section-header" style="margin-bottom: 0.5rem; text-align: left;"');

    fs.writeFileSync(file, html, 'utf8');
    console.log(`Updated alignments in ${file}`);
});
