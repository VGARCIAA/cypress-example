class validatelogin {
    
    isLoggedIn = () => {
        cy.fixture('/pages/loginlocators.json').then((locator) => {
            cy.get(locator.product_label).should('be.visible');
        })
    }
}

export default new validatelogin();