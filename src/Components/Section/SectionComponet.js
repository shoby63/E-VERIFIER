import React, { Component ,useState} from 'react'
import axios from "axios"
import { Input ,Text,
Button,Col,Grid,GridItem, Spacer} from '@nextui-org/react'
import { Layout, Search } from '@geist-ui/react-icons';
import './apply.css'

export default function SectionComponet() {
   const [email,setEmail]=useState("mydummyEmail@gmail.com");
   const [state,setState]=useState(false);
   console.log(process.env)
   const token='oLdhZbLfGN9GgMML3CxhwzD2QBpCYdFjmEuDiIlx'
   const config = {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Accept':'application/json'
    }
  };
const url ='https://api.oyyi.xyz/v1/mail-verifier';
  
   async function submitHandler(e){
    //console.log(email, e);
          if(email_vaildation(email))  {
              axios.post(url,{"email":email},config).then(response=>{
                console.log(response);
              }).catch(error=>{
                console.log(error)
              })
          }else{
            console.alert("Please Enter Valid E-mail");
            document.querySelector('input').value="";
            setEmail("");
          }
            
    }
    function email_vaildation(email){
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if(email.match(mailformat)){
        document.getElementById('input').focus();
        return true;}
        else{
        alert("You have entered an invalid email address!");
        document.getElementById('input').focus();
        return false; }}
        function inputHandler(event){
             setEmail(event.target.value);
             console.log("inputHandler Clicked");
        }
    
       
    return (
    <div style={{ height: '100%' }} >
    <Grid.Container gap={2} justify="center" alignItems="center" style={{ height: '40vh', display: 'flex', flexDirection: 'column', alignItems: 'center'}} bg="darkElegant">
    <Col xs={12} style={{ display: 'flex', justifyContent: 'center', height:"10vh" }}>
      <Text className="Heading">  Verify email address validity with the most complete email checker. </Text>
      </Col>
      <Col xs={12} style={{ display: 'flex', justifyContent: 'center', height:"10vh" }}>
        <Input placeholder='Enter Email address to verify' size="xl" css={{width:"60%"}} style={{textAlign: 'center'}} id="input" onChange={inputHandler} />
      </Col>
      <Spacer/>
      <Col xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
        <Button color="gradient" size="xl" onClick={submitHandler} type='submit'>
          Submit 
        </Button>
      </Col>
    </Grid.Container>
    <Spacer/>
  </div>
    )
  }
