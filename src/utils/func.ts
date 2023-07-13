
import { Anime } from "../types/Anime";
import {selectGenres} from "../redux/anime/selector"
import { Genre } from "../types/Items";

export const sliceFunc = (str: string, num: number) => {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + '...';
  };

  export const getNameGenres = (anime:Anime, genres: Genre[]) => {
    
    const genresIds = anime.genre;
    const genresNames = genresIds.map((id) => {
      return genres.find((genre) => genre._id === id);
    });
    return genresNames as Genre[];
    

  }