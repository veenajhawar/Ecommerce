# Ecommerce Automation Project

This project automates the testing of an ecommerce website using Playwright and Cucumber with TypeScript.

---

## Table of Contents

- [Setup Instructions](#setup-instructions)
- [Required Extensions](#required-extensions)
- [Running Tests](#running-tests)
- [Generating Reports](#generating-reports)
- [Contributors](#contributors)

---

## Setup Instructions

1. **Clone the Repository**  
   Clone the repository using one of the following methods:

   git clone https://github.com/veenajhawar/Ecommerce.git

OR

gh repo clone veenajhawar/Ecommerce

2. **Install Dependencies**  
   Navigate to the working directory and install dependencies from `package-lock.json`:

   npm install

3. **Install Playwright**  
   Install Playwright for testing:

   npm install -D @playwright/test@latest

---

## Required Extensions

The following extensions are recommended for this project:

1. Prettier
2. Cucumber
3. Playwright with TypeScript
4. GitHub Copilot

**Note:** Make sure to update all packages before running tests:

``
npm update

---

## Running Tests

Tests are organized by tag names (e.g., `smoke` and `regression`). You can add more tags as needed in `index.html`.

To run tests with the `smoke` tag:

npm run cucumber smoke

The `cucumber` script in `package.json` calls `index.ts` for the full script.

---

## Generating Reports

Reports can be generated using the following command:

npm run cucumber --reporter=html

---

## Contributors

Veena Jhawar
