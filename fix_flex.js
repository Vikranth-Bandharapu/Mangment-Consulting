const fs = require('fs');

function fixFlexWrap(file) {
    if (!fs.existsSync(file)) return;
    let html = fs.readFileSync(file, 'utf8');
    
    // Specifically target the problem area in case-studies.html
    if (file === 'case-studies.html') {
        const target = 'class="gsap-fade" style="display: flex; gap: 4rem; align-items: center; margin-top: 3rem;"';
        const replacement = 'class="gsap-fade" style="display: flex; flex-wrap: wrap; gap: 4rem; align-items: center; margin-top: 3rem;"';
        
        const child1Target = 'style="flex: 1; height: 500px; border-radius: 12px; overflow: hidden; position: relative;"';
        const child1Replacement = 'style="flex: 1; min-width: 300px; height: 500px; border-radius: 12px; overflow: hidden; position: relative;"';
        
        const child2Target = 'style="flex: 1;"';
        const child2Replacement = 'style="flex: 1; min-width: 300px;"';
        
        html = html.replace(target, replacement);
        html = html.replace(child1Target, child1Replacement);
        html = html.replace(child2Target, child2Replacement);
    }
    
    // General fix for other display: flex inline styles that don't wrap
    html = html.replace(/style="([^"]*display:\s*flex;[^"]*)"/g, (match, styleContent) => {
        if (styleContent.includes('flex-direction') || styleContent.includes('wrap')) return match;
        return `style="flex-wrap: wrap; ${styleContent}"`;
    });
    
    fs.writeFileSync(file, html, 'utf8');
}

['case-studies.html', 'index.html', 'about.html', 'services.html', 'industries.html'].forEach(fixFlexWrap);
console.log('Fixed inline flex issues');
