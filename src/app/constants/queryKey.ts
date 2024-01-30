import {SearchParams} from "@/app/Model/SearchParams";

export const POST_QUERY_KEY = {
    DEFAULT: ['posts'],
    RECOMMENDS: ['posts', 'recommends'],
    FOLLOWING: ['posts', 'following'],
    SEARCH: (keyword: SearchParams) => ['posts', 'search', keyword],
}