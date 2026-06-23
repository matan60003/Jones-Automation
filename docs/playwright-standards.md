# Playwright Automation Standards

## Core Architecture
- Always use `@playwright/test` or the standalone `playwright` module correctly according to the project setup.
- Enforce strict `async/await` usage for all Playwright actions.
- **Utilize the Page Object Model (POM)**: Separate execution logic from DOM locators to keep tests clean and maintainable.
- **Maintain Scalable Directory Structure**: Keep `tests/`, `pages/`, and `config/` strictly separated. Never mix test logic with configuration data.

## Selectors & Interactivity
- Prefer resilient selectors: user-facing text (`text="Submit"`), placeholders, or ARIA labels over brittle XPaths or complex CSS paths.
- Avoid hardcoding sensitive data. Use variables for form inputs at the top of the file.

## Quality & Checks
- Always ensure the browser is closed in a `finally` block or at the end of the script to prevent memory leaks.
- Avoid implicit waits (e.g., `page.waitForTimeout()`). Use explicit waits like `page.waitForSelector()` or `page.waitForLoadState()`.

## Logging & Output
- Use clear `console.log` statements to indicate the start and end of critical steps (e.g., "Starting form fill", "Screenshot taken", "Reached Thank You page").