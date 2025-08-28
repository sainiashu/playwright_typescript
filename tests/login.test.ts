import {test, expect, chromium} from '@playwright/test'

test('login test', async({page})=>{

    // //chromium is a browser engine such as chrom is built in top of the chromium
    // const browser= await chromium.launch(); 
    
    // //We can have mutliple context in playwright but they can't share the cookies
    // const context = await browser.newContext();
    
    // // new page is basically a new tab  in the browser
    // const page = await context.newPage();

    await page.goto('https://demowebshop.tricentis.com/');
    // await page.pause();
    //  await page.getByRole('link',{name:'Log in'}).click();
     await page.getByRole('textbox',{name:'Email'}).fill('Demo1.Tester@test.test');
     await page.getByRole('textbox',{name: 'Password'}).fill('Tester@1236')
     await page.getByRole('button',{name:'Log in'}).click();

    // await page.waitForTimeout(5000);

    //this will create/open new tab/page within the same browser
    // const page1 = await context.newPage();
    // await page1.goto('https://demowebshop.tricentis.com/')
    // await page.waitForTimeout(5000);
     

    //this will open new browser
    // const newContext = await browser.newContext();
    // const newPage = await newContext.newPage();
    // await newPage.goto('https://demowebshop.tricentis.com/');
    // await newPage.waitForTimeout(5000);




})
