import {test,expect} from '@playwright/test';
import { general } from '../lib/General';

test.describe('@smoke @sanity Regression Tests',{tag:['@regression','@e2e']},() =>{

    test('@smoke TC001_Login_Logout',async({page})=>{
        //--Test Steps
        const gen = new general(page);
        await gen.openApplication();
        await gen.login();
        await gen.logout();
    });

test('@insidedesc has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

});