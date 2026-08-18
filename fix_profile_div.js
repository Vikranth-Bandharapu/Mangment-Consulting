const fs = require('fs');

function fixProfileDiv(file) {
    let html = fs.readFileSync(file, 'utf8');
    
    html = html.replace('</div>\n    <div class="sidebar-footer">', '</div>\n      </div>\n    <div class="sidebar-footer">');
    fs.writeFileSync(file, html, 'utf8');
}

fixProfileDiv('dashboard_client.html');
fixProfileDiv('dashboard_admin.html');
