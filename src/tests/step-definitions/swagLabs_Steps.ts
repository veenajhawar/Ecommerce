import { Given, When, Then, After, Before } from "@cucumber/cucumber";
import { CustomWorld } from "../../hooks/custom-world";
import { expect } from "@playwright/test";

const homeUrl = "https://www.saucedemo.com/";
Given("I am on the Swag Labs Home Page", async function (this: CustomWorld) {
  if (this.page) {
    await this.page.goto(homeUrl);
    await this.page.waitForURL(homeUrl, { timeout: 20000 });
    await this.page.waitForURL(homeUrl);
  } else {
    console.error("Page is not initialized!");
  }
});

Given(
  "I provide username {string} and password {string}",
  async function (this: CustomWorld, username, password) {
    await this.page.locator('[data-test="username"]').fill(username);
    await this.page.locator('[data-test="password"]').fill(password);
    await this.page.getByRole("button", { name: "Login" }).click();
  }
);

When("I add {string} to the cart", async function (this: CustomWorld, item) {
  const itemKey = item.toLowerCase().replaceAll(" ", "-"); // sauce-labs-bike-light
  const selector = `[data-test="add-to-cart-${itemKey}"]`;

  await this.page.locator(selector).waitFor({ timeout: 10000 });
  await this.page.locator(selector).click();
});

Then(
  "I verify that {string} is added to the cart",
  async function (this: CustomWorld, item) {
    await this.swaglabs.clickShoppingCart();
  }
);

Then(
  "I remove {string} from the cart",
  async function (this: CustomWorld, item) {
    await this.swaglabs.clickShoppingCart();
    const itemKey = item.toLowerCase().replaceAll(" ", "-"); // sauce-labs-bike-light
    const selector = `[data-test="remove-${itemKey}"]`;

    await this.page.locator(selector).waitFor({ timeout: 10000 });
    await this.page.locator(selector).click();
    await this.swaglabs.clickContinueShopping();
    const itemKey1 = item.toLowerCase().replaceAll(" ", "-"); // sauce-labs-bike-light
    const selector1 = `[data-test="add-to-cart-${itemKey1}"]`;

    await this.page.locator(selector1).waitFor({ timeout: 10000 });
    await expect(this.page.locator(selector1)).toBeVisible;
  }
);
Then("I click on the shopping cart", async function (this: CustomWorld) {
  await this.swaglabs.clickShoppingCart();
  await this.page
    .getByText("Sauce Labs Backpack", { exact: true })
    .waitFor({ state: "visible" });
});
Then("I click on the checkout button", async function (this: CustomWorld) {
  await this.page.getByRole("button", { name: "Checkout" }).click();
});
Then(
  "I enter my first name {string}",
  async function (this: CustomWorld, firstName: string) {
    await this.swaglabs.clickFirstName(firstName);
  }
);
Then(
  "I enter my last name {string}",
  async function (this: CustomWorld, lastName: string) {
    await this.swaglabs.clickLastName(lastName);
  }
);
Then(
  "I enter my postal code {string}",
  async function (this: CustomWorld, postCode: string) {
    await this.swaglabs.clickPostCode(postCode);
  }
);
Then("I click on the continue button", async function (this: CustomWorld) {
  await this.page.getByRole("button", { name: "Continue" }).click();
});
Then("I click on the finish button", async function (this: CustomWorld) {
  await this.page.getByRole("button", { name: "Finish" }).click();
});
Then("I verify that the order is complete", async function (this: CustomWorld) {
  await this.page
    .getByText("Thank you for your order!", { exact: true })
    .waitFor({ state: "visible" });
  await this.page
    .getByRole("button", { name: "Back Home" })
    .waitFor({ state: "visible" });
});
Then(
  "I click on the back to products button",
  async function (this: CustomWorld) {
    await this.page.getByRole("button", { name: "Back Home" }).click();
  }
);
Then(
  "I verify that I am back on the products page",
  async function (this: CustomWorld) {
    await this.page
      .getByText("Products", { exact: true })
      .waitFor({ state: "visible" });
    await this.page
      .getByRole("button", { name: "Add to cart Sauce Labs Backpack" })
      .waitFor({ state: "visible" });
  }
);
Then(
  "I verify that the Swag Labs heading is visible",
  async function (this: CustomWorld) {
    this.page
      .getByText("Swag Labs", { exact: true })
      .waitFor({ state: "visible" });
  }
);
