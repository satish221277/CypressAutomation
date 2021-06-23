///<reference types="Cypress" />
describe('AS Report Test', function()
{

it ('My first test case', function() {
cy.visit(Cypress.env('url1'))
cy.get('#E-mail').type('satish.kumar@rategain.com')
cy.get('#Password').type('Changeme@123')
cy.wait(2000)
cy.get('.submit').click()
cy.get(':nth-child(3) > .thumbnail > .caption > .overview-head > .client-name-container > a').click()
cy.get('.clientview-sidebar--inner > ul > :nth-child(4) > a > img').click()
cy.get('.Reports__CardsOrPresetsDropdown__Wrapper > [data-testid=common-select-dropdown] > [data-testid=SelectToggleDropdownOpen] > .display').click()
cy.get(':nth-child(8) > .Reports__PresetButton__Addon > .fa').click()
cy.wait(10000)
cy.get('.Reports__ReportCard__ReportRenderer').then(function(element)
{
const actualtext=element.text()
cy.log(actualtext)
expect(actualtext).to.not.equal('Sad Panda')
}) 
    
})    
    
})





