const el = {
    resetPasswordButton: 'button[class="sc-hiwReK sc-clIAKW fIlSWa dDlHlP Button"]',
    signInForgotPageButton: 'a[class="sc-bTfYlY hRcZTQ sc-FuCfd kBVIbD"'
}

class ForgotPasswordPage {

    clickSignInButton(){
        cy.get(el.signInForgotPageButton).click();
    }    

    checkResetButton(){
        cy.get(el.signUpButton).should('be.visible');
    } 
}

export default new ForgotPasswordPage();