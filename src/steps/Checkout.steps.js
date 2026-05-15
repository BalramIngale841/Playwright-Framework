const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { checkout } = require('../utils/dataHelper');

// ✅ Match POM method name
When('user proceeds to checkout', async function () {
  await this.pages.checkout.proceedToCheckout();
});

// ✅ Pass test data
When('user provides checkout details', async function () {
  await this.pages.checkout.enterCheckoutDetails(
    checkout.validUser
  );
});

// ✅ Match POM method name
When('user confirms the order', async function () {
  await this.pages.checkout.confirmOrder();
});

// ✅ Use locator from Page Object
Then('order should be placed successfully', async function () {
  await expect(this.pages.checkout.successMessage).toBeVisible();
  await expect(this.pages.checkout.successMessage).toHaveText(/Thank you/i);
});