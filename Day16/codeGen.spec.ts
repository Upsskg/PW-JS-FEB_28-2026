import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.com/');
  await page.getByRole('searchbox', { name: 'Search Amazon' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon' }).fill('Phone');
  await page.getByRole('searchbox', { name: 'Search Amazon' }).press('Enter');
  await page.getByRole('searchbox', { name: 'Search Amazon' }).press('Enter');
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  await expect(page.getByRole('link', { name: 'Samsung Galaxy S26 Ultra, Unlocked Android Smartphone, 512GB, Privacy Display, Galaxy AI, AI Camera, Super Fast Charging 3.0, Durable Battery, 2026, US 1 Year Warranty, Black', exact: true })).toBeVisible();
  await page.getByText('1K+ bought in past month').first().click();
  await page.getByRole('link', { name: 'Samsung Galaxy S26 Ultra, Unlocked Android Smartphone, 512GB, Privacy Display, Galaxy AI, AI Camera, Super Fast Charging 3.0, Durable Battery, 2026, US 1 Year Warranty, Black', exact: true }).click();
  await page.goto('https://www.amazon.com/Samsung-Unlocked-Smartphone-Charging-Warranty/dp/B0G4SW3XXP/ref=sr_1_1?crid=2APD616VKE6B8&dib=eyJ2IjoiMSJ9.gxBDjQFLj4AyISv1eeIjfDnLFF_F1U4aJi4d7bxtkY9HY3NzikMfK4aJ8m35N9Ehbk-G7w2PvSk1LlxpgV0_3cwW6aNDH2mlNJ7EmBDzxEMHiLjZwP-a9M-c5MG49omHQjwD9XAoKx50_HZTXBHqCCclvxkCitx7i1E-pF4PJxWdohQo91pQFer2Gajxu4NNW0qMTQLIex7AyY1qRhh3dBWSQQmyGXyDoQ2H_OQnMGo.it4P7Eik4Dc6nLTyxWfAENSWigz_D8W1OeQa9gc7g9A&dib_tag=se&keywords=Phone&qid=1776599488&sprefix=phone%2Caps%2C329&sr=8-1&th=1');
  await page.locator('#corePrice_feature_div').getByText('120,220.', { exact: true }).click();
  await expect(page.locator('#corePrice_feature_div')).toContainText('120,220.');
  await expect(page.locator('#corePrice_feature_div')).toContainText('120,220.');
  await expect(page.getByLabel('Amazon', { exact: true })).toMatchAriaSnapshot(`
    - link "Amazon":
      - /url: /ref=nav_logo
    `);
});