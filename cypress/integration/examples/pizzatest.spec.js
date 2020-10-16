describe('Pizza app', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    const nameInput = () => cy.get('input[name=name]')
    const instructionInput = () => cy.get('input[name=instructions]')
    const pepperoni = () => cy.get('input[name=pepperoni]')
    const sausage = () => cy.get('input[name=sausage]')
    const submit = () => cy.get('button[type=submit]')
    const size = () => cy.get('select[name=size]')

    it('adding to order', () => {
        nameInput().type('Nathan')
        size().select('medium')
        pepperoni().click()
        sausage().click()
        instructionInput().type('Well done')
        submit().click()
    })
})