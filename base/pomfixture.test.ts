import {chromium,test as baseTest} from '@playwright/test'

import LoginPage from '../pages/login.test'
import RegisterPage from '../pages/register.test'
import HomePage from '../pages/homepage.test'
import Books from '../pages/books.test'
import Cart from '../pages/cart.test'

type pages = {
    loginPage : LoginPage;
    registerPage: RegisterPage;
    homePage: HomePage;
    booksPage: Books
    cartPage: Cart
}

const capabilities = {
    browserName: "Chrome",
    browserVersion: "latest",
    "LT:Options": {
      platform: "Windows 10",   
      build: "Playwright Build",
      name: "Login Test",
      user: "sainiashu90",  
      accessKey: "LT_Mq3U2dNlRNaOtTubDs8OiI3aw5HWN90QqgfbcnuRlHhLKiL",
      network: true,
      video: true,
      console: true,
    },
  }

const testPages = baseTest.extend<pages>({
    page: async({},use)=>{
        const browser = await chromium.connect(
            `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
              JSON.stringify(capabilities)
            )}`
          )
        const context = await browser.newContext()
        const ltPage = await context.newPage()
        await use(ltPage);
        await ltPage.close()
        await context.close()
        await browser.close()
    },

    registerPage: async({page},use)=>{
        await use(new RegisterPage(page))
    },
    loginPage: async({page},use)=>{
        await use(new LoginPage(page))
    },
    homePage: async({page},use)=>{
        await use(new HomePage(page))
    },
    booksPage: async({page},use)=>{
        await use(new Books(page))
    },
    cartPage: async({page},use)=>{
        await use(new Cart(page))
    }
})

export const test = testPages;
export const expect = testPages.expect;