"use client";

import useSearchResults from "@/app/hooks/qneryFn/searchResults";
import Post from "@/app/(afterLogin)/_components/Post";

interface Props {
    searchParams: { q: string, f?: string, pf?: string };
}
const SearchResult = ({searchParams} : Props) => {
    const { searchResults} = useSearchResults({searchParams});

    return (
        searchResults?.map((result) => {
            return (<Post post={result} key={result.postId}/>)
        })
    )
};

export default SearchResult;