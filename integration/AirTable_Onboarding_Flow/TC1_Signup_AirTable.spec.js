/// <reference types = "cypress"/>
import PO_Signup from '../PageObject/PO_Signup'
describe('AirTableSignup', () => {
  const testdatafile = './cypress/fixtures/random_username.json'
  const randomUsername = generateNewUserName()
  let userWorkEmail = randomUsername + "@yopmail.com"
  const signup = new PO_Signup()
  let testData
  let testuser

  before(() => {
    cy.fixture('user_testData').then((example) => {
      testData = example
      cy.readFile(testdatafile).then((obj) => {
        obj.username = userWorkEmail
        cy.writeFile(testdatafile, { username: userWorkEmail })
        cy.fixture('random_username').then((username) => {
          testuser = username;
        })
      })
    })
  })

  it('001_Launch and Verify the Airtable Page', () => {
    signup.visit_SignUp_URL(testData.ApplicationURL)
    cy.title().should('eq', 'Airtable | Create apps that perfectly fit your team\'s needs')
  })

  it('002_click On Sign-up button', () => {
    signup.clickOnSignUpForFreeButton()
    cy.url().should('include', 'signup')
  })

  it('003 Negative TC- Validate the Error Message onadding invalid work-email', () => {
    signup.signup_With_Credentials("#%^$")
    signup.verifyInvalidEmailMsg()
    cy.should('include', 'Invalid email')
  })

  it('004 Create your account Step-1: Enter your valid work email and continue', () => {
    signup.signupWithValidCredentials(testuser.username)
    cy.url().should('include', 'name_and_password')
  })

  it('005 Negative TC- Validate the Error Message on invalid NAme and Password', () => {
    signup.verify_Invalid_Profile_Details("invalid")
    cy.contains('Invalid first name').should('be.visible')
    cy.contains('Password must be at least 8 characters').should('be.visible')
  })

  it('006 Fill the Name and Password Field And Continue', () => {
    signup.verify_Valid_User_Profile(randomUsername, testData.password)
  })

  function generateNewUserName() {
    const uuid = () => Cypress._.random(0, 1e6)
    const id = uuid()
    const testname = `airtable_testuser-${id}`
    return testname;
  }

})
