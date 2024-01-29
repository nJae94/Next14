import {Post} from "@/app/Model/Post";
import {useQuery} from "@tanstack/react-query";
import {POST_QUERY_KEY} from "@/app/constants/queryKey";
import {getFollowingPosts} from "@/app/(afterLogin)/home/_lib/getFollowingPosts";

interface Props {
    pageParam?: number;
}

interface Response {
    followingPosts: Post[];
    isLoading: boolean;
}

const useFollowingPosts = ({pageParam = 0}: Props): Response => {
    const { data : followingPosts, isLoading } = useQuery({
        queryKey: POST_QUERY_KEY.FOLLOWING,
        queryFn: () => getFollowingPosts({pageParam}),
        staleTime: 1000 * 60 * 2, // 2분
        gcTime: 1000 * 60 * 3 // 3분
    });


    if(!followingPosts) {
        return { followingPosts: [], isLoading };
    }

    return {
        followingPosts,
        isLoading,
    }
}

export default useFollowingPosts;