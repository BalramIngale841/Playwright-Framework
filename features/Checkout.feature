Feature: Checkout flow

  Background:
    Given user logs in as "standard"
    And user adds "Sauce Labs Backpack" to cart

  Scenario: User completes checkout successfully
    When user proceeds to checkout
    And user provides checkout details
    And user confirms the order
    Then order should be placed successfully
