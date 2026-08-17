const fs = require('fs');

function cleanUpHTML(file) {
    let html = fs.readFileSync(file, 'utf8');

    // 1. Remove the broken duplicate profile block
    const brokenBlockClient = `<!-- User Profile Header -->
      
        <div class="profile-info">
          <div class="profile-name" style="word-break: break-all; font-size: 1.1rem;">
             <span class="profile-email" id="userEmailDisplay">client@enterprise.com</span>
          </div>
          <div class="profile-role">CLIENT PORTAL</div>
        </div>
      </div>`;
      
    const brokenBlockAdmin = `<!-- User Profile Header -->
      
        <div class="profile-info">
          <div class="profile-name" style="word-break: break-all; font-size: 1.1rem;">
             <span class="profile-email" id="userEmailDisplay">admin@stackly.com</span>
          </div>
          <div class="profile-role">DIRECTOR PORTAL</div>
        </div>
      </div>`;

    html = html.replace(brokenBlockClient, '');
    html = html.replace(brokenBlockAdmin, '');

    // 2. Fix the padding in the hero-banner-text
    // It currently has: style="position: relative; padding: 2rem 0; left: 0; right: 0; padding: 0 1.5rem; text-align: center; display: flex; flex-direction: column; align-items: center;"
    html = html.replace('padding: 2rem 0; left: 0; right: 0; padding: 0 1.5rem;', 'padding: 2rem 1.5rem; width: 100%; box-sizing: border-box;');

    fs.writeFileSync(file, html, 'utf8');
}

cleanUpHTML('dashboard_client.html');
cleanUpHTML('dashboard_admin.html');
console.log('Final cleanup complete.');
