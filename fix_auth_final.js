const fs = require('fs');

function fixAuth(filename) {
    let html = fs.readFileSync(filename, 'utf8');
    
    if (filename === 'login.html') {
        html = html.replace(/placeholder="Ã.*?"/, 'placeholder="********"');
    }

    const authFooterEnd = html.indexOf('</div>', html.indexOf('<div class="auth-footer"'));
    if (authFooterEnd !== -1) {
        const link = '\n      <br><br>\n      <a href="index.html" style="font-size: 0.85rem;"><i class="fa-solid fa-arrow-left"></i> Back to Home</a>\n    ';
        html = html.substring(0, authFooterEnd) + link + html.substring(authFooterEnd);
    }
    
    fs.writeFileSync(filename, html, 'utf8');
    console.log('Fixed ' + filename);
}

fixAuth('login.html');
fixAuth('signup.html');
