describe('Edit speed lost', () => {
    beforeEach(() => {
      cy.visit('https://sapwdawsemea.pharma.aventis.com:9102/XMII/Menu.jsp?saml2=disabled')
      cy.fixture('testdata').then(function (testdata) {
        this.testdata = testdata
      })
    })
   
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
    it ('Edit speed lost', function () {
      cy.loginToMii(this.testdata.username,this.testdata.password)
      cy.loginToeOEEDashboard()
      cy.ReportSpeedLoss()
      cy.get('.sapMBtnContent').eq(2).click()
      cy.get('#__picker0-inner').clear({force: true})
      cy.get('#__picker0-inner').type("Sep 12, 2024 {enter}" , {force: true} )
      cy.get('.sapMSLITitleOnly').eq(1).click({force: true})
      //cy.get('.sapMCb').eq(0).click()
      //cy.get('tbody[id$="--reportedSpeedLoss-tblBody"]>tr').find('td').eq(1).click({force: true})
      cy.get('#__item16-__xmlview12--orderTable-0-selectMulti-CbBg').click({force: true})
      cy.get('footer button').contains("Delete").parents("button").click({force: true});
      cy.get('.sapMBtnContent').eq(0).click({force: true})
      cy.wait(3000)
      cy.get('tbody[id$="--orderTable-tblBody"]>tr').find('button').eq(0).click({force: true})
      cy.get('.sapMBtnContent').eq(0).click({force: true})
      cy.wait(2000)
      cy.get('.sapMBtnContent').eq(1).click({force: true})
      cy.wait(2000)
      cy.get('.sapMSLITitleOnly').eq(1).click({force: true})
      // cy.get('#speedLossSplitDialog--okButtonCalculator-content').click({force: true})
      // cy.get('.sapMBtnContent').eq(0).click({force: true})
      // cy.get('tbody[id$="--reportedSpeedLoss-tblBody"]>tr').find('button').eq(1).click({force: true})
      // cy.get('input[id^="__input0-__"]').eq(1).type("30" , {force: true})
      // cy.get('.sapMBtnContent').eq(8).click({force: true})
      // //cy.get('.sapMBtnContent').eq(4).click({force: true}) deja 
      // cy.get('tbody[id$="--reportedSpeedLoss-tblBody"]>tr').find('button').eq(2).click({force: true})
      // cy.get('tbody[id$="--rootCauseMachineTable-tblBody"]>tr').find('button').eq(2).click({force: true})
      // cy.get('.sapMSLITitleOnly').eq(0).click({force: true})
      // cy.get('.sapMBtnContent').eq(6).click({force: true})
      //cy.wait(2000)
      //cy.get('#__button50-content').click({force: true})
    })
})