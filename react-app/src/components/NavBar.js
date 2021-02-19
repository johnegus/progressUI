import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';


import LogoutButton from './auth/LogoutButton';
import styled from 'styled-components'
import Button from '@material-ui/core/Button';


import RecipeSearchInput from './recipe-search/RecipeSearchInput';
import logo from '../ecofridge.png'
import '../index.css'



const Nav = styled.nav`
max-height: 80px;
border-bottom: solid 1px #f0f0f5;
text-decoration: none;
position: -webkit-sticky; /* Safari */
position: sticky;
top: 0;
z-index: 25;
background-color: white;
/* overflow: hide; */
/* background-color: black; */
`
const NavContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
text-decoration: none;
margin: 0 auto;
`



const Logo = styled.img.attrs({
  src: logo
})`
width: 80px;
height: 80px;
margin: 0 auto;
display: flex;
`





const NavBar = ({ authenticated, setAuthenticated }) => {
  let location = useLocation();
  
  const currentPage = location.pathname;
 
  



  return (
    <>
    <Nav>
      <NavContainer>
      {authenticated ? <RecipeSearchInput /> : ''}
      {authenticated ? <NavLink to="/dashboard" exact={true} activeClassName="active">
          <Logo />
        </NavLink> : 
        <NavLink to="/" exact={true} activeClassName="active">
        <Logo />
      </NavLink>}

        
      <ul>
          {!authenticated && currentPage !== '/login' ? 
        <>
              <NavLink to="/login" exact={true} activeClassName="active">
                <Button variant="outlined" color="primary">
                  Login
                </Button>
            </NavLink>
        </>
            : ""}
          {!authenticated && currentPage !== '/sign-up' ? 
            <>
            <NavLink to="/sign-up" exact={true} activeClassName="active">
                <Button variant="outlined" color="primary">
                  Sign Up
                </Button>
            </NavLink>
            </>
            : "" }
          {authenticated ? 
          <>
            <NavLink to={`/dashboard`} exact={true} className='dashboard-button'>
            <Button variant={currentPage === '/dashboard'? "contained" : "outlined"} color="primary">
                Dashboard
              </Button>
            </NavLink>
            <NavLink to={`/database`} exact={true} >
            <Button variant={currentPage === '/database'? "contained" : "outlined"} color="primary">
                Database
              </Button>
            </NavLink>
            <LogoutButton setAuthenticated={setAuthenticated} />
          </>
            : ""}
        </ul>
        </NavContainer>
        </Nav>
   
    </>
  );
}

export default NavBar;