
import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Navigate, useNavigate } from 'react-router-dom';
import "./UserFormData.css"

export const UserFormData = () => {

    const initial={username:"", email:"",gender:"",password:"" };
    const [formvalue, setformvalue]=useState(initial);
    const [formerror,setformerror]=useState({});
    const [isSubmit, setisSubmit]=useState(false);
    const navigate=useNavigate();

    const handleChange=(e)=>{
        console.log(e.target)
        const {name,value}=e.target;
        setformvalue({...formvalue,[name]:value}) 
      }
    
      const handlesubmit=(e)=>{
        e.preventDefault();
        setformerror(validate(formvalue))
        setisSubmit(true)
       next()
        
      }
      const next=()=>{
        if(Object.keys(formerror).length==0 && isSubmit){
          console.log(formvalue)
          navigate("/success")
        }
      }
    
    useEffect(()=> {
      console.log(formerror)
      if(Object.keys(formerror).length==0 && isSubmit){
        console.log(formvalue)
      }
    },[formerror])
    
    
      const validate=(values)=>{
        const error={}
       
        const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
       
        let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

        function ValidateEmail(inputText){
          
var mailformat =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(inputText.match(mailformat))
{

return true;
}
else
{

return false;
}
}

       
        if(values.username==""){
          error.username="Username is required"
        }
       if(values.email==""){
        error.email="Email is required"
       } 
        if( !ValidateEmail(values.email)){
       
          error.email="enter vaild mail"
        
       }
       
       if(values.password==""){
        error.password="Password is required"
       }
       else if(values.password.length<8){
        error.password="password should be alleast 8 character"
       }
       else if(!specialChars.test(values.password)){
        error.password="please enter alteast one special character"
       }
       if(values.gender==""){
        error.gender="gender is required"
       }
        return error
      }
    
  
  return (
    <>
    <div className='mainform'>
    <div className='subform'>
    <Form onSubmit={handlesubmit}>
    <div className='childform'>
    <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control 
        className='username'
        name="username"
        type="text"
         onChange={handleChange} 
         placeholder="Enter username" 
         value={formvalue.username}

         />
       <p>{formerror.username}</p>
      </Form.Group>
      </div>
      <div className='childform'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
        type="email" 
        className='emailaddress'
        name="email"
        onChange={handleChange} 
        value={formvalue.email} 
        placeholder="Enter email"
      
        />
       <p>{formerror.email}</p>
      </Form.Group>
      </div>
      <div className='childform'>
      <label className='gender'>gender</label>
      <Form.Select
       onChange={handleChange}
      name="gender"
       >
   <option></option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Other">Other</option>
    </Form.Select>
    <p>{formerror.gender}</p>
</div>
<div className='childform'>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label  >Password</Form.Label>
        <Form.Control 
        type="password" 
        className="password"
         onChange={handleChange} 
          value={formvalue.password} 
          placeholder="Password" 
          name="password"
         
          />
          <p>{formerror.password}</p>
      </Form.Group>
     
      </div>

<div className='submitbutton'>
<div>
<button type="submit">Submit</button>
</div>

</div>
      
      
      
    </Form>
    </div>
    </div>
    </>
  )
}
