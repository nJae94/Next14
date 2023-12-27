"use client";

import React, {use} from 'react';
import {HomeFixed, HomeTab, HomeText, TabIndicator} from "@/app/(afterLogin)/home/_components/Tab/tab.css";
import {TabConText} from "@/app/(afterLogin)/home/_components/Tab/TabProvider";

const Tab = () => {

    const {tab, setTab} = use(TabConText)

    const onClickRec = () => {
        setTab('rec');
    }
    const onClickFol = () => {
        setTab('fol');
    }

    return (
        <div className={HomeFixed}>
            <div className={HomeText}>홈</div>
            <div className={HomeTab}>
                <div onClick={onClickRec}>
                    추천
                    <div className={TabIndicator} hidden={tab === 'fol'}></div>
                </div>
                <div onClick={onClickFol}>
                    팔로우 중
                    <div className={TabIndicator} hidden={tab === 'rec'}></div>
                </div>
            </div>
        </div>
    );
};

export default Tab;