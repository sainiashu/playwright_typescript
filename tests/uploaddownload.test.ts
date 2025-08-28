import {test, expect} from '@playwright/test'

test('download file',async({page})=>{
    await page.goto('https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo')
    // await page.locator("id=textbox").click()
    await page.locator("#textbox").fill('Demo User test the functionality')
    
    await page.locator("#textbox").press('Enter')
    const generateFile = await page.getByRole('button',{name:'Generate File'})
    await expect(generateFile).toBeEnabled()
    await page.getByRole('button',{name:'Generate File'}).click()
    await page.locator("#link-to-download").click()
    // await page.locator("#create").click()


    // const [download]= await Promise.all([
    //     page.waitForEvent('download'),
    //     page.locator("#link-to-download").click()
    // ])

    // const fileName = download.suggestedFilename();
    // await download.saveAs(fileName)
    // console.log(fileName)
    // await page.locator("id=link-to-download").click()

})

test.only('upload file', async({page})=>{
    await page.goto('https://www.lambdatest.com/selenium-playground/upload-file-demo')
    await page.setInputFiles("#file",["tests\\testdata\\DemoImage.PNG"]);
})