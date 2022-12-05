import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


export const Form = () => {
  const initial={username:"", email:"",gender:"",password:"" };
  const [formvalue, setformvalue]=useState(initial);
  const [formerror,setformerror]=useState({});
  const [isSubmit, setisSubmit]=useState(false);


  const handleChange=(e)=>{
    console.log(e.target)
    const {name,value}=e.target;
    setformvalue({...formvalue,[name]:value}) 
  }

  const handlesubmit=(e)=>{
    e.preventDefault();
    setformerror(validate(formvalue))
    setisSubmit(true)

    
  }

useEffect(()=> {
  console.log(formerror)
  if(Object.keys(formerror).length==0 && isSubmit){
    console.log(formvalue)
  }
},[formerror])


  const validate=(values)=>{
    const error={}
    const regex="/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/"
    if(values.username==""){
      error.username="Username is required"
    }
   if(values.email==""){
    error.email="Email is required"
   } 
   else if(!regex.test(values.email)) {
      error.email="please enter valid email"
   }
   if(values.password==""){
    error.password="Password is required"
   }
   else if(values.password.length<8){
    error.password="password should be alleast 8 character"
   }
   if(values.gender==""){
    error.gender="gender is required"
   }
    return error
  }



  return (
    <div>
    <Form onSubmit={handlesubmit}>
   
    <Form.Group  controlId="formGridUsername">
      <div>
        <Form.label>username</Form.label>
        <Form.Control
        type="text"
        name='username'
        placeholder='username' 
        value={formvalue.username} 
        onChange={handleChange}
        />
      </div>
      <p>{formerror.username}</p>
      </Form.Group>
      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridEmail">
      <div>
        <Form.label>email</Form.label>
        <Form.Control
        type="email"
        name="email"
         placeholder='email'
         value={formvalue.email} 
         onChange={handleChange} 
         />
      </div>
      </Form.Group>
      <Form.Group controlId="formGridGender">
      <div>
        <label>gender</label>
        <Form.Select
        onChange={handleChange}
         name='gender'
       >
         <option></option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">other</option>
        </Form.Select>
      </div>
      </Form.Group>
      </Row>
      <div>
        <label>password</label>
        <input 
        type="password" 
        placeholder='password'
        name='password'
        value={formvalue.password} 
        onChange={handleChange}
        />

      </div>
      
      <div>
        <button type="submit">submit</button>
      </div>
     
      </Form>
    </div>
  )
}
