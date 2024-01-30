import React from 'react';
import {FormZone, Main, TrendWrapper} from "@/app/(afterLogin)/explore/explore.css";
import Trend from '../_components/Trend/page';
import SearchForm from "@/app/(afterLogin)/_components/SearchForm";

const Explore = () => {
    return (
        <main className={Main}>
            <div className={FormZone}>
                <SearchForm />
            </div>
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
        </main>
    );
};

export default Explore;