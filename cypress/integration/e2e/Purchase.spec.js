import Purchase from '../../page-objects/pages/Purchase'
import loginPage from '../../page-objects/pages/LoginPage'
import { url } from "../../../config"

describe('Test pay saved payee', () => {
    before(function () {
        cy.visit(url)
        loginPage.login('username', 'password')
        Purchase.load()
    })

    it('New form payee', () => {
        Purchase.formPurchase()
        cy.get('#pc_conversion_amount')
            .should('be.visible')
            .and('contain', '206.59')
    })
})