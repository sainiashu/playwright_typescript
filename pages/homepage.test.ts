import {test, Page, expect} from '@playwright/test'

export default class HomePage{

    constructor(public page:Page){

    }


    async clickExcellentCheckBox(){
        await this.page.locator("id=pollanswers-1").click()
    }
    async verifyExcellentIsChecked(){
        await expect(this.page.locator("id=pollanswers-1")).toBeChecked()
    }

    async ClickOnBookSTab(){
        await this.page.getByRole('link',{name: 'Books'}).first().click()
        // await this.page.locator('[class="top-menu"] li :nth-child(1)').click()
    }

    async clickLogout(){
        await this.page.locator(".ico-logout").click()
    }
}