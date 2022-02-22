
class SignupPage{

    go(){
        cy.viewport(1440, 900)                      // definir tamanho de tela
        cy.visit('https://buger-eats-qa.vercel.app/') // acessar o endereço 

        cy.get('a[href="/deliver"]').click() // get com localizador e ação de clicar no botão
        cy.get('#page-deliver form h1').should('have.text','Cadastre-se para  fazer entregas') // validar texto para confirma se e a pagina certa
    
    }

    fillForm(deliver){

        cy.get('input[name="fullName"]').type(deliver.name)  // inserindo os dados pessoais
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)

        cy.get('input[name="postalcode"]').type(deliver.address.postalcode) // inserindo endereço
        cy.get('input[type="button"][value="Buscar CEP"]').click()         //ação de click

        cy.get('input[name ="address-number"]').type(deliver.address.number)    
        cy.get('input[name ="address-details"]').type(deliver.address.details)

        cy.get('input[name="address"]').should('have.value',deliver.address.street) // validar se o endereço preenchido e o esperado
        cy.get('input[name="district"]').should('have.value',deliver.address.district)
        cy.get('input[name="city-uf"]').should('have.value',deliver.address.city_state)


        cy.contains('.delivery-method li', deliver.delivery_method).click() // localizador com css e nome 

        //cy.get('input[accept^="image"]').attachFile('/imagens/'+ entregador.cnh) // anexar arquivo no navegador o cypress ja tem nativo
   
        cy.get('input[accept^="image"]').selectFile('cypress/fixtures/imagens/'+ deliver.cnh,   { force: true }) // jeito nativo do cypress 

                
    }
    subimt(){

        //cy.get('.swal2-container .swal2-confirm ').click()
        cy.get('form .button-success').click()  //ação de click no botão 
    }
    modalContentShouldBe(expectedMessage){

       cy.get('.swal2-container .swal2-html-container').should('have.text',expectedMessage)
    }
    alertMessageShouldBe(expectedMessage){

        //cy.get('.alert-error').should('have.text',expectedMessage)
        cy.contains('.alert-erro',expectedMessage).should('be.visible')
    }

}

export default new SignupPage;