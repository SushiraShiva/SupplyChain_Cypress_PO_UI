import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('User is at the login page', () => {
    cy.visit('https://localhost:7012/order/vieworders')
})

When('User enters username as {string} and password as {string}', (username, password) => {
    //cy.get('#txtUsername').type(username)
    //cy.get('#txtPassword').type(password)
})

And('User clicks on login button', () => {
    //cy.get('#btnLogin').click()
})

Then('User is able to successfully login to the Website', () => {
    //cy.get('#welcome').should('be.visible', {timeout: 10000})
})