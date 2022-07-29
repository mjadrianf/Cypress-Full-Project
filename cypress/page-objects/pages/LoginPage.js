import BasePage from "../BasePages"

export default class LoginPage extends BasePage {

    static login (username, password){
        cy.login(username,password)

    }

    static clickForgotPasswordLink(){
        cy.contains("Forgot your password?").click()
    }


}