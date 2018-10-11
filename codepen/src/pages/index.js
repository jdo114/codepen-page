import React from 'react'
import { Link } from 'gatsby'
import icon from '../images/top.jpg'
import icon2 from '../images/bottom.jpg'
import icon3 from '../images/logo.png'
import Layout from '../components/layout'
import styled from 'styled-components'

import {FaBeer,Fa,FaRegEnvelopeOpen,FaEnvelopeSquare,FaPhoneSquare,FaFacebook,FaInstagram, FaEnvelopeOpen} from 'react-icons/fa'


const FlexCon = styled.div`
@import url('https://fonts.googleapis.com/css?family=PT+Sans+Caption');
font-family: "PT Sans Caption", sans-serif;
display: flex;
flex-direction: column;

align-items: center;
justify-content: center;
text-align: center;
margin: 0;
padding: 0;
`
const Pix = styled.div`
display: flex;
margin: 0 auto;
flex-direction: column;
box-sizing: content-box;    

`
const Pix1 = styled.div`
display: flex;
margin: 0 auto;
`

const Icons = styled.div`

display:inline-block;
flex-direction: row;
position:absolute;
top:65%;
flex-direction: row;
font-size:40px;
align-content:center;
width: 100%;

    padding: 0rem;

    margin: 0rem 0rem;
    
`

 const Image = styled.img` 
 display: flex;
 
  height: 100%;
  width: 100%;  
  padding: 0px;
  margin-top: -8%;
  margin-bottom: 0;
 `
const Image2 = styled.img`
display:flex;
height: 100%;
width: 100%;
padding:0px;
margin-top: -1;
  margin-bottom: 0;
`
const Logodiv = styled.nav`
height:20%;
padding:1px;
`
const Logo = styled.img` 
display: flex;
position:absolute;
height : 5%;
 left: 4%;
 top: 0%;
 width: 15%;  
 padding: 0px;
 margin-top: 0rem;
 margin-bottom: 0;
`


const Button = styled.button`
  position:absolute;
  top:  20%;
  right: 40%;
  width:23%;
  height:4%;
  padding: 0;

`

const Pstyle = styled.p`
position: relative;
@import url('https://fonts.googleapis.com/css?family=Courgette');
font-family: 'Courgette', cursive;
display: flex;
-webkit-box-align: center;
align-items: center;
flex-direction: column;
text-align: center;

    top: -10rem;
    left: 50%;
    transform: translate(-50%, -50%);

font-size:.7rem;
color:white;
`;

const IndexPage = () => (
  <Layout>
<FlexCon>
  
  <Logodiv>
    
   <Logo src={icon3} alt='this is an image' />
</Logodiv>
       
          <Image src={icon} alt='this is an image' />
           
         <Button>Button</Button>
   
    <Pix>


      
      <Image src={icon2} alt='this is an image' />
   <Pstyle>Creating a timeless look,
           coupled <br></br> with a flawless
            moment. </Pstyle>
          <Icons>       
            <FaPhoneSquare/><FaFacebook/> <FaInstagram/>  <FaRegEnvelopeOpen/>
          </Icons>
 </Pix>
</FlexCon>
  </Layout>
)






export default IndexPage
