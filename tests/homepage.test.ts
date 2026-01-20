import { test, expect } from '@playwright/test';

test.describe('Homepage Visual Regression', () => {
    const URL = '/';

    test('Depop Edit Cards - Portrait', async ({ page }) => {
        await page.goto(`${URL}?exp-web_portrait_product_card=variant`);

        // Target the Depop Edit section specifically if possible, otherwise use generic card selector
        const card = page.locator('[role="listitem"]').first();
        await page.waitForSelector('[role="listitem"]');

        await expect(card).toHaveScreenshot('homepage-depop-edit-portrait.png');
    });

    test('Depop Edit Cards - Square', async ({ page }) => {
        await page.goto(`${URL}?exp-web_portrait_product_card=control`);

        const card = page.locator('[role="listitem"]').first();
        await page.waitForSelector('[role="listitem"]');

        await expect(card).toHaveScreenshot('homepage-depop-edit-square.png');
    });
});
