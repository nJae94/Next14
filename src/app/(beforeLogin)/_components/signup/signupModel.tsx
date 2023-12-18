"use client";

import React, {ChangeEventHandler, FormEventHandler, useState} from 'react';
import {
    CloseButton,
    Modal,
    ModalHeader,
    Wrapper,
    Body,
    InputWrapper, InputLabel, Input, ModalFooter, ActionButton
} from "@/app/(beforeLogin)/_components/signup/signupModel.css";
import {useRouter} from "next/navigation";


const SignupModal = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');
    const [image, setImage] = useState('');
    const [imageFile, setImageFile] = useState<File>();

    const router = useRouter();
    const onClickClose = () => {
        router.back();
    }

    const onChangeId: ChangeEventHandler<HTMLInputElement> = (e) => { setId(e.target.value) };

    const onChangePassword: ChangeEventHandler<HTMLInputElement> = (e) => { setPassword(e.target.value) };
    const onChangeNickname: ChangeEventHandler<HTMLInputElement> = (e) => { setNickname(e.target.value) };
    const onChangeImageFile: ChangeEventHandler<HTMLInputElement> = (e) => {
        e.target.files && setImageFile(e.target.files[0])
    };

    const onSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        console.log('회원가입');
    }
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
                    <div>계정을 생성하세요.</div>
                </div>
                <form>
                    <div className={Body}>
                        <div className={InputWrapper}>
                            <label className={InputLabel} htmlFor="id">아이디</label>
                            <input id="id" className={Input} type="text" placeholder=""
                                   value={id}
                                   onChange={onChangeId}
                            />
                        </div>
                        <div className={InputWrapper}>
                            <label className={InputLabel} htmlFor="name">닉네임</label>
                            <input id="name" className={Input} type="text" placeholder=""
                                   value={nickname}
                                   onChange={onChangeNickname}
                            />
                        </div>
                        <div className={InputWrapper}>
                            <label className={InputLabel} htmlFor="password">비밀번호</label>
                            <input id="password" className={Input} type="password" placeholder=""
                                   value={password}
                                   onChange={onChangePassword}
                            />
                        </div>
                        <div className={InputWrapper}>
                            <label className={InputLabel} htmlFor="image">프로필</label>
                            <input id="image" className={Input} type="file" accept="image/*"
                                   onChange={onChangeImageFile}
                            />
                        </div>
                    </div>
                    <div className={ModalFooter}>
                        <button className={ActionButton} disabled>가입하기</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignupModal;
