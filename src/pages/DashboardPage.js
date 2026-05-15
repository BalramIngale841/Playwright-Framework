class DashboardPage {
    constructor(page) {
      this.page = page;
  
      // Cart badge (visible after adding item)
      this.cartBadge = '.shopping_cart_link';
      
      
    }
  
    /**
     * Reusable method:
     * Adds product to cart based on product name
     * Product name is passed from Scenario Outline
     */
    async addProductToCart(productName) {
      const productLocator = this.page
        .locator('.inventory_item')
        .filter({ hasText: productName });
  
      await productLocator.locator('button').click();
    }

    
  async clickCartIcon() {
    await this.page.click(this.cartBadge);
  }

  
    async isProductAddedToCart() {
      return await this.page.isVisible(this.cartBadge);
    }
  }
  
  module.exports = { DashboardPage };