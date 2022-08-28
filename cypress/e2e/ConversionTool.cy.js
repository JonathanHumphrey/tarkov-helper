// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
    it('visits the app root url', () => {
      cy.visit('/')
      // testing the ruble converter
      cy.get("[data-cy=ruble]").click()
      cy.get("[data-cy=dollar]").click().type("900")
      cy.get("[data-cy=converted]").should("have.text", 86400)

      cy.get("[data-cy=grab]").click()
      cy.get("[data-cy=card-prop-header]").should("be.visible")
    })
  })