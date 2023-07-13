import { useDispatch, useSelector } from "react-redux"
import { useLocation, useParams } from "react-router-dom"
import AnimeCard from "../../components/Cards/CardAnime"
import { RootState, useAppDispatch } from "../../redux/store"
import {User} from "../../types/User"
import {Anime} from "../../types/Anime"
import {fetchUserAnime} from "../../redux/anime/cardActions"
import { useEffect } from "react"
import { fetchAnimeByGenre } from "../../redux/anime/cardActions"
import { useState } from "react"
import { AnimeFilter } from "../../types/Anime"

const AnimeList: React.FC = () => {

    const userCurrent = useSelector<RootState, User|null>((state)=>state.authSlice.user)
    const dispatch = useAppDispatch()
    
    let listAnimeId: string[] 
    const [anime, setAnime] = useState<Anime[]>([])
    let animeList: Anime[]|null = null
    const { type } = useParams<{ type: string }>()
    
    const {genre} = useParams<{genre: string}>()
    console.log(genre, type)
    
    async function fetchAnimeList(listAnime: string[]){
           await dispatch(fetchUserAnime(listAnime))
           
            
    }

    async function tempFetchAnimeByGenre(genre: string){
        const temp = await dispatch<any>(fetchAnimeByGenre(genre)) 
            setAnime(temp.payload )

        }

    animeList = useSelector<RootState, Anime[]|null>((state)=>state.cardSlice.temp);
    

    useEffect(() => {
        if (type && userCurrent !== null){
           
            if (type === "planning"){   
                
                if (userCurrent.planning){
                    listAnimeId= userCurrent.planning
                    fetchAnimeList(listAnimeId)
                }
                
            }
                
             if (type === "favorites" ){
                if(userCurrent!.favorites){
                    listAnimeId = userCurrent.favorites
                    fetchAnimeList(listAnimeId)
                }
            }
            if (type === "watching"){
                listAnimeId = userCurrent.watching
                fetchAnimeList(listAnimeId)
            }

            
            
            
        }

       


    }, [type, userCurrent])
            
    useEffect(() => {
        if(genre){
            
            tempFetchAnimeByGenre(genre)
        }
    }, [])
    

   
    if (!animeList && !anime || animeList?.length === 0 && anime?.length === 0 ){
        return <h3 className = "mx-auto py-3 text-gray-200 flex justify-center">НЕТ АНИМЕ</h3>
    } else{

   
    return(
       <div className = " grid grid-cols-5 mx-auto py-4 px-20 gap-3">
                {
                    (genre) ?  (
                        anime?.map((anime: Anime)=> {
                            return <AnimeCard anime={anime} />
                        })

                    )
                    :
                    animeList?.map((anime: Anime)=> {
                        return <AnimeCard anime={anime} />
                    })
                }
       </div>


    )
    }
}

export default AnimeList