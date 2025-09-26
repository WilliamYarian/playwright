import { test, expect } from "@playwright/test";
import { HomePage } from "../pageObjects/homePage";

test.describe("Suite de tests (POM)", () => {

  test("Test input Iphone (search)", async ({ page }) => {
    const home = new HomePage(page);
    await home.openHome();

    // buscar iPhone
    await home.search("Iphone");

    // espera simple / aserción de ejemplo: que haya resultados o título
    // ajustar según lo que quieras validar
    await expect(page).toHaveURL(/search|filter|result|Iphone/i);

    // tomar captura
    await home.takeTimestampedScreenshot();
    await page.pause(); // opcional
  });

  test("Test click to MacBook (click producto)", async ({ page }) => {
    const home = new HomePage(page);
    await home.openHome();

    // click en producto
    await home.clickProductByText("MacBook");

    // screenshot
    await home.takeTimestampedScreenshot();
    await page.pause();
  });

});
