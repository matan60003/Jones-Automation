# Jones Automation - Playwright Script Guide

This repository contains the completed Playwright automation script for the Jones Automation exercise. This guide explains how to run the code and verify that all requirements have been met.

## Architecture Overview
This project uses the industry-standard **Page Object Model (POM)** architecture to keep the code clean and maintainable.
- `tests/contact-form.spec.js`: The test specification file. It uses `@playwright/test` and reads like a story — no messy DOM selectors.
- `pages/HomePage.js`: The Page Object class. It encapsulates all Playwright locators (like `getByLabel`) and DOM interaction methods.
- `config/data.js`: Contains test data (form inputs) separated from test logic.
- `playwright.config.js`: Playwright test runner configuration (browsers, retries, baseURL, etc.).

## How to Run the Code

1. Open your terminal or command prompt.
2. Navigate to the project root directory.
3. Install the project dependencies:
   ```bash
   npm install
   ```
4. Run the following command to execute the test:
   ```bash
   npx playwright test --project=chromium --headed
   ```
   Or simply:
   ```bash
   npm test
   ```

## Observing the Test
To see the automation working as expected, follow these exact steps:

1. **Start the Script**: Run `npx playwright test --project=chromium --headed` in your terminal.
2. **Watch the Browser**: You will see a Chromium browser window physically open on your screen.
3. **Observe the Automation**: Take your hands off the mouse and keyboard! Watch as Playwright automatically navigates to `https://test.netlify.app/` and types into the fields at superhuman speed.
4. **Check the Image**: Once the browser closes, look inside the `output/` folder. You will find a file named `screenshot-before-submit.png`. Open it to verify a picture was successfully captured.
5. **View the HTML Report**: Run `npx playwright show-report` to view the detailed test report with step annotations.


## How to View the Report
After running the tests, Playwright generates an HTML report automatically:
```bash
npx playwright show-report
```
Each test step (Navigate, Fill Form, Screenshot, Submit, Verify) will appear as annotated steps in the report.
