import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {getDashboardStats} from "../../services/dashboardService";
import type {DashboardStats} from "../../models/DashboardStats";
import "../../components/ui/Dashboard.css";

function DashboardPage() {

    const [stats, setStats] = useState<DashboardStats | null>(null)

    useEffect(() => {
        getDashboardStats().then(setStats);
    }, []);

    if (!stats) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h1>Dashboard</h1>
        
            <div className="dashboard-grid">

                <div style={cardStyle}>
                    <h3>Active communities</h3>
                    <h1>{stats.activeCommunities}</h1>
                    <div style={{marginTop: "15px"}}>                     
                        <Link
                            to="/communities"
                            style={{
                                color: "#ffffff",
                                textDecoration: "none",
                            }}
                        >  
                            Manage communities →
                        </Link>
                    </div>
                </div>

                <div style={cardStyle}>
                    <h3>Active bots</h3>
                    <h1>{stats.activeBots}</h1>
                    <div style={{marginTop: "15px"}}>                     
                        <Link
                            to="/bots"
                            style={{
                                color: "#ffffff",
                                textDecoration: "none",
                            }}
                        >  
                            Manage bots →
                        </Link>
                    </div>
                </div>

                <div style={cardStyle}>
                    <h3>Total subscribers</h3>    
                    <h1>{stats.totalSubscribers}</h1>
                </div>

                <div style={cardStyle}>
                    <h3>Campaigns</h3>
                    <h1>0</h1>
                </div>

            </div>
        </div>
    );

}

const cardStyle = {
    backgroundColor: "#17212B",
    padding: "24px",
    borderRadius: "12px",
};

export default DashboardPage;