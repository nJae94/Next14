import React from 'react';
import {ButtonZone, FormZone, List, SearchTop, SearchZone, Wrapper} from "@/app/(afterLogin)/search/search.css";
import BackButton from "@/app/(afterLogin)/_components/BackButton";
import SearchForm from "@/app/(afterLogin)/_components/SearchForm";
import Tab from "@/app/(afterLogin)/search/_components/Tab";
import Post from '../_components/Post';


interface Props {
    searchParams: { q: string, f?: string, pf?: string }
}
const Search = ({ searchParams }: Props) => {
    return (
        <main className={Wrapper}>
            <div className={SearchTop}>
                <div className={SearchZone}>
                    <div className={ButtonZone}>
                        <BackButton/>
                    </div>
                    <div className={FormZone}>
                        <SearchForm q={searchParams.q} />
                    </div>
                </div>
                <Tab />
            </div>
            <div className={List}>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                {/*<SearchResult searchParams={searchParams} />*/}
            </div>
        </main>
    );
};

export default Search;