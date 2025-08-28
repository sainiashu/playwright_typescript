import {test, expect} from '@playwright/test'

test('Interact with frames', async({page})=>{

    // await page.goto('https://www.lambdatest.com/selenium-playground/iframe-demo/')
    // await page.pause()
    await page.goto('https://letcode.in/frame')
    const myFrame  = page.frame('#firstFr');

    // await myFrame?.fill()
    await myFrame?.locator("input[name='fname']").fill("Demo");
    await page.waitForTimeout(5000)
    await myFrame?.locator("input[name='lname']").fill("User");
    await page.waitForTimeout(2000)

    // const myFrame = await page.frame('firstFr')
    // if(myFrame!= null){
    //     myFrame.getByRole('textbox',{name: 'Enter name'}).fill('Demo')
    //     myFrame.getByRole('textbox',{name: 'Enter email'}).fill('Demo@gmail.com')
    //     await page.waitForTimeout(2000)
    // }
    
})