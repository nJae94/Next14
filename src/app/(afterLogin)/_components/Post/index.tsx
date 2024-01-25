import Link from "next/link";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';
import {
    PostBody, PostDate, PostMeta,
    PostSection,
    PostShade,
    PostUserImage, PostUserName,
    PostUserSection,
    Wrapper
} from "@/app/(afterLogin)/_components/Post/post.css";
import ActionButtons from "@/app/(afterLogin)/_components/ActionButtons";
import PostArticle from "@/app/(afterLogin)/_components/PostArticle";
import PostImages from "@/app/(afterLogin)/_components/PostImages";
import {Post} from "@/app/Model/Post";

dayjs.locale('ko');
dayjs.extend(relativeTime)

interface Props {
    noImage?: boolean
    post: Post;
}
export default function Post({noImage, post}: Props) {

    return (
        <PostArticle post={post}>
            <div className={PostSection}>
                <div className={PostUserSection}>
                    <Link href={`/${post.User.id}`} className={PostUserImage}>
                        <img src={post.User.image} alt={post.User.nickname}/>
                        <div className={PostShade} />
                    </Link>
                </div>
                <div className={PostBody}>
                    <div className={PostMeta}>
                        <Link href={`/${post.User.id}`}>
                            <span className={PostUserName}>{post.User.nickname}</span>
                            &nbsp;
                            <span className={PostUserName}>@{post.User.id}</span>
                            &nbsp;
                            ·
                            &nbsp;
                        </Link>
                        <span className={PostDate}>{dayjs(post.createdAt).fromNow(true)}</span>
                    </div>
                    <div>{post.content}</div>
                    <div>
                        <PostImages post={post} />
                    </div>
                    <ActionButtons />
                </div>
            </div>
        </PostArticle>
    )
}