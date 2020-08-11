const { Builder, By, Key, until } = require('selenium-webdriver');

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

    async close() {
        this.driver.quit();
    }
}

module.exports = Browser;