import TransferFound from '../../page-objects/pages/TranferFound'
import loginPage from '../../page-objects/pages/LoginPage'
import { url } from "../../../config"

describe('Test pay saved payee', () => {
    before(function () {
        cy.visit(url)
        loginPage.login('username', 'password')
        TransferFound.load()
    })

    it('New form payee', () => {
        TransferFound.NewTransferFound();
        cy.get('#alert_content')
          .should("be.visible")
          .and(
            "contain",
            "The payment was successfully submitted."
          );
    })
})