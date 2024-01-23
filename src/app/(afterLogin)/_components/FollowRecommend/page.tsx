"use client";

import {
    Button,
    Count, FollowButtonSection,
    Title,
    UserInfo,
    UserLogo,
    Wrapper
} from "@/app/(afterLogin)/_components/FollowRecommend/followRecommend.css";
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";

const FollowRecommend = () => {
    const { data: user } = useSession();
    const router = useRouter();
    const onFollow = () => {
        if(!user?.user) {
            router.replace('/i/flow/login');
        }
    };

    if(!user?.user) {
        return null;
    }

    return (
        <div className={Wrapper}>
            <div className={'userLogoSection'}>
                <div className={UserLogo}>
                    <img src={user?.user?.image as string} alt={user?.user?.email as string} />
                </div>
            </div>
            <div className={UserInfo}>
                <div className={Title}>{user?.user?.name}</div>
                <div className={Count}>@{user?.user?.email}</div>
            </div>
            <div className={FollowButtonSection}>
                <button className={Button} onClick={onFollow}>팔로우</button>
            </div>
        </div>
    );
};

export default FollowRecommend;
