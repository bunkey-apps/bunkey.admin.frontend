/**
 * ListItem Component
 */
import React, { Component } from 'react';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Avatar from 'material-ui/Avatar';

// intl messages
import IntlMessages from '../../../../util/IntlMessages';

// rct card box
import RctCollapsibleCard from '../../../../components/RctCollapsibleCard/RctCollapsibleCard';

// list item
const listItems = [
    {
        itemName: 'Line item 1',
        status: false,
        imageURL: require('../../../../assets/img/user-5.jpg')
    },
    {
        itemName: 'Line item 2',
        status: false,
        imageURL: require('../../../../assets/img/user-5.jpg')
    },
    {
        itemName: 'Line item 3',
        status: false,
        imageURL: require('../../../../assets/img/user-5.jpg')
    },
    {
        itemName: 'Line item 4',
        status: false,
        imageURL: require('../../../../assets/img/user-5.jpg')
    }
]

class ListItemWithImage extends Component {

    state = {
        listItems
    };

    // hanlde toggle kist items
    handleToggleListItems(key) {
        let items = this.state.listItems;
        items[key].status = !items[key].status;
        this.setState({ listItems: items });
    }

    render() {
        return (
            <RctCollapsibleCard
                heading={<IntlMessages id="widgets.listItemWithImage" />}
            >
                <List className="p-0">
                    {this.state.listItems.map((data, key) => (
                        <ListItem key={key} button onClick={() => this.handleToggleListItems(key)} >
                            <Avatar alt="Remy Sharp" className="img-fluid" src={data.imageURL} />
                            <ListItemText primary={data.itemName} />
                            <ListItemSecondaryAction>
                                <Checkbox className="text-primary" checked={data.status} disableRipple />
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
                </List>
            </RctCollapsibleCard>
        );
    }
}

export default ListItemWithImage;