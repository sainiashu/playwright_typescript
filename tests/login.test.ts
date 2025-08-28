import {test, expect} from '../base/pomfixture.test'

test('login test', async({page})=>{

    await page.goto('https://demowebshop.tricentis.com/');
    // await page.pause();
     await page.getByRole('link',{name:'Log in'}).click();
     await page.getByRole('textbox',{name:'Email'}).fill('Demo1.Tester@test.test');
     await page.getByRole('textbox',{name: 'Password'}).fill('Tester@1236')
     await page.getByRole('button',{name:'Log in'}).click();
    
})