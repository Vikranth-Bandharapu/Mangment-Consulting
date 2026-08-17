const fs = require('fs');

function restoreProfile(file) {
    let html = fs.readFileSync(file, 'utf8');

    const emailStr = file.includes('admin') ? 'admin@stackly.com' : 'avunoori0831@gmail.com';
    const roleStr = file.includes('admin') ? 'DIRECTOR PORTAL' : 'CLIENT PORTAL';

    // 1. Remove profile from sidebar
    const sidebarProfileStart = html.indexOf('<div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem; padding: 0.75rem; border-radius: 8px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05);">');
    if (sidebarProfileStart !== -1) {
        let divCount = 0;
        let pos = sidebarProfileStart;
        while (pos < html.length) {
            const nextOpen = html.indexOf('<div', pos + 1);
            const nextClose = html.indexOf('</div', pos + 1);
            if (nextClose === -1) break;
            
            if (nextOpen !== -1 && nextOpen < nextClose) {
                divCount++;
                pos = nextOpen;
            } else {
                divCount--;
                pos = nextClose;
                if (divCount === 0) {
                    const endOfDiv = html.indexOf('>', pos) + 1;
                    html = html.substring(0, sidebarProfileStart) + html.substring(endOfDiv);
                    break;
                }
            }
        }
    }

    // 2. Add profile back to content-area
    const contentAreaIdx = html.indexOf('<div class="content-area">');
    if (contentAreaIdx !== -1 && html.indexOf('class="user-profile-card"') === -1) {
        const insertionPoint = html.indexOf('>', contentAreaIdx) + 1;
        const profileBox = `
      <!-- User Profile Header -->
      <div class="user-profile-card" style="width: 100%; box-sizing: border-box; margin-bottom: 0.5rem;">
        <div class="avatar-large">
           <i class="fa-solid fa-user-tie"></i>
        </div>
        <div class="profile-info">
          <div class="profile-name" style="word-break: break-all; font-size: 1.1rem;">
             <span class="profile-email" id="userEmailDisplay">${emailStr}</span>
          </div>
          <div class="profile-role">${roleStr}</div>
        </div>
      </div>
`;
        html = html.substring(0, insertionPoint) + profileBox + html.substring(insertionPoint);
    }

    // 3. Restore dash-mobile-header to flex !important
    html = html.replace(/<div class="dash-mobile-header" style="display: none;/g, '<div class="dash-mobile-header" style="display: flex !important;');

    // 4. Fix the hero banner space by removing 280px height and making text relative
    html = html.replace(/height: 280px;/g, '');
    html = html.replace(/position: absolute; bottom: 1\.5rem;/g, 'position: relative; padding: 2rem 0;');
    // Also from before if it was 2rem
    html = html.replace(/position: absolute; bottom: 2rem;/g, 'position: relative; padding: 2rem 0;');

    fs.writeFileSync(file, html, 'utf8');
}

restoreProfile('dashboard_client.html');
restoreProfile('dashboard_admin.html');
console.log('Restored and fixed space!');
