$files = @("dashboard_admin.html", "dashboard_client.html")
foreach ($file in $files) {
    $content = Get-Content $file -Raw
    
    # 1. Add .no-scroll CSS
    if (-not $content.Contains(".no-scroll {")) {
        $css_to_add = "`n    .no-scroll { overflow: hidden; }`n"
        $content = $content -replace "</style>", "$css_to_add</style>"
    }
    
    # 2. Update toggle button onclick
    $old_onclick = "document.querySelector('.sidebar').classList.toggle('active')"
    $new_onclick = "document.querySelector('.sidebar').classList.toggle('active'); document.body.classList.toggle('no-scroll');"
    $content = $content.Replace($old_onclick, $new_onclick)
    
    # 3. Update nav item click handler
    $old_js = "document.querySelector('.sidebar').classList.remove('active'); // Close sidebar on mobile"
    $new_js = "document.querySelector('.sidebar').classList.remove('active'); // Close sidebar on mobile`n          document.body.classList.remove('no-scroll');"
    $content = $content.Replace($old_js, $new_js)
    
    Set-Content $file -Value $content
}
