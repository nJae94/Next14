import React from 'react';
import { Wrapper } from "@/app/(afterLogin)/home/home.css";
import Tab from "@/app/(afterLogin)/home/_components/Tab";
import TabProvider from "@/app/(afterLogin)/home/_components/Tab/TabProvider";
import PostForm from "@/app/(afterLogin)/home/_components/PostForm";
import Post from "@/app/(afterLogin)/home/_components/Post";

const Page = () => {
    return (
        <div className={Wrapper}>
            <TabProvider>
                <Tab />
                <PostForm />
                <Post />
            </TabProvider>
        </div>
    );
};

export default Page;