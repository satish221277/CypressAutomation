class HomePage
{
geteditbox() 
{
return  cy.get('input[name="name"]:nth-child(2)')
}

Gettwowaydatabinding() 
{
return cy.get(':nth-child(4) > .ng-untouched')
}

Getgender()
{
return cy.get('select')

}

Getenterpreneauer()
{
return  cy.get('#inlineRadio3')

}

Getshopbutton()
{
    
return    cy.get(':nth-child(2) > .nav-link')

}


}

export default HomePage;