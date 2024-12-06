import { Outlet, useLocation } from "react-router-dom";
import Header from "./header";

function MainLayout() {
    return (
        <main>
            <Header />
            <Outlet />
        </main>
    );
}

export default MainLayout;
