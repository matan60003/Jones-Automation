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
