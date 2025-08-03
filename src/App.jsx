import './App.css';
import UserPage from "@/pages/UserPage/UserPage.jsx";
import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UserDetailsPage from "@/pages/UserDetailsPage/UserDetailsPage.jsx";
import Home from "@/pages/Home/Home.jsx";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path={'/users'} >
                    <Route index element={<UserPage />} />
                    <Route path={":id"} element={<UserDetailsPage />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
