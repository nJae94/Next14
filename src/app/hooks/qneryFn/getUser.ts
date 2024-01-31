import {useQuery} from "@tanstack/react-query";
import {USER_QUERY_KEY} from "@/app/constants/queryKey";
import getUser from "@/app/(afterLogin)/[username]/_lib/getUser";
import {User} from "@/app/Model/User";

interface GetUser {
    user: User | null;
    isError: boolean;
}
const useGetUser = (username: string): GetUser => {
    const { data, isError } = useQuery({
        queryKey: USER_QUERY_KEY.DEFAULT(username),
        queryFn: ()=> getUser({username}),
    });

    if(!data) {
        return { user: null, isError };
    }

    return { user: data, isError };
}

export default useGetUser;