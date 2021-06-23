///<reference types="Cypress" />
describe('Sad Panda test case', function()
{

let Pass
beforeEach(() => {

  cy.sqlServer("select Pass from [dbo].[Logindetail]").then( function(result)
  {
  
  Pass=result 
  
  })
})   
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

it ('My first test case', function() {
cy.visit(Cypress.env('url1'))
cy.get('#E-mail').type('satish.kumar@rategain.com')
cy.get('#Password').type(Pass)
cy.wait(2000)
cy.get('.submit').click()
cy.get('[data-testid=test-search-input]').type('Hotel Ramtin')
cy.wait(5000)
cy.get('.client-name-container > a').click()
cy.get('.clientview-sidebar--inner > ul > :nth-child(4) > a > img').click()
cy.get('.Reports__CardsOrPresetsDropdown__Wrapper > [data-testid=common-select-dropdown] > [data-testid=SelectToggleDropdownOpen] > .display').click()
cy.get(':nth-child(5) > .Reports__PresetButton__Addon > .fa').click()
cy.wait(10000)
cy.get('.Reports__ReportsGroup__Container > :nth-child(2)').then(function(element)

{
const actualtext=element.text()
cy.log(actualtext)
expect(actualtext).not.contains('Sad Panda')
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





