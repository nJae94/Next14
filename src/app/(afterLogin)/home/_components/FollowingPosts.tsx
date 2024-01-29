"use client";


import useFollowingPosts from "@/app/hooks/qneryFn/followingPosts";
import Post from "@/app/(afterLogin)/_components/Post";
import {Loading} from "@/app/(afterLogin)/home/home.css";

const FollowingPosts = () => {

    const { followingPosts, isLoading } = useFollowingPosts({pageParam: 0});

    if(isLoading) {
        return (
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <svg className={Loading} height="100%" viewBox="0 0 32 32" width={40}>
                    <circle cx="16" cy="16" fill="none" r="14" strokeWidth="4"
                            style={{stroke: 'rgb(29, 155, 240)', opacity: 0.2}}></circle>
                    <circle cx="16" cy="16" fill="none" r="14" strokeWidth="4"
                            style={{stroke: 'rgb(29, 155, 240)', strokeDasharray: 80, strokeDashoffset: 60}}></circle>
                </svg>
            </div>
        )
    }

    return (
        <div>
            {
                followingPosts?.map((post) => {
                    return (
                        <Post post={post} key={post.postId}/>
                    )
                })
            }
        </div>
    )
}

export default FollowingPosts;