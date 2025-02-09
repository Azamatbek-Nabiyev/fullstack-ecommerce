import React from 'react';
import { CiSearch } from 'react-icons/ci';
import Button from '../../components/form/button';
import DetailCard from '../../components/card/detailCard';
import image from '../../assets/images/product.png';
import { data, tabs } from './data';

export default () => {
  return (
    <div className='grid grid-cols-3 p-2'>
      <div className='p-2'></div>
      <div className='col-span-2 p-2'>
        <p className='font-medium text-sm'>
          <span className='text-[#6D6D6D]'>Home</span> / Products
        </p>
        <p className='uppercase font-bold text-[20px]'>Products</p>
        <div className='flex justify-between gap-5 mt-5 items-center'>
          <div>
            <div className='bg-[#D1D1D1] flex justify-start items-center w-[360px] h-[45px] p-2 font-medium'>
              <CiSearch size={22} color='#292929' />
              <input
                type='text'
                className='bg-transparent w-full h-[45px] outline-none p-2 text-sm'
              />
              <span className='text-sm text-[#636363]'>Search</span>
            </div>
          </div>
          <div className='flex flex-wrap gap-2 justify-end'>
            {tabs.map((tab) => (
              <Button
                width='w-[170px]'
                height='h-[35px]'
                className='uppercase border-2 hover:border-[#5E5E5E] hover:text-[#5E5E5E] transition-all p-2 font-medium text-sm border-[#A3A3A3] text-[#A3A3A3]'
                label={tab}
              />
            ))}
          </div>
        </div>
        <div className='mt-5 flex flex-wrap gap-10 justify-evenly'>
          {data.map(() => (
            <DetailCard
              image={image}
              price={99}
              desc='Basic Heavy Weight T-shirt'
              title='Crewneck T-Shirt'
            />
          ))}
        </div>
      </div>
    </div>
  );
};
