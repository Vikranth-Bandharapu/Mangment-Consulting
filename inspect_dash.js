const fs = require('fs');

let html = fs.readFileSync('dashboard_client.html', 'utf8');

// The HTML might have an empty div for the images, like `<div class="case-study-img"></div>`
// Or just some padding. I will look for standard image placeholders.
console.log('Finding Marcus...');
let marcusIndex = html.indexOf('Marcus Aurelius Vance');
if (marcusIndex !== -1) {
    console.log(html.substring(marcusIndex - 200, marcusIndex + 100));
}

console.log('Finding Case Studies...');
let caseIndex = html.indexOf('Featured Case Studies');
if (caseIndex !== -1) {
    console.log(html.substring(caseIndex, caseIndex + 600));
}

console.log('Finding Market Intel...');
let marketIndex = html.indexOf('Competitor M&A Landscape');
if (marketIndex !== -1) {
    console.log(html.substring(marketIndex - 200, marketIndex + 300));
}
