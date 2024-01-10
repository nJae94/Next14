import {http, HttpResponse, StrictResponse} from 'msw'
import {faker} from "@faker-js/faker";

function generateDate() {
    const lastWeek = new Date(Date.now());
    lastWeek.setDate(lastWeek.getDate() - 7);
    return faker.date.between({
        from: lastWeek,
        to: Date.now(),
    });
}
const User = [
    {id: 'test1', nickname: 'test1', image: '/profile.png'},
    {id: 'test2', nickname: 'test2', image: faker.image.avatar()},
    {id: 'test3', nickname: 'test3', image: faker.image.avatar()},
]

export const handlers = [
    http.post('/api/login', () => {
        console.log('로그인');
        return HttpResponse.json(User[0], {
            headers: {
                'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/'
            }
        })
    }),
    http.post('/api/logout', () => {
        console.log('로그아웃');
        return new HttpResponse(null, {
            headers: {
                'Set-Cookie': 'connect.sid=;HttpOnly;Path=/;Max-Age=0'
            }
        })
    }),
    http.post('/api/users', async ({ request }) => {
        console.log('회원가입');
        return HttpResponse.text(JSON.stringify('ok'), {
            headers: {
                'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/;Max-Age=0'
            }
        })
    }),
];