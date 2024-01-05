import React from 'react';
import Post from "@/app/(afterLogin)/_components/Post";
import {Header, HeaderTitle, Wrapper} from "@/app/(afterLogin)/[username]/status/[id]/singlePost.css";
import BackButton from '@/app/(afterLogin)/_components/BackButton';
import CommentForm from './_components/CommentForm';

const SinglePost = () => {
    return (
        <div className={Wrapper}>
            <div className={Header}>
                <BackButton/>
                <h3 className={HeaderTitle}>게시하기</h3>
            </div>
            <Post />
            <CommentForm />
            <div>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
};

export default SinglePost;