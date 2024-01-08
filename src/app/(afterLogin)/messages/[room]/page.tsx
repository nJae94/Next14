import React from 'react';

import dayjs from "dayjs";
import 'dayjs/locale/ko';

import relativeTime from "dayjs/plugin/relativeTime";
import {
    Content,
    DateWrapper,
    Header,
    Message,
    UserInfo,
    Wrapper,
    YourMessage
} from "@/app/(afterLogin)/messages/[room]/chatRoom.css";
import BackButton from "@/app/(afterLogin)/_components/BackButton";
import Link from 'next/link';

dayjs.locale('ko');
dayjs.extend(relativeTime)

const ChatRoom = () => {
    const user = {
        id: 'test',
        nickname: 'tset',
        image:'/profile.png',
    }
    const messages = [
        {
            messageId: 1,
            roomId: 123,
            id: 'test1',
            content: '안녕하세요.',
            createdAt: new Date(),
        },
        {messageId: 2, roomId: 123, id: 'test2', content: '안녕히가세요.', createdAt: dayjs().format('YYYY-MM-DD')},
    ]

    return (
        <main className={Wrapper}>
            <div className={Header}>
                <BackButton />
                <div><h2>{user.nickname}</h2></div>
            </div>
            <Link href={user.nickname} className={UserInfo}>
                <img src={user.image} alt={user.id} />
                <div><b>{user.nickname}</b></div>
                <div>@{user.id}</div>
            </Link>
            <div>
                {messages.map((m) => {
                    if (m.id === 'test') { // 내 메시지면
                        return (
                            <div
                                key={m.messageId}
                                className={Message}>
                                <div className={Content}>{m.content}</div>
                                <div className={DateWrapper}>{dayjs(m.createdAt).format('YYYY년 MM월 DD일 A HH시 mm분')}</div>
                            </div>
                        );
                    }
                    return (
                        <div
                            key={m.messageId}
                            className={YourMessage}>
                            <div className={Content}>{m.content}</div>
                            <div className={DateWrapper}>{dayjs(m.createdAt).format('YYYY년 MM월 DD일 A HH시 mm분')}</div>
                        </div>
                    );
                })}
            </div>
        </main>
    )
};

export default ChatRoom;