"use client";
import useRecommendPosts from "@/app/hooks/qneryFn/recommendPosts";
import Post from "@/app/(afterLogin)/_components/Post";

const RecommendPost = ()=> {
    const  { recommendPosts } = useRecommendPosts({pageParam: 0});

    return (
        <div>
            {
                recommendPosts?.map((post) => {
                    return (
                       <Post post={post}
                             key={post.postId}
                              />
                    )
                })
            }
        </div>
    )
}

export default RecommendPost;