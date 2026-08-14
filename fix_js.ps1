$client = Get-Content dashboard_client.html -Raw
$client = $client.Replace("cursorDot.style.left = `${posX}px;", "cursorDot.style.left = ``${posX}px``;")
$client = $client.Replace("cursorDot.style.top = `${posY}px;", "cursorDot.style.top = ``${posY}px``;")
Set-Content dashboard_client.html -Value $client

$admin = Get-Content dashboard_admin.html -Raw
$admin = $admin.Replace("cursorDot.style.left = `${posX}px;", "cursorDot.style.left = ``${posX}px``;")
$admin = $admin.Replace("cursorDot.style.top = `${posY}px;", "cursorDot.style.top = ``${posY}px``;")
Set-Content dashboard_admin.html -Value $admin
