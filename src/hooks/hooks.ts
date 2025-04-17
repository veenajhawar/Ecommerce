import { BeforeAll, AfterAll, Before, After } from "@cucumber/cucumber";
import { Browser, chromium } from "@playwright/test";
import { CustomWorld } from './custom-world';
import SwagLabsPage from '../Pages/objects/swagLabs';

Before(async function (this: CustomWorld) {
  this.browser = await chromium.launch({ headless: false });
  const context = await this.browser.newContext();
  this.page = await context.newPage();
  this.swaglabs = new SwagLabsPage(this.page);
});

After(async function (this: CustomWorld) {
  await this.page.close();
  await this.browser.close();
});