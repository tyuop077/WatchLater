import './App.scss';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {LoginPage} from "./app/pages/LoginPage";

/*const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/" element={<MainContainer />}>
                <Route path="auth" element={<AuthPage />} />
                <Route path="movies" element={<MoviePage />} />
            </Route>
        </Routes>
    </BrowserRouter>
)*/

const App = () => <LoginPage />

export default App;
