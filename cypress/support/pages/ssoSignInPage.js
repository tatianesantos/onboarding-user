const el = {
    signInSSOPageButton: 'a[class="sc-bTfYlY cpMpek sc-bjntzD FpRbw"]',
    ssoSignInButton: 'button[class="sc-hiwReK sc-clIAKW iJWVoZ dDlHlP Button"'
}

class SsoSignInPage {

    clickSignInButton(){
        cy.get(el.signInSSOPageButton).click();
    }    

    checkSsoSignInPage(){
        cy.get(el.ssoSignInButton).should('be.visible');
    }
}

export default new SsoSignInPage();