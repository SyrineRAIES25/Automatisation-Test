describe('Speed Loss Duration', () => {
    beforeEach(() => {
      cy.visit('https://sapwdawsemea.pharma.aventis.com:9102/XMII/Menu.jsp?saml2=disabled')
      cy.fixture('testdata').then(function (testdata) {
        this.testdata = testdata
      })
    })
   
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
    it ('Speed Loss Duration', function () {
        cy.loginToMii(this.testdata.username,this.testdata.password)
        cy.wait(5000)
        cy.loginToeOEEDashboard()
        cy.ReportSpeedLoss()
        cy.get('.sapMBtnContent').eq(2).click()
        cy.get('#__picker0-inner').clear({force: true})
        cy.get('#__picker0-inner').type("Sep 17, 2024 {enter}" , {force: true} )
        cy.get('.sapMSLITitleOnly').eq(1).click({force: true})
        var speedlossduration 
        cy.get('tbody[id$="--speedLossKPITable-tblBody"]>tr').find('td').eq(7).then(($input) => {
            speedlossduration = $input.text()
            cy.log(speedlossduration)
            cy.get('tbody[id$="--orderTable-tblBody"]>tr').find('button').eq(0).click({force: true})
            cy.get('.sapMBtnContent').eq(2).click({force: true})
            cy.get('#__item1-shift--oList-2').type("30" , {force: true})
            cy.get('.sapMBtnContent').eq(2).click({force: true})
            cy.get('tbody[id$="--speedLossKPITable-tblBody"]>tr').find('td').eq(7).should("not.contain", speedlossduration)   
        })
    })
  })