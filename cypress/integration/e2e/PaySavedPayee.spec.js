import PaySaved from '../../page-objects/pages/PaySaved'
import loginPage from '../../page-objects/pages/LoginPage'
import { url } from "../../../config"

describe('Test pay saved payee', () => {
    before(function () {
        cy.visit(url)
        loginPage.login('username', 'password')
        PaySaved.load()
    })

    it('New form payee', () => {
        PaySaved.NewPaySaved()
        cy.get('#alert_content')
            .should('be.visible')
            .and('contain', 'The payment was successfully submitted.')
    })
})