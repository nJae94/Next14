import React from 'react';
import Post from "@/app/(afterLogin)/_components/Post";

import BackButton from '@/app/(afterLogin)/_components/BackButton';
import {
    SinglePostHeader,
    SinglePostHeaderTitle,
    SinglePostWrapper
} from "@/app/(afterLogin)/[username]/userProfile.css";
import CommentForm from './_components/CommentForm';

const SinglePost = () => {
    return (
        <div className={SinglePostWrapper} >
            <div className={SinglePostHeader} >
                <BackButton/>
                <h3>게시하기</h3>
            </div>
            <CommentForm />
            <div className={SinglePostHeaderTitle}>

            </div>
        </div>
    );
};

export default SinglePost;