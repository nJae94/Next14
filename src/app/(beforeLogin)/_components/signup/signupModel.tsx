"use client";
import {
    Modal,
    ModalHeader,
    Wrapper,
    Body,
    InputWrapper, InputLabel, Input, ModalFooter, ActionButton, Error
} from "@/app/(beforeLogin)/_components/signup/signupModel.css";
import BackButton from "@/app/(beforeLogin)/_components/BackButton";
import {useFormState, useFormStatus } from "react-dom";
import onSubmit from '../../_lib/signup';




const SignupModal = () => {
    const [state, formAction] = useFormState(onSubmit, { message: null });
    const { pending } = useFormStatus();

    const showMessage = (message:string | null) => {
        if (message === 'no_id') {
            return '아이디를 입력하세요.';
        }
        if (message === 'no_name') {
            return '닉네임을 입력하세요.';
        }
        if (message === 'no_password') {
            return '비밀번호를 입력하세요.';
        }
        if (message === 'no_image') {
            return '이미지를 업로드하세요.';
        }
        if (message === 'user_exists') {
            return '이미 사용 중인 아이디입니다.';
        }
        return '';
    }
    
    return (
        <div className={Wrapper}>
            <div className={Modal}>
                <div className={ModalHeader}>
                    <BackButton />
                    <div>계정을 생성하세요.</div>
                </div>
                <form action={formAction}>
                    <div className={Body}>
                        <div className={InputWrapper}>
                            <label className={InputLabel} htmlFor="id">아이디</label>
                            <input
                                id="id"
                                name="id"
                                className={Input} type="text"
                                placeholder=""
                                required
                            />
                        </div>
                        <div className={InputWrapper}>
                            <label className={InputLabel} htmlFor="name">닉네임</label>
                            <input id="name" name='name' className={Input} type="text" placeholder=""
                                   required
                            />
                        </div>
                        <div className={InputWrapper}>
                            <label className={InputLabel} htmlFor="password">비밀번호</label>
                            <input id="password" name="password" className={Input} type="password" placeholder=""
                                   required
                            />
                        </div>
                        <div className={InputWrapper}>
                            <label className={InputLabel} htmlFor="image">프로필</label>
                            <input id="image" name="image" className={Input} type="file" accept="image/*"
                                   required
                            />
                        </div>
                    </div>
                    <div className={ModalFooter}>
                        <button className={ActionButton} type='submit'>가입하기</button>
                        <div className={Error}>{showMessage(state?.message)}</div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignupModal;
