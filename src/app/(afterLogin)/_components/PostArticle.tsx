'use client'

import {ReactNode} from "react";
import {useRouter} from "next/navigation";
import {Wrapper} from "@/app/(afterLogin)/_components/Post/post.css";
interface Props {
    children: ReactNode,
    post: {
        postId: number;
        content: string,
        User: {
            id: string,
            nickname: string,
            image: string,
        },
        createdAt: Date,
        Images: any[],
    }
}

const PostArticle = ({children, post} : Props) => {
    const router = useRouter();
    const onClick = () => {
        router.push(`/${post.User.id}/status/${post.postId}`);
    }

    return (
        <article className={Wrapper} onClickCapture={onClick}>
            {children}
        </article>
    );
};

export default PostArticle;