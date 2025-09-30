import { Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // va a usar los mismos selectores que tus tests actuales
  async search(term: string) {
    const search = this.page.getByPlaceholder("Search");
    await search.fill(term);
    await search.press("Enter");
  }

  async clickProductByText(name: string) {
    await this.page.getByText(name).click();
  }

  async openHome() {
    await this.goto("https://opencart.abstracta.us/");
  }

  async takeTimestampedScreenshot(dir = "./captures") {
    const filename = `${dir}/${Date.now()}-screenshot.jpg`;
    await this.screenshot(filename);
    return filename;
  }
}
