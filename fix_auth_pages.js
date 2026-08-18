const fs = require('fs');

function fixAuthPage(file) {
    let html = fs.readFileSync(file, 'utf8');

    // Fix Mojibake in password placeholder in login.html
    if (file === 'login.html') {
        html = html.replace('placeholder="Ã¢â‚¬Â¢Ã¢â‚¬Â¢Ã¢â‚¬Â¢Ã¢â‚¬Â¢Ã¢â‚¬Â¢Ã¢â‚¬Â¢Ã¢â‚¬Â¢Ã¢â‚¬Â¢"', 'placeholder="********"');
        // Also just in case it's actually parsed differently
        html = html.replace(/placeholder="Ã.*?Ã.*?"/, 'placeholder="********"');
    }

    // Add back to home button to auth-footer
    const footerStr = '<div class="auth-footer">';
    if (html.includes(footerStr)) {
        let replacement = '';
        if (file === 'login.html') {
            replacement = \`<div class="auth-footer">
      Don't have an account? <a href="signup.html">Register here</a>
      <br><br>
      <a href="index.html" style="font-size: 0.9rem; text-decoration: none;"><i class="fa-solid fa-arrow-left"></i> Back to Home</a>\`;
        } else if (file === 'signup.html') {
            replacement = \`<div class="auth-footer">
      Already have an account? <a href="login.html">Sign in here</a>
      <br><br>
      <a href="index.html" style="font-size: 0.9rem; text-decoration: none;"><i class="fa-solid fa-arrow-left"></i> Back to Home</a>\`;
        }
        
        // Remove existing "Back to Home" if we accidentally added it before to avoid duplicates
        if (!html.includes('<i class="fa-solid fa-arrow-left"></i> Back to Home</a>')) {
             if (file === 'login.html') {
                 html = html.replace(\`<div class="auth-footer">
      Don't have an account? <a href="signup.html">Register here</a>\`, replacement);
             } else if (file === 'signup.html') {
                 html = html.replace(\`<div class="auth-footer">
      Already have an account? <a href="login.html">Sign in here</a>\`, replacement);
             }
        }
    }
    
    fs.writeFileSync(file, html, 'utf8');
    console.log('Fixed ' + file);
}

fixAuthPage('login.html');
fixAuthPage('signup.html');
