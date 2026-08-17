const fs = require('fs');

function fixSidebar(file) {
    let html = fs.readFileSync(file, 'utf8');

    // The broken block is:
    // <div class="sidebar-footer">
    //   
    //     <div style="display: flex; flex-direction: column; overflow: hidden;">
    //       <span style="font-size: 0.8rem; font-weight: bold; color: var(--color-white); white-space: nowrap; text-overflow: ellipsis; overflow: hidden;" title="...">...</span>
    //       <span style="font-size: 0.65rem; color: var(--color-gold); text-transform: uppercase; letter-spacing: 1px; margin-top: 0.2rem;">...</span>
    //     </div>
    //   </div>
    //
    //   <a href="index.html" class="btn-logout"><i class="fa-solid fa-arrow-right-from-bracket"></i> Secure Logout</a>
    // </div>

    const footerStart = html.indexOf('<div class="sidebar-footer">');
    if (footerStart !== -1) {
        const logoutStart = html.indexOf('<a href="index.html" class="btn-logout">', footerStart);
        if (logoutStart !== -1) {
            html = html.substring(0, footerStart + '<div class="sidebar-footer">'.length) + '\n      ' + html.substring(logoutStart);
        }
    }

    fs.writeFileSync(file, html, 'utf8');
}

fixSidebar('dashboard_client.html');
fixSidebar('dashboard_admin.html');
console.log('Fixed sidebar!');
