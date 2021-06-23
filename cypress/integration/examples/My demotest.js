///<reference types="Cypress" />
describe('BG Test', function()
{

it ('My first test case', function() {
cy.visit("bg.rategain.com/login#internal")
cy.get('#input_0').type('satish.k2010@yahoo.com')
cy.get('#input_1').type('123')
cy.wait(2000)
cy.get('.ng-valid-email.ng-valid-parse > .md-no-momentum > .layout-align-center-center > .md-raised').click()
cy.get('.sAlone').click()
cy.get('.background-grey > .ng-binding').click()
cy.get('#input_10').type('Cititel Penang')
cy.get(':nth-child(2) > .name').click()
cy.get('.md-icon-button > .fa').click()
cy.get('[ui-sref="Home.Lodging.Reviews"] > .ng-binding').click()
var sum=0
cy.wait(8000)
cy.get('.carousel-cell.layout-column > .layout-align-space-around-center > .mt-0 > .review-total').each(($el, index, $list) => { 
const amount=$el.text()
cy.log(amount)
expect(Number(amount)).to.be.greaterThan(Number(sum))
})

})    
    
})





