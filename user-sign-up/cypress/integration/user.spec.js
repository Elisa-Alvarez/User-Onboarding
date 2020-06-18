describe('Inputs and cancel button', () => { 
   
   
    it('can navigate to the site', () => { // this is the test
      
      cy.visit('http://localhost:3000')
  
      
      cy.url().should('include', 'localhost')
    })
  
    it('get the name text', () => { 
      cy.get('input[name=first_name]')
      .type('First Name')
    .should('have.value', 'First Name')

           
    })
  
  it('get email', ()=>{
    cy.get('input[name=email')
    .type('email')
    .should('have.value', 'email')
  })
  
   it('get passwrd',()=>{
    cy.get('input[name=password]')
    .type('password')
    .should('have.value', 'password')
   })
  
 
  })
  
 