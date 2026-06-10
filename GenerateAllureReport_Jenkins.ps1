$timestamp = Get-Date -Format "yyyy-MM-dd_HH-mm-ss"

# Latest report
npx allure generate allure-results --clean -o allure-report

# Archive copy
Copy-Item `
    -Path allure-report `
    -Destination "allure-history\allure-report-$timestamp" `
    -Recurse

Write-Host "Latest report updated"
Write-Host "Archived report: allure-history\allure-report-$timestamp"