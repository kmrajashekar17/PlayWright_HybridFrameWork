import {test,expect} from '@playwright/test';

test('@e2e @regression Verification',async ({page})=> {
//--Test Steps
await page.goto('https://ctcorphyd.com/SureshIT/login.php');
await page.waitForTimeout(3000);
console.log("Application Opened")
//--verify login name text
await expect(page.locator("//td[text()='Login Name : ']")).toHaveText('Login Name : ');
await page.locator("//input[@name='txtUserName']").fill('sureshit');
await page.locator("//input[@name='txtPassword']").fill('sureshit');
await page.waitForTimeout(3000);
//--verify login button
await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
await page.getByRole('button', { name: 'Login' }).click();
await page.waitForTimeout(3000);
console.log("Login completed");
//verify page title
await expect(page).toHaveTitle('SureshIT');
//--verify logout link
await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();
await page.getByRole('link', { name: 'Logout' }).click();
console.log("Logout completed");
}
);