import LoginClass from "../../../support/LoginLocator"
import ProductClass from "../../../support/ProductLocator"
const LoginData = require('../../../fixtures/LoginData.json')

describe('produk', () => {
  beforeEach(() => {

    cy.visit('https://www.saucedemo.com')
  }) 
  
  it('User melihat detail produk', () => {
    cy.get(LoginClass.user).type(LoginData["username"])
    cy.get(LoginClass.password).type(LoginData["password"])
    cy.get(LoginClass.loginBtn).click()
  })

  it.only('User melihat produk disortir oleh filter', () => {
    cy.get(LoginClass.user).type(LoginData["username"])
    cy.get(LoginClass.password).type(LoginData["password"])
    cy.get(LoginClass.loginBtn).click()
    cy.get(ProductClass.detailproduct).select('Name (A to Z)')
    cy.contains(ProductClass.itemBackpack).click()
  })
  it('User menambah produk ke keranjang', () => {
    cy.get(LoginClass.user).type(LoginData["username"])
    cy.get(LoginClass.password).type(LoginData["password"])
    cy.get(LoginClass.loginBtn).click()
    cy.get(ProductClass.backpack).click()
  
    
  })
  
  
})