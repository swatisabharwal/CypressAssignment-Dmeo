/// <reference types = "cypress"/>
import PO_NewBase from '../PageObject/PO_NewBase'
import PO_Collaborator from '../PageObject/PO_Collaborator'

describe("Create A New Base", () => {
    let testData
    let num = Math.floor(Math.random() * 10);
    const newBase = new PO_NewBase()
    const collab = new PO_Collaborator()

    before(() => {
        cy.fixture('user_testData').then((example) => {
            testData = example
            cy.loginToAirtable(testData.username, testData.password)
        })
    })
    after(() => {
        cy.logOut()
    })

    it('001_Click on Add a Base button ', () => {
        newBase.click_Content_Calander_Under_Templates()
        cy.xpath('(//div[@class="hover-container"]//a)[last()]')
            .should('be.visible')
    })
    it('002_Rename The base', () => {
        cy.loginToAirtable(testData.username, testData.password)
        collab.clickOnTheCreatedBase()
        newBase.renameTheBase(testData.BaseName + num)
        newBase.colorTheBaseLightGreen()
    })
    it('003_Verify the Base is Created under My Workspace', () => {
        cy.xpath('(//div[@class="hover-container"]//div)[last()]')
        .invoke('text').should('include', testData.BaseName + num)
    })

})