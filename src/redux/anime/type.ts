import {Anime} from "../../types/Anime";

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'completed',
    ERROR = 'error',
}

export interface animeFilter{
    cards: Anime[],
    type: string,
    status: Status,
    period: "today" | "week" | "month" | "all",
    filter: "all"|"subbed"|"dubbed"
}

export interface cardSliceState{
    cards: Anime[];
    topAnime: animeFilter;
    recentlyUpdated: animeFilter;
    recentlyAdded: animeFilter;
    recentlyCompleted: animeFilter;
    status: Status;
}

export interface returnType{
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

