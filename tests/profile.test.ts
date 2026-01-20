import { test, expect } from '@playwright/test';

test.describe('Profile Page Visual Regression', () => {
    // Using a sample username, adjust as needed for your dev data
    const USERNAME = '/billie';

    test('Shop Cards - Portrait', async ({ page }) => {
        await page.goto(`${USERNAME}?exp-web_portrait_product_card=variant`);

        await page.waitForSelector('[role="listitem"]');
        const card = page.locator('[role="listitem"]').first();

        await expect(card).toHaveScreenshot('profile-card-portrait.png');
    });

    test('Shop Cards - Square', async ({ page }) => {
        await page.goto(`${USERNAME}?exp-web_portrait_product_card=control`);

        await page.waitForSelector('[role="listitem"]');
        const card = page.locator('[role="listitem"]').first();

        await expect(card).toHaveScreenshot('profile-card-square.png');
    });
});
