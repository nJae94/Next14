import {POST_QUERY_KEY} from "@/app/constants/queryKey";
import {fetchExtended} from "@/app/fetch";
import {Post} from "@/app/Model/Post";

interface Props {
    pageParam: number;
}
export async function getPostRecommends({pageParam}: Props) {
    const res =     await fetchExtended<Post[]>(`postRecommends?cursor=${pageParam}`, {
        next: {
            tags: POST_QUERY_KEY.RECOMMENDS,
        },
    });


    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.body;
}
