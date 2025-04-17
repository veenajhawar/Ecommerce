import { Locator, Page } from "@playwright/test";

export default class SwagLabs {
  page: Page;
  swagLabsHeading: Locator;
  userName: Locator;
  password: Locator;
  loginButton: Locator;
  shoppingCart: Locator;
  continueShopping: Locator;
  firstName: Locator;
  lastName: Locator;
  postCode: Locator;
  continue: Locator;
  finish: Locator;
  completeHeader: Locator;
  backToProducts: Locator;

  constructor(page: Page) {
    this.page = page;
    this.swagLabsHeading = page.getByText("Swag Labs");
    this.userName = page.locator('[data-test="username"]');
    this.password = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.shoppingCart = page.locator('[data-test="shopping-cart-link"]');
    this.continueShopping = page.locator('[data-test="continue-shopping"]');
    this.firstName = page.locator('[data-test="firstName"]');
    this.lastName = page.locator('[data-test="lastName"]');
    this.postCode = page.locator('[data-test="postalCode"]');
    this.continue = page.locator('[data-test="continue"]');
    this.finish = page.locator('[data-test="finish"]');
    this.completeHeader = page.locator('[data-test="complete-header"]');
    this.backToProducts = page.locator('[data-test="back-to-products"]');
  }
}
