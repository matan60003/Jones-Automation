# Jones Automation - Playwright Script Guide

Welcome to the Playwright automation script for the Jones Automation exercise! This guide will explain how to run the code, verify the requirements, and test the script yourself.

## Architecture Overview
This project uses the industry-standard **Page Object Model (POM)** architecture to keep the code clean and maintainable.
- `automation.js`: This is the main execution script. It reads like a story and contains no messy DOM selectors.
- `HomePage.js`: This is the Page Object class. It encapsulates all of the complex Playwright locators (like `getByLabel`) and DOM interaction methods.

## How to Run the Code
Since this project is already initialized with Node.js and Playwright, running the code is extremely simple.

1. Open your terminal or command prompt.
2. Ensure you are in the project folder: `c:\Users\matan\Desktop\Jones Automation`
3. Run the following command:
   ```bash
   node automation.js
   ```

## How to Perform a Test Yourself
To ensure everything is really working as expected, follow these exact steps:

1. **Start the Script**: Run `node automation.js` in your terminal.
2. **Watch the Browser**: Because the script is configured to run in "headed" mode (`headless: false`), you will see a Chromium browser window physically open on your screen.
3. **Observe the Automation**: Take your hands off the mouse and keyboard! Watch as Playwright automatically navigates to `https://test.netlify.app/` and types into the fields at superhuman speed.
4. **Check the Image**: Once the browser closes, look inside your project folder. You will find a new file named `screenshot-before-submit.png`. Open it to verify a picture was successfully captured.
5. **Read the Output**: Look back at your terminal window to read the logs.

## How to Verify the Task Requirements
The exercise provided 5 specific requirements. Here is how you can verify each one was met:

- ✅ **Requirement 1:** *Type values in the Name, Email, Phone, Company and Website fields.*
  - **Verification:** When you run the script, you will visually see these text boxes populate before the submit button is clicked. You can also view the generated `screenshot-before-submit.png` to see the populated fields frozen in time.
  
- ✅ **Requirement 2:** *Create a screenshot of the page before clicking the “Request a call back” button.*
  - **Verification:** The file `screenshot-before-submit.png` is generated directly in the project folder. Because it is a "Full Page" screenshot, it proves the form was filled entirely prior to submission.
  
- ✅ **Requirement 3 (Bonus):** *Change the Number of Employees from 1-10 to 51-500.*
  - **Verification:** You will see the dropdown visually change during execution, and the screenshot will confirm that "51-500" is selected.
  
- ✅ **Requirement 4:** *Click the “Request a call back” button.*
  - **Verification:** After the screenshot is taken, you will see the browser rapidly click the button and navigate away from the form page.
  
- ✅ **Requirement 5:** *Write to the console.log when reaching the thank you page.*
  - **Verification:** Check your terminal after the script finishes. You will see a success log (details below).

## How to Check the Logs
As the script runs, it uses `console.info()` and `console.error()` to print structured logs directly to your terminal. 

When you run the command `node automation.js`, your terminal should output exactly this sequence of events:

```text
🚀 Starting automation script...
Launching Chromium browser (headed mode)...
Navigating to target URL: https://test.netlify.app/
✅ Successfully loaded the page. Ready for next steps.
📝 Filling out the form fields...
🔄 Updating Number of Employees dropdown to: 51-500
📸 Taking a full-page screenshot...
🖱️ Clicking the "Request a call back" submit button...
⏳ Waiting for the "Thank you" page to load...
🎉 Successfully reached the Thank You page!
🧹 Closing the browser to clean up resources...
🏁 Automation script finished.
```

If you see `🎉 Successfully reached the Thank You page!`, it proves that the script successfully clicked the button, submitted the data, and detected the final success page before shutting down the browser.
