const fs = require('fs');

function moveProfile(file) {
    let html = fs.readFileSync(file, 'utf8');
    
    // Find User Profile Header
    const profileStartStr = '<!-- User Profile Header -->';
    const profileStart = html.indexOf(profileStartStr);
    
    if (profileStart === -1) {
        console.log('Profile not found in ' + file);
        return;
    }
    
    // Find the end of the profile div (it's closed after profile-role)
    const roleEnd = html.indexOf('</div>', html.indexOf('profile-role', profileStart)) + 6;
    const profileEnd = html.indexOf('</div>', roleEnd) + 6;
    
    const profileHTML = html.substring(profileStart, profileEnd);
    
    // Remove it from the original location
    html = html.substring(0, profileStart) + html.substring(profileEnd);
    
    // Also clean up any duplicate profiles if they exist (dashboard_admin might have two)
    const secondProfileStart = html.indexOf(profileStartStr);
    if (secondProfileStart !== -1 && secondProfileStart < html.indexOf('<!-- 1.')) {
         const secondRoleEnd = html.indexOf('</div>', html.indexOf('profile-role', secondProfileStart)) + 6;
         const secondProfileEnd = html.indexOf('</div>', secondRoleEnd) + 6;
         html = html.substring(0, secondProfileStart) + html.substring(secondProfileEnd);
    }
    
    // Modify profileHTML slightly for sidebar fit
    let modifiedProfile = profileHTML.replace('padding: 1.5rem;', 'padding: 1rem; margin: 0 1rem 1rem 1rem; width: calc(100% - 2rem) !important;');
    if (!modifiedProfile.includes('margin: 0 1rem 1rem 1rem')) {
        // If inline style padding wasn't there, we just add it to the user-profile-card class inline styles
        modifiedProfile = modifiedProfile.replace('margin-bottom: 0.5rem;', 'margin: 0 1rem 1rem 1rem; width: calc(100% - 2rem) !important; padding: 1rem;');
    }
    modifiedProfile = modifiedProfile.replace('gap: 1.5rem;', 'gap: 1rem;');
    modifiedProfile = modifiedProfile.replace('font-size: 1.1rem;', 'font-size: 0.95rem;');
    modifiedProfile = modifiedProfile.replace('avatar-large', 'avatar-small');
    
    // Let's add avatar-small style if it doesn't exist
    if (!html.includes('.avatar-small {')) {
        const styleEnd = html.indexOf('</style>');
        const avatarSmallCSS = `
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
`;
        html = html.substring(0, styleEnd) + avatarSmallCSS + html.substring(styleEnd);
    }

    // Insert it before sidebar-footer
    const footerStart = html.indexOf('<div class="sidebar-footer">');
    if (footerStart !== -1) {
        html = html.substring(0, footerStart) + modifiedProfile + '\n    ' + html.substring(footerStart);
    }
    
    fs.writeFileSync(file, html, 'utf8');
    console.log('Moved profile in ' + file);
}

moveProfile('dashboard_client.html');
moveProfile('dashboard_admin.html');
