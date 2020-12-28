import React, { useMemo } from 'react';
import './style.scss';
import {
  Drawer,
  List,
  Divider,
  ListItem,
  //   ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const SideDrawer = ({ open, closeFn }) => {
  const history = useHistory();
  const { categories } = useSelector((state) => state);

  const onClickCategory = (categoryName) =>
    history.push(`/categories/${categoryName.toLowerCase()}`);

  const list = () => (
    <div role="presentation" onClick={closeFn} onKeyDown={closeFn}>
      <List>
        {categories.map(({ name }) => (
          <ListItem button key={name} onClick={() => onClickCategory(name)}>
            <ListItemText primary={name} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Contact us'].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Drawer anchor="left" open={open} onClose={closeFn} className="side-drawer">
      {list()}
    </Drawer>
  );
};

SideDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  closeFn: PropTypes.func.isRequired,
};

export default SideDrawer;
