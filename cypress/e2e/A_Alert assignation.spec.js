describe('Alert Assignation', () => {
    beforeEach(() => {
      cy.visit('https://sapwdawsemea.pharma.aventis.com:9102/XMII/Menu.jsp?saml2=disabled')
      cy.fixture('testdata').then(function (testdata) {
        this.testdata = testdata
      })
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
      it ('Alert Assignation', function () {
        cy.loginToMii(this.testdata.username,this.testdata.password)
        cy.visit('/XMII/CM/eOEE/ExternalApps/ApplicationLaunchpad/index.irpt')
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9102/XMII/CM/eOEE/ExternalApps/AlertConfigLauncher/index.irpt')
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9102/XMII/CM/eOEE/ExternalApps/AlertAssign/index.irpt')
        cy.get('span[id$="--lineComboId-arrow"]').eq(0).click({force: true})
        cy.get('#__list5>li').each(($e,index)=>{
            if ($e.text() === "AL4 DEMO LINE") {
               cy.wrap($e).click({force: true})}
               })
        cy.get('span[id$="--OMCreateBtn-content"]').eq(0).click()
        cy.get('span[id$="--AlertConfigCombo-arrow"]').eq(0).click({force: true})
        cy.get('#__list6>li').each(($e,index)=>{
            if ($e.text() === "Testing") {
               cy.wrap($e).click({force: true})}
               }) 
        cy.get('span[id$="--createButtonId-content"]').eq(0).click({force: true})
        cy.get('span[id$="--ConfigTable-0-inner"]').eq(0).click({force: true})
        cy.get('#__button6-content').click({force: true})



       
      })
})