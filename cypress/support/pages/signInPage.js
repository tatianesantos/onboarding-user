const el = {
    email: '#text-input', //CSS Selector
    password: 'input[data-testid="input"]', //There is a id(the best option) but I'll use data-testId (I usually use this option when there isn't id available)
    signInButton: 'button[class="sc-hiwReK sc-clIAKW fIlSWa dDlHlP Button"',
    forgotPasswordButton: 'a[class="sc-bTfYlY hRcZTQ FormLabel__aside"]',
    eyeIcon: 'button[data-testid="eye-icon"]',
    createAccountButton: 'a[href="/signup"]',
    ssoSignInButton: 'a[href="/signin/sso"]',
    invalidEmail: 'span[class="sc-dGXzYd fbZSeN"]',
    invalidEmailMessage: 'This is not a valid email',
    passwordBlank: 'span[class="sc-dGXzYd fbZSeN"',
    passwordBlankMessage: 'Password can’t be blank',
    emailBlank: 'span[class="sc-dGXzYd fbZSeN"',
    emailBlankMessage: 'Email can’t be blank',
    fakeUserSigin: 'span[class="sc-dGXzYd sc-gJbFMZ fbZSeN bFRRZM"',
    fakeUserSiginMessage: 'We couldn’t sign you in. Please check your details and try again.'

}

class SignInPage {

    fillEmail(email){
        cy.get(el.email).type(email);
    }

    fillPassword(password){
        cy.get(el.password).type(password);
    }

    clickSignInButton(){
        cy.get(el.signInButton).click();
    }

    clickForgotPassword(){
        cy.get(el.forgotPasswordButton).click();
    }

    clickEyeIcon(){
        cy.get(el.eyeIcon).click();
    }

    clickCreateAccountButton(){
        cy.get(el.createAccountButton).click();
    }

    clickSsoSignInButton(){
        cy.get(el.ssoSignInButton).click();
    }

    checkSignInButton(){
        cy.get(el.signInButton).should('be.visible');
    }

    checkPasswordVisible(password){
        cy.get(el.eyeIcon).should('have.css', 'color', 'rgb(242, 103, 38)');
        const passwordVerification = cy.get(el.password).value;
        expect(password).to.eql(passwordVerification);
    }

    checkInvalidEmailMessage(){
        cy.get(el.invalidEmail).invoke('text').should('include', el.invalidEmailMessage);
    }

    checkPasswordBlankMessage(){
        cy.get(el.passwordBlank).invoke('text').should('include', el.passwordBlankMessage);
    }
    
    checkEmailBlankMessage(){
        cy.get(el.emailBlank).invoke('text').should('include', el.emailBlankMessage);
    }  

    checkFakerUserMessage(){
        cy.get(el.fakeUserSigin).invoke('text').should('include', el.fakeUserSiginMessage);
    }    


}

export default new SignInPage();