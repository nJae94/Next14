import {ReactNode} from "react";
import {
    Content,
    Left,
    LeftWrapper,
    RightWrapper,
    Wrapper,
    Logo,
    LogoWrapper,
    LogoPill, Right, RightSection, Search, FollowRecommendWrapper
} from "@/app/(afterLogin)/layout.css";
import Image from "next/image";
import Link from "next/link";
import NavMenu from "@/app/(afterLogin)/_components/NavMenu";
import TrendSection from "@/app/(afterLogin)/_components/TrendSection/page";
import RightSearchZone from "@/app/(afterLogin)/_components/RightSearchZone/page";
import FollowRecommend from "./_components/FollowRecommend/page";

export default async function Layout(props: {
    children: ReactNode,
    modal: ReactNode
}) {
    return (
        <div className={Wrapper}>
           <header className={LeftWrapper}>
                <section className={Left}>
                    <div className={LogoWrapper}>
                        <Link href="/home" className={Logo}>
                            <div className={LogoPill}>
                                <Image src='/Logo.svg' alt='로고' width={40} height={40} />
                            </div>
                        </Link>
                        <nav>
                            <NavMenu />
                        </nav>
                    </div>
                </section>
           </header>
            <div className={RightWrapper}>
                <div className={Right}>
                    <main className={Content}>
                        {props.children}
                    </main>
                    <section className={RightSection}>
                        <RightSearchZone />
                        <TrendSection />
                        <div className={FollowRecommendWrapper}>
                            <h3>팔로우 추천</h3>
                            <FollowRecommend />
                            <FollowRecommend />
                            <FollowRecommend />
                        </div>
                    </section>
                </div>
            </div>
            {props.modal}
        </div>
    )
}