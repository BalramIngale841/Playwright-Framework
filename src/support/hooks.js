const { BeforeAll, AfterAll, Before, After, Status } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

// ✅ Shared browser instance
let browser;

// ========================
// ✅ BEFORE ALL
// ========================
BeforeAll(async () => {
  browser = await chromium.launch({
    headless: false   // change to false for debugging
  });
});

// ========================
// ✅ BEFORE EACH SCENARIO
// ========================
Before(async function () {

  // Create new context per scenario (isolation ✅)
  this.context = await browser.newContext();

  this.page = await this.context.newPage();

  // ✅ Start tracing
  await this.context.tracing.start({
    screenshots: true,
    snapshots: true,
    sources: true
  });

  // ✅ Initialize Pages (IMPORTANT IMPROVEMENT)
  const { LoginPage } = require('../pages/LoginPage');
  const { DashboardPage } = require('../pages/DashboardPage');
  const { CheckoutPage } = require('../pages/CheckoutPage');

  this.pages = {
    login: new LoginPage(this.page),
    dashboard: new DashboardPage(this.page),
    checkout: new CheckoutPage(this.page)
  };
});

// ========================
// ✅ AFTER EACH SCENARIO
// ========================

After(async function (scenario) {
  const safeName = scenario.pickle.name.replace(/[^a-zA-Z0-9]/g, '_');

  if (scenario.result.status === Status.FAILED) {
    const screenshot = await this.page.screenshot({ fullPage: true });
    await scenario.attach(screenshot, 'image/png'); // ✅ correct
  }

  await this.context.tracing.stop({
    path: `traces/${safeName}.zip`
  });

  await this.page.close();
  await this.context.close();
});



// ========================
// ✅ AFTER ALL
// ========================
AfterAll(async () => {
  await browser.close();
});
