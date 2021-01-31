import React, { useState } from 'react';
import './style.scss';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Button } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Menu, Search } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import SideDrawer from '../SideDrawer';
import ChartIcon from '../CartIcon/CartIcon.index';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Navbar: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();

  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const openTheDrawer = (): void => setOpenDrawer(true);
  const closeTheDrawer = (): void => setOpenDrawer(false);
  const moveToHomePage = () => history.push('/home');

  return (
    <div className={`${classes.root} navbar`}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="open drawer" onClick={openTheDrawer}>
            <Menu />
          </IconButton>
          <Typography className={`${classes.title} brand-name`} variant="h6" noWrap onClick={moveToHomePage}>
            Gavryusha
          </Typography>
          <ChartIcon />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <Search />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>

      <SideDrawer open={openDrawer} closeFn={closeTheDrawer} />
    </div>
  );
};
export default Navbar;
