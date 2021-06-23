///<reference types="Cypress" />
describe('My first test case', function()
{
var currentDay=new Date().getDate()
var skipMonitor=false;
var skipDateLogic=false;

if(currentDay<=3 ){
  skipMonitor=true;
}
else
{
  skipDateLogic=true;
}

if(!skipMonitor)

{

it ('Date Skip Test case', function() {
cy.visit(Cypress.env('url1'))
cy.get('#E-mail').type('satish.kumar@rategain.com')
cy.get('#Password').type('Changeme@123')
cy.wait(2000)
cy.get('.submit').click()
cy.get('[data-testid=test-search-input]').type('Fairmont Scottsdale Princess Resort')
cy.wait(5000)
cy.get('.client-name-container > a').click()
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

}
else 
{

it ('My first test case', function() {    
cy.log("No need to run the test")

})
}

})





