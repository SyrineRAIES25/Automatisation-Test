describe('Alert Ejection', () => {
    beforeEach(() => {
      cy.visit('https://sapwdawsemea.pharma.aventis.com:9102/XMII/Menu.jsp?saml2=disabled')
      cy.fixture('testdata').then(function (testdata) {
        this.testdata = testdata
      })
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
      it ('Alert Ejection', function () {
        cy.loginToMii(this.testdata.username,this.testdata.password)
        cy.visit('/XMII/CM/eOEE/ExternalApps/ApplicationLaunchpad/index.irpt')
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9102/XMII/CM/eOEE/ExternalApps/AlertConfigLauncher/index.irpt')
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9102/XMII/CM/eOEE/ExternalApps/AlertConfig/index.irpt')
        cy.get('.sapMBtnContent').eq(0).click()
        cy.wait(2000)
        cy.get('input[id$="--AlertName-inner"]').eq(0).type("Ejection Alert Test 2" , {force: true})
        cy.get('input[id$="--AlertTitle-inner"]').eq(0).type("Ejection Alert Test" , {force: true})
        cy.get('textarea[id$="--AlertDescription-inner"]').eq(0).type("Description" , {force: true})
        cy.get('span[id$="--AlertType-arrow"]').eq(0).click({force: true})
        cy.get('#__list5>li').each(($e,index)=>{
            if ($e.text() === "EJECTION_RATE") {
               cy.wrap($e).click({force: true})}
               }) 
        cy.get('div[id$="--AlertH-Button"]').click({force: true})
        cy.get('span[id$="--AlertPersistence-arrow"]').eq(0).click({force: true})
        cy.get('#__list6>li').each(($e,index)=>{
            if ($e.text() === "Always") {
               cy.wrap($e).click({force: true})}
               }) 
        cy.get('span[id$="--AlertTarget-arrow"]').eq(0).click({force: true})
        cy.get('div[id$="-selectMulti-CbBg"]').eq(154).click({force: true}) 
        cy.get('span[id$="--AlertTarget-arrow"]').eq(0).click({force: true})
        cy.wait(3000)       
        cy.get('span[id$="--AlertVisualization-arrow"]').eq(0).click({force: true})
        cy.get('div[id$="-selectMulti-CbBg"]').eq(195).click({force: true})
        cy.get('span[id$="--AlertVisualization-arrow"]').eq(0).click({force: true})
        cy.get('span[id$="--AlertOpTab-icon"]').eq(0).click({force: true})
        cy.get('input[id^="__input0-__list9"]').eq(0).type("60" , {force: true})
        cy.get('input[id^="__input0-__list9"]').eq(1).type("10" , {force: true})
        cy.get('input[id^="__input0-__list9"]').eq(2).type("F" , {force: true})
        cy.get('input[id^="__input0-__list9"]').eq(3).type("Y" , {force: true})
        cy.get('input[id^="__input0-__list9"]').eq(4).type("Y" , {force: true})
        cy.get('span[id$="--createButtonId-inner"]').eq(0).click({force: true})
        cy.wait(1000)
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9102/XMII/CM/eOEE/ExternalApps/AlertConfigLauncher/index.irpt')
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9102/XMII/CM/eOEE/ExternalApps/AlertAssign/index.irpt')
        cy.get('span[id$="--OMCreateBtn-content"]').eq(0).click()
        cy.get('span[id$="--AlertConfigCombo-arrow"]').eq(0).click({force: true})
        cy.get('#__list6>li').each(($e,index)=>{
            if ($e.text() === "Ejection Alert Test 2") {
               cy.wrap($e).click({force: true})}
               }) 
        cy.get('span[id$="--createButtonId-content"]').eq(0).click({force: true})
        cy.loginToeOEEDashboard()
        cy.ReportProduction()
        cy.get('span[id$="--reportProductionQuantityTable-0-content"]').eq(0).click({force: true})
        cy.get('input[id$="--inputDeltaID-inner"]').eq(0).type("89" , {force: true})
        cy.get('span[id$="--adjustOKButton-content"]').eq(0).click({force: true})
        cy.get('span[id$="--reportProductionQuantityTable-1-content"]').eq(0).click({force: true})
        cy.get('input[id$="--inputDeltaID-inner"]').eq(0).type("5" , {force: true})
        cy.get('span[id$="--adjustOKButton-content"]').eq(0).click({force: true})

        cy.get('span[id$="--reportProductionQuantityTable-2-content"]').eq(0).click({force: true})
        cy.get('input[id$="--inputDeltaID-inner"]').eq(0).type("5" , {force: true})
        cy.get('span[id$="--adjustOKButton-content"]').eq(0).click({force: true})
        cy.get('span[id$="__clone1-titleText-inner"]').eq(0).click({force: true}) 
        cy.get('span[id$="--reportProductionQuantityTable-1-content"]').eq(0).click({force: true})
        cy.get('input[id$="--inputDeltaID-inner"]').eq(0).type("1" , {force: true})
        cy.get('span[id$="--adjustOKButton-content"]').eq(0).click({force: true})
        //cy.get('#customAlertItem').click()
      })
    })