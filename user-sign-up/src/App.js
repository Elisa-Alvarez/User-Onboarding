import React, {useState,useEffect} from 'react';
import { v4 as uuid } from 'uuid'
import Forms from './components/Forms'
import User from './components/user'
import formSchema from './components/scheme'
import axios from 'axios'
import * as Yup from 'yup'
import './App.css';



const userFormIntialValue = {
    
  first_name: '',
  email: '',
  password: '',
  Terms: {                   
    Tos: false
  },
}

const errors = {
  first_name: '',
  email: '',
  password:'',
  
}

const disabledEvent = true

function App() {
  const [user, setUser] = useState([])          
  const [userFormValue, setUserForm] = useState(userFormIntialValue) 
  const [userFormError, setUserErrors] = useState(errors) 
  const [disable, setDisabled] = useState(disabledEvent) 
  
  
  const getUser = () => {
      axios.get('https://reqres.in/api/users')
      .then(response => {
        
        setUser(response.data.data)
      
      })
      .catch(err => {
        debugger
      })
  }
  
  const postNewUser = newUser =>{
    axios.get('https://reqres.in/api/users', newUser)
    .then(res => {
      setUser([...user, res.data.data])
      
    })
    .catch(err => {
      debugger
    })
    .finally(() => {
      setUserForm(userFormIntialValue)
    })
    
  }
 
  const onInputChange = evt => {
   
    const { name, value } = evt.target
    
    
    Yup
      .reach(formSchema, name)
   
      .validate(value)
      
      .then(() => {
        setUserErrors({
          ...userFormError,
          [name]: ""
        })
      })
      
      .catch(err => {
        setUserErrors({
          ...userFormError,
          [name]: err.errors[0] 
        })
      })

    setUserForm({
      ...userFormValue,
      [name]: value 
    })
  }

  
  const onCheckboxChange = evt => {
   
    const { name, checked } = evt.target
   
    setUserForm({
      ...userFormValue,
      Terms: {
        ...userFormValue.Tos,
        [name]: checked,
        
      }
    })
  }
  const onSubmit = evt => {
    evt.preventDefault()
    
    const newUser = {
      id:uuid(),
      first_name: userFormValue.first_name.trim(),
      email: userFormValue.email.trim(),
      password: userFormValue.password,
      Terms: userFormValue.Tos === true
        
    }
   
    postNewUser(newUser)
  }
 
  
  useEffect(() => {
    getUser()
  }, [])

  
  useEffect(() => {
    formSchema.isValid(userFormValue).then(valid => {
      setDisabled(!valid);
    })
  }, [userFormValue])

  return (
    <div className='container'>
      <header>
        
        <h1>User Sign Up</h1>
      </header>

      <Forms
        values={userFormValue}
        onInputChange={onInputChange}
        onCheckboxChange={onCheckboxChange}
        onSubmit={onSubmit}
        disabled={disable}
        popUpError={errors}
      />

      {
        console.log(user),
             user.map(users => {
               return (
                <User key={users.id} userInfo={users} />
              )
              })
            
      }
      
    </div>
  )

}


export default App;
