import { Page } from "@playwright/test";

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(url: string) {
    await this.page.goto(url);
  }

  async screenshot(path: string) {
    await this.page.screenshot({ path });
  }

  // helpers genéricos
  async getText(locatorName: string) {
    return this.page.locator(locatorName).innerText();
  }
}
