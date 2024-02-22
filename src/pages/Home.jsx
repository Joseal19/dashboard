import React from 'react';
import Graphic from '../components/Graphic';
import Carousel from '../components/CarouselActios';
import Line from '../components/Line';
import ProductList from '../components/ProductList';
import {ToastProvider}  from '../components/ToastProvider';

const Home = () => {
  return (
    <ToastProvider>
      <div className='w-full h-full grid grid-cols-1 sm:grid-cols-2 gap-4'>
        <div className='col-span-1 sm:col-span-2 mt-5 z-30'>
          <Carousel />
        </div>
        <div id='graficos' className='sm:col-span-1'>
          <Graphic />
        </div>
        <div className='sm:col-span-1'>
          <Line />
        </div>
        <div id='produtos' className='col-span-1 sm:col-span-2'>
          <ProductList />
        </div>
      </div>
    </ToastProvider>
  );
};

export default Home;
