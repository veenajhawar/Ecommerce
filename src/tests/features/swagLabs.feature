@regression
Feature: Calculate Holiday Entitlement on the government website

  Background:
    Given I am on the Swag Labs Home Page
    Given I provide username 'standard_user' and password 'secret_sauce'

  @smoke
  Scenario Outline: Add items to the cart
    When I add "<item>" to the cart
    Then I verify that "<item>" is added to the cart

    Examples:
      | item                  |
      | Sauce Labs Backpack   |
      | Sauce Labs Bike Light |

  @smoke
  Scenario Outline: Remove items to the cart
    When I add "<item>" to the cart
    And I remove "<item>" from the cart

    Examples:
      | item                     |
      | Sauce Labs fleece jacket |
      | Sauce Labs onesie        |

  @smoke
  Scenario Outline: Proceed to checkout
    When I add "<item>" to the cart
    Then I verify that "<item>" is added to the cart
    Then I click on the checkout button
    Then I enter my first name "veena"
    Then I enter my last name "jhawar"
    Then I enter my postal code "123456"
    Then I click on the continue button
    Then I click on the finish button
    Then I verify that the order is complete

    Examples:
      | item                    |
      | Sauce Labs Bolt T-Shirt |
