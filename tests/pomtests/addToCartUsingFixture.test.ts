import { test} from '../../base/pomfixture.test'
import * as data from '../../test-data/addToCart-testdata.json'


// test.use({
//     browserName:"firefox"
// })

test.describe("Register New User and Add To cart", async () => {


    test('Register User 01', async ({ page, baseURL,registerPage }) => {

        // const register = new RegisterPage(page);

        const url = await page.goto(`${baseURL}register`)
        console.log(url)
        await page.goto(`${baseURL}register`)
        await registerPage.enterFirstName(data.firstName)
        await registerPage.enterlastName(data.lastName)
        await registerPage.enterEmail(data.email)
        await registerPage.enterPassword(data.password)
        await registerPage.enterConfirmPassword(data.password)
        await registerPage.clickRegisterButton()
    })



    test('Login Test 02', async ({ page, baseURL,loginPage,homePage }) => {

        // const loginPage = new LoginPage(page)
        // const homePage = new HomePage(page)

        await page.goto(`${baseURL}login`)

        await loginPage.enterEmail(data.email)
        await loginPage.enterPassword(data.password)
        await loginPage.clickLogin()

        await homePage.clickExcellentCheckBox()
        await homePage.verifyExcellentIsChecked()
    })

    test('Add to cart test_03', async ({ page, baseURL,loginPage,homePage,cartPage,booksPage }) => {

        await page.goto(`${baseURL}login`)

        // const loginPage = new LoginPage(page)
        // const booksPage = new Books(page)
        // const cartPage = new Cart(page)
        // const homePage = new HomePage(page)

        await loginPage.login(data.email, data.password)
        await homePage.ClickOnBookSTab()
        await booksPage.clickOnAddToCart()
        await booksPage.clickOnShoppingCartLink()
        await cartPage.clickOnTermAndConditionCheckBox()
        await cartPage.clickOnCheckOut()
        await homePage.clickLogout()




    })
})