import React from 'react';
import { Wrapper } from "@/app/(afterLogin)/home/home.css";
import Tab from "@/app/(afterLogin)/home/_components/Tab";
import TabProvider from "@/app/(afterLogin)/home/_components/Tab/TabProvider";
import PostForm from "@/app/(afterLogin)/home/_components/PostForm";
import TabSuspense from "@/app/(afterLogin)/home/_components/TabSuspense";

const AfterLoginHome = async () => {


    return (
        <div className={Wrapper}>
            <TabProvider>
                <Tab />
                <PostForm />
               <TabSuspense />
            </TabProvider>
        </div>
    );
};

export default AfterLoginHome;