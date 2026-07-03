import {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {getCommunityById, deleteCommunity} from "../../services/communityService";
import type {Community} from "../../models/Community";
import "../../components/ui/DetailsPage.css";
import "../../components/ui/Button.css";
import "../../components/ui/Table.css";
import "../../components/ui/Form.css";

function CommunityDetailsPage() {

    const {id} = useParams<{id: string}>();
    const [community, setCommunity] = useState<Community | null>(null);
    const navigate = useNavigate();
    const [message, setMessage] = useState("");
    const [selectedBotId, setSelectedBotId] = useState<number | "">("");


    useEffect(() => {
        if (id) {getCommunityById(Number(id)).then(setCommunity);}
    }, [id]);

    if (!community) {
        return <div>Loading...</div>;
    }


    const handleDelete = async () => {

        if (!community) return;

        const confirmed = window.confirm(`Delete community "${community.name}?"`);
        if (!confirmed) return;

        try {
            if (!community?.id) return;
            await deleteCommunity(community.id);
            navigate("/communities");
        } catch {
            alert("Failed to delete community");
        }

    };


    const handleEdit = async () => {

        if (!community) return;
        navigate(`/communities/${community.id}/edit`);

    };


    const handleAddBot = async () => {

        if (!community) return;
        navigate(`/communities/${community.id}/add-bot`);

    };


    const handleSendMessage = async () => {

    if (!community) return;

    try {

        if (!selectedBotId) {
            alert("Please select a bot");
            return;
        }

        await fetch(
            `http://localhost:8080/communities/${community.id}/send-message`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    message: message,
                    botId: selectedBotId,
                }),
            }
        );
        alert("Message sent");
        setMessage("");
    } catch {
        alert("Failed to send message");
    }

};


    return (
        <div className="details-card">
            <h1 className="details-title">{community.name}</h1>

            <div className="details-actions">
                <button className="btn" onClick={handleEdit}>Edit community</button>
                <button className="btn" onClick={handleDelete}>Delete community</button>
                <button className="btn" onClick={handleAddBot}>+ Add bot</button>
            </div>

            <div className="details-info">
                <p><strong>Category:</strong> {community.category}</p>
                <p><strong>Members:</strong> {community.memberCount}</p>
                <p><strong>Status:</strong> {community.status}</p>
                <p><strong>Telegram:</strong> {community.telegramLink}</p>
                <p><strong>Chat ID:</strong> {community.chatId}</p>
                <p><strong>Description:</strong> {community.description}</p>
                <p><strong>Bots:</strong> {community.bots.length}</p>
            </div>


            <h2 style={{ marginTop: "30px" }}>Telegram messaging</h2>
            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                marginTop: "15px",
                marginBottom: "25px",
                }}
            >

                <select
                    className="bot-select"
                    value={selectedBotId}
                    onChange={(e) => setSelectedBotId(Number(e.target.value))}
                >
                    <option value="">Select bot</option>

                    {community.bots.map((bot) => (
                        <option
                            key={bot.id}
                            value={bot.id}
                        >
                            {bot.name}
                        </option>
                    ))}
                </select>

                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type message to telegram community..."
                    style={{
                        minHeight: "120px",
                        padding: "12px",
                        borderRadius: "8px",
                        border: "1px solid #2AABEE",
                        backgroundColor: "#1f2c3a",
                        color: "white",
                    }}
                />

                <button
                    onClick={handleSendMessage}
                    className="btn"
                >
                    Send to telegram
                </button>
            </div>


            <h2 style={{marginTop: "30px"}}>
                Connected Bots
            </h2>

            {community.bots.length === 0 ? (
                <p>No bots connected</p>
            ) : (
                <div className="table-container">
                    <table className="data-table bots-table">

                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Username</th>
                            </tr>
                        </thead>

                        <tbody>
                            {community.bots.map((bot) => (
                                <tr key={bot.id}>
                                    <td>{bot.name}</td>
                                    <td>{bot.type}</td>
                                    <td>
                                        <a
                                            href={`https://t.me/${bot.telegramUsername.replace("@", "")}`}
                                            target="_blank"
                                            rel="noreferrer"
                                            style={{
                                                color: "#36A9F5",
                                                textDecoration: "none",
                                            }}
                                        >
                                            {bot.telegramUsername}
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            <p className="table-hint">
                ← Swipe table horizontally →
            </p>   
        </div>
    );

}

export default CommunityDetailsPage;