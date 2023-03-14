import { Route, Routes } from "react-router-dom";
import ApiExample from "./views/ApiExample";
import Basket from "./views/Basket";
import Home from "./views/Home";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/api-example" element={<ApiExample />} />
        </Routes>
    );
};

export default AppRoutes;