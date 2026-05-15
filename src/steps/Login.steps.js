const { Given, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { baseURL } = require('../config/env');
const { users } = require('../utils/dataHelper');

Given('user logs in as {string}', async function (userType) {
  const user = users[userType];

  await this.pages.login.open(baseURL);
  await this.pages.login.login(user.username, user.password);
});

Then('user should be redirected to dashboard', async function () {
  await expect(this.page).toHaveURL(/inventory.html/);
});