const fs = require('fs');

let css = fs.readFileSync('styles.css', 'utf8');

// Change hover color for nav links from navy to white
css = css.replace(
    '.nav-links a:hover {\n  color: var(--color-navy);\n}', 
    '.nav-links a:hover {\n  color: #ffffff;\n}'
);
css = css.replace(
    '.nav-links a:hover {\r\n  color: var(--color-navy);\r\n}', 
    '.nav-links a:hover {\r\n  color: #ffffff;\r\n}'
);

// Do the same for sign-in if applicable
css = css.replace(
    '.nav-actions .sign-in:hover {\n  color: var(--color-gold);\n}',
    '.nav-actions .sign-in:hover {\n  color: #ffffff;\n}' // just in case
);

fs.writeFileSync('styles.css', css, 'utf8');
console.log('Fixed nav hover colors!');
