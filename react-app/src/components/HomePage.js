import React from 'react';
import { Redirect } from 'react-router-dom';
import '../stylesheets/homepage.css';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import github from '../github.png'
import linkedin from '../linkedin.png'
import '../index.css'

import fridge from '../ECOFridge-crop.png'
// const Header = styled.div`
// font-size: 35px;
// display: flex;
// align-items: center;
// justify-content: center;
// margin-top: 15px;
// position: relative;
// font-family: 'Fugaz One', cursive;
// z-index: 10;
// `

// const BackgroundImage = styled.div`
// overflow: hidden;
// background-image: url('https://i.imgur.com/B2Iyywy.jpg');
// width: 100vw;
// height: 91vh;
// background-size: cover;
// display: flex;
// align-items: center;
// justify-content: center;
// z-index: -10;
// position: absolute;
// `
const HomePage = ({ authenticated, setAuthenticated }) => {
    if (authenticated) {
        return <Redirect to="/dashboard" />;
    }
    return(
        <div id='body'>
            
            <Header/>
            <Card 
                className='section bg-grey'
                img='https://i.imgur.com/iYGDIsu.jpeg'
                title='ECOFridge Goal'
                description='Food waste prevention is one of the most important
                issues to tackle when it comes sustainability.  Food waste is the single largest component of 
                solid waste reaching landfills and incinerators in the U.S., according to the EPA.
                ECOFridge sources its expiration 
                data from the University of Nebraska–Lincoln to help people to optimize their kitchen, save money, and help the environment. '
            />

            <Card 
                className='section'
                img={fridge}
                title='About ECOFridge' 
                description='How often have you forgotten you had frozen fish, cornstarch, or oatmeal and not realized until it was too late? ECOFridge is a sustainability minded dashboard for users to reduce wasted grocery items. ECOFridge organizes and visually prioritizes items that will parish first in the user’s refrigerator, freezer, or pantry, and help users to make informed decisions when creating a grocery list to utilizes items that could otherwise be wasted. '
            />
            
            

            {/* <Card 
                className='section'
                img='./Capture1.PNG' 
                title='Our Mission' 
                description='Our mission is to reduce food waste.'
            /> */}
            <ContactContainer/>
        </div>
    );
}

const Header = () =>{
    return(
        <div className='header'>
            <span className='header-title'>
                ECOFridge
            </span>
            <br/>
       
        </div>
    );
}







const Card = (props) =>{
    return(
        <div className={props.className} >
            <div className="small-div">
                
                
            </div>

            <div className="big-div">
                <span className='div-title'>
                    {props.title}
                </span>
                <br/>
                <div>
                    {props.description}
                </div>
                <img className='homepage-image' src={props.img} alt=''/>
            </div>
        </div>
    )
}



const ContactContainer = () => {
    return(
        <div className='contact-container bg-grey'>
            <span className="div-title">Contact</span>
            <div className='contact-form'>
                <div id='sect1'>
                <>
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.linkedin.com/in/john-hiestand-3bb22a17/">
      John Hiestand 
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
      
    </Typography>
    
    <div className='miniInfo1'>
    <div>
    <a href="https://github.com/johnegus/" target="_blank" rel="noreferrer"> 
      
        <img className='icons' height='25px' width='25px' src={github} alt='github' />
        </a>
    </div>
    <div>
    <a href="https://www.linkedin.com/in/john-hiestand-3bb22a17/" target="_blank" rel="noreferrer"> 
        
        <img className='icons' height='25px' width='25px' src={linkedin} alt='linkedin' />
        </a>
    </div>
    </div>
    <Typography variant="body2" color="textSecondary" align="center">
     Email: jgh2102@gmail.com
    </Typography>
    </>
                </div>
                    
                <div id='sect2'>
                    <span>
                        Contact
                    </span>

                    <input type="text" placeholder="email address" className="input-field"/>
                    <textarea name="" id="" cols="30" rows="10" placeholder="comment"></textarea>
                    <button className="contact-btn">Send</button>
                </div>
            </div>
        </div>
    );
}

export default HomePage;