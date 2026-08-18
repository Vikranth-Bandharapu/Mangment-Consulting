const fs = require('fs');

const files = ['dashboard_client.html', 'dashboard_admin.html'];

files.forEach(file => {
    if (!fs.existsSync(file)) return;
    let html = fs.readFileSync(file, 'utf8');

    // Fix the extensions for background images
    html = html.replace(/case_study_1_1786437153769\.jpg/g, 'case_study_1_1786437153769.webp');
    html = html.replace(/case_study_2_1786437200403\.jpg/g, 'case_study_2_1786437200403.webp');
    html = html.replace(/stackly_boardroom_outcomes_1786436446072\.jpg/g, 'stackly_boardroom_outcomes_1786436446072.webp');
    html = html.replace(/insights_bg_1786437124692\.jpg/g, 'insights_bg_1786437124692.webp');
    html = html.replace(/leader1_1786437562772\.jpg/g, 'leader1_1786437562772.webp');

    fs.writeFileSync(file, html, 'utf8');
    console.log(`Updated images in ${file}`);
});
