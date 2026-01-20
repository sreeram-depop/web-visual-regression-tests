import { test, expect } from '@playwright/test';

test.describe('Browse Page Visual Regression', () => {
    const TEST_URL = '/search?q=vintage';

    test('Search Result Card - Portrait', async ({ page }) => {
        await page.goto(`${TEST_URL}&exp-web_portrait_product_card=variant`);
        await page.waitForSelector('[role="listitem"]');
        const firstCard = page.locator('[role="listitem"]').first();
        await expect(firstCard).toHaveScreenshot('browse-card-portrait.png');
    });

    test('Search Result Card - Square', async ({ page }) => {
        await page.goto(`${TEST_URL}&exp-web_portrait_product_card=control`);
        await page.waitForSelector('[role="listitem"]');
        const firstCard = page.locator('[role="listitem"]').first();
        await expect(firstCard).toHaveScreenshot('browse-card-square.png');
    });
});
