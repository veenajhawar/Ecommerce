import { expect } from "@playwright/test";

import swag from "../locators/swag";

export default class swagLabs extends swag {
  // if we do not wnat to use BDD way we can use this way
  async clickLogin(username: string, password: string) {
    expect(this.swagLabsHeading).toBeVisible();
    expect(this.userName).toBeVisible();
    await this.userName.click();
    await this.userName.fill(username);
    await this.password.click();
    await this.password.fill(password);
    // await expect(page.getByText('Swag Labs')).toBeVisible();
    await this.loginButton.click();
  }

  async clickShoppingCart() {
    expect(this.shoppingCart).toBeVisible();
    await this.shoppingCart.click();
  }
  async clickContinueShopping() {
    expect(this.continueShopping).toBeVisible();
    await this.continueShopping.click();
  }
  async clickAddToCart() {
    expect(this.shoppingCart).toBeVisible();
    await this.shoppingCart.click();
  }

  async clickFirstName(firstName: string) {
    expect(this.firstName).toBeVisible();
    await this.firstName.click();
    await this.firstName.fill(firstName);
  }
  async clickLastName(lastName: string) {
    expect(this.lastName).toBeVisible();
    await this.lastName.click();
    await this.lastName.fill(lastName);
  }
  async clickPostCode(postCode: string) {
    expect(this.postCode).toBeVisible();
    await this.postCode.click();
    await this.postCode.fill(postCode);
  }
}
