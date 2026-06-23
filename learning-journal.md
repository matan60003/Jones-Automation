# Playwright Learning Journal

## Step 1: Project Initialization
**What we did:** Initialized a new Node.js project and installed the Playwright library.
**Why we did it:** To create the `package.json` file which keeps track of our project details and dependencies, and to download the Playwright library which we'll use to automate the browser.
**How we did it:**
Ran the following commands in the terminal:
```powershell
npm init -y
npm install playwright
```

## Step 2: Install Browser Binaries
**What we did:** Downloaded the Chromium browser binaries.
**Why we did it:** Even though the Playwright library is installed, it still needs the actual browser executables to drive them. We chose Chromium since the exercise simulates Chrome usage.
**How we did it:**
Ran the following command in the terminal:
```powershell
npx playwright install chromium
```

## Step 3: Base File and Boilerplate Setup
**What we did:** Added `"type": "module"` to `package.json` and created `automation.js` with the initial configuration, browser launch code, and try-catch-finally block. We successfully ran it to load the target URL.
**Why we did it:** 
- `"type": "module"` allows us to use modern `import` syntax instead of old `require` statements.
- The `try-catch-finally` block ensures that even if our automation crashes halfway through, the `finally` block runs and closes the browser cleanly (preventing memory leaks or zombie processes).
- Keeping the configuration object (`CONFIG`) at the top separates test data from logic, making it easier to maintain.
**How we did it:**
Wrote the code into `automation.js` and ran:
```powershell
node automation.js
```

## Step 4: Form Interaction
**What we did:** Filled out the form fields and changed the "Number of Employees" dropdown. We then committed these changes to Git.
**Why we did it:** To complete the core requirement of the exercise. We used `getByLabel` instead of CSS selectors because it is more resilient to code changes and mimics how a real human finds inputs (by reading the text next to them).
**How we did it:**
Added the following logic to `automation.js`:
```javascript
await page.getByLabel('Name').fill(CONFIG.formData.name);
await page.getByLabel('Email').fill(CONFIG.formData.email);
await page.getByLabel('Phone').fill(CONFIG.formData.phone);
await page.getByLabel('Company').fill(CONFIG.formData.company);
await page.getByLabel('Website').fill(CONFIG.formData.website);
await page.getByRole('combobox').selectOption(CONFIG.formData.employees);
```
And then committed our checkpoint to Git.

## Step 5: Visual Verification & Submission
**What we did:** Added logic to take a full-page screenshot and then click the "Request a call back" button.
**Why we did it:** The full-page screenshot provides proof that the form was filled correctly before submission. We used `getByRole('button')` because it's the most robust way to find buttons that function as submissions.
**How we did it:**
Added the following logic to `automation.js`:
```javascript
await page.screenshot({ path: 'screenshot-before-submit.png', fullPage: true });
await page.getByRole('button', { name: 'Request a call back' }).click();
```
And then committed our checkpoint to Git.

## Step 6: Validation & Cleanup
**What we did:** Implemented a wait mechanism to detect the "Thank You" page and print a success message.
**Why we did it:** Playwright acts incredibly fast; if we didn't explicitly wait for the page to show "Thank you", the script would finish and the browser would close before the submission successfully processed. We used `waitForSelector('text=...')` because it checks the visual rendering of the page rather than relying on URL patterns.
**How we did it:**
Added the following logic:
```javascript
await page.waitForSelector('text=/thank you/i', { state: 'visible' });
console.info('🎉 Successfully reached the Thank You page!');
```
And executed a final Git commit!

## Step 7: Clean Architecture (POM Refactor)
**What we did:** Abstracted all DOM selectors and interaction logic into a dedicated `HomePage.js` class file, and updated `automation.js` to call those class methods instead.
**Why we did it:** The Page Object Model (POM) is the industry standard for UI test automation. It ensures the execution script reads cleanly like a story and centralizes all HTML locators in one place, making the code highly maintainable.
**How we did it:**
Created a new `HomePage` object:
```javascript
const homePage = new HomePage(page);
await homePage.navigate(CONFIG.targetUrl);
await homePage.fillContactForm(CONFIG.formData);
await homePage.submitForm();
await homePage.verifySubmissionSuccess();
```
