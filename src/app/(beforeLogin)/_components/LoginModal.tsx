"use client";

import {useState} from "react";
import {
    ActionButton,
    Body,
    CloseButton, Input, InputLabel,
    InputWrapper,
    Modal, ModalFooter,
    ModalHeader,
    Wrapper
} from "@/app/(beforeLogin)/_components/loginModal.css";

export default function LoginModal() {

    const [id, setId] = useState();
    const [password, setPassword] = useState();
    const [message, setMessage] = useState();
    const onSubmit = () => {};
    const onClickClose = () => {};

    const onChangeId = () => {};

    const onChangePassword = () => {};

    return (
        <div className={Wrapper}>
            <div className={Modal}>
                <div className={ModalHeader}>
                    <button className={CloseButton} onClick={onClickClose}>
                        <svg width={24} viewBox="0 0 24 24" aria-hidden="true"
                             className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03">
                            <g>
                                <path
                                    d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
                            </g>
                        </svg>
                    </button>
                    <div>로그인하세요.</div>
                </div>
                <form onSubmit={onSubmit}>
                    <div className={Body}>
                        <div className={InputWrapper}>
                            <label className={InputLabel} htmlFor="id">아이디</label>
                            <input id="id" className={Input} value={id} onChange={onChangeId} type="text" placeholder=""/>
                        </div>
                        <div className={InputWrapper}>
                            <label className={InputLabel} htmlFor="password">비밀번호</label>
                            <input id="password" className={Input} value={password} onChange={onChangePassword} type="password" placeholder=""/>
                        </div>
                    </div>
                    <div>{message}</div>
                    <div className={ModalFooter}>
                        <button className={ActionButton} disabled={!id && !password}>로그인하기</button>
                    </div>
                </form>
            </div>
        </div>
    );
}