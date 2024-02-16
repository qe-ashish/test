describe('My First Test Suite', function() 
{
  it('My secondTestcase', function()
   {
    cy.visit('https://qe-ashish.github.io/')
    cy.get('#fname').type('fname')
    cy.get('[type="submit"]').click()
    
    cy.get(':nth-child(2) > strong').contains('File')       
        
    })


  })
