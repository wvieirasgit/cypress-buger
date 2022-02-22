

describe('home page',()=>{
    it('app deve esta online', ()=>{   //acessar o site
        cy.viewport(1440,900)
        cy.visit('https://buger-eats-qa.vercel.app/') 
        cy.get('#page-home main h1').should('have.text','Seja um parceiro entregador pela Buger Eats')
    })
})