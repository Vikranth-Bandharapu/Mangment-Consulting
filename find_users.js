const fs = require('fs');

const files = fs.readdirSync('.');
for (const file of files) {
    if (file.endsWith('.html') || file.endsWith('.txt')) {
        const content = fs.readFileSync(file, 'utf8');
        if (content.includes('id="users"')) {
            console.log('Found in ' + file);
            const idx = content.indexOf('id="users"');
            console.log(content.substring(idx - 50, idx + 100));
        }
    }
}
