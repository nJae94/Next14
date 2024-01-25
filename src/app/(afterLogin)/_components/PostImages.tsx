import Link from 'next/link';
import React from 'react';
import {FourImage, OneImage, ThreeImage, twoImage} from "@/app/(afterLogin)/_components/Post/post.css";
import {Post} from "@/app/Model/Post";


interface Props {
    post: Post
}

const PostImages = ({ post } : Props) => {
    if (!post.Images) return null;
    if (!post.Images.length) return null;
    if (post.Images.length === 1) {
        return (
            <Link
                href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`}
                className={OneImage}
                style={{ backgroundImage: `url(${post.Images[0]?.link})`, backgroundSize: 'contain'}}
            >
                <img src={post.Images[0]?.link} style={{width: '300px'}} alt="" />
            </Link>
        )
    }
    if (post.Images.length === 2) {
        return (
            <div
                className={twoImage}
            >
                <Link
                    href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`}
                    style={{ backgroundImage: `url(${post.Images[0]?.link})`, backgroundSize: 'cover'}}>
                </Link>
                <Link
                    href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[1].imageId}`}
                    style={{ backgroundImage: `url(${post.Images[1]?.link})`, backgroundSize: 'cover'}}>
                </Link>
            </div>
        )
    }
    if (post.Images.length === 3) {
        return (
            <div
                className={ThreeImage}
            >
                <Link
                    href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`}
                    style={{ backgroundImage: `url(${post.Images[0]?.link})`, backgroundSize: 'cover'}}>
                </Link>
                <div>
                    <Link
                        href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[1].imageId}`}
                        style={{ backgroundImage: `url(${post.Images[1]?.link})`, backgroundSize: 'cover'}}>
                    </Link>
                    <Link
                        href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[2].imageId}`}
                        style={{ backgroundImage: `url(${post.Images[2]?.link})`, backgroundSize: 'cover'}}>
                    </Link>
                </div>
            </div>
        )
    }
    if (post.Images.length === 4) {
        return (
            <div
                className={FourImage}
            >
                <Link
                    href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`}
                    style={{ backgroundImage: `url(${post.Images[0]?.link})`, backgroundSize: 'cover'}}>
                </Link>
                <Link
                    href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[1].imageId}`}
                    style={{ backgroundImage: `url(${post.Images[1]?.link})`, backgroundSize: 'cover'}}>
                </Link>
                <Link
                    href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[2].imageId}`}
                    style={{ backgroundImage: `url(${post.Images[2]?.link})`, backgroundSize: 'cover'}}>
                </Link>
                <Link
                    href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[3].imageId}`}
                    style={{ backgroundImage: `url(${post.Images[3]?.link})`, backgroundSize: 'cover'}}>
                </Link>
            </div>
        )
    }
    return null;
};

export default PostImages;