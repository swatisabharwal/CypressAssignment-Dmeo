Cypress.Commands.add('loginToAirtable', (email, password) => {
  cy.visit("https://airtable.com/login",);
  cy.get('input[name="email"]').type(email);
  cy.get('input[name="password"]').type(password)
  cy.get('#sign-in-form-fields-root input[type="submit"]').click()
})

Cypress.Commands.add('logOut',()=>{
  cy.get('span[aria-label="Account"]').click()
  cy.get('li[aria-label="Log out"]').click()
})