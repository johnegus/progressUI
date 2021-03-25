import React from 'react';
import { Redirect } from 'react-router-dom';
import '../stylesheets/homepage.css';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import github from '../github.png'
import linkedin from '../linkedin.png'
import '../index.css'

import fridge from '../dashboard.png'

const HomePage = ({ authenticated, setAuthenticated }) => {
    if (authenticated) {
        return <Redirect to="/dashboard" />;
    }
    return(
        <div id='body'>
            
            <Header/>
            <Card 
                className='section bg-grey'
                img='https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
                title='Progress UI Goal'
                description='Progress UI is an app that organizes your job search. It is based on the App Academy job search points system that categorizes and prioritizes different activities. Users should try to accumulate at least 40 points per week with 10 of those total points from job applications.'
            />

            <Card 
                className='section'
                img={fridge}
                title='Why?' 
                description="I'm working on this project to help myself and others schedule our job search better. I also really enjoy simplfying data into friendly UI, so this is a fun project to practice."
            />
            <ContactContainer/>
        </div>
    );
}

const Header = () =>{
    return(
        <div className='header'>
            <span className='header-title'>
                Progress UI
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