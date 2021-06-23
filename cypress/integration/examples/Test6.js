///<reference types="Cypress" />

describe('My fifth test case', function(){

it ('My firsttest case', function() {

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    //cy.get('div.mouse-hover-content').invoke('show')
    cy.contains('Top').click({force: true})
    cy.url().should('include','top')

})

})



