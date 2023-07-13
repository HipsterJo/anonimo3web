import { Anime } from "../Anime";
import { Genre } from "../Items";

export interface returnFirstLoad{
    cards: Anime[];
    topAnime: Anime[];
    recentlyUpdated: Anime[];
    recentlyAdded: Anime[];
    resentlyCompleted: Anime[];

}



export interface returnUpdateProperty{
    label: "topAnime"| "recentlyAdded" | "recentlyCompleted"
    cards: Anime[]
}

export interface returnRecentlyUpdated{
    label: "recentlyUpdated"
    cards: Anime[]
}

export interface returnAnimeById{
    anime: Anime
    genres: Genre[]
}



