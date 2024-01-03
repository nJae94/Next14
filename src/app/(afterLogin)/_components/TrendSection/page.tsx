import React from 'react';
import {TrendWrapper, TrendBackground} from "@/app/(afterLogin)/explore/explore.css";
import Trend from '../Trend/page';

const TrendSection = () => {
    return (
        <div className={TrendBackground}>
            <div className={TrendWrapper}>
                <h3>나를 위한 트렌드</h3>
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />
            </div>
        </div>
    );
};

export default TrendSection;
