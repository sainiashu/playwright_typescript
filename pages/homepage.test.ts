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
}