const fs = require('fs');
let html = fs.readFileSync('dashboard_client.html', 'utf8');
const sections = ['projects', 'financials', 'analytics', 'market'];
for (const sec of sections) {
    const start = html.indexOf(`<section id="${sec}"`);
    if (start !== -1) {
        const end = html.indexOf('</section>', start) + 10;
        console.log(`--- ${sec} ---`);
        console.log(html.substring(start, end));
    }
}
