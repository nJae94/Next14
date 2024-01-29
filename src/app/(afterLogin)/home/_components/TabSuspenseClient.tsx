"use client"
import React, {use} from 'react';
import {TabConText} from "@/app/(afterLogin)/home/_components/Tab/TabProvider";
import RecommendPost from "@/app/(afterLogin)/home/_components/RecommendPost";
import {TabType} from "@/app/constants/Tab";
import FollowingPosts from "@/app/(afterLogin)/home/_components/FollowingPosts";

const TabSuspenseClient = () => {
    const {tab} = use(TabConText);

    if(tab === TabType.REC) {
        return (
            <RecommendPost />
        )
    }

    return <FollowingPosts />;
};

export default TabSuspenseClient;
