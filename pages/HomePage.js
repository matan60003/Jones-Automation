export class HomePage {
    /**
     * @param {import('playwright').Page} page
     */
    constructor(page) {
        this.page = page;

        // Initialize all resilient locators here
        this.nameInput = page.getByLabel('Name');
        this.emailInput = page.getByLabel('Email');
        this.phoneInput = page.getByLabel('Phone');
        this.companyInput = page.getByLabel('Company');
        this.websiteInput = page.getByLabel('Website');
        this.employeesDropdown = page.getByRole('combobox');
        
        this.submitButton = page.getByRole('button', { name: 'Request a call back' });
        this.successMessageLocator = page.locator('text=/thank you/i');
    }

    /**
     * Navigate to the target URL
     * @param {string} url 
     */
    async navigate(url) {
        console.info(`Navigating to target URL: ${url}`);
        await this.page.goto(url);
        console.info('✅ Successfully loaded the page. Ready for next steps.');
    }

    /**
     * Fill the contact form with the provided data
     * @param {Object} formData 
     */
    async fillContactForm(formData) {
        console.info('📝 Filling out the form fields...');
        await this.nameInput.fill(formData.name);
        await this.emailInput.fill(formData.email);
        await this.phoneInput.fill(formData.phone);
        await this.companyInput.fill(formData.company);
        await this.websiteInput.fill(formData.website);

        console.info(`🔄 Updating Number of Employees dropdown to: ${formData.employees}`);
        await this.employeesDropdown.selectOption(formData.employees);
    }

    /**
     * Capture a screenshot and submit the form
     */
    async submitForm() {
        console.info('📸 Taking a full-page screenshot...');
        await this.page.screenshot({ path: 'output/screenshot-before-submit.png', fullPage: true });

        console.info('🖱️ Clicking the "Request a call back" submit button...');
        await this.submitButton.click();
    }

    /**
     * Wait for the submission success message to appear
     */
    async verifySubmissionSuccess() {
        console.info('⏳ Waiting for the "Thank you" page to load...');
        await this.successMessageLocator.waitFor({ state: 'visible' });
        console.info('🎉 Successfully reached the Thank You page!');
    }
}
