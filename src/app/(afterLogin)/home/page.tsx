import React, {Suspense} from 'react';
import { Wrapper } from "@/app/(afterLogin)/home/home.css";
import Tab from "@/app/(afterLogin)/home/_components/Tab";
import TabProvider from "@/app/(afterLogin)/home/_components/Tab/TabProvider";
import PostForm from "@/app/(afterLogin)/home/_components/PostForm";
import {dehydrate, QueryClient} from "@tanstack/query-core";
import {getPostRecommends} from "@/app/(afterLogin)/home/_lib/getPostRecommands";
import {HydrationBoundary} from "@tanstack/react-query";
import {POST_QUERY_KEY} from "@/app/constants/queryKey";
import RecommendPost from "@/app/(afterLogin)/home/_components/RecommendPost";

const AfterLoginHome = async () => {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery({
        queryKey: POST_QUERY_KEY.RECOMMENDS,
        queryFn: ()=> getPostRecommends({pageParam: 0}),
    });
    const dehydratedState = dehydrate(queryClient);

    return (
        <div className={Wrapper}>
            <TabProvider>
                <Tab />
                <PostForm />
                <HydrationBoundary state={dehydratedState}>
                    <Suspense fallback={<div>loading...</div>}>
                        <RecommendPost />
                    </Suspense>
                </HydrationBoundary>
            </TabProvider>
        </div>
    );
};

export default AfterLoginHome;