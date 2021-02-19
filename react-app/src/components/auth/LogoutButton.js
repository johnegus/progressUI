import React from "react";
import { logout } from "../../services/auth";
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';


const LogoutButton = ({setAuthenticated}) => {
  const onLogout = async (e) => {
    await logout();
    setAuthenticated(false);
    localStorage.removeItem('userId');
    return <Redirect to="/" />;
  };

  return <Button variant="outlined" color="primary" onClick={onLogout}>Logout</Button>;
};

export default LogoutButton;
