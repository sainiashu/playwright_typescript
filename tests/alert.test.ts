import {test, expect} from '@playwright/test'

test('Alert 1', async({page})=>{
    await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo')

    page.on('dialog',async(alert)=>{
        const text = alert.message();
        console.log(text);
        await alert.accept();
    })

        await page.getByRole('paragraph').filter({hasText:'JavaScript Alerts'}).getByRole('button').click();
})

test.only('Alert 2',async({page})=>{
    await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo')

    page.on('dialog',async(alert)=>{
        const text = alert.message();
        console.log(text);
        await alert.dismiss();       

    })

    await page.getByRole('paragraph').filter({hasText:'Confirm box'}).getByRole('button').click()

    const getText = await page.locator('[id="confirm-demo"]').textContent();
    console.log(getText);

    await expect(getText).toContain('You pressed Cancel!');
})

test('Alert Promp',async({page})=>{
    await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo')

    page.on('dialog',async(alert)=>{
        alert.accept("Demo");
    })



    await page
        .getByRole('paragraph')
        .filter({hasText:'Prompt box:'})
        .getByRole('button').click()

        const getEnteredText = await page.locator('id=prompt-demo').textContent()
        await expect(getEnteredText).toContain('Demo')

})

test.only('Modal ALert',async({page})=>{

    await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo');
    // await page.pause();
    // await page.getByRole('button', { name: 'Launch Modal' }).first().click()
    // await page.getByRole('button',{name:'Save Changes'}).click();

    await page.locator('[data-target="#myMultiModal"]').click()
    await page.locator('data-target="#mySecondModal"').click()
    // await page.getByRole('button',{name:})
    

})