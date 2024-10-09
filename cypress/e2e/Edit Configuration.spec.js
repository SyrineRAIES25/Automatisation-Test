describe('Edit Configuration', () => {
    beforeEach(() => {
      cy.visit('XMII//Illuminator?service=Personalization&saml2=disabled')
      cy.fixture('testdata').then(function (testdata) {
        this.testdata = testdata
      })
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
      it ('Edit Configuration', function () {
        cy.loginToMii(this.testdata.username,this.testdata.password)
        cy.visit('/XMII/CM/eOEE/ExternalApps/ApplicationLaunchpad/index.irpt')
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9102/XMII/CM/eOEE/ExternalApps/AlertConfigLauncher/index.irpt')
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9102/XMII/CM/eOEE/ExternalApps/AlertConfig/index.irpt')
        cy.get('span[id$="__clone5-inner"]').eq(0).click({force: true})
        cy.wait(1000)
        cy.get('input[id$="--AlertName-inner"]').eq(0).clear({force: true}).type("Test AU Update" , {force: true})
        cy.get('input[id$="--AlertTitle-inner"]').eq(0).clear({force: true}).type("Title Name Update" , {force: true})
        cy.get('textarea[id$="--AlertDescription-inner"]').eq(0).clear({force: true}).type("Description Update" , {force: true})
        cy.get('span[id$="--changeButtonId-inner"]').eq(0).click({force: true})
        
        cy.get('span[id$="__clone6-img"]').eq(0).click({force: true})
        cy.get('#__button6-content').click({force: true})





      })
})