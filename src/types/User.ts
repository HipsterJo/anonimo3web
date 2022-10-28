import {HistoryItem} from '../types/Items';

export interface User{
    email: string;
    isVerified: boolean;
    role: string[];
    history: HistoryItem[];
    favorites: string[];
}