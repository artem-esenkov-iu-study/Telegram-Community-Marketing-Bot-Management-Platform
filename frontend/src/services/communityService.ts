import api from "../api/axios";
import type {Community} from "../models/Community";

export const getAllCommunities = async (): Promise<Community[]> => {

    const response = await api.get("/communities");
    return response.data;

};


export const getCommunityById = async (id: number): Promise<Community> => {

    const response = await api.get(`/communities/${id}`);
    return response.data;

};


export const addCommunity = async (community: Community) => {

    const response = await api.post("/communities", community);
    return response.data;

};


export const deleteCommunity = async (id: number): Promise<void> => {

    await api.delete(`/communities/${id}`);

};


export const editCommunity = async (id: number, community: Community): Promise<Community> => {

    const response = await api.put(`/communities/${id}`, community);
    return response.data;

};