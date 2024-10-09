describe('Management Selection', () => {
    beforeEach(() => {
      cy.visit('https://sapwdawsemea.pharma.aventis.com:9102/XMII/Menu.jsp?saml2=disabled')
      cy.fixture('testdata').then(function (testdata) {
        this.testdata = testdata
      })
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
      it ('Management Selection', function () {
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
        cy.get('span[id$="--reportProductionQuantityTable-0-content"]').eq(0).click()
        cy.get('#adjustmentPopup--inputDeltaID-inner').type("3000" , {force: true})
        cy.get('#adjustmentPopup--adjustOKButton-content').click({force: true})
        //cy.get('#customAlertItem').click()
        // cy.get('#__box0-arrow').click({force: true})
        // cy.get('#__list3>li').each(($e,index)=>{
        //   if ($e.text() === "High") {
        //      cy.wrap($e).click({force: true})}
        //      }) 
        // cy.get('#__box1-arrow').click({force: true})
        // cy.get('#__list4>li').each(($e,index)=>{
        //   if ($e.text() === "Z_DEVELOPER") {
        //      cy.wrap($e).click({force: true})}
        //      }) 
        //cy.get('#__panel6-__list5-0-CollapsedImg').click({force: true}) comm deja
        // cy.get('span[id$="__list5-0-CollapsedImg"]').eq(0).click({force: true})
        // cy.get('.sapMBtnContent').eq(2).click({force: true})
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9102/XMII/Menu.jsp?saml2=disabled')
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9102/XMII/CM/eOEE/ExternalApps/AlertConfigLauncher/index.irpt')
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9102/XMII/CM/eOEE/ExternalApps/AlertConfig/index.irpt')
        cy.get('.sapMBtnContent').eq(0).click()
        cy.wait(3000)
        cy.get('input[id$="--AlertName-inner"]').eq(0).type("New Alert" , {force: true})
        cy.get('input[id$="--AlertTitle-inner"]').eq(0).type("New Alert" , {force: true})
        cy.get('textarea[id$="--AlertDescription-inner"]').eq(0).type("Description" , {force: true})
        cy.get('span[id$="--AlertType-arrow"]').eq(0).click({force: true})
        cy.get('#__list5>li').each(($e,index)=>{
            if ($e.text() === "OVERPRODUCTION") {
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
        cy.get('span[id$="--createButtonId-inner"]').eq(0).click({force: true})
        cy.wait(1000)
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9102/XMII/CM/eOEE/ExternalApps/AlertConfigLauncher/index.irpt')
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9102/XMII/CM/eOEE/ExternalApps/AlertAssign/index.irpt')
        cy.get('span[id$="--OMCreateBtn-content"]').eq(0).click()
        cy.get('span[id$="--AlertConfigCombo-arrow"]').eq(0).click({force: true})
        cy.get('#__list6>li').each(($e,index)=>{
            if ($e.text() === "New Alert") {
               cy.wrap($e).click({force: true})}
               }) 
        cy.get('span[id$="--createButtonId-content"]').eq(0).click({force: true})
        cy.wait(2000)
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9102/XMII/Illuminator?xsrfid=yvI1Z17VkGM-dEwd2TuNLqF8ulK7e4Gbtco&service=Personalization&sniffer=Netscape%2C5%2C834%2C1698%2C')
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9102/webdynpro/resources/sap.com/xapps~xmii~ui~admin~navigation/NavigationApplication?view=com.sap.itsam.cfg.mii.admin.AlertManager&deployable=sap.com/xapps~xmii~ui~admin~alert&component=com.sap.xapps.xmii.ui.admin.rootcomponent.RootComponent&title=Alert%20WatchList')


        
    
      })
    })