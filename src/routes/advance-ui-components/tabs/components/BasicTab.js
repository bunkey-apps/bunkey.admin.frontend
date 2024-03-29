/**
 * Basic Tab
 */
import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';

// intl messages
import IntlMessages from '../../../../util/IntlMessages';

// rct card box
import RctCollapsibleCard from '../../../../components/RctCollapsibleCard/RctCollapsibleCard';

function TabContainer({ children }) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}

class BasicTab extends Component {

    state = {
        activeIndex: 0
    }

    handleChange(event, value) {
        this.setState({ activeIndex: value });
    }

    render() {
        const { activeIndex } = this.state;
        return (
            <RctCollapsibleCard
                heading={<IntlMessages id="widgets.basicTab" />}
            >
                <AppBar position="static" className="bg-primary">
                    <Tabs value={activeIndex} onChange={(e, value) => this.handleChange(e, value)}>
                        <Tab label="Item One" />
                        <Tab label="Item Two" />
                        <Tab label="Item Three" />
                    </Tabs>
                </AppBar>
                {activeIndex === 0 && <TabContainer>Item One</TabContainer>}
                {activeIndex === 1 && <TabContainer>Item Two</TabContainer>}
                {activeIndex === 2 && <TabContainer>Item Three</TabContainer>}
            </RctCollapsibleCard>
        );
    }
}

export default BasicTab;
