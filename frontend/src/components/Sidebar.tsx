import {useState} from "react";
import {Link} from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {

    const isMobile = window.innerWidth <= 768;
    const [collapsed, setCollapsed] = useState(isMobile);
    const closeSidebarOnMobile = () => {
    if (isMobile) {
        setCollapsed(true);
    }
};
    

    return (
        <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
            
            <button
                className="sidebar-toggle"
                onClick={() => setCollapsed(!collapsed)}
            >
                ☰
            </button>

            <nav>
                <ul className="sidebar-menu">

                    <li>
                        <Link to="/" className="sidebar-link" onClick={closeSidebarOnMobile}>
                            {collapsed ? "🏠" : "🏠 Dashboard"}
                        </Link>
                    </li>

                    <li>
                        <Link to="/communities" className="sidebar-link" onClick={closeSidebarOnMobile}>
                            {collapsed ? "👥" : "👥 Communities"}
                        </Link>
                    </li>

                    <li>
                        <Link to="/bots" className="sidebar-link" onClick={closeSidebarOnMobile}>
                            {collapsed ? "🤖" : "🤖 Bots"}
                        </Link>
                    </li>

                    <li>
                        <Link to="/campaigns" className="sidebar-link" onClick={closeSidebarOnMobile}>
                            {collapsed ? "📢" : "📢 Campaigns"}
                        </Link>
                    </li>

                </ul>
            </nav>

        </aside>
    );
}

export default Sidebar;