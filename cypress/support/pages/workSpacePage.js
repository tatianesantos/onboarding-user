class WorkSpacePage {
    constructor(){
        this.continueButton = 'button[class="sc-hiwReK sc-faUofl dMYOED cHVFIH Button sc-RUXdv gDgHNf"]',
        this.workSpaceLogo = 'div[class="sc-hKwCoD sc-gEOXsD sc-dusDUo cKePZP fsaGxM dLXVyp"'
    }

    checkContinueButton(){
        cy.get(this.continueButton).should('be.visible').then((continueButton) => {
            if (continueButton){
                cy.get(this.continueButton).click();
            }
        })  
    } 
    checkWorkSpaceLogo(){
        cy.get(this.workSpaceLogo).should('be.visible');
    }   
}

export default new WorkSpacePage();

