import React from 'react';
import './style.scss';
import { Drawer, List, Divider, ListItem, ListItemText } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { MainState } from '../../types/store';
import { Category } from '../../types/general';

interface Props {
  open: boolean;
  closeFn: () => void;
}

const SideDrawer: React.FC<Props> = ({ open, closeFn }) => {
  const history = useHistory();
  const categories = useSelector<MainState, Category[]>((state) => state.categories);

  const onClickCategory = (categoryName: string): void => {
    history.push(`/categories/${categoryName.toLowerCase()}`);
  };

  return (
    <Drawer anchor="left" open={open} onClose={closeFn} className="side-drawer">
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
    </Drawer>
  );
};

export default SideDrawer;
