const fs = require('fs');

function addScrollHeader(filename) {
    if (!fs.existsSync(filename)) return;
    let html = fs.readFileSync(filename, 'utf8');

    if (!html.includes('scrolled-header')) {
        const script = `
<script>
window.addEventListener("scroll", () => {
  const header = document.querySelector(".glass-header");
  if (header) {
    if (window.scrollY > 50) {
      header.style.backgroundColor = "var(--color-navy)";
      header.style.transition = "background-color 0.3s ease";
    } else {
      header.style.backgroundColor = "rgba(255, 255, 255, 0.85)";
    }
  }
});
</script>
</body>`;
        html = html.replace('</body>', script);
        fs.writeFileSync(filename, html, 'utf8');
    }
}

addScrollHeader('index.html');
addScrollHeader('services.html');
addScrollHeader('industries.html');
addScrollHeader('case-studies.html');
addScrollHeader('blogs.html');
addScrollHeader('about.html');
addScrollHeader('login.html');
