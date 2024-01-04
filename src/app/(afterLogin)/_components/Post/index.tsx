import style from './post.module.css';
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

dayjs.locale('ko');
dayjs.extend(relativeTime)

export default function Post() {
    const target = {
        User: {
            id: 'test',
            nickname: 'test',
            image: '/profile.png',
        },
        content: 'Next 14',
        createdAt: new Date(),
        Images: [],
    }
    return (
        <article className={Wrapper}>
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
        </article>
    )
}