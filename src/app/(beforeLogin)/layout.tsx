import {ReactNode} from "react";
import {Wrapper} from "@/app/(beforeLogin)/layout.css";


type Props = { children: ReactNode, modal: ReactNode };
export default function Layout({ children, modal }: Props) {
    return (
        <div className={Wrapper}>
            로그아웃 시
            {children}
            {modal}
        </div>
    )
}