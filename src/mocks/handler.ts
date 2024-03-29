import {delay, http, HttpResponse, StrictResponse} from 'msw'
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
    http.get('/api/postRecommends', async ({ request }) => {
        await delay(3000);
        const url = new URL(request.url)
        const cursor = parseInt(url.searchParams.get('cursor') as string) || 0
        return HttpResponse.json(
            [
                {
                    postId: cursor + 1,
                    User: User[0],
                    content: `${cursor + 1} Z.com is so marvelous. I'm gonna buy that.`,
                    Images: [{imageId: 1, link: faker.image.urlLoremFlickr()}],
                    createdAt: generateDate(),
                },
                {
                    postId: cursor + 2,
                    User: User[0],
                    content: `${cursor + 2} Z.com is so marvelous. I'm gonna buy that.`,
                    Images: [
                        {imageId: 1, link: faker.image.urlLoremFlickr()},
                        {imageId: 2, link: faker.image.urlLoremFlickr()},
                    ],
                    createdAt: generateDate(),
                },
                {
                    postId: cursor + 3,
                    User: User[0],
                    content: `${cursor + 3} Z.com is so marvelous. I'm gonna buy that.`,
                    Images: [],
                    createdAt: generateDate(),
                },
                {
                    postId: cursor + 4,
                    User: User[0],
                    content: `${cursor + 4} Z.com is so marvelous. I'm gonna buy that.`,
                    Images: [
                        {imageId: 1, link: faker.image.urlLoremFlickr()},
                        {imageId: 2, link: faker.image.urlLoremFlickr()},
                        {imageId: 3, link: faker.image.urlLoremFlickr()},
                        {imageId: 4, link: faker.image.urlLoremFlickr()},
                    ],
                    createdAt: generateDate(),
                },
                {
                    postId: cursor + 5,
                    User: User[0],
                    content: `${cursor + 5} Z.com is so marvelous. I'm gonna buy that.`,
                    Images: [
                        {imageId: 1, link: faker.image.urlLoremFlickr()},
                        {imageId: 2, link: faker.image.urlLoremFlickr()},
                        {imageId: 3, link: faker.image.urlLoremFlickr()},
                    ],
                    createdAt: generateDate(),
                },
            ]
        )
    }),
    http.get('/api/followingPosts', async ({ request }) => {
        await delay(3000);
        const url = new URL(request.url)
        const cursor = parseInt(url.searchParams.get('cursor') as string) || 0
        return HttpResponse.json(
            [
                {
                    postId: cursor + 1,
                    User: User[0],
                    content: '1',
                    Images: [{imageId: 1, link: faker.image.urlLoremFlickr()}],
                    createdAt: generateDate(),
                },
                {
                    postId: cursor + 2,
                    User: User[0],
                    content: '2',
                    Images: [
                        {imageId: 1, link: faker.image.urlLoremFlickr()},
                        {imageId: 2, link: faker.image.urlLoremFlickr()},
                    ],
                    createdAt: generateDate(),
                },
                {
                    postId: cursor + 3,
                    User: User[0],
                    content:  '3',
                    Images: [],
                    createdAt: generateDate(),
                },
                {
                    postId: cursor + 5,
                    User: User[0],
                    content: `6`,
                    Images: [
                        {imageId: 1, link: faker.image.urlLoremFlickr()},
                        {imageId: 2, link: faker.image.urlLoremFlickr()},
                        {imageId: 3, link: faker.image.urlLoremFlickr()},
                    ],
                    createdAt: generateDate(),
                },
            ]
        )
    }),
    http.get('/api/search/:tag', ({ request, params }) => {
        const { tag } = params;
        return HttpResponse.json(
            [
                {
                    postId: 1,
                    User: User[0],
                    content: `${1} 검색결과 ${tag}`,
                    Images: [{imageId: 1, link: faker.image.urlLoremFlickr()}],
                    createdAt: generateDate(),
                },
                {
                    postId: 2,
                    User: User[0],
                    content: `${2} 검색결과 ${tag}`,
                    Images: [{imageId: 1, link: faker.image.urlLoremFlickr()}],
                    createdAt: generateDate(),
                },
                {
                    postId: 3,
                    User: User[0],
                    content: `${3} 검색결과 ${tag}`,
                    Images: [{imageId: 1, link: faker.image.urlLoremFlickr()}],
                    createdAt: generateDate(),
                },
                {
                    postId: 4,
                    User: User[0],
                    content: `${4} 검색결과 ${tag}`,
                    Images: [{imageId: 1, link: faker.image.urlLoremFlickr()}],
                    createdAt: generateDate(),
                },
                {
                    postId: 5,
                    User: User[0],
                    content: `${5} 검색결과 ${tag}`,
                    Images: [{imageId: 1, link: faker.image.urlLoremFlickr()}],
                    createdAt: generateDate(),
                },
            ]
        )
    }),
    http.get('/api/users/:userId/posts', ({ request, params }) => {
        const { userId } = params;
        return HttpResponse.json(
            [
                {
                    postId: 1,
                    User: User[0],
                    content: `${1} ${userId}의 게시글`,
                    Images: [{imageId: 1, link: faker.image.urlLoremFlickr()}],
                    createdAt: generateDate(),
                },
                {
                    postId: 2,
                    User: User[0],
                    content: `${2} ${userId}의 게시글`,
                    Images: [{imageId: 1, link: faker.image.urlLoremFlickr()}],
                    createdAt: generateDate(),
                },
                {
                    postId: 3,
                    User: User[0],
                    content: `${3} ${userId}의 게시글`,
                    Images: [{imageId: 1, link: faker.image.urlLoremFlickr()}],
                    createdAt: generateDate(),
                },
                {
                    postId: 4,
                    User: User[0],
                    content: `${4} ${userId}의 게시글`,
                    Images: [{imageId: 1, link: faker.image.urlLoremFlickr()}],
                    createdAt: generateDate(),
                },
                {
                    postId: 5,
                    User: User[0],
                    content: `${5} ${userId}의 게시글`,
                    Images: [{imageId: 1, link: faker.image.urlLoremFlickr()}],
                    createdAt: generateDate(),
                },
            ]
        )
    }),
    http.get('/api/users/:userId', ({ request, params }): StrictResponse<any> => {
        const {userId} = params;
        const found = User.find((v) => v.id === userId);
        if (found) {
            return HttpResponse.json(
                found,
            );
        }
        return HttpResponse.json({ message: 'no_such_user' }, {
            status: 404,
        })
    }),
];