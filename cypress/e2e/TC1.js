describe('My First Test Suite', function() 
{
  it('My FirstTestcase', function()
   {
    cy.visit('https://qe-ashish.github.io/')
    cy.get('#fname').type('fname')
    cy.get('[type="submit"]').click()
    
    cy.get('h1').contains('404')       
        
    })


  })
