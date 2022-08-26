import { test, expect } from '@playwright/test';

test('homepage has Home in title', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Home/);
});
