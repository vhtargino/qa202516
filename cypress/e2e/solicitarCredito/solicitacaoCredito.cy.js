/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
        cy.visit('https://angelofdiasg.tech/qaprogramador/sacfunc/')
    })

    it('Validar campos obrigatórios', () => {
        cy.get('#nome').type('Cebolinha da Silva')
        cy.get('#email').type('cebolinha@turmadamonica.com.br')
        cy.get('#renda').type(5000)
        cy.get('#cpf').type('123.234.345-67')
        cy.get('#credito').type(1500)
        cy.get('[type="submit"]').click()
        cy.get('#result').should('be.visible')
    });

})