// import Swiper core and required modules
import {  Pagination, Autoplay, Scrollbar  } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {Anime} from '../../types/Anime';
import PanaramCard from '../PanaramCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { selectCards } from '../../redux/anime/selector';




const Carusel:React.FC =  () => {
  const cards = useSelector<RootState, Anime[]>(selectCards)
  return (
    <Swiper
        spaceBetween={200  }
        
        pagination={
          {clickable: true,
          }
            
          
        }
        scrollbar={{ draggable: true }}
        
        autoplay= {
          {delay: 5000,}
        }
        modules={[Pagination, Autoplay, Scrollbar   ]}
        className="mySwiper"
      >
      {cards.map(
        (anime) => (
          <SwiperSlide key={anime._id}>
            <PanaramCard anime={anime} />
          </SwiperSlide>
        )
      )}
      
    </Swiper>
  );
};

export default Carusel;