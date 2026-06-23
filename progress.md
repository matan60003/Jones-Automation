# Jones Automation - Progress Tracker

**Objective:** Automate form filling, take a screenshot, and verify submission on `https://test.netlify.app/` using Playwright.

## Pending Steps

- [x] **STEP-001: Setup & Initialization**
  - Initialize Node project and install Playwright.
  - Create the base execution file (`automation.js`).
  - Write the boilerplate code to launch Chromium and navigate to the target URL.
  - *Checkpoint:* Run the script to verify the browser opens the correct page. Commit changes.

- [ ] **STEP-002: Form Interaction**
  - Implement filling of text fields: Name, Email, Phone, Company, Website.
  - Implement the Bonus requirement: Change "Number of Employees" dropdown to "51-500".
  - *Checkpoint:* Run the script visually (`headless: false`) to verify fields are populated correctly. Commit changes.

- [ ] **STEP-003: Visual Verification & Submission**
  - Add logic to capture a screenshot of the page and save it locally.
  - Add logic to click the "Request a call back" button.
  - *Checkpoint:* Verify the image is saved in the directory. Commit changes.

- [ ] **STEP-004: Validation & Cleanup**
  - Add a wait mechanism to detect the "Thank you" page.
  - Write a success message to the console.
  - Ensure the browser instance is properly closed.
  - *Checkpoint:* Run the full flow end-to-end. Commit changes.