"use client";

import React, {createContext, useState} from "react";
import {TabType} from "@/app/constants/Tab";

export const TabConText = createContext({
    tab: 'rec',
    setTab: (value: TabType) => {}
});

interface Props {
    children: React.ReactNode
}
export default function TabProvider({children} : Props) {
    const [tab, setTab] = useState<TabType>('rec');
    return (
        <TabConText.Provider value={{tab, setTab}}>
            {children}
        </TabConText.Provider>
    )
}