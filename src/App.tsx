import { Routes, Route } from "react-router-dom";

//--INTERNAL IMPORTS
import NavBar from "components/navigation/Navbar";
import Home from "pages/Home";

const App = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </>
    );
};

export default App;
