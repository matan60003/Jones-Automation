export class HomePage {
    /**
     * @param {import('playwright').Page} page
     */
    constructor(page) {
        this.page = page;


        this.nameInput = page.getByLabel('Name');
        this.emailInput = page.getByLabel('Email');
        this.phoneInput = page.getByLabel('Phone');
        this.companyInput = page.getByLabel('Company');
        this.websiteInput = page.getByLabel('Website');
        this.employeesDropdown = page.getByRole('combobox', { name: /employees/i });

        this.submitButton = page.getByRole('button', { name: 'Request a call back' });
        this.successMessageLocator = page.getByText(/thank you/i);
    }

    /**
     * @param {string} url 
     */
    async navigate(url) {
        await this.page.goto(url);
    }

    /**
     * @param {Object} formData 
     */
    async fillContactForm(formData) {
        await this.nameInput.fill(formData.name);
        await this.emailInput.fill(formData.email);
        await this.phoneInput.fill(formData.phone);
        await this.companyInput.fill(formData.company);
        await this.websiteInput.fill(formData.website);
        await this.employeesDropdown.selectOption(formData.employees);
    }

    /**
     * @param {string} screenshotPath
     */
    async takeScreenshot(screenshotPath) {
        await this.page.screenshot({ path: screenshotPath, fullPage: true });
    }

    async submitForm() {
        await this.submitButton.click();
    }
}
