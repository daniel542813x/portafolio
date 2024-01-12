import { Routes, Route } from "react-router-dom"
import Contact from "./components/contact/Contact"
import  HomePage  from "./components/home/HomePage"
import  About  from "./components/about/About"
import Experience  from "./components/experience/"
import Certifications from "./components/certifications/"

import { Stack } from "@mui/material"
const RoutesPage = () => {
    const routes = [
        {name:"Home",path:"/",componet:<HomePage/>},
        {name:"About",path:"/about",componet:<About/>},
        {name:"Contact",path:"/contact",componet:<Contact/>},
        {name:"Experience",path:"/experience",componet:<Experience/>},
        {name:"Projects",path:"/projects"},
        {name:"Certificates",path:"/certificates",componet:<Certifications/>},
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
