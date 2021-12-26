import React from 'react'
import './website.css'

import 'bootstrap/dist/css/bootstrap.min.css';
const signup = () => {
  return (
    <div className='sign'>
<p>Email</p><input type='text'/>
<p>Password</p><input type='password'/>
<br/><br/>
<button>Sign Up</button>
    </div>
  )
}

export default signup
