export default class BasePage{
    static pause(ms){
        cy.wait(ms)
    }

    static loginInfo(message){
        cy.log(message)

    }
    static setMobileViewPort(){
        cy.viewport('iphone-x')
    }
    

}