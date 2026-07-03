import {useState} from "react"
import {addBot} from "../../services/botService"
import {useNavigate} from "react-router-dom";
import "../../components/ui/Form.css";
import "../../components/ui/Button.css";

function AddBotPage() {

    const [name, setName] = useState("");
    const [telegramUsername, setTelegramUsername] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [botToken, setBotToken] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault();

        try {

            await addBot({
                name,
                telegramUsername,
                type,
                description,
                status: "active",
                botToken,
            });

            navigate("/bots");

        } catch (error) {
            console.error(error);   
            alert("Failed to add bot");
        }

    };

    return (
        <div className="form-container">
            <h1 className="form-title">Add bot</h1>
            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label>Bot name</label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Telegram username</label>
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

                <div className="form-actions">
                    <button className="btn" type="submit">
                        Add Bot
                    </button>
                </div>
            </form>

        </div>

    );

}

export default AddBotPage;