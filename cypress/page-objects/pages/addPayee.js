import basePage from '../basePages';

export default class addPayee extends basePage {
    static load() {
        cy.visit('http://zero.webappsecurity.com/bank/pay-bills.html')

    }

    static formNewPayee(name,address,account,detail) {
        cy.fixture("payData").then((payData) => {
          const name = payData.name;
          const address = payData.address;
          const account = payData.account;
          const detail = payData.detail;
          cy.get("#pay_bills_tab > a").click();
          cy.contains("Add New Payee").click();
          cy.get("#np_new_payee_name").type(name);
          cy.get("#np_new_payee_address").type(address);
          cy.get("#np_new_payee_account").type(account);
          cy.get("#np_new_payee_details").type(detail);
          cy.get("#add_new_payee").click();
        });
    }


}