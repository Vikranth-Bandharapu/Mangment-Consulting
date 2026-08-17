$content = Get-Content blogs.html -Raw

# 1. Update filter buttons
$old_buttons = @"
      <div class="container gsap-fade" style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
        <button onclick="window.location.href='404.html'" class="tag" style="background: var(--color-navy); color: white; cursor: pointer;">All Insights</button>
        <button onclick="window.location.href='404.html'" class="tag" style="background: transparent; color: var(--color-navy); cursor: pointer;">Macro Strategy</button>
        <button onclick="window.location.href='404.html'" class="tag" style="background: transparent; color: var(--color-navy); cursor: pointer;">Digital Core</button>
        <button onclick="window.location.href='404.html'" class="tag" style="background: transparent; color: var(--color-navy); cursor: pointer;">Supply Chain</button>
        <button onclick="window.location.href='404.html'" class="tag" style="background: transparent; color: var(--color-navy); cursor: pointer;">M&A</button>
      </div>
"@

$new_buttons = @"
      <div class="container gsap-fade filter-container" style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
        <button onclick="filterBlog('all', this)" class="tag active-filter" style="background: var(--color-navy); color: white; cursor: pointer;">All Insights</button>
        <button onclick="filterBlog('digital-core', this)" class="tag" style="background: transparent; color: var(--color-navy); cursor: pointer;">Digital Core</button>
        <button onclick="filterBlog('supply-chain', this)" class="tag" style="background: transparent; color: var(--color-navy); cursor: pointer;">Supply Chain</button>
        <button onclick="filterBlog('m-and-a', this)" class="tag" style="background: transparent; color: var(--color-navy); cursor: pointer;">M&A</button>
        <button onclick="filterBlog('finance', this)" class="tag" style="background: transparent; color: var(--color-navy); cursor: pointer;">Finance</button>
      </div>
"@

$content = $content.Replace($old_buttons, $new_buttons)

# 2. Update existing cards with data-category
$content = $content.Replace(
    '<a href="404.html" class="cap-card card-button gsap-stagger" style="padding: 0; overflow: hidden; background: var(--color-offwhite); display: flex; flex-direction: column;">`n            <div style="height: 200px; width: 100%; overflow: hidden;">`n              <img src="assets/case1.webp"',
    '<a href="404.html" class="cap-card card-button gsap-stagger blog-item" data-category="m-and-a" style="padding: 0; overflow: hidden; background: var(--color-offwhite); display: flex; flex-direction: column;">`n            <div style="height: 200px; width: 100%; overflow: hidden;">`n              <img src="assets/case1.webp"'
)

$content = $content.Replace(
    '<a href="404.html" class="cap-card card-button gsap-stagger" style="padding: 0; overflow: hidden; background: var(--color-offwhite); display: flex; flex-direction: column;">`n            <div style="height: 200px; width: 100%; overflow: hidden;">`n              <img src="assets/hero.webp"',
    '<a href="404.html" class="cap-card card-button gsap-stagger blog-item" data-category="supply-chain" style="padding: 0; overflow: hidden; background: var(--color-offwhite); display: flex; flex-direction: column;">`n            <div style="height: 200px; width: 100%; overflow: hidden;">`n              <img src="assets/hero.webp"'
)

$content = $content.Replace(
    '<a href="404.html" class="cap-card card-button gsap-stagger" style="padding: 0; overflow: hidden; background: var(--color-offwhite); display: flex; flex-direction: column;">`n            <div style="height: 200px; width: 100%; overflow: hidden;">`n              <img src="assets/boardroom.webp"',
    '<a href="404.html" class="cap-card card-button gsap-stagger blog-item" data-category="digital-core" style="padding: 0; overflow: hidden; background: var(--color-offwhite); display: flex; flex-direction: column;">`n            <div style="height: 200px; width: 100%; overflow: hidden;">`n              <img src="assets/boardroom.webp"'
)

# 3. Add Finance Card
$digital_core_card_end = @"
              <p style="color: var(--color-text-muted); font-size: 0.9rem;">Separating generative AI hype from actual P&L utility in enterprise workflows.</p>
            </div>
          </a>
"@
$finance_card = @"
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
"@
$content = $content.Replace($digital_core_card_end, "$digital_core_card_end`n$finance_card")

# 4. Add JavaScript
$js_code = @"
<script>
function filterBlog(category, btn) {
    const buttons = document.querySelectorAll('.filter-container .tag');
    buttons.forEach(b => {
        b.style.background = 'transparent';
        b.style.color = 'var(--color-navy)';
    });
    btn.style.background = 'var(--color-navy)';
    btn.style.color = 'white';

    const items = document.querySelectorAll('.blog-item');
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

Set-Content blogs.html -Value $content
