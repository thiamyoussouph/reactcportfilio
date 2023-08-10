import React, { useContext } from "react";
import './Portfolio.css'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidbar from "../../img/sidebar.png"
import Ecommerce from "../../img/ecommerce.png"
import MusicApp from "../../img/musicapp.png"
import Hoc from "../../img/hoc.png"
import { themeContext } from "../../Context";

const Portfolio = () => {
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
    return (
        <div className='portfolio'id="portfolio">
            <span   style={{color: darkMode?'white': ''}}>project recent</span>
            <span>portfolio</span>


            <Swiper
             spaceBetween={30}
             slidesPerView={3}
             grabCursor={true}
             className="portfolio-slider">
                <SwiperSlide>
                    <img src={Sidbar} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Ecommerce} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={MusicApp} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Hoc} alt="" height={190}/>
                </SwiperSlide>
            </Swiper>



        </div>
    )
}

export default Portfolio