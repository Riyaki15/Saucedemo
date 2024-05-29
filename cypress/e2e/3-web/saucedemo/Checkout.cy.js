import LoginClass from "../../../support/LoginLocator"
import ProductClass from "../../../support/ProductLocator"
import CheckoutClass from "../../../support/CheckoutLocator"
const LoginData = require('../../../fixtures/LoginData.json')


describe('Checkout', () => {
  beforeEach(() => {

    cy.visit('https://www.saucedemo.com')
  })

  it('User dapat melakukan pembelian produk', () => {
    cy.get(LoginClass.user).type(LoginData["username"])
    cy.get(LoginClass.password).type(LoginData["password"])
    cy.get(LoginClass.loginBtn).click()
    cy.get(ProductClass.backpack).click()
    cy.get(ProductClass.cart).click()
    cy.get(CheckoutClass.checkoutBtn).click()
    cy.get(CheckoutClass.firstName).type('Budi')
    cy.get(CheckoutClass.lastName).type('Rahman')
    cy.get(CheckoutClass.postalCode).type('15416')
    cy.get(CheckoutClass.checkoutBtn2).click()
    cy.get(CheckoutClass.finishBtn).click()
  })
  it('User gagal melakukan pembelian produk karena tidak ketik nama depan', () => {
    cy.get(LoginClass.user).type(LoginData["username"])
    cy.get(LoginClass.password).type(LoginData["password"])
    cy.get(LoginClass.loginBtn).click()
    cy.get(ProductClass.backpack).click()
    cy.get(ProductClass.cart).click()
    cy.get(CheckoutClass.checkoutBtn).click()
    cy.get(CheckoutClass.lastName).type('Susanto')
    cy.get(CheckoutClass.postalCode).type('15416')
    cy.get(CheckoutClass.checkoutBtn2).click()
  })
  it('User gagal melakukan pembelian produk karena tidak ketik nama belakang', () => {
    cy.get(LoginClass.user).type(LoginData["username"])
    cy.get(LoginClass.password).type(LoginData["password"])
    cy.get(LoginClass.loginBtn).click()
    cy.get(ProductClass.backpack).click()
    cy.get(ProductClass.cart).click()
    cy.get(CheckoutClass.checkoutBtn).click()
    cy.get(CheckoutClass.firstName).type('Budi')
    cy.get(CheckoutClass.postalCode).type('15416')
    cy.get(CheckoutClass.checkoutBtn2).click()
  })
  it('User gagal melakukan pembelian produk karena tidak ketik kode pos', () => {
    cy.get(LoginClass.user).type(LoginData["username"])
    cy.get(LoginClass.password).type(LoginData["password"])
    cy.get(LoginClass.loginBtn).click()
    cy.get(ProductClass.backpack).click()
    cy.get(ProductClass.cart).click()
    cy.get(CheckoutClass.checkoutBtn).click()
    cy.get(CheckoutClass.firstName).type('Budi')
    cy.get(CheckoutClass.lastName).type('Rahman')
    cy.get(CheckoutClass.checkoutBtn2).click()
  })
  it('User mengagalkan pembelian produk di halaman Checkout: Your Information', () => {
    cy.get(LoginClass.user).type(LoginData["username"])
    cy.get(LoginClass.password).type(LoginData["password"])
    cy.get(LoginClass.loginBtn).click()
    cy.get(ProductClass.backpack).click()
    cy.get(ProductClass.cart).click()
    cy.get(CheckoutClass.checkoutBtn).click()
    cy.get(CheckoutClass.cancelBtn).click()
  })
  it('User mengagalkan pembelian produk di halaman Checkout: Overview', () => {
    cy.get(LoginClass.user).type(LoginData["username"])
    cy.get(LoginClass.password).type(LoginData["password"])
    cy.get(LoginClass.loginBtn).click()
    cy.get(ProductClass.backpack).click()
    cy.get(ProductClass.cart).click()
    cy.get(CheckoutClass.checkoutBtn).click()
    cy.get(CheckoutClass.firstName).type('Budi')
    cy.get(CheckoutClass.lastName).type('Rahman')
    cy.get(CheckoutClass.postalCode).type('15416')
    cy.get(CheckoutClass.checkoutBtn2).click()
    cy.get(CheckoutClass.cancelBtn).click()
  })
  

})