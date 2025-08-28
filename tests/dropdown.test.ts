import { test } from '@playwright/test'

test('Select drop down', async ({ page }) => {

    await page.goto('https://www.lambdatest.com/selenium-playground/select-dropdown-demo')
    await page.selectOption('id=select-demo', {
        // label:'Tuesday'
        // value: 'Friday'
        index: 1
    })
    await page.waitForTimeout(2000);



    await page.selectOption('id=multi-select', [{
        label: 'Texas'
    },
    {
        value:'Florida'
    },
    {
        index: 3

    }])

      await page.waitForTimeout(2000);
})

test.only('selectTreeSelect',async({page})=>{
    await page.goto('https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo');
    // await page.pause()

    await page.selectOption('id=country',{
        label: 'India'
    })    
     await page.waitForTimeout(2000);
    
})
  