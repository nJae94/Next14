import {
    Wrapper
} from "./userProfile.css";
import UserInfo from "@/app/(afterLogin)/[username]/_components/UserInfo";
import {dehydrate, QueryClient} from "@tanstack/query-core";
import {HydrationBoundary} from "@tanstack/react-query";
import getUser from "@/app/(afterLogin)/[username]/_lib/getUser";
import getUserPosts from "@/app/hooks/qneryFn/getUserPosts";
import UserPosts from "@/app/(afterLogin)/[username]/_components/UserPost";

interface Props {
    params: { username: string },

}
const UserProfile = async ({params}: Props) => {
    const {username} = params;
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery(
        {queryKey: ['users', username], queryFn:()=> getUser({username})});
    await queryClient.prefetchQuery({queryKey: ['posts', 'users', username], queryFn: ()=> getUserPosts(username)});
    const dehydratedState = dehydrate(queryClient);

    return (
        <main className={Wrapper}>
            <HydrationBoundary state={dehydratedState}>
                <UserInfo username={username} />
                <div>
                    <UserPosts username={username} />
                </div>
            </HydrationBoundary>
        </main>
    );
};

export default UserProfile;