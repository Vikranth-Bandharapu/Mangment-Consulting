const fs = require('fs');

const files = ['dashboard_client.html', 'dashboard_admin.html'];

files.forEach(file => {
    if (!fs.existsSync(file)) return;
    let html = fs.readFileSync(file, 'utf8');

    // Add assets/ prefix to the specific images we fixed
    html = html.replace(/url\('case_study_1_1786437153769\.webp'\)/g, "url('assets/case_study_1_1786437153769.webp')");
    html = html.replace(/url\('case_study_2_1786437200403\.webp'\)/g, "url('assets/case_study_2_1786437200403.webp')");
    html = html.replace(/url\('stackly_boardroom_outcomes_1786436446072\.webp'\)/g, "url('assets/stackly_boardroom_outcomes_1786436446072.webp')");
    html = html.replace(/url\('insights_bg_1786437124692\.webp'\)/g, "url('assets/insights_bg_1786437124692.webp')");
    html = html.replace(/url\('leader1_1786437562772\.webp'\)/g, "url('assets/leader1_1786437562772.webp')");

    fs.writeFileSync(file, html, 'utf8');
    console.log(`Updated paths in ${file}`);
});
