class LoginPage {
  constructor(page) {
    this.page = page;

    // ✅ Use locators (IMPORTANT)
    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
  }

  // ✅ Pass baseURL from step/config
  async open(baseURL) {
    await this.page.goto(baseURL);
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}

module.exports = { LoginPage };