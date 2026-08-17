const fs = require('fs');

function processFile(file, titleStr) {
  let html = fs.readFileSync(file, 'utf8');

  // 1. Merge Headers
  const mobileHeaderStart = html.indexOf('<div class="dash-mobile-header"');
  if (mobileHeaderStart !== -1) {
    const padHeaderEnd = html.indexOf('</div>\n    <div class="content-area">');
    if (padHeaderEnd !== -1) {
      const mergedHeader = `<div class="dash-mobile-header" style="display: flex !important; justify-content: space-between; align-items: center; padding: 1rem 1.5rem; background: #080d1f; border-bottom: 1px solid rgba(255,255,255,0.05); width: 100%; box-sizing: border-box;">
    <div style="display: flex; align-items: center; gap: 1rem;">
      <a href="${file}"><img src="assets/logo.webp" alt="Stackly Logo" style="height: 24px;"></a>
      <div style="width: 1px; height: 24px; background: rgba(255,255,255,0.2);"></div>
      <h3 style="margin: 0; font-family: var(--font-serif); font-size: 1.2rem; font-weight: normal; letter-spacing: 1px; text-transform: uppercase;">${titleStr}</h3>
    </div>
    <div style="display: flex; align-items: center; gap: 1.5rem;">
      <div style="position: relative; cursor: pointer;" onclick="window.location.href='404.html'">
        <i class="fa-solid fa-envelope" style="font-size: 1.5rem; color: var(--color-gold);"></i>
        <span style="position: absolute; top: -5px; right: -8px; background: #ef4444; color: white; font-size: 0.65rem; font-weight: bold; padding: 2px 5px; border-radius: 50%;">3</span>
      </div>
      <button class="mobile-sidebar-btn" onclick="toggleMobileMenu()" style="display: block; background: transparent; border: none; color: white; font-size: 1.5rem; cursor: pointer; padding: 0;">
        <i class="fa-solid fa-bars"></i>
      </button>
    </div>
  </div>`;
      html = html.substring(0, mobileHeaderStart) + mergedHeader + html.substring(padHeaderEnd + 6); // +6 for '</div>'
    }
  }

  // 2. Center .section-header and reduce margin
  html = html.replace(/<div class="section-header" style="margin-bottom: 2rem;">/g, '<div class="section-header" style="margin-bottom: 0.5rem; text-align: center;">');
  html = html.replace(/<div class="section-header" style="margin-bottom: 1\.5rem;">/g, '<div class="section-header" style="margin-bottom: 0.5rem; text-align: center;">');
  html = html.replace(/<div class="section-header">/g, '<div class="section-header" style="margin-bottom: 0.5rem; text-align: center;">');

  // 3. Center Hero Banner
  const heroTextStart = html.indexOf('<div class="hero-banner-text"');
  if (heroTextStart !== -1) {
    const heroTextEnd = html.indexOf('</div>', heroTextStart);
    let heroTextBlock = html.substring(heroTextStart, heroTextEnd + 6);
    
    // Replace left/right with 0, add text-align center
    heroTextBlock = heroTextBlock.replace('left: 1.5rem; right: 1.5rem;', 'left: 0; right: 0; padding: 0 1.5rem; text-align: center; display: flex; flex-direction: column; align-items: center;');
    // Add margin: 0 auto to p
    heroTextBlock = heroTextBlock.replace('<p style="color: var(--color-text-muted); font-size: 1rem; max-width: 600px;">', '<p style="color: var(--color-text-muted); font-size: 1rem; max-width: 600px; margin: 0 auto;">');
    
    html = html.substring(0, heroTextStart) + heroTextBlock + html.substring(heroTextEnd + 6);
  }

  fs.writeFileSync(file, html, 'utf8');
}

processFile('dashboard_client.html', 'Client Portal');
processFile('dashboard_admin.html', 'Director Portal');
console.log('Fixed fix3');
