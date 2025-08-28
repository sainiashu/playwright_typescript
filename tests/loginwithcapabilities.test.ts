import { test } from "@playwright/test";
import { chromium } from "playwright";

test("login test", async () => {
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
  };

  const browser = await chromium.connect(
    `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
      JSON.stringify(capabilities)
    )}`
  );

  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.lambdatest.com/selenium-playground/");
  await page.click("text=Simple Form Demo");
  await page.fill("#user-message", "Hello LambdaTest!");
  await page.click("form#get-input button");
  await page.waitForTimeout(3000);

  await browser.close();
});
