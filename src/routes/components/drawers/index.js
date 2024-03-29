/**
 * Drawers
 */
/* eslint-disable */
import React from 'react';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';

//Components
import PermanentDrawer from './component/PermanentDrawer';
import PersistentDrawer from './component/PersistentDrawer';
import { mailFolderListItems, otherMailFolderListItems } from './component/tileData';

// page title bar
import PageTitleBar from '../../../components/PageTitleBar/PageTitleBar';

// rct card box
import RctCollapsibleCard from '../../../components/RctCollapsibleCard/RctCollapsibleCard';

// intl messages
import IntlMessages from '../../../util/IntlMessages';

const styles = {
  list: {
    width: 300,
  },
  listFull: {
    width: 'auto',
  },
};

class DrawerComponent extends React.Component {

  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;
    const sideList = (
      <div className={classes.list}>
        <List>{mailFolderListItems}</List>
        <Divider />
        <List>{otherMailFolderListItems}</List>
      </div>
    );

    const fullList = (
      <div className={classes.listFull}>
        <List>{mailFolderListItems}</List>
        <Divider />
        <List>{otherMailFolderListItems}</List>
      </div>
    );
    return (
      <div className="drawer-wrapper">
        <PageTitleBar title={<IntlMessages id="sidebar.drawers" />} match={this.props.match} />
        <RctCollapsibleCard
          heading={<IntlMessages id="widgets.temporaryDrawers" />}
        >
            <Button className="btn-primary text-white mr-10 mb-10" raised="true" onClick={this.toggleDrawer('left', true)}>Open Left</Button>
            <Button className="btn-primary text-white mr-10 mb-10" raised="true" onClick={this.toggleDrawer('right', true)}>Open Right</Button>
            <Button className="btn-primary text-white mr-10 mb-10" raised="true" onClick={this.toggleDrawer('top', true)}>Open Top</Button>
            <Button className="btn-primary text-white mr-10 mb-10" raised="true" onClick={this.toggleDrawer('bottom', true)}>Open Bottom</Button>

            <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
              <div tabIndex={0} role="button" onClick={this.toggleDrawer('left', false)}
                onKeyDown={this.toggleDrawer('left', false)} >
                {sideList}
              </div>
            </Drawer>

            <Drawer anchor="top" open={this.state.top} onClose={this.toggleDrawer('top', false)}>
              <div tabIndex={0} role="button"
                onClick={this.toggleDrawer('top', false)}
                onKeyDown={this.toggleDrawer('top', false)}>
                {fullList}
              </div>
            </Drawer>

            <Drawer
              anchor="bottom"
              open={this.state.bottom}
              onClose={this.toggleDrawer('bottom', false)}>
              <div tabIndex={0} role="button" onClick={this.toggleDrawer('bottom', false)}
                onKeyDown={this.toggleDrawer('bottom', false)}>
                {fullList}
              </div>
            </Drawer>

            <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
              <div tabIndex={0} role="button" onClick={this.toggleDrawer('right', false)}
                onKeyDown={this.toggleDrawer('right', false)}>
                {sideList}
              </div>
            </Drawer>
        </RctCollapsibleCard>
        <RctCollapsibleCard
          heading={<IntlMessages id="widgets.permanentDrawers" />}
        >
            <PermanentDrawer />
        </RctCollapsibleCard>
        <RctCollapsibleCard
          heading={<IntlMessages id="components.persistentDrawer" />}
        >
            <PersistentDrawer />
        </RctCollapsibleCard>
      </div>
    );
  }
}

export default withStyles(styles)(DrawerComponent);
