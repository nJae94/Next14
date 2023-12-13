import {ReactNode} from "react";


type Props = { children: ReactNode, modal: ReactNode };
export default function Layout({ children, modal }: Props) {
    return (
        <div>
            비포레이아웃 레이아웃 테스트
            {children}
            {modal}
        </div>
    )
}