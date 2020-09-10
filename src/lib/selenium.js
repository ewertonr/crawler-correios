const { Builder, By } = require('selenium-webdriver');

class Browser {
  async init() {
    this.driver = await new Builder().forBrowser('chrome').build();
  }

  async open(url) {
    await this.driver.get(url);
  }

  async fillInput(id, value) {
    this.driver.findElement(By.id(id)).sendKeys(value);
  }

  async click(id) {
    this.driver.findElement(By.id(id)).click();
  }

  async getElementsTextByClass(className) {
    const results = [];
    const elements = await this.driver.findElements(By.className(className));

    await Promise.all(elements.map(async (element) => {
      const result = await element.getText();
      results.push(result);
    }));

    return results;
  }

  async close() {
    this.driver.quit();
  }
}

module.exports = Browser;
