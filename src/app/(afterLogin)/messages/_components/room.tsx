"use client";

import dayjs from "dayjs";
import {useRouter} from "next/navigation";
import relativeTime from "dayjs/plugin/relativeTime";
import 'dayjs/locale/ko';
import {RoomUserImage, RoomWrapper} from "@/app/(afterLogin)/messages/message.css";

dayjs.locale('ko');
dayjs.extend(relativeTime)

const Room = () => {
    const router = useRouter();
    const user = {
        id: 'test',
        nickname: 'test',
        Messages: [
            {roomId: 123, content: '안녕하세요.', createdAt: new Date()},
            {roomId: 123, content: '안녕히가세요.', createdAt: new Date()},
        ],
    }

    const onClick =() => {
        router.push(`/messages/${user.Messages.at(-1)?.roomId}`);
    };

    return (
        <div className={RoomWrapper} onClickCapture={onClick}>
            <div className={RoomUserImage}>
                <img src='/profile.png' alt="테스트 이미지"/>
            </div>
            <div className={RoomUserImage}>
                <div>
                    <b>{user.nickname}</b>
                    &nbsp;
                    <span>@{user.id}</span>
                    &nbsp;
                    ·
                    &nbsp;
                    <span >
            {dayjs(user.Messages?.at(-1)?.createdAt).fromNow(true)}
          </span>
                </div>
                <div>
                    {user.Messages?.at(-1)?.content}
                </div>
            </div>
        </div>
    )
};

export default Room;