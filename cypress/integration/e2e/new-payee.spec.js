import addPayee from '../../page-objects/pages/addPayee'
import loginPage from '../../page-objects/pages/loginPage'
import { url } from "../../../config"

describe("Testing a new payee", () => {
  before(function () {
    cy.visit(url);
    loginPage.login("username", "password");
    addPayee.load();
    });
    it("Testing form payee", () => {
        addPayee.formNewPayee();
        cy.get("#alert_content")
        .should("be.visible")
        .and("contain", "The new payee Nombre was successfully created.");
    });
  });
