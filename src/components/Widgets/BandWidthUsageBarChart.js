/**
 * BandWidth Usage Bar Chart
 */
import React from 'react';

// chart
import SimpleBarChart from '../Charts/SimpleBarChart';

// rct card box
import { RctCard, RctCardContent } from '../../components/RctCard';

const BandWidthUsageBarChart = ({ data }) => (
    <RctCard customClasses="gradient-success overflow-hidden">
        <div className="p-20 text-white">
            <h2>Data Use</h2>
            <h2>{data.totalUsed}</h2>
        </div>
        <RctCardContent>
            <SimpleBarChart
                labels={data.labels}
                datasets={data.datasets}
            />
        </RctCardContent>
    </RctCard>
);

export default BandWidthUsageBarChart;
