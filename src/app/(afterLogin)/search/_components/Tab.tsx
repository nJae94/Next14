"use client";

import {useState} from "react";
import {HomeFixed, HomeTab, HomeText, TabIndicator} from "@/app/(afterLogin)/search/search.css";
import tab from "@/app/(afterLogin)/home/_components/Tab";
import {useRouter, useSearchParams} from "next/navigation";
import {TabType} from "@/app/constants/Tab";

const Tab = () => {
    const [current, setCurrent] = useState('hot');
    const router = useRouter();
    const searchParams = useSearchParams();
    const onClickHot = () => {
        setCurrent(TabType.HOT);
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.delete('f');
        router.replace(`/search?${newSearchParams.toString()}`);
    }
    const onClickNew = () => {
        setCurrent(TabType.NEW);
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set('f', 'live');
        router.replace(`/search?${newSearchParams.toString()}`);
    }

    return (
        <div className={HomeFixed}>
            <div className={HomeTab}>
                <div onClick={onClickHot}>
                    인기
                    <div className={TabIndicator} hidden={current === TabType.NEW}></div>
                </div>
                <div onClick={onClickNew}>
                    최신
                    <div className={TabIndicator} hidden={current === TabType.HOT}></div>
                </div>
            </div>
        </div>
    );
};

export default Tab;