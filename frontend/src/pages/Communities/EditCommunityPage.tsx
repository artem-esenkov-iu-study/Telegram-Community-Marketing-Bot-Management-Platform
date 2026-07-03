import {useState, useEffect} from "react"
import {editCommunity, getCommunityById} from "../../services/communityService"
import {useNavigate, useParams} from "react-router-dom";
import "../../components/ui/Form.css";
import "../../components/ui/Button.css";

function EditCommunityPage() {

    const [name, setName] = useState("");
    const [telegramLink, setTelegramLink] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("active");
    const [chatId, setChatId] = useState("");
    const navigate = useNavigate();
    const {id} = useParams<{id: string}>();


    useEffect(() => {

        if (!id) return;

        getCommunityById(Number(id)).then((community) => {

            setName(community.name);
            setTelegramLink(community.telegramLink);
            setCategory(community.category);
            setDescription(community.description ?? "");
            setChatId(community.chatId);

        });

    }, [id]);


    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault();

        try {

            await editCommunity(Number(id), {
                id: Number(id),
                name,
                telegramLink,
                category,
                description,
                status: "active",
                memberCount: "0",
                chatId,
                bots: []
            });

            navigate(`/communities/${id}`);

        } catch (error) {
            console.error(error);   
            alert("Failed to edit community");
        }

    };


    return (
        <div className="form-container">
            <h1 className="form-title">Edit community</h1>
            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label>Community name</label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Telegram link</label>
                    <input
                        value={telegramLink}
                        onChange={(e) => setTelegramLink(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Telegram chat id</label>
                    <input
                        value={chatId}
                        onChange={(e) => setChatId(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Category</label>
                    <input
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
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
                    <button className="btn" type="submit">
                        Save changes
                    </button>
                </div>

            </form>
        </div>
    );

}

export default EditCommunityPage;