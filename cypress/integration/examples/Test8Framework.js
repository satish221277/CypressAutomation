/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />
 
import 'Cypress-iframe'

import HomePage from '../../support/PageObjects/HomePage'
import Productpage from '../../support/PageObjects/Productpage'

describe('frames test', function() 
{

    before(function()
{
 // Runs once before all tests in the block
 cy.fixture('example').then(function(data){
 this.data=data   
 }) 

})

it('My Framework ',function() {

const homepage= new HomePage()
const productpage=new Productpage()

cy.visit(Cypress.env('url')+"/angularpractice")
homepage.geteditbox().type(this.data.name)
homepage.Getgender().select(this.data.gender)
homepage.Gettwowaydatabinding().should('have.value',this.data.name)
homepage.geteditbox().should('have.attr','minlength','2')
homepage.Getenterpreneauer().should('be.disabled')
homepage.Getshopbutton().click()

this.data.productName.forEach(function(element) {
cy.selectProduct(element)

})

productpage.checkOutButton().click()
var sum=0

cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => { 

const amount=$el.text()
var res= amount.split(" ")
res= res[1].trim()
sum= Number(sum)+Number(res)
}).then(function(){
cy.log(sum)
})

cy.get('h3 strong').then(function(element)
{
const amount=element.text()
var res= amount.split(" ")
var total = res[1].trim()
expect(Number(total)).to.equal(Number(sum))

})

productpage.finalCheckout().click()
productpage.countryeditbox().type('India')
productpage.suggestiontext().click()
productpage.finalcheckbox().click({force: true})
productpage.purchasebutton().click()
productpage.successmessage().then(function(element)

{

const actualtext=element.text()
expect(actualtext.includes("Success")).to.be.true
 
}) 

})
 
})




