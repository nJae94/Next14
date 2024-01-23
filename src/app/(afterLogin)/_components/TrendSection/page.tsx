'use client';
import {TrendWrapper, TrendBackground} from "@/app/(afterLogin)/explore/explore.css";
import Trend from '../Trend/page';
import {usePathname} from "next/navigation";
import {useSession} from "next-auth/react";

const TrendSection = () => {
    const pathname = usePathname();
    const { data } = useSession();

    if(!data?.user || pathname !== '/explore'){
        return null;
    }

    return (
        <div className={TrendBackground}>
            <div className={TrendWrapper}>
                <h3>나를 위한 트렌드</h3>
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />
            </div>
        </div>
    );
};

export default TrendSection;
