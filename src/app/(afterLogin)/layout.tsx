import {ReactNode} from "react";
import {
    Content,
    Left,
    LeftWrapper,
    RightWrapper,
    Wrapper,
    Logo,
    LogoWrapper,
    LogoPill, Right, RightSection, Search, FollowRecommendWrapper, PostButton
} from "@/app/(afterLogin)/layout.css";
import Image from "next/image";
import Link from "next/link";
import NavMenu from "@/app/(afterLogin)/_components/NavMenu";
import TrendSection from "@/app/(afterLogin)/_components/TrendSection/page";
import RightSearchZone from "@/app/(afterLogin)/_components/RightSearchZone/page";
import FollowRecommend from "./_components/FollowRecommend/page";
import LogoutButton from "@/app/(afterLogin)/_components/LogoutButton";
import {auth} from "@/auth";

export default async function Layout(props: {
    children: ReactNode,
    modal: ReactNode
}) {
    const session = await auth();

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
                        {
                            session?.user && <>
                                <nav>
                                    <NavMenu/>
                                    <Link href="/compose/tweet" className={PostButton}>
                                        <svg viewBox="0 0 24 24" aria-hidden="true"
                                             className="r-jwli3a r-4qtqp9 r-yyyyoo r-1472mwg r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp">
                                            <g>
                                                <path
                                                    d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"></path>
                                            </g>
                                        </svg>
                                    </Link>
                                </nav>
                                <LogoutButton/>
                            </>
                        }
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