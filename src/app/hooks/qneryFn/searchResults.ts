import {useQuery} from "@tanstack/react-query";
import {getSearchPosts} from "@/app/(afterLogin)/search/_lib/getSearchPosts";
import {POST_QUERY_KEY} from "@/app/constants/queryKey";
import {Post} from "@/app/Model/Post";
import {SearchParams} from "@/app/Model/SearchParams";

interface Props {
    searchParams: SearchParams;
}
const useSearchResults = ({ searchParams }: Props) => {
    const { data: searchResults } =useQuery<Post[], object, Post[], (string | SearchParams)[] >({
        queryKey: POST_QUERY_KEY.SEARCH(searchParams),
        queryFn: ()=>getSearchPosts(searchParams),
    });

    if(!searchResults) {
        return { searchResults: [] as Post[] };
    }

    return { searchResults };
}

export default useSearchResults;