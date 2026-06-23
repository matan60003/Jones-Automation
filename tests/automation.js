import { chromium } from 'playwright';
import { HomePage } from '../pages/HomePage.js';
import { CONFIG } from '../config/data.js';

async function run() {
    console.info('🚀 Starting automation script...');
    let browser;

    try {
        console.info('Launching Chromium browser (headed mode)...');
        browser = await chromium.launch({ headless: false });

        const context = await browser.newContext();
        const page = await context.newPage();

        // 1. Initialize our Page Object
        const homePage = new HomePage(page);

        // 2. Perform high-level actions using clean architecture
        await homePage.navigate(CONFIG.targetUrl);
        await homePage.fillContactForm(CONFIG.formData);
        await homePage.submitForm();
        await homePage.verifySubmissionSuccess();

    } catch (error) {
        console.error('❌ An error occurred during automation:', error);
    } finally {
        if (browser) {
            console.info('🧹 Closing the browser to clean up resources...');
            await browser.close();
        }
        console.info('🏁 Automation script finished.');
    }
}

run();
