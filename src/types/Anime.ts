export type Anime = {
         _id: string;
        title: string;
        description: string;
        image: string;
        imageHuge: string;
        episodes: number;
        rating: number;
        year: number;
        duration: number;
        subs: boolean;
        views: number;
        status: 'ongoing' | 'completed';
        type: 'movie' | 'tv' | 'ova' | 'ona' | 'special';
        createdAt: string;
        updatedAt: string;
        country: string;
        dubs: string[];
        studio: string;
        genre: string[];
    }



export interface AnimeProps {
    anime: Anime;
}