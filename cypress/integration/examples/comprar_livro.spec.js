describe('Livro', () => {

  describe('Quando entro no formulario de Cadastro', () => {


      it ('Dado entro no site Saraiva ', () => {
          cy.visit('https://www.saraiva.com.br')
          cy.contains('head','Saraiva')

      })

      it ('Dado que seleciono para encontrar o livro desejado ', () => {
          cy.contains('h4','Destaques')
      })

      it ('Então Finalizo compro o produto fisico', () => {
          cy.get('.btn--block').click()
      })
 
  })

})
