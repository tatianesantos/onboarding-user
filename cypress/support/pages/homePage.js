class HomePage {
    constructor(){
        this.signInHomePageButton = '.main-nav__item.main-nav__item--persistent'
    }

    clickSignInButton(){
        cy.get(this.signInHomePageButton).children('a').click();
    }    

}

export default new HomePage();