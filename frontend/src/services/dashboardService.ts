import type {DashboardStats} from "../models/DashboardStats";

const API_URL = "http://localhost:8080/dashboard";

export async function getDashboardStats(): Promise<DashboardStats> {

    const response = await  fetch(`${API_URL}/stats`);

    if (!response.ok) {
        throw new Error("Failed to load dashboard statistics");
    }
    
    return response.json();

}