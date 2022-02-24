const el = {
    signInHomePageButton: '.main-nav__item.main-nav__item--persistent'
}

class HomePage {

    clickSignInButton(){
        cy.get(el.signInHomePageButton).children('a').click();
    }    

}

export default new HomePage();