class CheckoutPage {
    constructor(page) {
      this.page = page;
  
      // ✅ Use locators
      this.checkoutButton = page.locator('#checkout');
      this.firstName = page.locator('#first-name');
      this.lastName = page.locator('#last-name');
      this.postalCode = page.locator('#postal-code');
      this.continueBtn = page.locator('#continue');
      this.finishBtn = page.locator('#finish');
      this.successMessage = page.locator('.complete-header');
    }
  
    // ✅ Clean business name
    async proceedToCheckout() {
      await this.checkoutButton.click();
    }
  
    // ✅ Data-driven (VERY IMPORTANT)
    async enterCheckoutDetails({ firstName, lastName, zip }) {
      await this.firstName.fill(firstName);
      await this.lastName.fill(lastName);
      await this.postalCode.fill(zip);
      await this.continueBtn.click();
    }
  
    // ✅ Match your step definition
    async confirmOrder() {
      await this.finishBtn.click();
    }
  
    // ✅ Proper validation helper
    async verifyOrderPlaced() {
      await this.successMessage.waitFor({ state: 'visible' });
    }
  }
  
  module.exports = { CheckoutPage };