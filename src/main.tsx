import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/sass/index.scss";
import MainLayout from "./layout/main-layout.tsx";
import Basket from "./pages/basket.page.tsx";
import Shop from "./pages/shop.page.tsx";
import Home from "./pages/home.page.tsx";

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <Routes>
            <Route element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path='shop' element={<Shop />} />
                <Route path='bascket' element={<Basket />} />
            </Route>
        </Routes>
    </BrowserRouter>
);
