describe('home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')

  })
  context("hero section", () => {
    it('Confirmar o que tem dentro do H1', () => {
      cy.wait(8000)
      cy.getByData("hero-heading").contains("Testing Next.js Applications with Cypress")
    })

    it('Tópicos da pág inicial', () => {
      cy.wait(8000)
        .get('dt').eq(0).contains('4 Courses')
    })
  })


  context("courses section", () => {
    it.only('Botão saiba mais', () => {
      cy.wait(8000)
        .getByData('course-0').find('a')
        .eq(3)
        .click()
        .wait(5000)
      cy.location("pathname")
        .should('eq', '/testing-your-first-application')
    })
  })

})



