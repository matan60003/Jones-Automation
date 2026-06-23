import { chromium } from 'playwright';
import { HomePage } from './HomePage.js';

// --- CONFIGURATION ---
const CONFIG = {
    targetUrl: 'https://test.netlify.app/',
    formData: {
        name: 'Matan Owadeyah',
        email: 'matan60003@gmail.com',
        phone: '050-6486657',
        company: 'Matan Owadeyah Automation',
        website: 'https://jonesautomation.com',
        employees: '51-500'
    }
};
// ---------------------

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
        // Bug Fix: Re-enabled the finally block to ensure the Node process doesn't hang!
        if (browser) {
            console.info('🧹 Closing the browser to clean up resources...');
            await browser.close();
        }
        console.info('🏁 Automation script finished.');
    }
}

run();
