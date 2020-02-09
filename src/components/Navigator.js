import React from 'react';
import PropTypes from 'prop-types';
import Make from 'classnames';
import {withRouter, Link} from 'react-router-dom';
import {withStyles} from '@material-ui/core/styles';
import {Divider,Drawer } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


import HomeIcon from '@material-ui/icons/Home';
import TimerIcon from '@material-ui/icons/Timer';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import AssignmentReturnIcon from '@material-ui/icons/AssignmentReturn';
import SettingsIcon from '@material-ui/icons/Settings';
import PhonelinkSetupIcon from '@material-ui/icons/PhonelinkSetup';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import SettingsInputComponentIcon from '@material-ui/icons/SettingsInputComponent';


import AddNewCustomer from '../pages/customerlist/AddNewCustomer';
import AddSalesReturn from '../pages/salesReturn/AddSalesReturn'
import AddNewPurchage from '../pages/purchase/AddNewPurchage'
import AddPurchaseReturn from '../pages/purchaseReturn/AddPurchaseReturn';
import NewSupplier from '../pages/supplier/NewSupplier';
import NewProduct from '../pages/product/NewProduct';
import Accounts from '../pages/accounts/Accounts'
import Banking from '../pages/Banking/Banking';


export const categories = [
  {
    id: 'Main Manu',
    isHeader: 1,
    icon: <HomeIcon />,
  },
  {
    id: 'Inventory',
    children: [
      {id: 'POS', url: '/pos', icon: <LocalAtmIcon />, component: <LocalAtmIcon fontSize="large" />},
      {id: 'Purchase', url: '/purchase', icon: <ShoppingCartIcon />, component:<AddNewPurchage /> },
      {id: 'Purchase Return', url: '/purchasereturn', icon: <AssignmentReturnIcon />, component: <AddPurchaseReturn /> },
      {id: 'Product', url: '/products', icon: <AddShoppingCartIcon />, component: <NewProduct />},
      {id: 'Sales Return', url: '/salesreturn', icon: <RemoveShoppingCartIcon />, component:<AddSalesReturn />},
      {id: 'Customer', url: '/customer', icon: <PermContactCalendarIcon />, component: <AddNewCustomer /> },
      {id: 'Supplier', url: '/supplier', icon: <SettingsInputComponentIcon />, component: <NewSupplier /> },
      
    ],
  },
  {
    id: 'Finance',
    children: [
      {id: 'Accounts', url: '/accounts', icon: <SettingsIcon />, component:<Accounts />},
      {id: 'Banking', url: '/banking', icon: <AccountBalanceIcon />, component: <Banking />},
      
    ],
  },
  // {
  //   id: 'Project Source',
  //   isHeader: 1,
  //   icon: <HomeIcon />,
  // },
  {
    id: 'Human Resourse',
    children: [
      {id: 'Add New Employee', url: '/addnewemployee', icon: <SettingsIcon />},
      
    ],
  },
  {
    id: 'Form',
    children: [
      {id: 'Button', url: '/analytics', icon: <SettingsIcon />},
      {id: 'Select', url: '/performance', icon: <TimerIcon />},
      {id: 'List', url: '/test', icon: <PhonelinkSetupIcon />},
    ],
  },
  {
    id: 'Form',
    children: [
      {id: 'Button', url: '/analytics', icon: <SettingsIcon />},
      {id: 'Select', url: '/performance', icon: <TimerIcon />},
      {id: 'List', url: '/test', icon: <PhonelinkSetupIcon />},
    ],
  },
  {
    id: 'Form',
    children: [
      {id: 'Button', url: '/analytics', icon: <SettingsIcon />},
      {id: 'Select', url: '/performance', icon: <TimerIcon />},
      {id: 'List', url: '/test', icon: <PhonelinkSetupIcon />},
    ],
  },
];

export const more = [
  {id: 'Home', url: '/home', icon: <HomeIcon />},
  {id: 'Game', url: '/game', icon: <TimerIcon />},
  {id: 'Gate', url: '/gate', icon: <PhonelinkSetupIcon />},
];

const styles = (theme) => ({
  categoryHeader: {
    paddingTop: 16,
    paddingBottom: 16,
  },
  categoryHeaderPrimary: {
    color: theme.palette.common.white,
  },
  item: {
    paddingTop: 4,
    paddingBottom: 4,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  itemCategory: {
    backgroundColor: '#232f3e',
    boxShadow: '0 -1px 0 #404854 inset',
    paddingTop: 16,
    paddingBottom: 16,
  },
  firebase: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.common.white,
  },
  itemActionable: {
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
    },
  },
  itemActiveItem: {
    color: '#4fc3f7',
  },
  itemPrimary: {
    color: 'inherit',
    fontSize: theme.typography.fontSize,
    '&$textDense': {
      fontSize: theme.typography.fontSize,
    },
  },
  textDense: {},
  divider: {
    marginTop: theme.spacing.unit * 2,
  },
});

function Navigator(props) {
  const {classes, location, staticContext, ...other} = props;
  const selector = location.pathname.split('/');
  const selecter = selector.map((_, last) => selector.filter((_, index) => index <= last).join('/')).filter((i) => i);

  return (
    <Drawer variant='permanent' {...other}>
      <List disablePadding>
        <ListItem className={Make(classes.firebase, classes.item, classes.itemCategory)}>Accounts-Inventory-POS</ListItem>

        {categories.map(({id, isHeader, children}) =>
          isHeader ? (
            <React.Fragment key={id}>
              <ListItem className={Make(classes.item, classes.itemCategory)}>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText classes={{primary: classes.itemPrimary}}>{id}</ListItemText>
              </ListItem>
            </React.Fragment>
          ) : (
            <React.Fragment key={id}>
              <ListItem className={classes.categoryHeader}>
                <ListItemText classes={{primary: classes.categoryHeaderPrimary}}>{id}</ListItemText>
              </ListItem>
              {children
                .filter((item) => item.url)
                .map(({id: childId, icon, url}) => {
                  const active = selecter.includes(url);
                  return (
                    <ListItem
                      button
                      dense
                      key={childId}
                      className={Make(classes.item, classes.itemActionable, active && classes.itemActiveItem)}
                      component={Link}
                      to={url}>
                      <ListItemIcon>{icon}</ListItemIcon>
                      <ListItemText
                        classes={{
                          primary: classes.itemPrimary,
                          textDense: classes.textDense,
                        }}>
                        {childId}
                      </ListItemText>
                    </ListItem>
                  );
                })}
              <Divider className={classes.divider} />
            </React.Fragment>
          ),
        )}
      </List>
    </Drawer>
  );
}

Navigator.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Navigator));
