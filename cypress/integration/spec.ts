describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('LemonMart')
    cy.contains('Hello, Limoncu!')
  })
})
