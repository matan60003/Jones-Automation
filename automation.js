import { chromium } from 'playwright';

// --- CONFIGURATION ---
const CONFIG = {
    targetUrl: 'https://test.netlify.app/',
    formData: {
        name: 'John Doe',
        email: 'john@example.com',
        phone: '555-0198',
        company: 'Jones Automation Inc',
        website: 'https://jonesautomation.com',
        employees: '51-500' // Bonus requirement
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

        console.info(`Navigating to target URL: ${CONFIG.targetUrl}`);
        await page.goto(CONFIG.targetUrl);

        console.info('✅ Successfully loaded the page. Ready for next steps.');
        
        console.info('📝 Filling out the form fields...');
        // Fill text fields using user-facing label selectors
        await page.getByLabel('Name').fill(CONFIG.formData.name);
        await page.getByLabel('Email').fill(CONFIG.formData.email);
        await page.getByLabel('Phone').fill(CONFIG.formData.phone);
        await page.getByLabel('Company').fill(CONFIG.formData.company);
        await page.getByLabel('Website').fill(CONFIG.formData.website);

        console.info(`🔄 Updating Number of Employees dropdown to: ${CONFIG.formData.employees}`);
        // For the dropdown (Bonus Requirement), we target the combobox element
        await page.getByRole('combobox').selectOption(CONFIG.formData.employees);

        console.info('📸 Taking a full-page screenshot...');
        await page.screenshot({ path: 'screenshot-before-submit.png', fullPage: true });

        console.info('🖱️ Clicking the "Request a call back" submit button...');
        await page.getByRole('button', { name: 'Request a call back' }).click();

        console.info('⏳ Waiting for the "Thank you" page to load...');
        await page.waitForSelector('text=/thank you/i', { state: 'visible' });
        
        console.info('🎉 Successfully reached the Thank You page!');

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
