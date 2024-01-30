import {Post} from "@/app/Model/Post";
import {fetchExtended} from "@/app/fetch";
import {SearchParams} from "@/app/Model/SearchParams";

export const getSearchPosts
    = async (searchParams : SearchParams ) => {

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