// import Swiper core and required modules
import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import AlbumCard from "../AlbumCard/AlbumCard";
import "./SwiperAlbum.css"


export default function SwiperAlbum({isSongs=false,albumlist}){
    return (
        <Swiper
      // install Swiper modules
      modules={[Navigation]}
      spaceBetween={5}
      slidesPerView={6}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    
      
    >
      {/* <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide> */}
      {
        albumlist.map(album=>{
            return <SwiperSlide  key={album.id}><AlbumCard isSongs album={album}/></SwiperSlide>
        })
      }
      
    </Swiper>
    )
    
}