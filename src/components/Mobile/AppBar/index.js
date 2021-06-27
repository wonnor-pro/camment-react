import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [userAnchorEl, setUserAnchorEl] = React.useState(null);
  const [menuAnchorEl, setMenuAnchorEl] = React.useState(null);
  const userOpen = Boolean(userAnchorEl);
  const menuOpen = Boolean(menuAnchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleUserMenu = (event) => {
    setUserAnchorEl(event.currentTarget);
  };

  const handleMenu = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setUserAnchorEl(null);
    setMenuAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={auth} onChange={handleChange} aria-label="login switch"/>}
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} onClick={handleMenu} color="inherit" aria-label="menu">
            <MenuIcon/>
          </IconButton>
          <Menu
            id="left-menu-appbar"
            anchorEl={userAnchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            getContentAnchorEl={null}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={menuOpen}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Home</MenuItem>
            <MenuItem onClick={handleClose}>Reviews</MenuItem>
            <MenuItem onClick={handleClose}>Report</MenuItem>
          </Menu>
          <Typography variant="h6" className={classes.title}>
            # Camments _
          </Typography>
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleUserMenu}
              color="inherit"
            >
              <AccountCircle/>
            </IconButton>
            {auth && (
              <Menu
                id="menu-appbar"
                anchorEl={userAnchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={userOpen}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Login</MenuItem>
              </Menu>
            )}
            {!auth && (
              <Menu
                id="menu-appbar"
                anchorEl={userAnchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={userOpen}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Account</MenuItem>
                <MenuItem onClick={handleClose}>My post</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            )}

          </div>
        </Toolbar>
      </AppBar>
    </div>
  );

}