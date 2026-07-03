import {useState, useEffect} from "react"
import {editBot, getBotById} from "../../services/botService"
import {useNavigate, useParams} from "react-router-dom";
import "../../components/ui/Form.css";
import "../../components/ui/Button.css";

function EditBotPage() {

    const [name, setName] = useState("");
    const [telegramUsername, setTelegramUsername] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("active");
    const [botToken, setBotToken] = useState("");
    const navigate = useNavigate();
    const {id} = useParams<{id: string}>();


    useEffect(() => {

        if (!id) return;

        getBotById(Number(id)).then((bot) => {

            setName(bot.name);
            setTelegramUsername(bot.telegramUsername);
            setType(bot.type);
            setDescription(bot.description ?? "");
            setStatus(bot.status);
            setBotToken(bot.botToken);

        });

    }, [id]);


    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault();

        try {

            await editBot(Number(id), {
                id: Number(id),
                name,
                telegramUsername,
                type,
                description,
                status,
                botToken,
            });

            navigate(`/bots/${id}`);

        } catch (error) {
            console.error(error);
            alert("Failed to edit bot");
        }

    };


    return (
        <div className="form-container">
            <h1 className="form-title">Edit Bot</h1>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Bot Name</label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Telegram Username</label>
                    <input
                        value={telegramUsername}
                        onChange={(e) => setTelegramUsername(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Telegram token</label>
                    <input
                        value={botToken}
                        onChange={(e) => setBotToken(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Type</label>
                    <input
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Status</label>
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                </div>

                <div className="form-actions">
                    <button type="submit" className="btn">
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    );

}

export default EditBotPage;