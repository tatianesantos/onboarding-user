# Onboarding User
The project was create to automate User Onboarding behavior at Sketch.

### 🧩 The framework
-----------------------
* [Cypress - 9.5.0](http://cypress.io)
* [Cypress Dashboard](https://dashboard.cypress.io/)

### Project Implementation
* [Visual Studio Code](https://code.visualstudio.com)
* [JavaScript](https://www.javascript.com)
* [Node.js](https://nodejs.org/en/)
* [Mochawesome - 7.0.1](https://www.npmjs.com/package/mochawesome)

### ⚙️ The Architecture
```
ONBOARDING-USER/
  ├─  cypress/
  │        │
  │        ├── fixtures/
  │        │   └── <name>Data.'*'  
  │        │           
  │        ├── integration/
  │        │   └── tests/
  │        │         └── <name>.spec.js 
  │        │  
  │        ├── plugins/
  │        │ 
  │        ├── support/
  │        │   └── flows/  
  │        │   │      └── <name>Flow.js  
  │        │   └── pages/
  │        │   │      └── <name>Page.js 
  │        │   └── commands.js
  │        │   └── index.js       
  │        │  
  │        ├── reports/
  │        │   └── <name> 
  │        │ 
  │        ├── screenshots/
  │        │ 
  │        ├── videos/    
  │        │    
  │        │      
  └        └── README.md


```

### 🗂️ Achitecture layers
-----------------------
- **integration:** test files with describe functions and expected results. Test file represents the functionality.

- **fixture:** - provide data for the tests. It can be used for different types of input file (*.csv, *.png, *.js, *.json).

- **support:** 
    - **pages:** - selectors mapping, action functions.

    - **flows:** - functions that needs to be executed before, during, or after the test.

- **reports:** - Contains the generate reports.


### 🚀 Running Tests
-----------------------
* Setup
 1. Install Node JS 
 2. Install NPM 
 3. Install Cypress (npm install cypress --save-dev)
 4. Install VSCode

* Open VSCode and proceed with the follow commands:
 1. Open project inside VSCode
 2. Include a valid user data on the file cypress\fixtures\signInData.js
  ```
    validSignIn: {
            email: '',
            password: ''
        } 
  ```  
 There are different ways to set the variable using Cypress: * [Environment Variables](https://docs.cypress.io/guides/guides/environment-variables#Setting)
        
 3. Open Terminal
    - Execute - npm install
    - Execute - npx cypress open

The Cypress will open with the specs listed.
To execute tests click inside the spec displayed, the tests will start to run.

* Running test through the package.json command file:
Check the [package.json](../package.json) for the available cypress commands.
From the project root folder, run the command below to get local results:
  ```
  npm run cypress:run (chrome)
  ```
To run tests showing the browser execution proceed with the command below.
  ```
  npm run cypress:run:headed
  ```

* Run MultiBrowser tests - The commands below execute tests for the correspondent browser:
  ```
  npm run cypress:run:firefox
  npm run cypress:run:edge
  ```
At the end of the execution the results artifacts are available.

### 📊 Getting test report and screenshots
-----------------------
- Reports ./reports
- HTML report ./reports/mochareports
- Screenshots ./screenshots

### Mochawesome configuration
-----------------------
    npm install mocha --save-dev

    npm install mochawesome --save-dev
    
    npm install cypress-multi-reporters --save-dev (Terminal results, videos and screenshots)
    

### Test Execution Option
-----------------------
It's possible to run a specific test, to do this include the option .only after the 'it' signature.
- it.only('',() => {