import {useEffect, useState} from "react";
import {getAllCommunities} from "../../services/communityService";
import type {Community} from "../../models/Community";
import {Link} from "react-router-dom";
import "../../components/ui/Table.css";
import "../../components/ui/Button.css";

function CommunitiesPage() {

    const [communities, setCommunities] = useState<Community[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");

    useEffect(() => {
        getAllCommunities().then(setCommunities);      
    }, []);

    const filteredCommunities = communities.filter((community) => {    
        
        const matchesName = community.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === "All" || community.status.toLowerCase() === statusFilter.toLowerCase();

        return matchesName && matchesStatus;

    });

    return (
        <div>
            <h1>Communities</h1>
            <div className="toolbar">
                <input
                    type="text"
                    placeholder="Search community..."
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

                <Link to="/communities/add">
                    <button className="btn">
                        + Add community
                    </button>
                </Link>
            </div>

            <div className="table-container">
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Members</th>
                            <th>Status</th>
                            <th>Telegram</th>
                            <th>Bots</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredCommunities.map((community) => (
                            <tr key={community.id}>
                                <td>{community.name}</td>
                                <td>{community.category}</td>
                                <td>{community.memberCount}</td>
                                <td>{community.status}</td>
                                <td>{community.telegramLink}</td>
                                <td>{community.bots?.length ?? 0}</td>
                                <td className="actions-cell">
                                    <Link to={`/communities/${community.id}`}>
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

}

export default CommunitiesPage;