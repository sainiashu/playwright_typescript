import {Page } from '@playwright/test'

export default class Cart{

    constructor(public page: Page){

    }


    async clickOnTermAndConditionCheckBox(){
        await this.page.locator("//input[@id='termsofservice']").check()
    }
    async clickOnCheckOut(){
        await this.page.locator("#checkout").click()
    }
}