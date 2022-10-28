
import React from 'react'
import {useState} from 'react'
import { useAppDispatch } from '../../redux/store'
import {updateProperty, fetchRecentlyUpdated} from '../../redux/anime/cardActions'
import {property, recentlyUpdatedItem, period, typeCard } from '../../types/Items'
import {setFilter, setPeriod} from '../../redux/anime/cardSlice'

type Props = {
  type: typeCard
  activeTabIndex:number
  onChildClick:(index:number) => void
}



const tabsData = [
    {
      label: 'Все',
      value: 'all',
    },
    {
      label: 'Суб.',
      value: 'subbed',

    },
    {
      label: 'Дубл.',
      value: 'dubbed'
    }

  ];


  const tabsTop = [
    {
      label: 'День',
      value: 'today',
    },
    {
      label: 'Неделя',
      value: 'week',

    },
    {
      label: 'Месяц',
      value: 'month'
    }
  ];
  

export default function Tabs({type, onChildClick, activeTabIndex}: Props) {
  
  const appDispatch = useAppDispatch()
  
  const onClickHolder=(index:number)=>{
    onChildClick(index)
    if(type === 'recentlyUpdated'){
      appDispatch(fetchRecentlyUpdated(tabsData[index].value as recentlyUpdatedItem))
      appDispatch(setFilter(tabsData[index].value as recentlyUpdatedItem))
    }
    else{
      appDispatch(updateProperty({type:type, period: tabsTop[index].value as period}))
      appDispatch(setPeriod({type:type, period: tabsTop[index].value as period}))
    }
  
  }

     
  
  return (
    <div>
        <div className="flex gap-3 ">
        {/* Loop through tab data and render button for each. */}
        {!(type == 'topAnime')?tabsData.map((tab, idx) => {
          return (
            <button
              key={idx}
              className={
                idx == activeTabIndex ? 'py-2 duration-300 text-[#a1a1aa] font-semibold'  : ' py-2 font-semibold duration-300 text-[#71717a] hover:text[#a1a1aa] '
              }
              // Change the active tab on click.
              onClick={()=>onClickHolder(idx)}
            >
              {tab.label}
            </button>
          );
        }):
        tabsTop.map((tab, idx) => {
        return (
          <button
            key={idx}
            className={
              idx == activeTabIndex ? 'py-2 duration-300 text-[#a1a1aa] font-semibold'  : ' py-2 font-semibold duration-300 text-[#71717a] hover:text[#a1a1aa] '
            }
            // Change the active tab on click.
            onClick={()=>onClickHolder(idx)}
          >
            {tab.label}
          </button>
        );
      })
        }
      </div>

    </div>
  )
}


