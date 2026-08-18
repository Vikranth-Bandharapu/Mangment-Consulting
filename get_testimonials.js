const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
let start = html.indexOf('<section class="testimonials"');
if (start === -1) {
    start = html.indexOf('<section class="testimonials');
}
if (start !== -1) {
    let end = html.indexOf('</section>', start) + 10;
    console.log(html.substring(start, end));
} else {
    console.log('Not found');
}
