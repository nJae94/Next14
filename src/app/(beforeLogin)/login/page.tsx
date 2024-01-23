"use client";

import {useRouter} from "next/navigation";
import Main from "@/app/(beforeLogin)/_components/Main";
import {useSession} from "next-auth/react";

export default function Login() {
    const router = useRouter();
    const { data } = useSession();
    console.log('test')
    if(data?.user){
        router.replace('/home');
        return;
    }
    router.replace('/i/flow/login');

    return <Main />;

}