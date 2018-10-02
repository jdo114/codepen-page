import React from 'react'
import { Link } from 'gatsby'
import img from '../images/background.jpg'
import BackgroundImage from 'react-background-image-loader';

import Layout from '../components/layout'
import styled from 'styled-components'

//image for background
const Image = styled.img`
  height: 100%; 
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;    
 `


//div for whole layout

const FlexCon = styled.div`
//@import url('https://fonts.googleapis.com/css?family=PT+Sans+Caption');
//font-family: "PT Sans Caption", sans-serif;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
font-size: 1.5rem;
`

const Logo = styled.h1`
padding: 20px;
float: left;
width: 300px;
height: 76px;
box-sizing: border-box;
display: block;
font-family: 'FormosaUpright', 'Segoe Print', 'SignPainter';
font-size: 50px;
line-height: 20px;
font-weight: normal;
color:#fff;
}
`

const Pic = styled.div`
    display: flex;
    background-image: url(${img});
    width: 2000px;
    height: 2000px; 
`

const Nav = styled.div`
    display: flex;
    flex-direction: row;
  align-content: right;

 
`

const Head = styled.header`
display:flex;
flex-direction: row;
width: 100%;
height: 76px;
position: fixed;
top: 0;
left: 0;
padding:0 10%;
box-sizing: border-box;
z-index:9999999;
	-webkit-transition: height 0.5s;
  -moz-transition: height 0.5s;
  -ms-transition: height 0.5s;
 	-o-transition: height 0.5s;
  transition: height 0.5s;
	/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#005788+0,0083cc+19 */
background: #005788; /* Old browsers */
background: -moz-linear-gradient(bottom,  #006aa5 0%, #0083cc 15%); /* FF3.6-15 */
background: -webkit-linear-gradient(bottom,  #006aa5 0%,#0083cc 15%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to top,  #006aa5 0%,#0083cc 15%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#006aa5', endColorstr='#0083cc',GradientType=0 ); /* IE6-9 */
`

const IndexPage = () => (
 <Pic> <Layout>
     
    <Head>
        <Logo>a.w does</Logo>
       
          <Nav>
            <a href="#">designer</a>
            <li><a href="writer.html">writer</a></li>
            <li><a href="#">developer</a></li>
            <li><a href="#">cv</a></li>
          </Nav>
      </Head>
     
      
        
    


    <h1>Hi </h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
   
  </Layout> </Pic>
)

export default IndexPage
