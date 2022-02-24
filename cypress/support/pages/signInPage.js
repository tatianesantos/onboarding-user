class SignInPage {
    constructor() {
        this.email =  '#text-input', //CSS Selector
        this.password = 'input[data-testid="input"]', //There is a id(the best option) but I'll use data-testId (I usually use this option when there isn't id available)
        this.signInButton = 'button[class="sc-hiwReK sc-clIAKW fIlSWa dDlHlP Button"',
        this.forgotPasswordButton = 'a[class="sc-bTfYlY hRcZTQ FormLabel__aside"]',
        this.eyeIcon = 'button[data-testid ="eye-icon"]',
        this.createAccountButton = 'a[href ="/signup"]',
        this.ssoSignInButton = 'a[href ="/signin/sso"]',
        this.invalidEmail = 'span[class ="sc-dGXzYd fbZSeN"]',
        this.invalidEmailMessage = 'This is not a valid email',
        this.passwordBlank = 'span[class ="sc-dGXzYd fbZSeN"',
        this.passwordBlankMessage = 'Password can’t be blank',
        this.emailBlank = 'span[class ="sc-dGXzYd fbZSeN"',
        this.emailBlankMessage = 'Email can’t be blank',
        this.fakeUserSigin = 'span[class ="sc-dGXzYd sc-gJbFMZ fbZSeN bFRRZM"',
        this.fakeUserSiginMessage = 'We couldn’t sign you in. Please check your details and try again.'
    }

    fillEmail(email){
        cy.get(this.email).type(email);
    }

    fillPassword(password){
        cy.get(this.password).type(password);
    }

    clickSignInButton(){
        cy.get(this.signInButton).click();
    }

    clickForgotPassword(){
        cy.get(this.forgotPasswordButton).click();
    }

    clickEyeIcon(){
        cy.get(this.eyeIcon).click();
    }

    clickCreateAccountButton(){
        cy.get(this.createAccountButton).click();
    }

    clickSsoSignInButton(){
        cy.get(this.ssoSignInButton).click();
    }

    checkSignInButton(){
        cy.get(this.signInButton).should('be.visible');
    }

    checkPasswordVisible(password){
        cy.get(this.eyeIcon).should('have.css', 'color', 'rgb(242, 103, 38)');
        const passwordVerification = cy.get(this.password).value;
        expect(password).to.eql(passwordVerification);
    }

    checkInvalidEmailMessage(){
        cy.get(this.invalidEmail).invoke('text').should('include', this.invalidEmailMessage);
    }

    checkPasswordBlankMessage(){
        cy.get(this.passwordBlank).invoke('text').should('include', this.passwordBlankMessage);
    }
    
    checkEmailBlankMessage(){
        cy.get(this.emailBlank).invoke('text').should('include', this.emailBlankMessage);
    }  

    checkFakerUserMessage(){
        cy.get(this.fakeUserSigin).invoke('text').should('include', this.fakeUserSiginMessage);
    }    


}

export default new SignInPage();