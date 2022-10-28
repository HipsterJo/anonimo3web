import React from "react";
import ReactPlayer from "react-player";
import Col from "../../components/GridHorizontalCard/Col";
import CardAnimeId from "../../components/CardAnimeId";
import { useSelector } from "react-redux";
import {selectIsLoaded, selectCards} from "../../redux/anime/selector"
import {Anime} from "../../types/Anime"
import {RootState} from "../../redux/store"



const AnimePage = () => {
  const isLoaded = useSelector(selectIsLoaded)
  const cards  = useSelector<RootState, Anime[]>(selectCards)

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <div className="grid grid-cols-7 grid-row-3 gap-10 grid-rows-1 px-2">
        <div className="col-span-1 row-span-1 bg-[#1B1E22]   h-[500px] "></div>
        <div className="col-span-4 row-span-1">
          <video width="100%" src="D:\Tor\Lycoris Recoil\[SubsPlease] Lycoris Recoil - 01.mkv" />
        </div>
        <div className="col-span-2 row-span-2">
          <Col type="topAnime" />
        </div>
        <div className="col-span-5 row-span-1">
            <CardAnimeId anime={cards[0]} className=""/>
        </div>
      </div>
    </div>
  );
};

export default AnimePage;
