import {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {getBotById, deleteBot} from "../../services/botService";
import type {Bot} from "../../models/Bot";
import "../../components/ui/DetailsPage.css";

function BotDetailsPage() {

    const {id} = useParams<{id: string}>();
    const [bot, setBot] = useState<Bot | null>(null);
    const navigate = useNavigate();


    useEffect(() => {
        if (id) {getBotById(Number(id)).then(setBot);}
    }, [id]);

    if (!bot) {
        return <div>Loading...</div>;
    }


    const handleDelete = async () => {

        if (!bot) return;

        const confirmed = window.confirm(`Delete bot "${bot.name}?"`);
        if (!confirmed) return;

        try {
            if (!bot?.id) return;
            await deleteBot(bot.id);
            navigate("/bots");
        } catch {
            alert("Failed to delete bot");
        }

    };


    const handleEdit = async () => {

        if (!bot) return;
        navigate(`/bots/${bot.id}/edit`);

    };


    return (
        <div className="details-card">
            <h1 className="details-title">{bot.name}</h1>

            <div className="details-buttons">
                <button className="btn" onClick={handleEdit}>Edit bot</button>
                <button className="btn" onClick={handleDelete}>Delete bot</button>
            </div>

            <div className="details-info">
                <p><strong>Type:</strong> {bot.type}</p>
                <p><strong>Telegram username:</strong>{" "}
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
                </p>
                <p><strong>Description:</strong> {bot.description}</p>
                <p><strong>Status:</strong> {bot.status}</p>
            </div>
        </div>
    );

}

export default BotDetailsPage;