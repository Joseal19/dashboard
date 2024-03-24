import React from 'react';
import Carousel from '../components/CarouselActios';
import {ToastProvider}  from '../components/ToastProvider';

const Home = () => {
  return (
    <ToastProvider>
      <div className='w-full h-full grid grid-cols-1 sm:grid-cols-2 gap-4'>
        <div className='col-span-1 sm:col-span-2 mt-5 z-30'>
          <Carousel />
        </div>
        <div id='produtos' className='col-span-1 sm:col-span-2'>
        </div>
      </div>
    </ToastProvider>
  );
};

export default Home;
