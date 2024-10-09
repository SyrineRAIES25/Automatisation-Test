// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginToMii', (email, password) => {
    cy.get('#logonuidfield').type(email)
    cy.get('#logonpassfield').type(password)
    cy.get('.urBtnStdNew').click()
})

Cypress.Commands.add('loginToeOEEDashboard',() => {
    cy.visit('https://sapwdawsemea.pharma.aventis.com:9102/OEEDashboard/WorkerUI.jsp?plant=IEPW&client=327') 
})

Cypress.Commands.add('OrderCreationInterface',() => {
    cy.get('.sapMPageFooter>div>button').eq(5).click()
    cy.get('#__button16-content').click({force: true})
    cy.get('#__text23').contains('You will be directed to an external site. Do you want to continue? OEE application will still be available on a separate tab.')
    cy.visit('https://sapwdawsemea.pharma.aventis.com:9102/XMII/CM/eOEE/ExternalApps/OrderManagement/index.irpt')
})

Cypress.Commands.add('ManageOrderInterface',() => {
    cy.get('.sapMPageFooter>div>button').eq(0).click()
    cy.wait(3000)
})

Cypress.Commands.add('ManageDowntime',() => {
    cy.get('.sapMPageFooter>div>button').eq(1).click()
    cy.wait(2000)
    cy.contains('Manage Downtime').click({force: true})
    cy.wait(3000)
})

Cypress.Commands.add('ReportProduction',() => {
    cy.get('.sapMPageFooter>div>button').eq(2).click()
    cy.wait(2000)
})

Cypress.Commands.add('ReportSpeedLoss',() => {
    cy.get('.sapMPageFooter>div>button').eq(3).click()
    cy.wait(2000)
})