"use client";

import React, {createContext, useState} from "react";

export const TabConText = createContext({
    tab: 'rec',
    setTab: (value: 'rec' | 'fol') => {}
});

interface Props {
    children: React.ReactNode
}
export default function TabProvider({children} : Props) {
    const [tab, setTab] = useState<'rec'|'fol'>('rec');
    return (
        <TabConText.Provider value={{tab, setTab}}>
            {children}
        </TabConText.Provider>
    )
}