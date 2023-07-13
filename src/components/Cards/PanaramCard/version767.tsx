import { AnimeProps } from "../../../types/Anime"
import React from 'react'
import { sliceFunc } from "../../../utils/func"

export const Version767:React.FC<AnimeProps> = ({anime}) => {
    const sliceDescription = sliceFunc(anime.description, 200)
    return (
        <div className = "flex flex-col h-[400px] relative ">
            <img className = "w-full h-full object-cover"
             src = {anime.imageHuge}/>
            <img
                  className=" w-full  h-full object-cover object-top "
                  src={anime?.imageHuge.split(" ")[0]}
                />
                <div className=" bg-gradient-to-t from-black w-full h-full flex flex-col justify-end  absolute p-10  text-[#FFFF] ">
                  <h1 className="lg:text-3xl text-xl mb-3">{anime.title}</h1>
                  <p  className="text-[#868686] lg:hidden  text-base">
                    {sliceDescription}
                  </p>
                </div>
        </div>
    )
}
