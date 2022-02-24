class SignUpPage {
    constructor(){
        this.signInSignUpPageButton = 'a[class="sc-hiwReK sc-faUofl iaKEiZ cHVFIH Button sc-jlsrtQ hnbtQK"]',
        this.signUpButton =  'button[class="sc-hiwReK sc-clIAKW fIlSWa dDlHlP Button"'
    }

    clickSignInButton(){
        cy.get(this.signInSignUpPageButton).click();
    }    

    checkSignUpPageButton(){
        cy.get(this.signUpButton).should('be.visible');
    }
}

export default new SignUpPage();