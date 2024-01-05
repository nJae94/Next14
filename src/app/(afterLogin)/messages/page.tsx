import React from 'react';
import {Header, Wrapper} from "@/app/(afterLogin)/messages/message.css";

const Message = () => {
    return (
        <main className={Wrapper}>
            <div className={Header}>
                <h3>쪽지</h3>
            </div>
        </main>
    );
};

export default Message;