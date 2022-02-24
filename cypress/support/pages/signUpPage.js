const el = {
    signInSignUpPageButton: 'a[class="sc-hiwReK sc-faUofl iaKEiZ cHVFIH Button sc-jlsrtQ hnbtQK"]',
    signUpButton: 'button[class="sc-hiwReK sc-clIAKW fIlSWa dDlHlP Button"'
}

class SignUpPage {

    clickSignInButton(){
        cy.get(el.signInSignUpPageButton).click();
    }    

    checkSignUpPageButton(){
        cy.get(el.signUpButton).should('be.visible');
    }
}

export default new SignUpPage();