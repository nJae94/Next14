import React from 'react';
import { Wrapper } from "@/app/(afterLogin)/home/home.css";
import Tab from "@/app/(afterLogin)/home/_components/Tab";
import TabProvider from "@/app/(afterLogin)/home/_components/Tab/TabProvider";
import PostForm from "@/app/(afterLogin)/home/_components/PostForm";

const Page = () => {
    return (
        <div className={Wrapper}>
            <TabProvider>
                <Tab />
                <PostForm />
            </TabProvider>
        </div>
    );
};

export default Page;