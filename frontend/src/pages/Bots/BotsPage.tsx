import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import type {Bot} from "../../models/Bot";
import {getAllBots} from "../../services/botService";
import "../../components/ui/Table.css";
import "../../components/ui/Button.css";

function BotsPage() {

    const [bots, setBots] = useState<Bot[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");
    
    useEffect(() => {
        getAllBots().then(setBots);
    }, []);


    const filteredBots = bots.filter((bot) => {

        const matchesSearch = bot.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              bot.telegramUsername.toLowerCase().includes(searchTerm.toLowerCase());
        
        const matchesStatus = statusFilter === "All" || bot.status === statusFilter;

        return matchesSearch && matchesStatus;

    });


    return (
        <div>
            <h1>Bots</h1>

            <div className="toolbar">
                <input
                    type="text"
                    placeholder="Search bot..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                >
                    <option value="All">All</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </select>

                <Link to="/bots/add">
                    <button className="btn">
                        + Add bot
                    </button>
                </Link>
            </div>

            <div className="table-container">
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Username</th>
                            <th>Status</th>
                            <th>Community</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredBots.map((bot) => (
                            <tr key={bot.id}>
                                <td>{bot.name}</td>
                                <td>{bot.type}</td>
                                <td>{bot.telegramUsername}</td>
                                <td>{bot.status}</td>
                                <td>{bot.community?.name ?? "-"}</td>
                                <td className="actions-cell">
                                    <Link to={`/bots/${bot.id}`}>
                                        <button className="btn">
                                            View
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <p className="table-hint">
                ← Swipe table horizontally →
            </p>

        </div>
    );

};

export default BotsPage;