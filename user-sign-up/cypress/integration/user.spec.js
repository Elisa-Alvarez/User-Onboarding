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
    .type('email@gmail.com')
    .should('have.value', 'email@gmail.com')
  })
  
   it('get passwrd',()=>{
    cy.get('input[name=password]')
    .type('password')
    .should('have.value', 'password')
   })

   it('checkbox valid', ()=>{
     cy.get('input[name=Terms]').check()
    
    .should('have.value','on')
   })

   it('submit info', () => { 
   
    cy.get('button').click()

   
  })

  

   



  })
  
 