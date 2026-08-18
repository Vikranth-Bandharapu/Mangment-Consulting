const fs = require('fs');

let css = fs.readFileSync('styles.css', 'utf8');

// The user is having trouble with the hover text visibility on different backgrounds (dark/light headers).
// Instead of white (which is invisible on a white header) or navy (which is invisible on a dark header),
// I will change the hover color to gold, which stands out beautifully on both.

css = css.replace(
    '.nav-links a:hover {\n  color: #ffffff;\n}', 
    '.nav-links a:hover {\n  color: var(--color-gold);\n}'
);
css = css.replace(
    '.nav-links a:hover {\r\n  color: #ffffff;\r\n}', 
    '.nav-links a:hover {\r\n  color: var(--color-gold);\r\n}'
);

css = css.replace(
    '.nav-actions .sign-in:hover {\n  color: #ffffff;\n}',
    '.nav-actions .sign-in:hover {\n  color: var(--color-gold);\n}'
);
css = css.replace(
    '.nav-actions .sign-in:hover {\r\n  color: #ffffff;\r\n}',
    '.nav-actions .sign-in:hover {\r\n  color: var(--color-gold);\r\n}'
);

// If it was still navy somehow, replace it too
css = css.replace(
    '.nav-links a:hover {\n  color: var(--color-navy);\n}', 
    '.nav-links a:hover {\n  color: var(--color-gold);\n}'
);
css = css.replace(
    '.nav-actions .sign-in:hover {\n  color: var(--color-navy);\n}',
    '.nav-actions .sign-in:hover {\n  color: var(--color-gold);\n}'
);

fs.writeFileSync('styles.css', css, 'utf8');
console.log('Fixed nav hover colors to gold!');
