
describe('Ensure pizza form works', () => {
    it('Test name input', () => {
      cy.visit("http://localhost:3000/pizza")

      cy.get('input[name="name"]')
        .type("Amy").should("have.value", "Amy")

      cy.get('[type="checkbox"]').check()

      cy.get('.btn').click()
    
    })
  })