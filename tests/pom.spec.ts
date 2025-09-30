import { test, expect } from "@playwright/test";
import { HomePage } from ".../pageObjects/homePage";

test.describe("Suite de tests (POM)", () => {
  test("Test input Iphone (search)", async ({ page }) => {
    const home = new HomePage(page);
    await home.openHome();

    await home.search("Iphone");

    // Example assertion (tweak to your real app’s URL pattern)
    await expect(page).toHaveURL(/search|filter|result|Iphone/i);

    await home.takeTimestampedScreenshot();
    // remove page.pause() in CI
  });

  test("Test click to MacBook (click producto)", async ({ page }) => {
    const home = new HomePage(page);
    await home.openHome();

    await home.clickProductByText("MacBook");

    await home.takeTimestampedScreenshot();
    // remove page.pause() in CI
  });
});
