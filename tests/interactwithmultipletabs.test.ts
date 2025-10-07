import {test, expect} from '@playwright/test'

test('Test 1 pop window',async({page})=>{
    await page.goto('https://www.lambdatest.com/selenium-playground/window-popup-modal-demo');

    const [newWindow] = await Promise.all([
        page.waitForEvent('popup'),
        // page.click("'  Follow On Twitter '")
        page.locator("a[title='Follow @Lambdatesting on Twitter']").click()

    ]);

    console.log(newWindow);
})





test.only('Multiple Page',async({page})=>{
    await page.goto('https://www.lambdatest.com/selenium-playground/window-popup-modal-demo');

    const [multiPage] = await Promise.all([
        page.waitForEvent('popup'),
        
        page.locator("#followboth").click()

    ]);

    await multiPage.waitForLoadState();

    const pages = multiPage.context().pages();
    console.log("No. of pages" + pages.length)

    pages.forEach(tab =>{
        console.log(tab.url())    
    })
})