"use client";

import {
    Button,
    Count, FollowButtonSection,
    Title,
    UserInfo,
    UserLogo,
    Wrapper
} from "@/app/(afterLogin)/_components/FollowRecommend/followRecommend.css";

const FollowRecommend = () => {
    const onFollow = () => {};

    const user = {
        id: 'test',
        nickname: 'test',
        image: '/profile.png'
    };


    return (
        <div className={Wrapper}>
            <div className={'userLogoSection'}>
                <div className={UserLogo}>
                    <img src={user.image} alt={user.id} />
                </div>
            </div>
            <div className={UserInfo}>
                <div className={Title}>{user.nickname}</div>
                <div className={Count}>@{user.id}</div>
            </div>
            <div className={FollowButtonSection}>
                <button className={Button} onClick={onFollow}>팔로우</button>
            </div>
        </div>
    );
};

export default FollowRecommend;
