const fs = require('fs');
let html = fs.readFileSync('dashboard_client.html', 'utf8');
console.log(html.substring(html.indexOf('<div class="sidebar-nav"'), html.indexOf('</aside>')));
