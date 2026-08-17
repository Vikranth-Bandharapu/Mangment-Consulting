const fs = require('fs');

function hideMobileHeader(file) {
    let html = fs.readFileSync(file, 'utf8');

    // Remove "display: flex !important;" from the dash-mobile-header inline style
    html = html.replace(/<div class="dash-mobile-header" style="display: flex !important;/g, '<div class="dash-mobile-header" style="display: none;');

    // To be extremely safe, let's also inject a media query to ensure it shows up ONLY on mobile screens (<768px)
    // We already have an injected <style> block "EXTREME MOBILE OVERRIDE"
    const mobileStyle = `
        .dash-mobile-header {
          display: none !important;
        }
        @media (max-width: 768px) {
          .dash-mobile-header {
            display: flex !important;
          }
        }`;
    
    // Let's add it before </style> in the EXTREME MOBILE OVERRIDE block
    if (html.includes('/* EXTREME MOBILE OVERRIDE INJECTED DIRECTLY */')) {
        html = html.replace('/* Fix the header alignment */', mobileStyle + '\n        /* Fix the header alignment */');
    }

    fs.writeFileSync(file, html, 'utf8');
}

hideMobileHeader('dashboard_client.html');
hideMobileHeader('dashboard_admin.html');
console.log('Mobile header hidden on desktop!');
