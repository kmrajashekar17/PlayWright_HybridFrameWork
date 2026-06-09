$timestamp = Get-Date -Format "yyyy-MM-dd_HH-mm-ss"
$reportFolder = "allure-history\allure-report-$timestamp"

npx allure generate allure-results --clean -o $reportFolder

Write-Host "Report generated: $reportFolder"

npx allure open $reportFolder