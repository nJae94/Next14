import React, {Suspense} from 'react';
import {dehydrate, QueryClient} from "@tanstack/query-core";
import {POST_QUERY_KEY} from "@/app/constants/queryKey";
import {getPostRecommends} from "@/app/(afterLogin)/home/_lib/getPostRecommands";
import {HydrationBoundary} from "@tanstack/react-query";
import TabSuspenseClient from "@/app/(afterLogin)/home/_components/TabSuspenseClient";

const TabSuspense = async () => {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery({
        queryKey: POST_QUERY_KEY.RECOMMENDS,
        queryFn: ()=> getPostRecommends({pageParam: 0}),
    });

    const dehydratedState = dehydrate(queryClient);
    return (
        <HydrationBoundary state={dehydratedState}>
            <Suspense fallback={<div>loading...</div>}>
                <TabSuspenseClient />
            </Suspense>
        </HydrationBoundary>
    );
};

export default TabSuspense;