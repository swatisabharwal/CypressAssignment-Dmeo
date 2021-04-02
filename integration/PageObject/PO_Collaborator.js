/// <reference types = "cypress"/>
class PO_Collaborator {
    clickOnTheCreatedBase() {
        const base_Btn = cy.xpath('(//div[@class="hover-container"]//a)[last()]')
        base_Btn.rightclick()
        return this
    }
    clickOnShareButton() {
        const share_btn = cy.get('li[data-tutorial-selector-id="appConfigMenu-collaborators"]')
        share_btn.click()
        return this
    }

    addBaseCollaborator(value) {
        const email_fld = cy.get('.dialog input[type="text"]')
        email_fld.type(value)
        const access_ddl = cy.get('.rounded-big .selectMenu')
        access_ddl.click()
        const editorOption = cy.get('.hdropdown.selectMenuList.menu li:nth-child(2)')
        editorOption.click()
        const sendInvite_btn= cy.xpath('//div[contains(text(),"Send invite")]')
        sendInvite_btn.click().wait(2000)
        return this
    }
    nameUnderBaseCollaborator(){
        const basecollaboratorName_label =cy.xpath("//div[contains(text(),'Base collaborator')]/parent::div/following-sibling::div[1]")
        basecollaboratorName_label.invoke('text')
        return this
    }

    AccessRoleOfCollaborator(){
        const savedaccess_option =  cy.get('.pt3.flex.items-center.strong')
            savedaccess_option.next('.flex.items-center').invoke('text')
        return this
    }

    closeTheShareWithCollaboratorWindow(){
        const close_Btn =cy.get('.closeX')
        close_Btn.click();
        return this
    }
}
export default PO_Collaborator

