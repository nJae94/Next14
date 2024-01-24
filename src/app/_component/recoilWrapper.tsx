"use client";

import {RecoilRoot} from "recoil";

interface Props {
    children: React.ReactNode;
}

const RecoilWrapper = ({children}: Props) => {
    return (
        <RecoilRoot>
            {children}
        </RecoilRoot>
    );
}
export default RecoilWrapper;