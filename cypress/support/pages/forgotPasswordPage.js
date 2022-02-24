class ForgotPasswordPage {
    constructor(){
        this.resetPasswordButton = 'button[class="sc-hiwReK sc-clIAKW fIlSWa dDlHlP Button"]',
        this.signInForgotPageButton = 'a[class="sc-bTfYlY hRcZTQ sc-FuCfd kBVIbD"'
    }

    clickSignInButton(){
        cy.get(this.signInForgotPageButton).click();
    }    

    checkResetButton(){
        cy.get(this.signUpButton).should('be.visible');
    } 
}

export default new ForgotPasswordPage();