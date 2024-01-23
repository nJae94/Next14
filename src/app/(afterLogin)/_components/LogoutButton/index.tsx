"use client"

import {
    LogOutButton,
    LogOutUserImage,
    LogOutUserName
} from "@/app/(afterLogin)/_components/LogoutButton/logoutButton.css";
import {useRouter} from "next/navigation";
import {signOut, useSession} from "next-auth/react";

const LogoutButton = () => {

    const router = useRouter();
    const { data: me} = useSession();


    const onLogout = () => {
        signOut({ redirect: false })
            .then(() => {
                router.replace('/');
            });
    };

    if(!me) {
        return null;
    }
    return (
        <button className={LogOutButton} onClick={onLogout}>
            <div className={LogOutUserImage}>
                <img src={me.user?.image as string} alt={me.user?.email!}/>
            </div>
            <div className={LogOutUserName}>
                <div>{me.user?.name}</div>
                <div>@{me.user?.email}</div>
            </div>
        </button>
    );
};

export default LogoutButton;
