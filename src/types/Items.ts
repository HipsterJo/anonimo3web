export interface CategorItem {
    name: string;
    path: string;
    _id: string;
    icon?: string;
  }


export interface CategorItemProps {
    items: CategorItem[];
    className?: string;
}

export interface HistoryItem {
    animeId: string;
    episode: number;
    time: number;
}


export interface property{
    type: "topAnime" | "recentlyAdded" | "recentlyCompleted"
    period: period 
}


export type recentlyUpdatedItem = "all"|"subtitles"| "dubbed"
export type period = "today"|"week" | "month"
export type typeCard = "topAnime"|"recentlyUpdated"|"recentlyAdded"|"recentlyCompleted"


