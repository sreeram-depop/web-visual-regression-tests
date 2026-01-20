import { test, expect } from '@playwright/test';

test.describe('PDP Modules Visual Regression', () => {
    // Using a sample product slug, adjust as needed
    const PRODUCT_URL = '/products/vintage-levis-501-jeans';

    test('More Seller Items - Portrait', async ({ page }) => {
        await page.goto(`${PRODUCT_URL}?exp-web_portrait_product_card=variant`);

        // Scroll to the bottom to ensure modules are loaded/lazy-loaded
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

        // Wait for the grid in the "More Seller Items" or "Similar Items" section
        await page.waitForSelector('[role="listitem"]');
        const card = page.locator('[role="listitem"]').first();

        await expect(card).toHaveScreenshot('pdp-module-card-portrait.png');
    });

    test('More Seller Items - Square', async ({ page }) => {
        await page.goto(`${PRODUCT_URL}?exp-web_portrait_product_card=control`);

        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

        await page.waitForSelector('[role="listitem"]');
        const card = page.locator('[role="listitem"]').first();

        await expect(card).toHaveScreenshot('pdp-module-card-square.png');
    });
});
