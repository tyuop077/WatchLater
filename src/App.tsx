import './App.scss';
import {Routes, Route, Navigate} from "react-router-dom";
import {LoginPage} from "./app/pages/AuthPages/LoginPage";
import {RegisterPage} from "./app/pages/AuthPages/RegisterPage";
import {AppContainer} from "./app/containers/AppContainer/AppContainer";
import {CollectionPage} from "./app/pages/CollectionPage/CollectionPage";
import {MovieShowcasePage} from "./app/pages/MovieShowcasePage/MovieShowcasePage";
import React, {useState} from "react";

export let setAuthorized: React.Dispatch<React.SetStateAction<boolean>>;

const App = () => {
    const [isAuthorized, _setAuthorized] = useState(Boolean(localStorage.getItem("token")));
    setAuthorized = _setAuthorized;
    return isAuthorized ? (
        <Routes>
            <Route path="/login" element={<Navigate replace to="/" />} />
            <Route path="/register" element={<Navigate replace to="/" />} />
            <Route path="/" element={<AppContainer />} >
                <Route index element={<CollectionPage />} />
                <Route path={"movies/:id"} element={<MovieShowcasePage />} />
            </Route>
        </Routes>
    ) : (
        <Routes>
            <Route path="/*" element={<Navigate replace to="/login" />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
        </Routes>
    )
}

export default App;
