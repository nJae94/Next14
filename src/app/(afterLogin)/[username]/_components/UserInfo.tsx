"use client"

import {useRecoilState} from "recoil";
import LoginState from "@/app/atom/loginState";
import {
    FollowButton,
    Header,
    HeaderTitle,
    UserImage,
    UserName,
    UserZone
} from "@/app/(afterLogin)/[username]/userProfile.css";
import BackButton from "@/app/(afterLogin)/_components/BackButton";
import useGetUser from "@/app/hooks/qneryFn/getUser";

interface Props {
    username: string;
}
const UserInfo = ({ username} : Props) => {
    const { user, isError } = useGetUser(username);
    const [isShowLoginModal, setIsShowLoginModal] = useRecoilState(LoginState)
    const onClickFollow = () => {
        if(!user && !isShowLoginModal) {
            setIsShowLoginModal(true);
        }
    }

    if (isError) {
        return (
            <>
                <div className={Header}>
                    <BackButton/>
                    <h3 className={HeaderTitle}>프로필</h3>
                </div>
                <div style={{
                    height: 100,
                    alignItems: 'center',
                    fontSize: 31,
                    fontWeight: 'bold',
                    justifyContent: 'center',
                    display: 'flex'
                }}>
                    계정이 존재하지 않음
                </div>
            </>
        )
    }

    if(!user) {
        return <></>;
    }
    return (
        <>
            <div className={Header}>
                <BackButton/>
                <h3 className={HeaderTitle}>{user?.id ?? ''}</h3>
            </div>
            <div className={UserZone}>
                <div className={UserImage}>
                    <img src={user?.image ?? ''} alt={user?.id ?? ''}/>
                </div>
                <div className={UserName}>
                    <div>{user?.id}</div>
                    <div>@{user?.nickname}</div>
                </div>
                <button className={FollowButton} onClick={onClickFollow}>팔로우</button>
            </div>
        </>
    );
};

export default UserInfo;