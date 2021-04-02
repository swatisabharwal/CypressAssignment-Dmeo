
/// <reference types = "cypress"/>
import PO_Collaborator from '../PageObject/PO_Collaborator'
describe("Add a Basic Collaborator",()=>{
    let testData
    let  collabUser
    const collab = new PO_Collaborator()
    before(() => {
        cy.fixture('user_testData').then((example) => {
            testData = example
            cy.fixture('random_username').then((collaborator) => {
                collabUser = collaborator
                cy.loginToAirtable(testData.username, testData.password)     
            })
        })
    })

    after(() => {
        cy.logOut()
    })

     it("001_Click On Share Button under TestBase",()=>{
        collab.clickOnTheCreatedBase()
        collab.clickOnShareButton()
        collab.addBaseCollaborator(collabUser.username)
            cy.get('.navStack').should('exist')
    })

    it("002_Verify User got Added Under base Collaborator ",()=>{
        collab.nameUnderBaseCollaborator()
           cy.should('include',collabUser.username)             
    })
    it("003_Verify User got Added Under base Collaborator ",()=>{
        collab.AccessRoleOfCollaborator()
            cy.should('include',"Editor")    
        collab.closeTheShareWithCollaboratorWindow()
    })
})