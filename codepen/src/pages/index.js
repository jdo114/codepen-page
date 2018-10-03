import React from 'react'
import { Link } from 'gatsby'
import icon from '../images/top.jpg'
import icon2 from '../images/bottom.jpg'

import Layout from '../components/layout'
import styled from 'styled-components'

import {FaBeer,FaPhoneSquare,FaFacebook,FaInstagram} from 'react-icons/fa'


const FlexCon = styled.div`
@import url('https://fonts.googleapis.com/css?family=PT+Sans+Caption');
font-family: "PT Sans Caption", sans-serif;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
font-size: 1.5rem;
margin: 0;

`

const RowFlex = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: 30rem;

`

const Title = styled.h1`
color: rgb(17, 17, 17);
font-size: 2.2em;
margin: 0.67em 0px;

`;


const Pix = styled.div`
`

const Icons = styled.div`
display:flex;
flex-direction: row;
`

 const Image = styled.img`
  height: 100%;
  width: 100%;

  margin:0;
  padding: 0px;
 `

 
const Image2 = styled.img`
height: 100%;
width: 100%;
padding:0px;
margin: 0;

`

const Pstyle = styled.p`
@import url('https://fonts.googleapis.com/css?family=Courgette');
font-family: 'Courgette', cursive;

display: flex;
-webkit-box-align: center;
align-items: center;
flex-direction: column;
text-align: center;
position: absolute;
    top: 105%;
    left: 50%;
    transform: translate(-50%, -50%);

font-size:.7rem;
color:white;
`;

const IndexPage = () => (
  <Layout>
<FlexCon>
  
          <Image src={icon} alt='this is an image' />
  
    <Pix>
          <Image src={icon2} alt='this is an image' />
          <Pstyle>Creating a timeless look,
             coupled <br></br> with a flawless
              moment. </Pstyle>
  </Pix>
  <Icons>
  <FaPhoneSquare/><FaFacebook/><FaInstagram/>
  </Icons>
</FlexCon>
  </Layout>
)






export default IndexPage
