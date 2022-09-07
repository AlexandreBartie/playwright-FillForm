// example.spec.ts
import { test, expect } from '@playwright/test';
import { PlaywrightDevPage } from './page';

test('getting started should contain table of contents', async ({ page }) => {
  const playwrightDev = new PlaywrightDevPage(page);
  await playwrightDev.goto();
  await playwrightDev.getStarted();
  await expect(playwrightDev.tocList).toHaveText([
    'Installation',
    'First test',
    'Configuration file',
    'Writing assertions',
    'Using test fixtures',
    'Using test hooks',
    'VS Code extension',
    'Command line',
    'Configure NPM scripts',
    'Release notes'
  ]);
});

test('should show Page Object Model article', async ({ page }) => {
  const playwrightDev = new PlaywrightDevPage(page);
  await playwrightDev.goto();
  await playwrightDev.pageObjectModel();
  await expect(page.locator('article')).toContainText('Page Object Model is a common pattern');
});