class SsoSignInPage {
    constructor(){
        this.signInSSOPageButton = 'a[class="sc-bTfYlY cpMpek sc-bjntzD FpRbw"]',
        this.ssoSignInButton = 'button[class="sc-hiwReK sc-clIAKW iJWVoZ dDlHlP Button"'
    }

    clickSignInButton(){
        cy.get(this.signInSSOPageButton).click();
    }    

    checkSsoSignInPage(){
        cy.get(this.ssoSignInButton).should('be.visible');
    }
}

export default new SsoSignInPage();