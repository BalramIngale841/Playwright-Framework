const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');



When('user adds {string} to cart', async function (productName) {
    await this.pages.dashboard.addProductToCart(productName);
    await this.pages.dashboard.clickCartIcon();
  });
  

Then('product should be added to cart successfully', async function () {
  
const isAdded = await this.pages.dashboard.isProductAddedToCart();
expect(isAdded).toBeTruthy();

});