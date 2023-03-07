import { test, expect, chromium } from '@playwright/test';
test.describe('sdf', () => {


const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

    test('fsdf', async () => {
        const browsers=await chromium.launch({
        })
        const context=await browsers.newContext();
        const page=await context.newPage()

        await page.goto('sdfsdf');
        await expect(page).toHaveTitle(/fdsf/);
        await expect(page).toHaveURL(/.*fsdf/);

        });

});