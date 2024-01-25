import {useQuery} from "@tanstack/react-query";
import {POST_QUERY_KEY} from "@/app/constants/queryKey";
import {getPostRecommends} from "@/app/(afterLogin)/home/_lib/getPostRecommands";
import {Post} from "@/app/Model/Post";

interface Props {
    pageParam?: number;
}

interface Response {
    recommendPosts: Post[];

}
const useRecommendPosts = ({pageParam = 0}: Props) : Response => {
    const  { data: recommendPosts } = useQuery({
        queryKey: POST_QUERY_KEY.RECOMMENDS,
        queryFn: () => getPostRecommends({pageParam}),

    });

    if(!recommendPosts) {
        return { recommendPosts: [] };
    }

    return { recommendPosts };
}

export default useRecommendPosts;