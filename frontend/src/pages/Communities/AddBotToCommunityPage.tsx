import {useState, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {addBotToCommunity, getAllBots} from "../../services/botService";
import type {Bot} from "../../models/Bot";
import "../../components/ui/Form.css";
import "../../components/ui/Button.css";

function AddBotToCommunityPage() {

    const {id} = useParams<{id: string}>();
    const navigate = useNavigate();
    const [bots, setBots] = useState<Bot[]>([]);
    const [selectedBotId, setSelectedBotId] = useState("");


    useEffect(() => {

        const fetchBots = async () => {

            try {
                const data = await getAllBots();
                setBots(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchBots();
        
    }, []);


    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault();

        if (!id || !selectedBotId) return;

        try {

            await addBotToCommunity(Number(id), Number(selectedBotId));
            navigate(`/communities/${id}`);


        } catch (error) {
            
            console.error(error);
            alert("Failed to add bot");

        }

    };


    return (
        <div className="form-container">
            <h1 className="form-title">Add bot to community</h1>
            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label>Select Bot</label>
                    <select
                        value={selectedBotId}
                        onChange={(e) => setSelectedBotId(e.target.value)}
                        required
                    >
                        <option value="">
                            Choose bot...
                        </option>
                        {bots.map(bot => (
                            <option
                                key={bot.id}
                                value={bot.id}
                            >
                                {bot.name} ({bot.telegramUsername})
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-actions">

                    <button
                        className="btn"
                        type="submit"
                    >
                        Add bot
                    </button>

                </div>

            </form>

        </div>
    );
}

export default AddBotToCommunityPage;