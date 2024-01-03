"use client";
import {usePathname} from "next/navigation";
import {FilterSection, FilterTitle, Radio} from "@/app/(afterLogin)/_components/RightSearchZone/rightSearchZone.css";
import SearchForm from '../SearchForm/page';

const RightSearchZone = () => {
    const pathname = usePathname()
    const onChangeFollow = () => {}
    const onChangeAll = () => {}
    if (pathname === '/explore') {
        return null;
    }
    if (pathname === '/search') {
        return (
            <div>
                <h5 className={FilterTitle}>검색 필터</h5>
                <div className={FilterSection}>
                    <div>
                        <label>사용자</label>
                        <div className={Radio}>
                            <div>모든 사용자</div>
                            <input type="radio" name="pf" defaultChecked onChange={onChangeAll} />
                        </div>
                        <div className={Radio}>
                            <div>내가 팔로우하는 사람들</div>
                            <input type="radio" name="pf" value="on" onChange={onChangeFollow} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div style={{ marginBottom: 60, width: 'inherit' }}>
            <SearchForm />
        </div>
    )
};

export default RightSearchZone;
