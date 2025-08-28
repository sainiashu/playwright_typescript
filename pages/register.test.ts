import {test, Page} from '@playwright/test'

export default class RegisterPage{

    constructor(public page: Page){   }

    async enterFirstName(firstName:string){
        await this.page.locator("id=FirstName").fill(firstName)
    }

    async enterlastName(lastName :string){
        await this.page.locator("id=LastName").fill(lastName)
    }

    async enterEmail(email : string){
        await this.page.locator("id=Email").fill(email)
    }

    async enterPassword(password : string){
        await this.page.locator("id=Password").fill(password)
    }

    async enterConfirmPassword(password : string){
        await this.page.locator("id=ConfirmPassword").fill(password)
    }

    async clickRegisterButton(){
        await Promise.all([
            await this.page.waitForURL('**/register'),
            await this.page.locator("id=register-button").click()
        ])
        
    }
}