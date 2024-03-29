/**
 * Maps Routes
 */
/* eslint-disable */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// async components
import {
    AsyncGooleMapsComponent,
    AsyncLeafletMapComponent
} from '../../components/AsyncComponent/AsyncComponent';

const Maps = ({ match }) => (
    <div className="content-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/google-maps`} />
            <Route path={`${match.url}/google-maps`} component={AsyncGooleMapsComponent} />
            <Route path={`${match.url}/leaflet-maps`} component={AsyncLeafletMapComponent} />
        </Switch>
    </div>
);

export default Maps;
