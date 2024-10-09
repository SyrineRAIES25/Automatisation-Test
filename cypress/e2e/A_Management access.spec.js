describe('Management Access', () => {
    beforeEach(() => {
      cy.visit('https://sapwdawsemea.pharma.aventis.com:9102/XMII/Menu.jsp?saml2=disabled')
      cy.fixture('testdata').then(function (testdata) {
        this.testdata = testdata
      })
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
      it ('Management Access', function () {
        cy.loginToMii(this.testdata.username,this.testdata.password)
        cy.loginToeOEEDashboard()
        // cy.OrderCreationInterface()
        // cy.get(".sapMBtnContent").eq(0).click()
        // cy.wait(1000)
        // cy.get('input[id$="--orderInputId-inner"]').type(this.testdata.orderNumber , {force: true})
        // cy.get('input[id$="--batchInputId-inner"]').type(this.testdata.batchNumber,{force: true})
        // cy.get('input[id$="--operationDescInputId-inner"]').type(this.testdata.Description,{force: true})
        // cy.get('input[id$="--materialInputId-inner"]').type(this.testdata.Material + '{enter}',{force: true})
        // cy.get('input[id$="--quantityInputId-inner"]').type(this.testdata.Quantity,{force: true})
        // cy.get('input[id$="--DP1-inner"]').type(this.testdata.Date,{force: true})
        // cy.get('input[id$="--TP1-inner"]').type(this.testdata.Time,{force: true})
        // cy.get('footer[id$="--HDialogId-footer"]').find('button').eq(2).click({force:true})
        // cy.get('footer[id^="__dialog"]').find('button').eq(0).click({force:true})
        // cy.get('footer').eq(0).find('button').eq(0).click({force:true})
        // cy.wait(2000)
        // cy.get('div[id$="-selectMulti-CbBg"]').eq(1).click()
        // cy.get('span[id$="--OMReleaseBtn-content"]').eq(0).click()
        // cy.get('.sapMBtnContent').eq(0).click({force: true})
        // cy.loginToeOEEDashboard()
        // cy.ManageOrderInterface()
        // cy.get('div[id$="--idActiveStatus-CbBg"]').click()
        // cy.wait(2000)
        // cy.get('span[id$="__clone0-content"]').eq(0).click()
        // cy.get('#prodActivitiesFragment--okButton-content').click({force: true})
        cy.ReportProduction()
       
        cy.get('span[id$="--reportProductionQuantityTable-0-content"]').eq(0).click({force: true})
        cy.get('#adjustmentPopup--inputDeltaID-inner').type("3000" , {force: true})
        cy.get('#adjustmentPopup--adjustOKButton-content').click({force: true})
        //cy.get('#customAlertItem').click()


        
    
      })
    })