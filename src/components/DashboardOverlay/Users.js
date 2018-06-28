/**
 * Users Stats
 */
import React from 'react';
import CountUp from 'react-countup';

//chart
import TinyAreaChart from '../Charts/TinyAreaChart';

// collapsible card
import RctCollapsibleCard from '../../components/RctCollapsibleCard/RctCollapsibleCard';

const Users = () => (
    <RctCollapsibleCard
        heading="Users"
        headingCustomClasses="text-left"
        fullBlock
    >
        <div className="d-flex justify-content-between p-30 py-40">
            <div className="counter-report">
                <h2 className="title mb-0"><CountUp start={0} end={35875} /></h2>
                <span className="text-muted">Total Visitor</span>
            </div>
            <span className="align-self-center d-flex arrow-icon"><i className="ti-arrow-up"></i></span>
        </div>
        <div className="mb-30">
            <TinyAreaChart
                label="Users"
                chartdata={[542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 630]}
                labels={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]}
                backgroundColor="rgba(0,122,206,0.6)"
                borderColor="rgb(0,122,206)"
                lineTension="0.4"
                height={110}
                gradient
                hideDots
            />
        </div>
        <div className="d-flex justify-content-between p-30">
            <div className="totle-status">
                <h2><CountUp start={0} end={720} /></h2>
                <span>Today</span>
            </div>
            <div className="totle-status">
                <h2><CountUp start={0} end={1500} /></h2>
                <span>This Week</span>
            </div>
            <div className="totle-status">
                <h2><CountUp start={0} end={2522} /></h2>
                <span>This Month</span>
            </div>
        </div>
    </RctCollapsibleCard>
);

export default Users;
