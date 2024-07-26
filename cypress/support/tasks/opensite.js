class opensite {
    openGivenSite = (app) => {
        cy.visit(Cypress.env(app));
        cy.get('html').should('not.be.empty');
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
          });
    }
}

export default new opensite();