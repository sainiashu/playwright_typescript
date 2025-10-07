import {test, expect} from '@playwright/test'
import path from "path"

// test('download file',async({page})=>{
//     await page.goto('https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo')
//     // await page.locator("id=textbox").click()
//     await page.locator("#textbox").fill('Demo User test the functionality')
    
//     await page.locator("#textbox").press('Enter')
//     const generateFile = await page.getByRole('button',{name:'Generate File'})
//     await expect(generateFile).toBeEnabled()
//     // await page.getByRole('button',{name:'Generate File'}).click()
//     // await page.locator("#link-to-download").click()
//     // // await page.locator("#create").click()


//     const [download]= await Promise.all([
//         page.waitForEvent('download'),
//         page.locator("#link-to-download").click()
//     ])

//     const fileName = download.suggestedFilename();
//     await download.saveAs(fileName)
//     console.log(fileName)
//     await page.locator("id=link-to-download").click()

// })

test.only('upload file', async({page})=>{

    //Simple upload option
    await page.goto('https://www.lambdatest.com/selenium-playground/upload-file-demo')
    // await page.setInputFiles("#file",["tests\\testdata\\DemoImage.PNG"]);

    const [uploadFiles] =  await Promise.all([
        page.waitForEvent('filechooser'),
        page.locator("//input[@id='file']").click()
    ])

    // Build relative path dynamically
    const filePath = path.join(process.cwd(), 'tests', 'testdata', 'DemoImage.PNG');

   // Set the file(s) for upload
    await uploadFiles.setFiles([filePath]);
    

})



// test('test 3rd download option',async({page})=>{

//     await page.goto('https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo')

//     await page.locator("#textbox").fill('Demo User test the functionality')
    
//     await page.locator("#textbox").press('Enter')
//     const generateFile = await page.getByRole('button',{name:'Generate File'})
//     await expect(generateFile).toBeEnabled()

//         const downloadPromise = page.waitForEvent('download')
//     await page.getByRole('button',{name:'Generate File'}).click()
//     await page.locator("#link-to-download").click()
//     const download = await downloadPromise;

//     await download.saveAs('D:\\Typescript\\playwright_typescript\\tests\\testdata\\' +download.suggestedFilename())

//     await page.pause()

// })