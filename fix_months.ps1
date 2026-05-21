$file = "frontend\src\pages\AdminDashboard.jsx"
$content = Get-Content $file -Raw -Encoding UTF8
$content = $content.Replace("Summary check for next 12 months", "Summary check for next 13 months (12 user + 1 admin bonus)")
$content = $content.Replace("length: 12 }, (_, i) => {", "length: 13 }, (_, i) => {")
$content = $content.Replace("const isOwner = m === 12;", "const isOwner = m === 13;")
[System.IO.File]::WriteAllText((Resolve-Path $file), $content, [System.Text.Encoding]::UTF8)
Write-Host "Done"
