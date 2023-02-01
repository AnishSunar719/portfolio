import React from 'react';
import LeftBanner from './LeftBanner';
import { BannerImg } from '../../assets';

const Banner = () => {

  return (
    <section id='home' className=' section flex flex-col lgl:flex-row justify-between gap-16 lgl:gap-0 '>
      <LeftBanner />
      <div className='w-full lgl:w-1/2 flex justify-start lgl:justify-center items-center'>
        <img className="max-w-[300px] h-auto rounded-lg " src={BannerImg} alt="Anish Sunar" />
      </div>
    </section>
  )
}

export default Banner