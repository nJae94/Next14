import React from 'react';
import {Header, Wrapper} from "@/app/(afterLogin)/messages/message.css";
import Room from "@/app/(afterLogin)/messages/_components/room";

const Message = () => {
    return (
        <main className={Wrapper}>
            <div className={Header}>
                <h3>쪽지</h3>
            </div>
            <Room />
            <Room />
            <Room />
            <Room />
        </main>
    );
};

export default Message;