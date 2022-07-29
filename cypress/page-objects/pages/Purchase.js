import BasePages from '../BasePages';

export default class purchaseCurrency extends BasePages {
    static load() {
        cy.visit('http://zero.webappsecurity.com/bank/pay-bills.html')

    }

    static formPurchase() {
        cy.get('#pay_bills_tab > a').click()
        cy.contains('Purchase Foreign Currency').click()
        cy.get('#pc_currency').select('GBP')
        cy.get('#pc_amount').type('350')
        cy.get('#pc_inDollars_true').click()
        cy.get('#pc_calculate_costs').click()
    }


}