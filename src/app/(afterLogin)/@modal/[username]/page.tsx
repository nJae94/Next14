"use client";

import {useState} from "react";
import LoginModal from "@/app/(beforeLogin)/_components/LoginModal";
import {useRecoilValue} from "recoil";
import LoginState from "@/app/atom/loginState";
import {useSession} from "next-auth/react";

const Page = () => {
    const isShowLoginModal = useRecoilValue(LoginState);
    const { data } = useSession();
    if(!data && isShowLoginModal) {
        return (
            <LoginModal />
        );
    }
};

export default Page;