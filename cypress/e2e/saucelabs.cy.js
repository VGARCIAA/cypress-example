/// <reference types="Cypress" /> 
const url = Cypress.env('url');
//Navigate to SwagLabs
describe('Login into Swag Labs Successfully', () => {
  it('Swag Labs page opens successfully', () => {
      cy.visit(url);
      cy.get('html').should('not.be.empty');

      // User can Login
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();
      cy.get('.product_label').should('be.visible');
    })

  })
  