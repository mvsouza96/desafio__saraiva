
describe('Cliente', () => {

    describe('Quando entro no formulario de Cadastro', () => {


        it ('Dado entro na area de login', () => {
            cy.visit('https://www.saraiva.com.br/login')
            cy.contains('h4','Entrar Como Cliente Saraiva')
            cy.get('#vtexIdUI-saraiva-oauth').click()

        })

        it ('Entao mostra area para digitar', () => {
            cy.get('#InputEmail1').type(pf.email)
            cy.get('#InputSenha1').type(pf.password)
        })

        it ('Então Finalizo e entro como cliente', () => {
            cy.get('.btn-success').click()
        })
   
    })

})
