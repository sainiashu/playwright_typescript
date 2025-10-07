 import {test, Page} from '@playwright/test'

export default class LoginPage{

    constructor(public page: Page){

    }





    async login(email, password){
       await this.enterEmail(email)
       await this.enterPassword(password)
        await this.clickLogin()
    }

    async enterEmail(email : string){
        await this.page.locator("id=Email").fill(email)
    }

    async enterPassword(password: string){
        await this.page.locator("id=Password").fill(password);
    }

    async clickLogin(){
        await this.page.locator("input[value='Log in']").click()
    }
}