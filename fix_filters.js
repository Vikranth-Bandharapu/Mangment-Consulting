const fs = require('fs');

function fixBlogs() {
    let html = fs.readFileSync('blogs.html', 'utf8');

    // Remove zero-width spaces or weird BOM
    html = html.replace(/^\uFEFF/, '');

    // 1. Buttons
    const oldBtns = /<button onclick="window\.location\.href='404\.html'" class="tag" style="background: var\(--color-navy\); color: white; cursor: pointer;">All Insights<\/button>[\s\S]*?<button onclick="window\.location\.href='404\.html'" class="tag" style="background: transparent; color: var\(--color-navy\); cursor: pointer;">M&A<\/button>/g;
    
    const newBtns = `<button onclick="filterBlog('all', this)" class="tag active-filter" style="background: var(--color-navy); color: white; cursor: pointer;">All Insights</button>
        <button onclick="filterBlog('digital-core', this)" class="tag" style="background: transparent; color: var(--color-navy); cursor: pointer;">Digital Core</button>
        <button onclick="filterBlog('supply-chain', this)" class="tag" style="background: transparent; color: var(--color-navy); cursor: pointer;">Supply Chain</button>
        <button onclick="filterBlog('m-and-a', this)" class="tag" style="background: transparent; color: var(--color-navy); cursor: pointer;">M&A</button>
        <button onclick="filterBlog('finance', this)" class="tag" style="background: transparent; color: var(--color-navy); cursor: pointer;">Finance</button>`;

    html = html.replace(oldBtns, newBtns);

    // 2. Data attributes
    html = html.replace(/<a href="404\.html" class="cap-card card-button gsap-stagger"([^>]*)>([\s\S]*?)<div class="tag"([^>]*)>M&A<\/div>/g, '<a href="404.html" class="cap-card card-button gsap-stagger blog-item" data-category="m-and-a"$1>$2<div class="tag"$3>M&A</div>');

    html = html.replace(/<a href="404\.html" class="cap-card card-button gsap-stagger"([^>]*)>([\s\S]*?)<div class="tag"([^>]*)>SUPPLY CHAIN<\/div>/g, '<a href="404.html" class="cap-card card-button gsap-stagger blog-item" data-category="supply-chain"$1>$2<div class="tag"$3>SUPPLY CHAIN</div>');

    html = html.replace(/<a href="404\.html" class="cap-card card-button gsap-stagger"([^>]*)>([\s\S]*?)<div class="tag"([^>]*)>DIGITAL CORE<\/div>/g, '<a href="404.html" class="cap-card card-button gsap-stagger blog-item" data-category="digital-core"$1>$2<div class="tag"$3>DIGITAL CORE</div>');

    // 3. Add Finance card if not exists
    if (!html.includes('FINANCE</div>')) {
        const financeCard = `
          <a href="404.html" class="cap-card card-button gsap-stagger blog-item" data-category="finance" style="padding: 0; overflow: hidden; background: var(--color-offwhite); display: flex; flex-direction: column;">
            <div style="height: 200px; width: 100%; overflow: hidden;">
              <img src="assets/case2.webp" alt="Insight" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            </div>
            <div style="padding: 2rem;">
              <div class="tag" style="border: 1px solid rgba(0,0,0,0.1); margin-bottom: 1rem; color: var(--color-navy);">FINANCE</div>
              <h4 style="color: var(--color-navy); margin-bottom: 1rem; font-size: 1.2rem;">Modernizing Corporate Finance</h4>
              <p style="color: var(--color-text-muted); font-size: 0.9rem;">How agile forecasting methods are redefining financial stability.</p>
            </div>
          </a>
        </div>`;
        html = html.replace(/<\/div>\s*<\/div>\s*<\/section>\s*<!-- 6\. Newsletter/g, financeCard + "\n      </div>\n    </section>\n\n    <!-- 6. Newsletter");
    }

    fs.writeFileSync('blogs.html', html, 'utf8');
}

function fixCaseStudies() {
    let html = fs.readFileSync('case-studies.html', 'utf8');
    html = html.replace(/^\uFEFF/, '');

    // 1. Buttons
    const oldBtns = /<button onclick="window\.location\.href='404\.html'" class="tag" style="background: var\(--color-navy\); color: white; cursor: pointer;">All Sectors<\/button>[\s\S]*?<button onclick="window\.location\.href='404\.html'" class="tag" style="background: transparent; color: var\(--color-navy\); cursor: pointer;">Retail<\/button>/g;
    
    const newBtns = `<button onclick="filterCases('all', this)" class="tag active-filter" style="background: var(--color-navy); color: white; cursor: pointer;">All Sectors</button>
        <button onclick="filterCases('finance', this)" class="tag" style="background: transparent; color: var(--color-navy); cursor: pointer;">Finance</button>
        <button onclick="filterCases('healthcare', this)" class="tag" style="background: transparent; color: var(--color-navy); cursor: pointer;">Healthcare</button>
        <button onclick="filterCases('technology', this)" class="tag" style="background: transparent; color: var(--color-navy); cursor: pointer;">Technology</button>
        <button onclick="filterCases('retail', this)" class="tag" style="background: transparent; color: var(--color-navy); cursor: pointer;">Retail</button>`;

    html = html.replace(oldBtns, newBtns);

    // 2. Data attributes
    html = html.replace(/<a href="404\.html" class="cap-card card-button gsap-stagger"([^>]*)>([\s\S]*?)<div class="tag"([^>]*)>FINANCE<\/div>/g, '<a href="404.html" class="cap-card card-button gsap-stagger case-item" data-category="finance"$1>$2<div class="tag"$3>FINANCE</div>');

    html = html.replace(/<a href="404\.html" class="cap-card card-button gsap-stagger"([^>]*)>([\s\S]*?)<div class="tag"([^>]*)>HEALTHCARE<\/div>/g, '<a href="404.html" class="cap-card card-button gsap-stagger case-item" data-category="healthcare"$1>$2<div class="tag"$3>HEALTHCARE</div>');

    html = html.replace(/<a href="404\.html" class="cap-card card-button gsap-stagger"([^>]*)>([\s\S]*?)<div class="tag"([^>]*)>TECHNOLOGY<\/div>/g, '<a href="404.html" class="cap-card card-button gsap-stagger case-item" data-category="technology"$1>$2<div class="tag"$3>TECHNOLOGY</div>');

    html = html.replace(/<a href="404\.html" class="cap-card card-button gsap-stagger"([^>]*)>([\s\S]*?)<div class="tag"([^>]*)>RETAIL<\/div>/g, '<a href="404.html" class="cap-card card-button gsap-stagger case-item" data-category="retail"$1>$2<div class="tag"$3>RETAIL</div>');

    fs.writeFileSync('case-studies.html', html, 'utf8');
}

fixBlogs();
fixCaseStudies();
console.log("Done");
