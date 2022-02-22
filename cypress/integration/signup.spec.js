
import signup from '../pages/SignupPage'
import singupFactory from '../factories/SignupFactory'  //importa massa de teste 
import { it } from 'faker/lib/locales'
import signupPage from '../pages/SignupPage'

describe('cadastro', () => {

    //var signup= new SignupPage() //instancia um novo que foi importado  --import signupage from '../pages/SignupPage'

    //beforeEach(function () {          // importação de fixtures
    //    cy.fixture('deliver').then((d) => {
    //        this.deliver = d
    //     })
    // })

    it('usuario deve se torna um entregador', function () {      //nome do teste

        var deliver = singupFactory.deliver()  //instancia massa de teste de factories
        // massa de teste  
        signup.go()
        signup.fillForm(deliver)
        signup.subimt()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)
    })


    it('CPF incorreto', function () {      //nome do teste

        var deliver = singupFactory.deliver()   //instancia massa de teste de factories

        deliver.cpf = '000000141AA'     //cpf incorreto
        // massa de teste    
        signup.go()
        signup.fillForm(deliver)
        signup.subimt()
        signup.alertMessageShouldBe('Oops! CPF inválido')

    })
    it('email incorreto', function () {      //nome do teste

        var deliver = singupFactory.deliver()   //instancia massa de teste de factories

        deliver.email ='hotmail.com'  // email incorreto

        // massa de teste    
        signup.go()
        signup.fillForm(deliver)
        signup.subimt()
        signup.alertMessageShouldBe('Oops! Email com formato inválido.')

    })

    it('campos obrigatorios', function(){
        signuPage.go()
        signupPage.subimt()
        signupPage.alertMessageShouldBe('É necessário informar o nome')
        signupPage.alertMessageShouldBe('É necessário informar o CPF')
        signupPage.alertMessageShouldBe('É necessário informar o email')
        signupPage.alertMessageShouldBe(' necessário informar o CEP')
        signupPage.alertMessageShouldBe('É necessário informar o número do endereço')
        signupPage.alertMessageShouldBe('Selecione o método de entrega')
        signupPage.alertMessageShouldBe('Adicione uma foto da sua CNH')


    })
})