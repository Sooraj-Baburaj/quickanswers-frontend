import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Slider = ({ children, ...rest }) => {
    return (
        <Swiper {...rest}>{children}</Swiper>
    )
}

export default Slider