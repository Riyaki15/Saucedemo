import LoginClass from "../../support/LoginLocator"
import ProductClass from "../../support/ProductLocator"
const LoginData = require('../../fixtures/LoginData.json')

describe('keranjang', () => {
    beforeEach(() => {
  
      cy.visit('https://www.saucedemo.com')
    }) 

    it('Remove product from the cart in cart page', () => {
      cy.get(LoginClass.user).type(LoginData["username"])
      cy.get(LoginClass.password).type(LoginData["password"])
      cy.get(LoginClass.loginBtn).click()
      cy.get(ProductClass.backpack).click()
      cy.get(ProductClass.cart).click()
      cy.get(ProductClass.remove).click()
    })
    it('Continue shopping from cart page', () => {
      cy.get(LoginClass.user).type(LoginData["username"])
      cy.get(LoginClass.password).type(LoginData["password"])
      cy.get(LoginClass.loginBtn).click()
      cy.get(ProductClass.backpack).click()
      cy.get(ProductClass.cart).click()
      cy.contains(ProductClass.continue).click()
    })
    
  })