import {ReactNode} from "react";


type Props = { children: ReactNode, modal: ReactNode };
export default function Layout({ children, modal }: Props) {
    return (
        <div>
            로그아웃 시
            {children}
            {modal}
        </div>
    )
}