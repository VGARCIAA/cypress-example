class login {
    
    fillLoginForm = (username, password) => {
        cy.fixture('/pages/loginlocators.json').then((locator) => {
            cy.get(locator.username_id).type(username);
            cy.get(locator.password_id).type(password);
            cy.get(locator.login_button_id).click();
        })
    }
}

export default new login();