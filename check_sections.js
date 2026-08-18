const fs = require('fs');
let html = fs.readFileSync('dashboard_admin.html', 'utf8');

console.log('users:', html.includes('id="users"'));
console.log('system:', html.includes('id="system"'));
console.log('command:', html.includes('id="command"'));
console.log('utilization:', html.includes('id="utilization"'));
console.log('talent:', html.includes('id="talent"'));
