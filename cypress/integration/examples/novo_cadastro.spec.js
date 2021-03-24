
describe('Cadastro', () => {

    describe('Quando entro no formulario de Cadastro', () => {
        let pf = {
            name: 'Marcos Vinicius',
            surname: 'Testes',
            email: 'tsumiko6407@uorak.com',
            password: 'Testes@123',
            confirmPassword: 'Testes@123',
            cpf: '649.403.51831',
            birthdate: '20101996',
            cell: '36918016288',
            cep: '33178777741',
            number: '478',
            phone: '68733011638',
        }

        it ('Dado quando preencho com minhas informações pessoais', () => {
            cy.visit('https://login.saraiva.com.br/registro.html')
            cy.contains('h2','Faça o seu cadastro')
            
            cy.get('#InputNome1').type(pf.name)
            cy.get('#InputSobrenome1').type(pf.surname)
            cy.get('#InputEmail1').type(pf.email)
            cy.get('#InputSenha1').type(pf.password)
            cy.get('#InputConfirmeSenha1').type(pf.confirmPassword)
            cy.get('#InputCpf1').type(pf.cpf)
            cy.get('#InputCelular1').type(pf.cell)
            cy.get('#InputCep1').type(pf.cep)
            cy.get('#InputNumero1').type(pf.number)
            cy.get('#InputTelefone1').type(pf.phone)
            
        })

        it ('Dado que tenho a opção de receber email ', () => {
            cy.get('.checkbox [type="checkbox"]').check().should('be.checked')  
        })

        it ('Então Finalizo o cadastro', () => {
            cy.get('.btn-success').click()


        })
   
    })

})
