import { test } from '@playwright/test'
import moment from 'moment'

test('Select test', async ({ page }) => {

    await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo')
    let date = "2023-10-20"
    // await page.pause()
    await page.locator('id=birthday').fill(date)
    await page.waitForTimeout(2000)
})

test('Date selection by calendar', async ({ page }) => {

    await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo')
    // let date = "2023-10-20"
    await page.locator("input[placeholder='Start date']").click();
    const mmyy = await page.locator("div[class='datepicker-days'] th[class='datepicker-switch']")
    const prev = await page.locator("div[class='datepicker-days'] th[class='prev']")
    const next = await page.locator("div[class='datepicker-days'] th[class='next']")

    prev.click()
    await page.locator("tbody tr:nth-child(2) td:nth-child(2)").click
    await page.waitForTimeout(2000)
})

test.only('Date selection by calendar using moment/parameterize', async ({ page }) => {

    await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo')
    // let date = "2023-10-20"


    await SelectDate(12, "December 2020")
    await page.reload();

    await SelectDate(10, "March 2026")


    async function SelectDate(date: number, dateToSelect: string) {


        await page.locator("input[placeholder='Start date']").click();
        const mmyy = await page.locator("div[class='datepicker-days'] th[class='datepicker-switch']")
        const prev = await page.locator("div[class='datepicker-days'] th[class='prev']")
        const next = await page.locator("div[class='datepicker-days'] th[class='next']")

        // let dateToSelect = "March 2025"
        const thisMonth = moment(dateToSelect, "MMMM,YYYY").isBefore();
        console.log(thisMonth);

        while (await mmyy.textContent() != dateToSelect) {
            if (thisMonth) {
                prev.click();
            }
            else {
                next.click()

            }

        }

        prev.click()
        await page.locator(`tbody tr:nth-child(2) td:nth-child(${date})`).click
        await page.waitForTimeout(2000)
    }
})