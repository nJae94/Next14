import {useQuery} from "@tanstack/react-query";
import {USER_QUERY_KEY} from "@/app/constants/queryKey";
import getUserPosts from "@/app/(afterLogin)/[username]/_lib/getUserPosts";
import {Post} from "@/app/Model/Post";

const useGetUserPosts = (username: string) => {
    const { data } = useQuery({
        queryKey: USER_QUERY_KEY.POSTS(username),
        queryFn: () => getUserPosts(username),
    });

    if(!data) {
        return {
            posts: [] as Post[]
        };
    }

    return {
        posts: data,
    }
}

export default useGetUserPosts;