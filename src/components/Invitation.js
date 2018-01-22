// Code Invitation Component Here
import React from 'react'



const Invitation = (props) => {
  return (
    <div>
      <h1>You've been invited!</h1>
      {props.children}
    </div>
  )
}


export default Invitation
