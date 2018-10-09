import React from 'react'
import { Link } from 'gatsby'
import icon from '../images/top.jpg'
import icon2 from '../images/bottom.jpg'

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


`
const Pix1 = styled.div`
display: flex;
margin: 0 auto;
`

const Icons = styled.div`
display:flex;
flex-direction: row;
font-size:50px;
align-content:center;
width: 100%;
    padding: 1rem;
    margin: .5rem 1rem;
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
margin-top: 0;
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
    <Pix>
          <Image src={icon} alt='this is an image' />
          
          <Button>Button</Button>
    </Pix>
    
          <Image src={icon2} alt='this is an image' />
          <Pix>
          <Pstyle>Creating a timeless look,
             coupled <br></br> with a flawless
              moment. </Pstyle>
              </Pix>
  
  <Icons>
  <FaPhoneSquare/><FaFacebook/><FaInstagram/><FaRegEnvelopeOpen/>
  </Icons>
</FlexCon>
  </Layout>
)






export default IndexPage
