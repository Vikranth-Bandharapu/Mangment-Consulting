const fs = require('fs');

function moveProfile(file) {
    let html = fs.readFileSync(file, 'utf8');

    // 1. Delete user-profile-card block completely
    const profileStart = html.indexOf('<div class="user-profile-card"');
    if (profileStart !== -1) {
        // Find the matching closing </div>
        let divCount = 0;
        let pos = profileStart;
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
                    // pos is at the </div of the main container
                    const endOfDiv = html.indexOf('>', pos) + 1;
                    html = html.substring(0, profileStart) + html.substring(endOfDiv);
                    break;
                }
            }
        }
    }

    // 2. Hide the dash-mobile-header on desktop by removing !important
    html = html.replace(/<div class="dash-mobile-header" style="display: flex !important;/g, '<div class="dash-mobile-header" style="display: flex;');
    // Or if it just says display: flex !important
    html = html.replace(/display: flex !important;/g, 'display: flex;');
    
    // We also need to add a css rule to hide top-nav-header on desktop if it's missing.
    // .dash-mobile-header { display: none !important; } @media (max-width: 768px) { .dash-mobile-header { display: flex !important; } }
    // Let's just ensure it hides on desktop. We can add a <style> block in head if needed.
    // Actually the <style> in dashboard_admin/client already has a media query! 
    // We just need to give .dash-mobile-header a default display: none;

    const emailStr = file.includes('admin') ? 'admin@stackly.com' : 'avunoori0831@gmail.com';
    const roleStr = file.includes('admin') ? 'DIRECTOR PORTAL' : 'CLIENT PORTAL';

    // 3. Insert user info into sidebar-footer
    const sidebarFooterStart = html.indexOf('<div class="sidebar-footer">');
    if (sidebarFooterStart !== -1) {
        const insertionPoint = html.indexOf('>', sidebarFooterStart) + 1;
        const profileHtml = `
      <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem; padding: 0.75rem; border-radius: 8px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05);">
        <div style="width: 36px; height: 36px; border-radius: 50%; background: rgba(200, 169, 126, 0.1); display: flex; align-items: center; justify-content: center; color: var(--color-gold); font-size: 1.1rem; flex-shrink: 0;">
          <i class="fa-solid fa-user-tie"></i>
        </div>
        <div style="display: flex; flex-direction: column; overflow: hidden;">
          <span style="font-size: 0.8rem; font-weight: bold; color: var(--color-white); white-space: nowrap; text-overflow: ellipsis; overflow: hidden;" title="${emailStr}">${emailStr}</span>
          <span style="font-size: 0.65rem; color: var(--color-gold); text-transform: uppercase; letter-spacing: 1px; margin-top: 0.2rem;">${roleStr}</span>
        </div>
      </div>
`;
        html = html.substring(0, insertionPoint) + profileHtml + html.substring(insertionPoint);
    }
    
    // Ensure dash-mobile-header is hidden by default. Let's add it to the inline style if not mobile?
    // Actually, we can just replace 'display: flex;' with 'display: none;' and let the media query override it to flex!
    html = html.replace(/<div class="dash-mobile-header" style="display: flex;/g, '<div class="dash-mobile-header" style="display: none;');

    fs.writeFileSync(file, html, 'utf8');
}

moveProfile('dashboard_client.html');
moveProfile('dashboard_admin.html');
console.log('Moved profile to sidebar!');
