import React from 'react';
import {
    FollowButton,
    Header,
    HeaderTitle,
    UserImage,
    UserName,
    UserZone,
    Wrapper
} from "@/app/(afterLogin)/[username]/userProfile.css";
import BackButton from '../_components/BackButton';
import Post from '../_components/Post';

const UserProfile = () => {
    const user = {
        id: 'test',
        nickname: 'test',
        image: '/profile.png'
    };

    return (
        <main className={Wrapper}>
            <div className={Header}>
                <BackButton />
                <h3 className={HeaderTitle}>{user.nickname}</h3>
            </div>
            <div className={UserZone}>
                <div className={UserImage}>
                    <img src={user.image} alt={user.id}/>
                </div>
                <div className={UserName}>
                    <div>{user.nickname}</div>
                    <div>@{user.id}</div>
                </div>
                <button className={FollowButton}>팔로우</button>
            </div>
            <div>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </main>
    );
};

export default UserProfile;