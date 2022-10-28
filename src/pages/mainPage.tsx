import React from 'react'
import Carusel from "../components/Carusel";
import ColHorizontalCard from "../components/GridHorizontalCard/Col";
import CardGrid from "../components/CardGrid/CardGrid";
import GridHorizontalCard from "../components/GridHorizontalCard";
import CardHolder from "../components/CardHolder";
import {useAppDispatch} from "../redux/store";
import { fetchAnime } from '../redux/anime/cardActions';

const MainPage = () => {
  const dispatch = useAppDispatch();
    const [search, setSearch] = React.useState("");

    const [activeTopTabIndex, setActiveTopTabIndex] = React.useState(0);
    const [activeMainTabIndex, setActiveMainTabIndex] = React.useState(0);

    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value);
    };

    const getAnime = async() => {
        
        dispatch(fetchAnime())
    }

  

    React.useEffect(() => {
      getAnime();
    }, []);

  return (
    
    <div>
      <Carusel />
      <div className="grid grid-cols-7 px-4  gap-7 mt-4 ">
        <div className="col-span-5 xl:col-span-6 grid grid-cols-6  ">
          <div className="col-span-6 pt-7">
            <CardHolder title="Недавное обновленные" type = "recentlyUpdated"  onChildClick = {setActiveMainTabIndex}  activeTabIndex={activeMainTabIndex}>
                <CardGrid
                  type="recentlyUpdated"
                  rows={3}
                  className={"grid grid-cols-5 gap-5"}
                />
            </CardHolder>
          </div>
        </div>

        <div className="col-span-2 xl:col-span-3">
          <CardHolder title="Топ аниме" type = "topAnime" onChildClick = {setActiveTopTabIndex} activeTabIndex={activeTopTabIndex}>
              <ColHorizontalCard type="topAnime"  />
          </CardHolder>
        </div>
        
      </div>
    </div>
  );
};

export default MainPage