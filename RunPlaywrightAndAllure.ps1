param(
    [string]$Tag = ""
)

Remove-Item "allure-results" `
    -Recurse `
    -Force `
    -ErrorAction SilentlyContinue

if ($Tag) {
    npx playwright test --grep $Tag
}
else {
    npx playwright test
}

.\GenerateAllureReport.ps1