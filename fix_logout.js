const fs = require('fs');

function fixLogoutButton(file) {
    let html = fs.readFileSync(file, 'utf8');

    if (html.includes('@media (max-width: 768px) {')) {
         const footerFix = `\n        .sidebar-footer { 
            display: block !important; 
            width: 100% !important; 
            box-sizing: border-box !important;
            padding-bottom: 6rem !important; 
        }
        .btn-logout {
            width: 100% !important;
            white-space: nowrap !important;
            min-width: 200px !important;
        }`;
         
         // Replace the old override with the new comprehensive one
         html = html.replace('.sidebar-footer { padding-bottom: 6rem !important; }', footerFix);
    }

    fs.writeFileSync(file, html, 'utf8');
}

fixLogoutButton('dashboard_client.html');
fixLogoutButton('dashboard_admin.html');
console.log('Squished button fixed!');
