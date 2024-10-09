describe('Create Speed Loss', () => {
  beforeEach(() => {
    //cy.visit('XMII//Illuminator?service=Personalization&saml2=disabled')
    cy.visit('https://sapwdawsemea.pharma.aventis.com:9102/XMII/Menu.jsp?saml2=disabled')
    cy.fixture('testdata').then(function (testdata) {
      this.testdata = testdata
    })
  })
 
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
   it ('Create Speed Loss', function () {
    
    cy.loginToMii(this.testdata.username,this.testdata.password)
    cy.loginToeOEEDashboard()
    cy.ReportSpeedLoss()
    cy.wait(3000)
    cy.get('.sapMBtnContent').eq(2).click()
    cy.get('#__picker0-inner').clear({force: true})
    cy.get('#__picker0-inner').type("Sep 12, 2024 {enter}" , {force: true} )
    cy.get('.sapMSLITitleOnly').eq(1).click({force: true})
    cy.get('tbody[id$="--orderTable-tblBody"]>tr').find('button').eq(0).click({force: true})
    cy.get('.sapMBtnContent').eq(2).click({force: true})
    cy.get('input[id^="__input0-__"]').eq(0).type("10" , {force: true})
    cy.get('.sapMBtnContent').eq(1).click({force: true})
    cy.get('.sapMSLITitleOnly').eq(1).click({force: true})
    cy.wait(3000)
    cy.get('#speedLossSplitDialog--okButtonCalculator-content').click({force: true})
    cy.get('tbody[id$="--orderTable-tblBody"]>tr').find('button').eq(0).click({force: true})
    cy.get('.sapMBtnContent').eq(2).click({force: true})
    cy.get('input[id^="__input1-__"]').eq(0).type("500" , {force: true})
    cy.get('.sapMDialogScrollCont').contains(this.testdata.ErrorMessage) 
  })
 })