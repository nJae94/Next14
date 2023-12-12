import {Left, Right, Signup, Wrapper, Login} from "@/app/rootPage.css";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
   <div className={Wrapper}>
     <div className={Left}>
         <Image src="/Logo.svg" width={539} height={444} alt="로고" />
     </div>
     <div className={Right}>
         <h1>지금 일어나고 있는 일</h1>
         <h2>지금 가입하세요.</h2>
         <Link href="/i/flow/signup" className={Signup}>계정 만들기</Link>
         <h3>이미 트위터에 가입하셨나요?</h3>
         <Link href="/login" className={Login}>로그인</Link>
     </div>
   </div>
  )
}

