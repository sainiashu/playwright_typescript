import {Page} from '@playwright/test'

export default class Books{

    constructor(public page: Page){

    }

    async clickOnAddToCart(){
        await this.page.getByRole('button',{name:'Add to cart'}).first().click()

        // await this.page.locator('class="button-2 product-box-add-to-cart-button"').nth(1).click()
    }

    async clickOnShoppingCartLink(){
        await this.page.locator("a[class='ico-cart'] span[class='cart-label']").click()
    }
}