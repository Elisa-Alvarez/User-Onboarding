import React from 'react'

function User({ userInfo }) { 
  if (!userInfo) {
    return <h3>Loading your Info...</h3>
  }
  
  return (
    <div >
      <img src={userInfo.avatar}/>
  <h2> {userInfo.first_name} {userInfo.last_name}</h2>
      <p>Email: {userInfo.email}</p>
      <p>password: {userInfo.password}</p>


    </div>
  )
}

export default User