class PO_NewBase {

    click_Content_Calander_Under_Templates() {
        const cont_CalanderTemplate = cy.get('.flex-none.mr2.blue .icon.icon-calendar')
        cont_CalanderTemplate.click({force:true})
        .wait(1000)
        
        return this
    }
    renameTheBase(value) {
        const baseName_Field = cy.get('.edit.editableTitle')
        baseName_Field.clear().type(value)
        return this
    }
    colorTheBaseLightGreen(){
        const color_Btn = cy.get('div[title="greenLight"]')
        color_Btn.click().wait(1000)
        const bn= cy.xpath('(//div[@class="hover-container"]//div)[last()]') 
        bn.click({force:true})
        return this
    }
}
export default PO_NewBase