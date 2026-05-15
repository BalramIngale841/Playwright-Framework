Feature: Add product to cart

Background:
  Given user logs in as "standard"

Scenario Outline: User adds product to cart from dashboard
  When user adds "<productName>" to cart
  Then product should be added to cart successfully

Examples:
  | productName                    |
  | Sauce Labs Backpack            |


 
