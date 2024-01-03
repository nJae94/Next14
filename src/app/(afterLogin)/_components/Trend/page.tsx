import React from 'react';
import {Count, Title, Wrapper} from "@/app/(afterLogin)/_components/Trend/trend.css";
import Link from 'next/link';

const Trend = () => {
    return (
        <Link href={`/search?q=트렌드`} className={Wrapper}>
            <div className={Count}>실시간트렌드</div>
            <div className={Title}>제로초</div>
            <div className={Count}>1,234 posts</div>
        </Link>
    );
};

export default Trend;
