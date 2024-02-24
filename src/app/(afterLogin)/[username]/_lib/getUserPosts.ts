import {fetchExtended} from "@/app/fetch";
import {Post} from "@/app/Model/Post";

const getUserPosts = async (username: string) => {
    const res = await fetchExtended<Post[]>(`http://localhost:9090/api/users/${username}/posts`, {
        next: {
            tags: ['user', 'posts', username],
        },
        cache: 'no-store',
    });

    if(!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.body;
}
export default getUserPosts;