import { Routes, Route, useLocation } from "react-router-dom"
import Contact from "./components/contacts/Contact"
import  HomePage  from "./components/home/HomePage"
import  About  from "./components/about/About"
import Experience  from "./components/experience/"
import Certifications from "./components/certifications/"
import Projects from "./components/projects/"
import PageTransition from "./components/common/PageTransition"

import { Stack } from "@mui/material"
const RoutesPage = () => {
    const location = useLocation();
    const routes = [
        {name:"Home",path:"/",componet:<HomePage/>},
        {name:"About",path:"/about",componet:<About/>},
        {name:"Contact",path:"/contact",componet:<Contact/>},
        {name:"Experience",path:"/experience",componet:<Experience/>},
        {name:"Projects",path:"/projects",componet:<Projects/>},
        {name:"Certificates",path:"/certificates",componet:<Certifications/>},
    ]

    return (
        <Stack sx={{zIndex:0}}>
            <PageTransition key={location.pathname}>
                <Routes location={location}>
                    {routes.map((route) => {
                        return (
                            <Route key={route.name} path={route.path} element={route?.componet}/>
                        )
                    })}
                </Routes>
            </PageTransition>
        </Stack>

    )
}

export default RoutesPage
