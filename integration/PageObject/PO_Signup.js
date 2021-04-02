class PO_Signup {
    visit_SignUp_URL(value) {
        cy.visit(value);
        return this
    }

    clickOnSignUpForFreeButton() {
        const signup_btn = cy.contains('Sign up for free')
        signup_btn.click();
        return this
    }
    signup_With_Credentials(value) {
        const email_input_fld = cy.get('.signupInputField.rounded')
        email_input_fld.clear().type(value)
        const secure_btn = cy.get('div[title="Secure form"]')
        secure_btn.click()
        return this
    }
    signupWithValidCredentials(value) {
        this.signup_With_Credentials(value)
        const continue_Btn = cy.contains('Continue')
        continue_Btn.click()
        return this
    }
    verifyInvalidEmailMsg() {
        const invalidEmail_txt = cy.get('.small.text-red.strong')
        invalidEmail_txt.invoke('text')
        return this
    }
    passwordField(value) {
        const pwd_field = cy.get('input[name="password"]')
        pwd_field.click().clear().type(value)
        return this
    }
    fullNameFieldDetect() {
        const fullName_field = cy.get('input[name="fullName"]')
        fullName_field.click()
        return this
    }
    verify_Invalid_Profile_Details(value) {
        this.passwordField(value)
        this.fullNameFieldDetect()
        return this
    }
    verify_Valid_User_Profile(fullName, password) {
        const fullName_field = cy.get('input[name="fullName"]')
        fullName_field.click().clear().type(fullName)
        this.passwordField(password)
        const continueProfile_btn = cy.get('input[value="Continue"]')
        continueProfile_btn.click().wait(2000)
        return this
    }
}
export default PO_Signup