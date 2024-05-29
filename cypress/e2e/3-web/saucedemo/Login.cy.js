import LoginClass from "../../../support/LoginLocator"
const LoginData = require('../../../fixtures/LoginData.json')

describe('example to-do app', () => {
  beforeEach(() => {
  
    cy.visit('https://www.saucedemo.com')
  })

  it('User berhasil melakukan login dengan akun yang valid', () => {
    cy.get(LoginClass.user).type(LoginData["username"])
    cy.get(LoginClass.password).type(LoginData["password"])
    cy.get(LoginClass.loginBtn).click()
  })

  it('User gagal melakukan login karena Username tidak valid', () => {
    cy.get(LoginClass.user).type(LoginData["wronguser"])
    cy.get(LoginClass.password).type(LoginData["password"])
    cy.get(LoginClass.loginBtn).click()
  })

  it('User gagal melakukan login karena Password tidak valid', () => {
    cy.get(LoginClass.user).type(LoginData["username"])
    cy.get(LoginClass.password).type(LoginData["wrongpass"])
    cy.get(LoginClass.loginBtn).click()
  })

  it('User gagal melakukan login karena tidak ketik Username', () => {
    cy.get(LoginClass.password).type(LoginData["password"])
    cy.get(LoginClass.loginBtn).click()
  })

  it('User gagal melakukan login karena tidak ketik Password', () => {
    cy.get(LoginClass.user).type(LoginData["username"])
    cy.get(LoginClass.loginBtn).click()
  })

  
})
