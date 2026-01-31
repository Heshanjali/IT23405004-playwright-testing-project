Student Information
K.T.Heshanjali
IT23405004
Y3 S1


# Singlish to Sinhala Translator

This project contains automated end-to-end tests for the Singlish to Sinhala translation functionality on [Swift Translator](https://www.swifttranslator.com/).

## Overview

This test suite validates the translation accuracy from Singlish (Romanized Sinhala) to Sinhala script across various linguistic scenarios.


## Technologies Used

- **Playwright** - Browser automation framework for end-to-end testing
- **Node.js** - JavaScript runtime environment
- **JavaScript** - Programming language

## Prerequisites

Before running the tests, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd PROJ1
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

## Project Structure

```
PROJ1/
├── tests/
│   └── singlishToSinhala.spec.js    # Main test file with translation test cases
├── playwright-report/                # HTML test report (generated after test run)
│   └── index.html
├── test-results/                     # Test execution results and artifacts
├── playwright.config.js              # Playwright configuration
├── package.json                      # Project dependencies
└── README.md                         # This file
```

## Running Tests

### Run all tests
```bash
npx playwright test


### Run tests with UI mode
```bash
npx playwright test --ui
```

## Viewing Test Reports

After running tests, view the HTML report:

```bash
npx playwright show-report
```

This will open a browser with detailed test results, including screenshots and traces for failed tests.

## Test Coverage

The test suite includes the following test cases:

24 positive test cases
10 negative test cases
1 UI related test case

## Configuration

The test configuration is defined in [playwright.config.js](playwright.config.js):

- **Test Directory**: `./tests`
- **Parallel Execution**: Enabled
- **Browser**: Chromium (Desktop Chrome)
- **Reporter**: HTML
- **Timeout**: 120 seconds per test
- **Retries**: 2 (on CI), 0 (locally)

## Notes

- Each test has a timeout of 120 seconds to account for network latency and translation processing time
- Tests target the Swift Translator website at `https://www.swifttranslator.com/`
- Some tests use regex patterns to allow for slight variations in translation output
- Mixed-language support is tested with English words embedded in Sinhala sentences

## Troubleshooting

### Tests failing due to timeout
- Increase the timeout value in the test or check your internet connection
- The default timeout is set to 120 seconds

### Browser not launching
- Run `npx playwright install` to ensure browsers are installed
- Check if your system meets Playwright's requirements

### Translation output mismatch
- The website may have updated its translation algorithm
- Check the actual output in the test report and update regex patterns if needed

## Contributing

When adding new test cases:
1. Follow the existing naming convention (`Pos_Fun_XX`)
2. Add descriptive comments explaining what linguistic feature is being tested
3. Use appropriate timeout values
4. Include context in test descriptions

