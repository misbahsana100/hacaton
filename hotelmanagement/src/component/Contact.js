import React,{useState} from 'react'
import {Form,Row,Col,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
const About = () => {
    const  [user,SetUser] = useState({
firstname:'',
lastname:'',
email:'',
password:'',
    });
    let name ,value;
    const getUserData=(event)=>{
        name=event.target.name;
        value=event.target.value;
        SetUser({...user,[name]:value});

    };
    const postData=async (e)=>{
e.preventDefault();
const{firstname,lastname,email,password}=user; 

    const res = await fetch('https://hacaton-689b1-default-rtdb.firebaseio.com/myform.json',
   { method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({
firstname,
lastname,        
email,
password
    }),
 } 
 );
    
       
    };
    // if (res) {
    //     alert('Data Stored')
        
    // }
    // else{
    //     alert('plz fill the form')
    // }
    



    return (
     <>   <div className='contact'>
            <br/>
             <Form method='post'>
  
             <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      First Name
    </Form.Label>
    <Col sm="10">
      <Form.Control type="text" placeholder="firstname" name ='firstname' value={user.firstname}  onChange={getUserData}/>
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
     Last Name
    </Form.Label>
    <Col sm="10">
      <Form.Control type="text" placeholder="lastname" name ='lastname' value={user.lastname}  onChange={getUserData}/>
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
    Email
    </Form.Label>
    <Col sm="10">
      <Form.Control type="email" placeholder="email" name='email'  value={user.email} onChange={getUserData}/>
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
    <Form.Label column sm="2">
      Password
    </Form.Label>
    <Col sm="10">
      <Form.Control type="password" placeholder="Password" name='password' value={user.password} onChange={getUserData}/>
    </Col>
  </Form.Group>
  <Button variant="primary" type="submit"   onClick={postData} >
    Submit
  </Button>
</Form>


        </div>
        <div>

        </div>
        
        
        </>
    )
}

export default About