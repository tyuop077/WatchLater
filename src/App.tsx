import './App.scss';
import {Routes, Route} from "react-router-dom";
import {LoginPage} from "./app/pages/LoginPage";
import {RegisterPage} from "./app/pages/RegisterPage";

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

const App = () => (
    <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
    </Routes>
)

export default App;
