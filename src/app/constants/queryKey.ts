export const POST_QUERY_KEY = {
    DEFAULT: ['posts'],
    RECOMMENDS: ['posts', 'recommends'],
    FOLLOWING: ['posts', 'following'],
    SEARCH: (keyword: string) => ['posts', 'search', keyword],
}