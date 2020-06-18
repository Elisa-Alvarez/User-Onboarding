import React from 'react'


function Forms (props){

    const {
        values,
        onSubmit,
        onInputChange,
        onCheckboxChange,
        disabled,
        popUpError,
      } = props
    
      return (
        <form  onSubmit={onSubmit}>
      <div >
        <h2>User Sign Up</h2>

        
        <h4>User Information</h4>

        
        <div>
          
          <div>{popUpError.first_name}</div>
          <div>{popUpError.email}</div>
          <div>{popUpError.password}</div>
          <div>{popUpError.Tos}</div>
        </div>
        
      

 
        <label>First Name&nbsp;
          <input
            value={values.first_name}
            onChange={onInputChange}
            name='first_name'
            type='text'
          />
        </label>

        <label>Email
          <input
            value={values.email}
            onChange={onInputChange}
            name='email'
            type='text'
          />
        </label>

        <label> Password
        <input
            name='password'
            type="password"
            onChange={onInputChange}
            checked={values.password}
          />
        
        </label>

      </div>

      <div>
        <h4>Terms</h4>

       
        <label> Terms of Service
          <input
            name='Tos'
            type="checkbox"
            onChange={onCheckboxChange}
            checked={values.Terms.Tos}
          />
        </label>
        <button disabled={disabled}>submit</button>

      
        </div>
      
    </form>
      )
}

export default Forms