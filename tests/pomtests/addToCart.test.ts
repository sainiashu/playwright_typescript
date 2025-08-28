import {test} from '@playwright/test'
import LoginPage from '../../pages/login.test'
import RegisterPage from '../../pages/register.test'
import HomePage from '../../pages/homepage.test'
import Books from '../../pages/books.test'
import Cart from '../../pages/cart.test'


const email= 'Demo4.Tester@test.test'
const password = 'Tester@321'
test('Register User 01', async({page, baseURL})=>{

    const register = new RegisterPage(page);

    const url = await page.goto(`${baseURL}register`)
    console.log(url)
    await page.goto(`${baseURL}register`)
    await register.enterFirstName('Demo4')
    await register.enterlastName('Tester')
    await register.enterEmail(email)
    await register.enterPassword(password)
    await register.enterConfirmPassword(password)
    await register.clickRegisterButton()
})

test('Login Test 02', async({page,baseURL})=>{

    const loginPage  = new LoginPage(page)
    const homePage = new HomePage(page)

    await page.goto(`${baseURL}login`)

    await loginPage.enterEmail(email)
    await loginPage.enterPassword(password)
    await loginPage.clickLogin()

    await homePage.clickExcellentCheckBox()
    await homePage.verifyExcellentIsChecked()
})

test.only('Add to cart test_03',async({page, baseURL})=>{
    
    await page.goto(`${baseURL}login`)
    
    const loginPage = new LoginPage(page)
    const booksPage = new Books(page) 
    const cartPage = new Cart(page)
    const homePage= new HomePage(page)

    await loginPage.login(email,password)
    await homePage.ClickOnBookSTab()
    await booksPage.clickOnAddToCart()
    await booksPage.clickOnShoppingCartLink()
    await cartPage.clickOnTermAndConditionCheckBox()
    await cartPage.clickOnCheckOut()
    await homePage.clickLogout()


     

})