import { test, expect } from '@playwright/test';

test.describe('Product Card Visual Regression', () => {
    const TEST_URL = '/search?q=vintage'; // Example search page

    test('Portrait Mode (Variant)', async ({ page }) => {
        // Append the experiment flag to the URL
        await page.goto(`${TEST_URL}&exp-web_portrait_product_card=variant`);

        // Wait for product cards to be visible
        await page.waitForSelector('[role="listitem"]');

        // Take a screenshot of the first product card
        const firstCard = page.locator('[role="listitem"]').first();
        await expect(firstCard).toHaveScreenshot('product-card-portrait.png');
    });

    test('Square Mode (Control)', async ({ page }) => {
        // Append the experiment flag to the URL
        await page.goto(`${TEST_URL}&exp-web_portrait_product_card=control`);

        // Wait for product cards to be visible
        await page.waitForSelector('[role="listitem"]');

        // Take a screenshot of the first product card
        const firstCard = page.locator('[role="listitem"]').first();
        await expect(firstCard).toHaveScreenshot('product-card-square.png');
    });
});
