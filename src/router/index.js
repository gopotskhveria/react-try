import About from "../pages/About"
import Posts from "../pages/Posts"
import PostPage from "../pages/PostPage"
import Login from "../pages/Login"


export const privateRoutes = [
    {path: '/about', page: About},
    {path: '/posts', page: Posts},
    {path: '/posts/:id', page: PostPage},
    {path: '*', page: Posts}
]


export const publicRouter = [
    {path: '/login', page: Login},
    {path: '*', page: Login}

]