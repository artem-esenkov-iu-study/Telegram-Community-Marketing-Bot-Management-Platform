import type {Bot} from "../models/Bot";
import api from "../api/axios";

export const addBotToCommunity = async (communityId: number, botId: number): Promise<Bot> => {

    const response = await api.post(`/communities/${communityId}/bots/${botId}`);
    return response.data;

};


export const getAllBots = async (): Promise<Bot[]> => {

    const response = await api.get("/bots");
    return response.data;

};


export const getBotById = async (id: number): Promise<Bot> => {

    const response = await api.get(`/bots/${id}`);
    return response.data;

};


export const deleteBot = async (id: number) => {

    await api.delete(`/bots/${id}`);

};


export const addBot = async (bot: Bot) => {

    const response = await api.post("/bots", bot);
    return response.data;

};


export const editBot = async (id:number, bot: Bot): Promise<Bot> => {

    const response = await api.put(`/bots/${id}`, bot);
    return response.data;

};