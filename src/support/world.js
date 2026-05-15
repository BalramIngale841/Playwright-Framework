const { setWorldConstructor } = require('@cucumber/cucumber');

class CustomWorld {
  constructor() {
    // Will be assigned in hooks
    this.browser = null;
    this.context = null;
    this.page = null;

    // ✅ Centralized object store
    this.pages = {};

    // ✅ Test data store (optional future usage)
    this.data = {};
  }
}

setWorldConstructor(CustomWorld);