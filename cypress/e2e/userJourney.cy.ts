describe('User Journey', () => {
    it('a user can find a course in the home page and complete the course lessons', () => {
        cy.visit('http://localhost:3000/')  //first page
        cy.wait(8000)
            .getByData('course-0').find('a') // get started button
            .eq(3)
            .click()
            .wait(5000)
        cy.location("pathname")
            .should('eq', '/testing-your-first-application') // primeira página
            .getByData('next-lesson-button') // next button
            .click()
            .wait(8000)
        cy.location("pathname")
            .should('eq', '/testing-your-first-application/app-install-and-overview') // segunda página
            .get('#answer-0')
            .click()
            .getByData('next-lesson-button')
            .click()
            .wait(8000)
        cy.location("pathname")
            .should('eq', '/testing-your-first-application/installing-cypress-and-writing-our-first-test') // terceira página
            .getByData('challenge-answer-0')
            .click()
            .getByData('next-lesson-button')
            .click()
            .wait(8000)
        cy.location("pathname")
            .should('eq', '/testing-your-first-application/setting-up-data-before-each-test') // quarta página
            .getByData('challenge-answer-0')
            .click()
            .getByData('next-lesson-button')
            .click()


    })
})