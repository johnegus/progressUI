import * as React from 'react';
import { NavLink} from 'react-router-dom';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import FastfoodIcon from '@material-ui/icons/Fastfood';

import AssignmentIcon from '@material-ui/icons/Assignment';
import KitchenIcon from '@material-ui/icons/Kitchen';
import InsertChartIcon from '@material-ui/icons/InsertChart';

export const mainListItems = (
  <div>
    <NavLink to={`/`} exact={true} activeClassName="active" style={{ textDecoration: 'none' }}>
    <ListItem button>
      <ListItemIcon>
        <KitchenIcon />
      </ListItemIcon>
      <ListItemText primary="Fridge" />
    </ListItem>
    </NavLink>
    <NavLink to={`/recipes`} exact={true} activeClassName="active">
    <ListItem button>
      <ListItemIcon>
        <FastfoodIcon />
      </ListItemIcon>
      <ListItemText primary="Recipe Search" />
    </ListItem>
    </NavLink>
    <NavLink to={`/database`} exact={true} activeClassName="active">
    <ListItem button>
      <ListItemIcon>
        <InsertChartIcon />
      </ListItemIcon>
      <ListItemText primary="Database" />
    </ListItem>
    </NavLink>
   
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);
