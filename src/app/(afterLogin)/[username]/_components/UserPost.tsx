"use client"


import useGetUserPosts from "@/app/hooks/qneryFn/getUserPosts";
import {useQueryClient} from "@tanstack/react-query";
import Post from "@/app/(afterLogin)/_components/Post";

interface Props {
    username: string;
}
const UserPosts = ({username}: Props) => {
    const { posts } = useGetUserPosts(username);
    const queryClient = useQueryClient();
    const user = queryClient.getQueryData(['users', username]);

    if(!user) {
        return null;
    }

    return posts?.map((post) => (
        <Post key={post.postId} post={post} />
    ));

}

export default UserPosts;