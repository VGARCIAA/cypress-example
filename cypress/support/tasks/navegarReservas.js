class navegarReservas {
    
    irAReservas = () => {
        cy.fixture('/pages/abnavegacion.json').then((locator) => {
            cy.get(locator.modal_inicio).should('be.visible');
            cy.get(locator.modal_inicio_cerrar).click();
            cy.get(locator.btn_reservas).should('have.attr', 'href', '/reservas').click();
            cy.get(locator.header_reservas).should(($header) => {
                expect($header).to.have.text('reservar una clase')
            });
        })
    }

    seleccionarSede = (sede) => {
        cy.fixture('/pages/abnavegacion.json').then((locator) => {
            cy.get(locator.select_reservas).click();
            cy.get(locator.ops_reservas).find('li > a').contains('Sabaneta').click();
        })
    }
}

export default new navegarReservas();