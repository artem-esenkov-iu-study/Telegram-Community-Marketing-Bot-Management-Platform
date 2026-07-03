import type {Community} from "./Community";

export interface Bot {

    id?: number;
    name: string;
    type: string;
    telegramUsername: string;
    description: string;
    status: string;
    community?: Community | null;
    botToken: string;
    
}