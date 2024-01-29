import {useQuery} from "@tanstack/react-query";
import {getSearchPosts} from "@/app/(afterLogin)/search/_lib/getSearchPosts";
import {POST_QUERY_KEY} from "@/app/constants/queryKey";
import {Post} from "@/app/Model/Post";

const useSearchResults = ({ searchParams }: {  searchParams: {q: string, pf?: string, f?: string}}) => {
    const { data: searchResults } =useQuery({
        queryKey: POST_QUERY_KEY.SEARCH(searchParams.q),
        queryFn: ()=>getSearchPosts({searchParams}),
    });

    if(!searchResults) {
        return { searchResults: [] as Post[] };
    }

    return { searchResults };
}

export default useSearchResults;