$files = @("dashboard_admin.html", "dashboard_client.html")
foreach ($file in $files) {
    $content = Get-Content $file -Raw
    $content = $content -replace "\.no-scroll \{ overflow: hidden; \}", "body.no-scroll .content-area { overflow: hidden !important; touch-action: none; }"
    Set-Content $file -Value $content
}
