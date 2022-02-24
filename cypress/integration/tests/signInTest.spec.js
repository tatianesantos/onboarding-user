import signInData from "../../fixtures/signInData";
import homePage from "../../support/pages/homePage";
import signInPage from "../../support/pages/signInPage";
import workspacePage from "../../support/pages/workspacePage";
import forgotPasswordPage from "../../support/pages/forgotPasswordPage";
import signUpPage from "../../support/pages/signUpPage";
import ssoSignInPage from "../../support/pages/ssoSignInPage";
import { signInFlow } from "../../support/flows/signInFlow";

let email, password;

describe('Sketch SignIn Test Scenarios', () => {
    beforeEach(() => {
        cy.visit(Cypress.config('url'));
        homePage.clickSignInButton();
    })

    it('Validate Sketch SignIn',() => {
        //Arrange
        email = signInData.validSignIn.email;
        password = signInData.validSignIn.password;

        //Act
        signInPage.fillEmail(email);
        signInPage.fillPassword(password);
        signInPage.clickSignInButton();

        //Assert
        workspacePage.checkContinueButton();
        workspacePage.checkWorkSpaceLogo();

    });

    it('Validate SignIn With Invalid Email Format',() => {
        //Arrange
        email = signInData.invalidSignIn.email;
        password = signInData.invalidSignIn.password;

        //Act
        signInFlow(email, password);

        //Assert
        signInPage.checkInvalidEmailMessage();

    });  

    it('Validate SignIn With Blank Email',() => {
        //Arrange
        email = "";
        password = signInData.invalidSignIn.password;

        //Act
        signInFlow(email, password);

        //Assert
        signInPage.checkEmailBlankMessage();

    }); 
    
    it('Validate SignIn With Blank Password',() => {
        //Arrange
        email = signInData.validSignIn.email;
        password = "";
        //Act
        signInFlow(email, password);

        //Assert
        signInPage.checkPasswordBlankMessage();

    }); 

    it('Validate SignIn With Faker User Authentication',() => {
        //Arrange
        email = signInData.fakerSignIn.email;
        password = signInData.fakerSignIn.password;
        //Act
        signInFlow(email, password);

        //Assert
        signInPage.checkFakerUserMessage();

    }); 

    it('Validate Forgot Password Button',() => {
        //Act
        signInPage.clickForgotPassword();

        //Assert
        forgotPasswordPage.checkResetButton();
        forgotPasswordPage.clickSignInButton();
        signInPage.checkSignInButton();
    }); 

    it('Validate Eye Icon',() => {
        //Arrange
        email = signInData.validSignIn.email;
        password = signInData.validSignIn.password;

        //Act
        signInPage.fillEmail(email);
        signInPage.fillPassword(password);
        signInPage.clickEyeIcon();

        //Assert
        signInPage.checkPasswordVisible();

    }); 

    it('Validate Create an Account Button',() => {
        //Act
        signInPage.clickCreateAccountButton();

        //Assert
        signUpPage.checkSignUpPageButton();
        signUpPage.clickSignInButton();
        signInPage.checkSignInButton();

    }); 

    
    it('Validate SignIn with SSO Button',() => {
        //Act
        signInPage.clickSsoSignInButton();

        //Assert
        ssoSignInPage.checkSsoSignInPage();
        ssoSignInPage.clickSignInButton();
        signInPage.checkSignInButton();

    }); 

})
