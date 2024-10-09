describe('Alert Config and Creation', () => {
    beforeEach(() => {
      cy.visit('https://sapwdawsemea.pharma.aventis.com:9102/XMII/Menu.jsp?saml2=disabled')
      cy.fixture('testdata').then(function (testdata) {
        this.testdata = testdata
      })
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
      it ('Alert Config and Creation', function () {
        cy.loginToMii(this.testdata.username,this.testdata.password)
        cy.visit('/XMII/CM/eOEE/ExternalApps/ApplicationLaunchpad/index.irpt')
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9102/XMII/CM/eOEE/ExternalApps/AlertConfigLauncher/index.irpt')
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9102/XMII/CM/eOEE/ExternalApps/AlertConfig/index.irpt')
        cy.get('.sapMBtnContent').eq(0).click()
        cy.wait(2000)
        cy.get('input[id$="--AlertName-inner"]').eq(0).type("Test AU" , {force: true})
        cy.get('input[id$="--AlertTitle-inner"]').eq(0).type("Title Name" , {force: true})
        cy.get('textarea[id$="--AlertDescription-inner"]').eq(0).type("Description" , {force: true})
        cy.get('span[id$="--AlertType-arrow"]').eq(0).click({force: true})
        //cy.get('ul[id^="__list"]').each(($e,index)=>{
        cy.get('#__list5>li').each(($e,index)=>{
            if ($e.text() === "OPEN_UNPLANN_DOWNTIME") {
               cy.wrap($e).click({force: true})}
               }) 
        cy.get('div[id$="--AlertL-Button"]').click({force: true})
        cy.get('span[id$="--AlertPersistence-arrow"]').eq(0).click({force: true})
        cy.get('#__list6>li').each(($e,index)=>{
            if ($e.text() === "By Run") {
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
        cy.get('input[id^="__input0-__list9"]').eq(0).type("30" , {force: true})
        cy.get('input[id^="__input0-__list9"]').eq(1).type("OR" , {force: true})
        cy.get('input[id^="__input0-__list9"]').eq(2).type("Y" , {force: true})
        cy.get('span[id$="--createButtonId-inner"]').eq(0).click({force: true})
        cy.wait(2000)
        cy.get('.sapMBtnContent').eq(0).click({force: true})
        cy.wait(2000)
        cy.get('input[id$="--AlertName-inner"]').eq(0).type("Test AU" , {force: true})
        cy.get('input[id$="--AlertTitle-inner"]').eq(0).type("Title Name" , {force: true})
        cy.get('textarea[id$="--AlertDescription-inner"]').eq(0).type("Description" , {force: true})
        cy.get('span[id$="--createButtonId-inner"]').eq(0).click({force: true})








      })
})