const fs = require('fs');

function mergeFixes(inputFile, outputFile, isClient) {
    let html = fs.readFileSync(inputFile, 'utf8');

    // 1. Fix cursor px bug
    html = html.replace('left: `${posX}px`,', 'left: `${posX}`,');
    html = html.replace('top: `${posY}px`', 'top: `${posY}`');

    // 2. Fix sidebar footer flex squishing and mobile cutoff
    const styleFix = `
    <style>
    .sidebar-footer {
        display: block !important;
        width: 100% !important;
        box-sizing: border-box;
        padding-bottom: 6rem !important; /* Mobile scroll fix */
    }
    .btn-logout {
        display: block !important;
        width: 100% !important;
        box-sizing: border-box;
        white-space: nowrap;
    }
    .sidebar-header {
      background: var(--color-navy); z-index: 10;
      position: relative;
      white-space: nowrap;
      padding: 2rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      display: flex !important;
      flex-direction: column !important;
      align-items: flex-start !important;
      gap: 1rem !important;
    }
    .avatar-small {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 2px solid var(--color-emerald);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      color: var(--color-emerald);
      background: rgba(16, 185, 129, 0.1);
      flex-shrink: 0;
    }
    .nav-item {
      display: flex !important;
      flex-direction: row !important;
      align-items: center !important;
      gap: 1rem !important;
    }
    </style>
`;
    html = html.replace('</style>', '</style>\n' + styleFix);

    // 3. Move profile card to sidebar
    const profileStartStr = '<!-- User Profile Header -->';
    const profileStart = html.indexOf(profileStartStr);
    
    if (profileStart !== -1) {
        // Find end of user-profile-card. Need to match divs properly.
        // It's usually closed after profile-role </div> then closing profile-info </div> then closing card </div>
        let searchIdx = profileStart;
        searchIdx = html.indexOf('profile-role', searchIdx);
        searchIdx = html.indexOf('</div>', searchIdx) + 6; // closes profile-role
        searchIdx = html.indexOf('</div>', searchIdx) + 6; // closes profile-info
        const profileEnd = html.indexOf('</div>', searchIdx) + 6; // closes user-profile-card
        
        let profileHTML = html.substring(profileStart, profileEnd);
        
        // Remove from main content
        html = html.substring(0, profileStart) + html.substring(profileEnd);
        
        // Modify for sidebar
        profileHTML = profileHTML.replace('padding: 1.5rem;', 'margin: 0 1rem 1rem 1rem; width: calc(100% - 2rem) !important; padding: 1rem;');
        if (!profileHTML.includes('margin: 0 1rem 1rem 1rem')) {
            profileHTML = profileHTML.replace('margin-bottom: 0.5rem;', 'margin: 0 1rem 1rem 1rem; width: calc(100% - 2rem) !important; padding: 1rem;');
        }
        profileHTML = profileHTML.replace('gap: 1.5rem;', 'gap: 1rem;');
        profileHTML = profileHTML.replace('font-size: 1.1rem;', 'font-size: 0.95rem;');
        profileHTML = profileHTML.replace('avatar-large', 'avatar-small');
        
        // Ensure closing divs are correct (since my above search might have been exact or missing one)
        // Actually, just to be extremely safe, we'll enforce the HTML structure of the card
        let email = 'email@domain.com';
        let role = 'PORTAL';
        if (profileHTML.includes('avunoori0831@gmail.com')) { email = 'avunoori0831@gmail.com'; role = 'CLIENT PORTAL'; }
        if (profileHTML.includes('cmd@stackly.agency')) { email = 'cmd@stackly.agency'; role = 'ADMIN PORTAL'; }
        
        const cleanProfileCard = \`
    <!-- User Profile Header -->
      <div class="user-profile-card" style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 12px; display: flex; align-items: center; box-sizing: border-box; margin: 0 1rem 1rem 1rem; width: calc(100% - 2rem) !important; padding: 1rem; gap: 1rem;">
        <div class="avatar-small">
           <i class="fa-solid fa-user-tie"></i>
        </div>
        <div class="profile-info">
          <div class="profile-name" style="word-break: break-all; font-size: 0.95rem;">
             <span class="profile-email" id="userEmailDisplay">\${email}</span>
          </div>
          <div class="profile-role" style="font-size: 0.75rem; color: var(--color-gold); margin-top: 0.25rem;">\${role}</div>
        </div>
      </div>
\`;
        
        // Insert it before sidebar-footer
        const footerStart = html.indexOf('<div class="sidebar-footer">');
        if (footerStart !== -1) {
            html = html.substring(0, footerStart) + cleanProfileCard + html.substring(footerStart);
        }
    }
    
    // 4. Client Portal Mobile Header Hide (The user asked to remove logo and client in mobile)
    if (isClient) {
        // Look for the header block right after <div class="content-area"> or <main>
        const headerStr = '<header style="padding: 1.5rem; border-bottom: 1px solid rgba(255, 255, 255, 0.05); display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem;">';
        if (html.includes(headerStr)) {
            const headerEnd = html.indexOf('</header>', html.indexOf(headerStr)) + 9;
            html = html.substring(0, html.indexOf(headerStr)) + html.substring(headerEnd);
        }
    }

    fs.writeFileSync(outputFile, html, 'utf8');
    console.log('Restored and applied fixes to ' + outputFile);
}

mergeFixes('dashboard_client_original.html', 'dashboard_client.html', true);
mergeFixes('dashboard_admin_original.html', 'dashboard_admin.html', false);
