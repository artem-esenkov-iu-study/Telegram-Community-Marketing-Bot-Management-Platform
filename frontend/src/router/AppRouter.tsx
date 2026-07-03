import {Routes, Route} from "react-router-dom";
import CommunitiesPage from "../pages/Communities/CommunitiesPage";
import DashboardPage from "../pages/Dashboard/DashboardPage";
import BotsPage from "../pages/Bots/BotsPage";
import MainLayout from "../layouts/MainLayout";
import CommunityDetailsPage from "../pages/Communities/CommunityDetailsPage";
import AddCommunityPage from "../pages/Communities/AddCommunityPage";
import EditCommunityPage from "../pages/Communities/EditCommunityPage";
import AddBotToCommunityPage from "../pages/Communities/AddBotToCommunityPage";
import CampaignsPage from "../pages/Campaigns/CampaignsPage";
import BotDetailsPage from "../pages/Bots/BotDetailsPage";
import AddBotPage from "../pages/Bots/AddBotPage";
import EditBotPage from "../pages/Bots/EditBotPage";

function AppRouter() {

    return (

            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<DashboardPage />} />
                    <Route path="/communities" element={<CommunitiesPage />} />
                    <Route path="/communities/:id" element={<CommunityDetailsPage />} />
                    <Route path="/communities/add" element={<AddCommunityPage />} />
                    <Route path="/communities/:id/edit" element={<EditCommunityPage />} />
                    <Route path="/communities/:id/add-bot" element={<AddBotToCommunityPage />} />
                    <Route path="/bots" element={<BotsPage />} />
                    <Route path="/bots/:id" element={<BotDetailsPage />} />
                    <Route path="/bots/add" element={<AddBotPage />} />
                    <Route path="/bots/:id/edit" element={<EditBotPage />} />
                    <Route path="campaigns" element={<CampaignsPage />} />
                </Route>
            </Routes>

    );              

}

export default AppRouter;