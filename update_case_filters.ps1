$content = Get-Content case-studies.html -Raw

# 1. Update filter buttons
$old_buttons = @"
      <div class="container gsap-fade" style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
        <button onclick="window.location.href='404.html'" class="tag" style="background: var(--color-navy); color: white; cursor: pointer;">All Sectors</button>
        <button onclick="window.location.href='404.html'" class="tag" style="background: transparent; color: var(--color-navy); cursor: pointer;">Finance</button>
        <button onclick="window.location.href='404.html'" class="tag" style="background: transparent; color: var(--color-navy); cursor: pointer;">Healthcare</button>
        <button onclick="window.location.href='404.html'" class="tag" style="background: transparent; color: var(--color-navy); cursor: pointer;">Technology</button>
        <button onclick="window.location.href='404.html'" class="tag" style="background: transparent; color: var(--color-navy); cursor: pointer;">Retail</button>
      </div>
"@

$new_buttons = @"
      <div class="container gsap-fade case-filter-container" style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
        <button onclick="filterCases('all', this)" class="tag active-filter" style="background: var(--color-navy); color: white; cursor: pointer;">All Sectors</button>
        <button onclick="filterCases('finance', this)" class="tag" style="background: transparent; color: var(--color-navy); cursor: pointer;">Finance</button>
        <button onclick="filterCases('healthcare', this)" class="tag" style="background: transparent; color: var(--color-navy); cursor: pointer;">Healthcare</button>
        <button onclick="filterCases('technology', this)" class="tag" style="background: transparent; color: var(--color-navy); cursor: pointer;">Technology</button>
        <button onclick="filterCases('retail', this)" class="tag" style="background: transparent; color: var(--color-navy); cursor: pointer;">Retail</button>
      </div>
"@
$content = $content.Replace($old_buttons, $new_buttons)

# 2. Add data-category to case cards
$content = $content.Replace(
    '<a href="404.html" class="cap-card card-button gsap-stagger" style="padding: 0; overflow: hidden; background: white; display: flex; flex-direction: column;">`n            <div style="height: 250px; width: 100%; overflow: hidden;">`n              <img src="assets/case1.webp"',
    '<a href="404.html" class="cap-card card-button gsap-stagger case-item" data-category="finance" style="padding: 0; overflow: hidden; background: white; display: flex; flex-direction: column;">`n            <div style="height: 250px; width: 100%; overflow: hidden;">`n              <img src="assets/case1.webp"'
)

$content = $content.Replace(
    '<a href="404.html" class="cap-card card-button gsap-stagger" style="padding: 0; overflow: hidden; background: white; display: flex; flex-direction: column;">`n            <div style="height: 250px; width: 100%; overflow: hidden;">`n              <img src="assets/boardroom.webp"',
    '<a href="404.html" class="cap-card card-button gsap-stagger case-item" data-category="healthcare" style="padding: 0; overflow: hidden; background: white; display: flex; flex-direction: column;">`n            <div style="height: 250px; width: 100%; overflow: hidden;">`n              <img src="assets/boardroom.webp"'
)

$content = $content.Replace(
    '<a href="404.html" class="cap-card card-button gsap-stagger" style="padding: 0; overflow: hidden; background: white; display: flex; flex-direction: column;">`n            <div style="height: 250px; width: 100%; overflow: hidden;">`n              <img src="assets/insights.webp"',
    '<a href="404.html" class="cap-card card-button gsap-stagger case-item" data-category="technology" style="padding: 0; overflow: hidden; background: white; display: flex; flex-direction: column;">`n            <div style="height: 250px; width: 100%; overflow: hidden;">`n              <img src="assets/insights.webp"'
)

$content = $content.Replace(
    '<a href="404.html" class="cap-card card-button gsap-stagger" style="padding: 0; overflow: hidden; background: white; display: flex; flex-direction: column;">`n            <div style="height: 250px; width: 100%; overflow: hidden;">`n              <img src="assets/case2.webp"',
    '<a href="404.html" class="cap-card card-button gsap-stagger case-item" data-category="retail" style="padding: 0; overflow: hidden; background: white; display: flex; flex-direction: column;">`n            <div style="height: 250px; width: 100%; overflow: hidden;">`n              <img src="assets/case2.webp"'
)

# 3. Add Javascript Function
$js_code = @"
<script>
function filterCases(category, btn) {
    const buttons = document.querySelectorAll('.case-filter-container .tag');
    buttons.forEach(b => {
        b.style.background = 'transparent';
        b.style.color = 'var(--color-navy)';
    });
    btn.style.background = 'var(--color-navy)';
    btn.style.color = 'white';

    const items = document.querySelectorAll('.case-item');
    items.forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}
</script>
</body>
"@
$content = $content.Replace("</body>", $js_code)

Set-Content case-studies.html -Value $content
