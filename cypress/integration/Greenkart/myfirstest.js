///<reference types="Cypress" />
describe('My first test case', function()
{

it ('My first test case', function() {
cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
cy.get('.search-keyword').type('ca')
cy.wait(2000)
cy.get('.product').should('have.length',5)
cy.get('.product:visible').should('have.length',4)
cy.get('.products').as('Productlocator')
//parent child chaining
cy.get('@Productlocator').find('.product').should ('have.length',4)
cy.get(':nth-child(3) > .product-action > button').click()
cy.get('@Productlocator').find('.product').eq(2).contains('ADD TO CART').click().then(function()
{
console.log('sf')

})

cy.get('@Productlocator').find('.product').each(($el, index, $list) => { 

const textVeg=$el.find ('h4.product-name').text()  

if (textVeg.includes('Cashews'))
{

$el.find('button').click()
}
})

cy.get('.brand').should('have.text','GREENKART') 

cy.get('.brand').then(function(logotext)
{
    
cy.log(logotext.text())

})
//cy.log(logo.text())

})

})

