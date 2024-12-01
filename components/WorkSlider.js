// data
export const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title1',
          path: '/thumb1.jpg',
        },
        {
          title: 'title2',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
      ],
    },
  ],
};

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import {BsArrowRight} from 'react-icons/bs';
import Image  from 'next/image';

import { Pagination } from 'swiper';

const WorkSlider = () => {
  return (
  <Swiper
    spaceBetween={10}
    pagination={{ clickable: true }}
    modules={[Pagination]}
    className="h-[280px] sm:h-[340px]"
  >
    {workSlides.slides.map((slide, index) => {
      return (
        <SwiperSlide key={index}>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
          {slide.images.map((image, imgIndex) => {
            return (
              <div className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                <div key={imgIndex} className='flex items-center justify-center relative overflow-hidden'>
                  <Image src={image.path} alt='' width={500} height={300}/>
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all divide-neutral-700"></div>
                  <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                    <div>
                      <div>title 1</div>
                      <div>title 2</div>
                      <div>icon</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </SwiperSlide>
      ); 
  })}
  </Swiper>
  );
};


export default WorkSlider;
