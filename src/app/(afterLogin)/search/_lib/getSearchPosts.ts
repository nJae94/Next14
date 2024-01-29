import {Post} from "@/app/Model/Post";
import {QueryFunction} from "@tanstack/query-core";
import {fetchExtended} from "@/app/fetch";

export const getSearchPosts
    = async ({ searchParams }: {  searchParams: {q: string, pf?: string, f?: string}}) => {

    const res = await fetchExtended<Post[]>(`http://localhost:9090/api/search/${searchParams.q}?${searchParams.toString()}`, {
        next: {
            tags: ['posts', 'search', searchParams.q],
        },
        cache: 'no-store',
    });

    if(!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.body;
}