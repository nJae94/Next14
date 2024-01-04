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

dayjs.locale('ko');
dayjs.extend(relativeTime)

interface Props {
    noImage?: boolean
}
export default function Post({noImage}: Props) {
    const target = {
        postId: 1,
        User: {
            id: 'test',
            nickname: 'test',
            image: '/profile.png',
        },
        content: 'next14',
        createdAt: new Date(),
        Images: [] as any[],
    }
    if (Math.random() > 0.5 && !noImage) {
        target.Images.push(
            {imageId: 1, link: '/profile.png'},
        )
    }
    return (
        <PostArticle post={target}>
            <div className={PostSection}>
                <div className={PostUserSection}>
                    <Link href={`/${target.User.id}`} className={PostUserImage}>
                        <img src={target.User.image} alt={target.User.nickname}/>
                        <div className={PostShade} />
                    </Link>
                </div>
                <div className={PostBody}>
                    <div className={PostMeta}>
                        <Link href={`/${target.User.id}`}>
                            <span className={PostUserName}>{target.User.nickname}</span>
                            &nbsp;
                            <span className={PostUserName}>@{target.User.id}</span>
                            &nbsp;
                            ·
                            &nbsp;
                        </Link>
                        <span className={PostDate}>{dayjs(target.createdAt).fromNow(true)}</span>
                    </div>
                    <div>{target.content}</div>
                    <div>
                        {/*<img />*/}트K
                    </div>
                    <ActionButtons />
                </div>
            </div>
        </PostArticle>
    )
}