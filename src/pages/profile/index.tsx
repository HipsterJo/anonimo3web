import React from "react"
import { Ui_tabs_actions } from "../../components/Tabs/Ui_tabs_actions"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {selectRecentlyUpdated} from "../../redux/anime/selector"
import { Anime } from "../../types/Anime"
import AnimrCard from "../../components/Cards/CardAnime"
import { CardSilhouette } from "../../components/Cards/CardSilhouette"
import { CustomModal } from "../../components/Modal/CustomModal"
import { useAppDispatch } from "../../redux/store"
import { getAllWaifu } from "../../redux/waifu/waifuActions"

const categories = [
    "Просмотренные",
    "Смотрю прямо сейчас ",
    "Планнирую",
    "Брошено"
]

const tabsData = [
    {
        label: 'Топ Аниме',
        value: 'favoriteAnime',
    },
    {
        label: 'Вайфу',
        value: 'favoriteManga',

    },
    {
        label: 'Хазбандо',
        value: 'favoriteCharacters'
    }
]



export const ProfilePage:React.FC = ()=>{
    const [activeTabIndex, setActiveTabIndex] = useState<number>(0)
    const [isOpen, setIsOpen] = useState<boolean>(true)
    const dispatch = useAppDispatch()
    
    const hendlerOnClick = (index:number) => {
        setActiveTabIndex(index)
        
        
        

    }

   


    const setActive = () =>{
        setIsOpen(!isOpen)
        dispatch(getAllWaifu())
    }
    
    return(
       <div className="px-64">
       <div className="bg-[#141414]  rounded-lg shadow-xl pb-8">
            {/* Компонент(Всплывающее меню), отвечающий за действия над пользователем: Заблокировать, Сообщить о нарушении,  Перейти на полную страницу(Мб для чата)*/}
            {/* <div className= "w-full h-[300px] overflow-hidden    ">
                <img className="w-full    rounded-tl-lg rounded-tr-lg "
                src="https://wallpapersmug.com/download/2560x1024/2ed97f/art-anim-girl-Darling-in-the-FranXX-zero-two.jpg "/>
            </div> */}
                <div className= "w-full h-[300px] border border-dashed border-gray-500 relative  z-10">
                    <input type="file" multiple className="cursor-pointer relative block opacity-0 w-full h-full p-20"/>
                    <div className="text-center absolute top-0 right-0 left-0 pt-[100px]  ">
                        <h4 className="text-neutral-500">
                            Drop files anywhere to upload
                            <br/>or
                        </h4>
                        <p className="text-neutral-500">Select Files</p>
                    </div>
                
                </div>
                
            <div className="grid grid-cols-6 gap-10 ">
                <div className="flex    -mt-20   col-span-6 relative  ">
                    <div className="absolute h-[90px] w-full bg-[#222222]  rounded-b-lg border-b-neutral-400 bottom-0 ">
                    </div>
                    <div className="flex gap-3  ml-[50px] z-10  ">
                        <img className="w-40 outline-4 outline-[#222222] outline rounded-full  "
                            src="https://www.meme-arsenal.com/memes/92e80d7095bf80f0aa4b8d258551e2cb.jpg "/>
                        <div className="flex space-x-2  items-center mt-20 z-10">
                            <p className="text-2xl text-white">Zero Two </p>
                            <span className="bg-blue-500 rounded-full p-1" title="Verified">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-100 h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </span>
                        
                    </div>
                    
                       
                    </div>
                </div>
                <div className="grid col-span-4 bg-[#222222] border-2 border-[#2e2e2e] rounded-md px-2 pb-2">
                    <Ui_tabs_actions tabs={tabsData} actions={{activeTabIndex, onChildClick:hendlerOnClick}} className = "m-4  "/>
                    <div className="grid grid-cols-4 gap-3" >  
                    <button onClick={()=>setActive()}>
                        <CardSilhouette/>
                    </button>     
                    <button onClick={()=>setActive()}>
                        <CardSilhouette/>
                    </button>   
                    <button onClick={()=>setActive()}>
                        <CardSilhouette/>
                    </button>   
                    <button onClick={()=>setActive()}>
                        <CardSilhouette/>
                    </button>   
                    <button onClick={()=>setActive()}>
                        <CardSilhouette/>
                    </button>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                        
                        

                    </div>
                    
                    <CustomModal active={isOpen} type={activeTabIndex} setActive={setActive}  />
                    
                    

                </div>
            </div>

            
       </div>
       </div>
    )
}



{
    /*
     <>
<div className="px-10 py-3">
    <div className= "w-full h-[400px] border border-dashed border-gray-500 relative  ">
        <input type="file" multiple className="cursor-pointer relative block opacity-0 w-full h-full p-20 z-50"/>
        <div className="text-center absolute top-0 right-0 left-0 pt-[100px]  ">
            <h4 className="text-neutral-500">
                  Drop files anywhere to upload
                <br/>or
             </h4>
            <p className="text-neutral-500">Select Files</p>
        </div>
    
    </div>
    <div className="w-full bg-neutral-700 h-3">

    </div>

</div>
</> */}