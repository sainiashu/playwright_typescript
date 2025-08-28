import {test, expect} from '@playwright/test'

test('Checked Entered Text', async({page})=>{

    await page.goto('https://www.lambdatest.com/selenium-playground/simple-form-demo');
    await page.getByRole('textbox',{name:'Please enter your Message'}).fill('Hello')
    await page.getByRole('button',{name:'Get Checked Value'}).click();
    // await page.pause()

    await page.waitForTimeout(2000);
    await expect(page.getByText('Hello')).toHaveText('Hello')
})

test('test Sum', async({page})=>{
    await page.goto('https://www.lambdatest.com/selenium-playground/simple-form-demo');
    await page.getByRole('textbox',{name:'Enter first value'}).fill('2');
    await page.getByRole('textbox',{name:'Enter second value'}).fill('4');
    await page.getByRole('button',{name:'Get Sum'}).click();

    const getValue= await page.locator('[id="addmessage"]').textContent();
    await expect(getValue).toContain('6');

})

test.only('CheckBox test', async({page})=>{
    await page.goto('https://www.lambdatest.com/selenium-playground/checkbox-demo');

    const singleCheckBox= await page.getByRole('checkbox',{name:'Click on check box'});
    expect(singleCheckBox).not.toBeChecked();
    singleCheckBox.check();
    expect(singleCheckBox).toBeChecked();

})