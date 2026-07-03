import type {Bot} from "./Bot";

export interface Community {

    id?: number;
    name: string;
    telegramLink: string;
    category: string;
    memberCount: string;
    description: string | null;
    status: string;
    chatId: string;
    bots: Bot[];

}