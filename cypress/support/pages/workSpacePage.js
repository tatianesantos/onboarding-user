const el = {
    continueButton: 'button[class="sc-hiwReK sc-faUofl dMYOED cHVFIH Button sc-RUXdv gDgHNf"]',
    workSpaceLogo: 'div[class="sc-hKwCoD sc-gEOXsD sc-dusDUo cKePZP fsaGxM dLXVyp"'
}

class WorkSpacePage {

    checkContinueButton(){
        cy.get(el.continueButton).should('be.visible').then((continueButton) => {
            if (continueButton){
                cy.get(el.continueButton).click();
            }
        })  
    } 
    checkWorkSpaceLogo(){
        cy.get(el.workSpaceLogo).should('be.visible');
    }   
}

export default new WorkSpacePage();

