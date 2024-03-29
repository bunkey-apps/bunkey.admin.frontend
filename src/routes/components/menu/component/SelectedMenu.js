/*======= Selected Menu =======*/
import React from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Menu, { MenuItem } from 'material-ui/Menu';

const options = [
  'Show some love to Material-UI',
  'Show all notification content',
  'Hide sensitive notification content',
  'Hide all notification content',
];

export default class SelectedMenu extends React.Component {
  state = {
    anchorEl: null,
    selectedIndex: 1,
  };
  button = undefined;

  handleClickListItem = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuItemClick = (event, index) => {
    this.setState({ selectedIndex: index, anchorEl: null });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <List component="nav">
          <ListItem button aria-haspopup="true" aria-controls="lock-menu" aria-label="When device is locked"
            onClick={this.handleClickListItem} >
            <ListItemText primary="When device is locked" secondary={options[this.state.selectedIndex]} />
          </ListItem>
        </List>
        <Menu id="lock-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
          {options.map((option, index) => (
            <MenuItem
              key={option}
              disabled={index === 0}
              selected={index === this.state.selectedIndex}
              onClick={event => this.handleMenuItemClick(event, index)}>
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}
