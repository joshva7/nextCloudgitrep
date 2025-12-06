import { Routes, Route, BrowserRouter } from "react-router-dom"
import React from 'react'
import App from "../App"
import Successpage from "../Successpage"
import { Sharepropes } from "../Hooks/Sharepropes"
const Mainroutes = () => {
    return (
        <BrowserRouter>
            <Sharepropes >
                <Routes>
                    <Route element={<App />} path="/" />
                    <Route element={<Successpage />} path="/Successpage" />
                </Routes>
            </Sharepropes>
        </BrowserRouter>
    )
}

export default Mainroutes