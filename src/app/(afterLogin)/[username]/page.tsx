"use client"
import {
    FollowButton,
    Header,
    HeaderTitle,
    UserImage,
    UserName,
    UserZone,
    Wrapper
} from "./userProfile.css";
import BackButton from '../_components/BackButton';
import Post from '../_components/Post';
import {useSession} from "next-auth/react";
import {useRecoilState} from "recoil";
import LoginState from "@/app/atom/loginState";

const  UserProfile =  () => {
    const { data } = useSession();
    const [isShowLoginModal, setIsShowLoginModal] = useRecoilState(LoginState)
    const onClickFollow = () => {
        if(!data && !isShowLoginModal) {
            setIsShowLoginModal(true);
        }
    }

    return (
        <main className={Wrapper}>
            <div className={Header}>
                <BackButton />
                <h3 className={HeaderTitle}>{data?.user?.name ?? ''}</h3>
            </div>
            <div className={UserZone}>
                <div className={UserImage}>
                    <img src={data?.user?.image ?? ''} alt={data?.user?.email ?? ''}/>
                </div>
                <div className={UserName}>
                    <div>{data?.user?.name}</div>
                    <div>@{data?.user?.email}</div>
                </div>
                <button className={FollowButton} onClick={onClickFollow}>팔로우</button>
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