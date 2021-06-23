class Productpage
{

    checkOutButton()
    {
      return  cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link') 
    
    }

  finalCheckout()
  {
    return cy.contains('Checkout')

  }
  
  countryeditbox()
  {

return cy.get('#country')

  }

suggestiontext()
{

return cy.get('.suggestions > ul > li > a')
  
} 

finalcheckbox()

{

return cy.get('#checkbox2')

}

purchasebutton()

{
 return cy.get('form.ng-untouched > .btn')
}


successmessage() 
{

  return cy.get('.alert')

}


}
export default Productpage;

