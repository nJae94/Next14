"use client";

import {useState} from "react";
import {HomeFixed, HomeTab, HomeText, TabIndicator} from "@/app/(afterLogin)/search/search.css";

const Tab = () => {

    const [tab, setTab] = useState('rec');

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