///<reference types="Cypress" />
context('Window', () => {

it ('My first test case', () => {

cy.sqlServer("select Emailaddress from [dbo].[Logindetail]").then( function(result)
{

console.log(result) 

})

})

})

