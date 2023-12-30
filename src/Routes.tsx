import { Routes, Route } from "react-router-dom"
import  HomePage  from "./components/home/HomePage"
import { Stack } from "@mui/material"
const RoutesPage = () => {
    const routes = [
        {name:"Home",path:"/",componet:<HomePage/>},
        {name:"About",path:"/about"},
        {name:"Contact",path:"/contact"},
        {name:"Experience",path:"/experience"},
        {name:"Projects",path:"/projects"},
        {name:"Certificates",path:"/certificates"},
    ]

    return (
        <Stack sx={{zIndex:0}}>
            <Routes>
                {routes.map((route) => {
                    return (
                        <Route key={route.name} path={route.path} element={route?.componet}/>
                    )
                })}
            </Routes>
        </Stack>

    )
}

export default RoutesPage
