import {fetchExtended} from "@/app/fetch";
import {User} from "@/app/Model/User";

interface Props {
    username: string;
}
const getUser = async ({username}: Props) => {
    const res = await fetchExtended<User>(`http://localhost:9090/api/users/${username}`, {
        next: {
            tags: ['user', username],
        },
        cache: 'no-store',
    });

    if(!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.body;
}

export default getUser;