describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')

  })
  it("Inscrição de email", () => {
    cy.wait(8000)
    cy.getByData('email-input')
      .type('viviane@gmail.com')
    cy.getByData('submit-button')
      .click()
    cy.getByData('success-message')
      .should("exist")
      .contains('viviane@gmail.com')
    
  })

  it("Inscrição de email INVÁLIDO", () => {
    cy.wait(8000)
    cy.getByData('email-input')
      .type('viviane.com')
    cy.getByData('submit-button')
      .click()
    cy.getByData('success-message')
      .should("not.exist")
    
  })

  it("Inscrição de email já cadastrado", () => {
    cy.wait(8000)
    cy.getByData('email-input')
      .type('john@example.com')
    cy.getByData('submit-button')
      .click()
    cy.getByData('server-error-message')
      .should('exist')
      .contains('Please use a different email address.')
    
  })

  

})



