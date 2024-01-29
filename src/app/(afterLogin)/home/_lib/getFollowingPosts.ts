import {fetchExtended} from "@/app/fetch";
import {POST_QUERY_KEY} from "@/app/constants/queryKey";
import {Post} from "@/app/Model/Post";

interface Props {
    pageParam: number;
}

export async function getFollowingPosts({pageParam}: Props) {
    const res = await fetchExtended<Post[]>(`followingPosts?cursor=${pageParam}`, {
        next: {
            tags: POST_QUERY_KEY.FOLLOWING,
            },
        });

    if(!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.body;
}
