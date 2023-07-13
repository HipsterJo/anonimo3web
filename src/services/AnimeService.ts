import {$api2} from "../http";
import {AxiosResponse} from "axios";
import { returnRecentlyUpdated, returnFirstLoad, returnUpdateProperty, returnAnimeById } from "../types/response/AnimeResponse";
import { Anime } from "../types/Anime";
import { AnimeType, AnimeSort, AnimePeriod, AnimeStatus, AnimeFilter } from "../types/Anime";

export default class AnimeService {
 
    static async firstLoad(): Promise<AxiosResponse<returnFirstLoad>> {
        return $api2.get<returnFirstLoad>('/firstLoad');
    }

    static async updateProperty(property: string, period: string, label: string): Promise<AxiosResponse<returnUpdateProperty>> {
        return $api2.get<returnUpdateProperty>(`/updateProperty/?property=${property}&period=${period}&label=${label}`);
    }

    static async recentlyUpdated(filter: string): Promise<AxiosResponse<returnRecentlyUpdated>> {
        return $api2.get<returnRecentlyUpdated>(`/recentlyUpdated/?filter=${filter}`);
    }

    static async getAnimeById(id:string): Promise<AxiosResponse<returnAnimeById>> {
        return $api2.get<returnAnimeById>(`/${id}`);
    }

    static async getUserAnimeList(listId:string[]): Promise<AxiosResponse<Anime[]>> {
        return $api2.post<Anime[]>('/userAnimeList', {list: listId});
    }

    static async getAnimeByGenre(genre:string): Promise<AxiosResponse<Anime[]>> {
        return $api2.get<Anime[]>(`/genre/${genre}`);
    }
    
    static async search
    (genre:string): Promise<AxiosResponse<Anime[]>> {
        // const { type, sort, period, status, page, genre, search } = obj;
        // Установить значения по умолчанию
        

        
    
        // let search1 = `/search?type=${type}&sort=${sort}&period=${period}&status=${status}&page=${page}&search=${search}`;
        // for (let i = 0; i < genre.length; i++) {
        //     search1 += `&genre=${genre[i]}`;
        // }

        return $api2.get<Anime[]>(genre);
    }
    
}
