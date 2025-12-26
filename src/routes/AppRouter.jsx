import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from "react-router-dom"
import {lazy} from "react"
import MainLayout from "../layouts/MainLayout"
import UnAuthLayout from "../layouts/UnAuthLayout"
import AuthLayout from "../layouts/AuthLayout"



const Home = lazy(()=>import("../pages/Home"))
const Login = lazy(()=>import("../pages/Login"))
const AppRouter =({user})=>{
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<MainLayout user={user}/>}>
                <Route element={<UnAuthLayout user={user}/>}>
                    <Route path="login" element={<Login/>}/>

                </Route>
                 <Route element={<AuthLayout user={user}/>}>
                   <Route index  element={<Home/>}/>
                </Route>


            </Route>

        )
    )

    return <RouterProvider router={router}/>
}
export default AppRouter