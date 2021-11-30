import './App.scss';
import {Routes, Route, Navigate} from "react-router-dom";
import {LoginPage} from "./app/pages/LoginPage";
import {RegisterPage} from "./app/pages/RegisterPage";
import {AppContainer} from "./app/components/AppContainer";
import {CollectionPage} from "./app/pages/CollectionPage";
import {MovieShowcasePage} from "./app/pages/MovieShowcasePage";

const App = () => {
    if (localStorage.getItem("token")) {
        return (
            <Routes>
                <Route path="/login" element={<Navigate replace to="/" />} />
                <Route path="/register" element={<Navigate replace to="/" />} />
                <Route path="/" element={<AppContainer />} >
                    <Route index element={<CollectionPage />} />
                    <Route path={"movies/:id"} element={<MovieShowcasePage />} />
                </Route>
            </Routes>
        )
    } else {
        return (
            <Routes>
                <Route path="/" element={<Navigate replace to="/login" />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
        )
    }
}

export default App;
