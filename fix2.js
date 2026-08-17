const fs = require('fs');

// Read files
let adminHtml = fs.readFileSync('dashboard_admin.html', 'utf8');
let clientHtml = fs.readFileSync('dashboard_client.html', 'utf8');

// Extract the mobile override block from admin
const blockStartStr = '    /* EXTREME MOBILE OVERRIDE INJECTED DIRECTLY */';
const blockEndStr = '</style>';
const blockStartIdx = adminHtml.indexOf(blockStartStr);
const blockEndIdx = adminHtml.lastIndexOf(blockEndStr, adminHtml.indexOf('</head>'));

if (blockStartIdx === -1 || blockEndIdx === -1) {
  console.log("Could not find block in admin");
  process.exit(1);
}

let mobileBlock = adminHtml.substring(blockStartIdx, blockEndIdx);

// Modify the padding inside the block
mobileBlock = mobileBlock.replace('.content-area { padding: 1.5rem !important; }', '.content-area { padding: 1rem !important; }');
mobileBlock = mobileBlock.replace('.dash-header-mobile-pad { padding: 1.5rem 1.5rem 0 1.5rem !important; }', '.dash-header-mobile-pad { padding: 1.5rem 1rem 0 1rem !important; }');

// Update admin HTML with the new block
adminHtml = adminHtml.substring(0, blockStartIdx) + mobileBlock + adminHtml.substring(blockEndIdx);

// Swap header in admin HTML
const headerOld = `<div class="dash-mobile-header">
    <div><a href="dashboard_admin.html"><img src="assets/logo.webp" alt="Stackly Logo" style="height: 28px;"></a></div>
    <button class="mobile-sidebar-btn" onclick="toggleMobileMenu()">
      <i class="fa-solid fa-bars"></i>
    </button>
  </div>`;

const headerNew = `<div class="dash-mobile-header" style="justify-content: flex-start; gap: 1rem; padding: 1rem;">
    <button class="mobile-sidebar-btn" onclick="toggleMobileMenu()" style="display: block; background: transparent; border: none; color: white; font-size: 1.5rem; cursor: pointer; padding: 0;">
      <i class="fa-solid fa-bars"></i>
    </button>
    <div><a href="dashboard_admin.html"><img src="assets/logo.webp" alt="Stackly Logo" style="height: 24px;"></a></div>
  </div>`;

adminHtml = adminHtml.replace(headerOld, headerNew);

// In client HTML, insert the block before </style>
const clientStyleEndIdx = clientHtml.lastIndexOf('</style>', clientHtml.indexOf('</head>'));
if (clientStyleEndIdx !== -1 && !clientHtml.includes('EXTREME MOBILE OVERRIDE INJECTED DIRECTLY')) {
  clientHtml = clientHtml.substring(0, clientStyleEndIdx) + mobileBlock + clientHtml.substring(clientStyleEndIdx);
}

// Write both files
fs.writeFileSync('dashboard_admin.html', adminHtml, 'utf8');
fs.writeFileSync('dashboard_client.html', clientHtml, 'utf8');

console.log("Successfully updated admin and client HTML.");
