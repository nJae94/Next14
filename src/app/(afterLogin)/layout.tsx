import React from "react";

export default async function AfterLoginLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <div>
           로그인 후 사용할 레이아웃 테스트
            {children}
        </div>
    )
}