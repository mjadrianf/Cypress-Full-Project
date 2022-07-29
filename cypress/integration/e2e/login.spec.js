import {url} from "../../../config"
import Navbar from "../../page-objects/components/Navbar"
import LoginPage from "../../page-objects/pages/LoginPage"
//import 


describe('Login Fail', ()=>{
    before(function(){
        cy.visit(url)
        Navbar.clickSingnIn()

    })

    it('Probar con credenciales invalidas', () =>{
        LoginPage.login('invalid username', 'invalid password')
        
        
    })



})