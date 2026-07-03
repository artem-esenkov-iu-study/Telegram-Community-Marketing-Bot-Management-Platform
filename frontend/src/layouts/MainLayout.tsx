import {Outlet} from "react-router-dom";
import Sidebar from "../components/Sidebar";

function MainLayout() {

    const isMobile = window.innerWidth <= 768;

    return (
        <div
            style={{
                display: "flex",
                minHeight: "100vh",
                backgroundColor: "#0e1621",
                color: "white",
            }}
        >
            <Sidebar />

            <main
                style={{
                    flex: 1,
                    padding: isMobile ? "12px" : "24px",
                    overflowX: "hidden",
                }}
            >
                <Outlet />
            </main>
        </div>
    );
}

export default MainLayout;