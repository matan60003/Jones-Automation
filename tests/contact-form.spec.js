import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage.js';
import { CONFIG } from '../config/data.js';

test.describe('Contact Form Workflow', () => {
    test('User can submit contact form successfully', async ({ page }) => {
        const homePage = new HomePage(page);


        await test.step('Navigate to homepage', async () => {
            await homePage.navigate('/');
        });


        await test.step('Fill the contact form', async () => {
            await homePage.fillContactForm(CONFIG.formData);
        });


        await test.step('Screenshot before submit', async () => {
            await homePage.takeScreenshot('output/screenshot-before-submit.png');
        });


        await test.step('Submit the form', async () => {
            await homePage.submitForm();
        });


        await test.step('Verify success message', async () => {
            await expect(homePage.successMessageLocator).toBeVisible();
            console.log('Successfully reached the Thank You page!');
        });
    });
});
