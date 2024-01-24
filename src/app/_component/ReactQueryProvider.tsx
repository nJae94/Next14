'use client'

import {QueryClient} from "@tanstack/query-core";
import {useState} from "react";
import {QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

interface Props {
        children: React.ReactNode;
    }

    const ReactQueryProvider = ({children}: Props) => {
        const [queryClient] = useState(
            new QueryClient({
                defaultOptions: {
                    queries: {
                        refetchOnWindowFocus: false,
                        retryOnMount: true,
                        refetchOnReconnect: false,
                        retry: false,
                    },
                },
            })
        );

        return (
            <QueryClientProvider client={queryClient}>
                {children}
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        );
    }

    export default ReactQueryProvider;