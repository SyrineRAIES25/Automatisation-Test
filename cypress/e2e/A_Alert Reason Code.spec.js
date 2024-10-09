describe('Alert Reason code', () => {
    beforeEach(() => {
      cy.visit('https://sapwdawsemea.pharma.aventis.com:9102/XMII/Menu.jsp?saml2=disabled')
      cy.fixture('testdata').then(function (testdata) {
        this.testdata = testdata
      })
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
      it ('Alert Reason code', function () {
        cy.loginToMii(this.testdata.username,this.testdata.password)
        cy.visit('/XMII/CM/eOEE/ExternalApps/ApplicationLaunchpad/index.irpt')
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9102/XMII/CM/eOEE/ExternalApps/AlertConfigLauncher/index.irpt')
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9102/XMII/CM/eOEE/ExternalApps/AlertConfig/index.irpt')
        cy.get('.sapMBtnContent').eq(0).click()
        cy.wait(2000)
        cy.get('input[id$="--AlertName-inner"]').eq(0).type("RC Test" , {force: true})
        cy.get('input[id$="--AlertTitle-inner"]').eq(0).type("RC Test" , {force: true})
        cy.get('textarea[id$="--AlertDescription-inner"]').eq(0).type("Description" , {force: true})
        cy.get('span[id$="--AlertType-arrow"]').eq(0).click({force: true})
        //cy.get('ul[id^="__list"]').each(($e,index)=>{
        cy.get('#__list5>li').each(($e,index)=>{
            if ($e.text() === "RC_DURATION_EXCEEDED") {
               cy.wrap($e).click({force: true})}
               }) 
        cy.get('div[id$="--AlertL-Button"]').click({force: true})
        cy.get('span[id$="--AlertPersistence-arrow"]').eq(0).click({force: true})
        cy.get('#__list6>li').each(($e,index)=>{
            if ($e.text() === "By Run") {
               cy.wrap($e).click({force: true})}
               }) 
        cy.get('span[id$="--AlertTarget-arrow"]').eq(0).click({force: true})
        cy.get('div[id$="-selectMulti-CbBg"]').eq(2).click({force: true}) 
        cy.get('span[id$="--AlertTarget-arrow"]').eq(0).click({force: true})
        cy.wait(3000)       
        cy.get('span[id$="--AlertVisualization-arrow"]').eq(0).click({force: true})
        cy.get('div[id$="-selectMulti-CbBg"]').eq(47).click({force: true})
        cy.get('span[id$="--AlertVisualization-arrow"]').eq(0).click({force: true})
        cy.get('span[id$="--AlertOpTab-icon"]').eq(0).click({force: true})
        cy.get('input[id^="__input0-__list9"]').eq(0).type("8" , {force: true})
        cy.get('input[id^="__input0-__list9"]').eq(1).type("OR" , {force: true})
        cy.get('input[id^="__input0-__list9"]').eq(2).type("30" , {force: true})
        cy.get('input[id^="__input0-__list9"]').eq(3).type("1" , {force: true})
        cy.get('input[id^="__input0-__list9"]').eq(4).type("10" , {force: true})
        cy.get('input[id^="__input0-__list9"]').eq(5).type("60" , {force: true})
        cy.get('input[id^="__input0-__list9"]').eq(6).type("N" , {force: true})
        cy.get('span[id$="--createButtonId-inner"]').eq(0).click({force: true})




      })
    })