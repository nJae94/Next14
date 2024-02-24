"use client";

import {useRouter} from "next/navigation";
import Main from "@/app/(beforeLogin)/_components/Main";
import {useSession} from "next-auth/react";
import {useEffect} from "react";

export default function Login() {
    const router = useRouter();
    const { data } = useSession();

    useEffect(()=> {
        if(data?.user) {
            router.replace('/home');
            return;
        }
        router.replace('/i/flow/login');
    }, [data?.user, router]);

    return <Main />;

}