import React from 'react';
import { CiSearch } from 'react-icons/ci';
import Button from '../../components/form/button';
import { FaAngleLeft } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';
import man from '../../assets/images/man.png';
import man2 from '../../assets/images/man2.png';
import DetailCard from '../../components/card/detailCard';
import { data } from './data';

export default () => {
  return (
    <div className='border-red p-2'>
      <div className='font-regular text-base flex flex-col gap-2 py-5'>
        <p className='text-[#252525]'>MEN</p>
        <p className='text-[#252525]'>WOMEN</p>
        <p className='text-[#252525]'>KIDS</p>
        <div className='bg-[#D1D1D1] flex justify-start items-center w-[350px] h-[45px] p-2'>
          <CiSearch size={22} color='#292929' />
          <input
            type='text'
            className='bg-transparent w-full h-[45px] outline-none p-2 text-sm'
          />
          <span className='text-sm text-[#636363]'>Search</span>
        </div>
      </div>

      {/* new collection start*/}
      <div className='border-blue flex py-6'>
        <div className='w-4/12 flex flex-col justify-between p-2'>
          <div>
            <div className='font-extrabold text-[48px] leading-10'>
              <p>NEW</p>
              <p>COLLECTION</p>
            </div>

            <div className='font-regular text-base text-[#2A2A2A]'>
              <p>Summer</p>
              <p>2025</p>
            </div>
          </div>

          <div className='flex justify-between items-center w-full'>
            <Button
              label='Go To Shop'
              width='w-[260px]'
              height='h-[40px]'
              className='bg-[#D2D2D2] font-medium'
            />
            <div className='flex gap-3'>
              <Button
                width='w-[40px]'
                height='h-[40px]'
                icon={<FaAngleLeft color='#C6C6C6' />}
                className='border-2 border-[#C6C6C6]'
              />
              <Button
                width='w-[40px]'
                height='h-[40px]'
                icon={<FaAngleRight color='#000000' />}
                className='border-2 border-[#A7A7A7]'
              />
            </div>
          </div>
        </div>
        <div className='w-8/12 flex justify-center p-2 gap-10'>
          <div className='w-5/12 border'>
            <img
              src={man}
              alt='man.png'
              className='w-full h-full object-cover'
            />
          </div>
          <div className='w-5/12 border'>
            <img
              src={man2}
              alt='man2.png'
              className='w-full h-full object-cover'
            />
          </div>
        </div>
      </div>
      {/* new collection end*/}

      {/* new this wee start */}
      <div className='border-red p-2 mt-16'>
        <div className='flex justify-between items-end'>
          <div className='font-extrabold text-5xl leading-10'>
            <p>NEW</p>
            <p className='relative'>
              THIS WEEK{' '}
              <span className='text-[#000E8A] text-[20px] absolute bottom-8'>
                (50)
              </span>
            </p>
          </div>
          <div>
            <span className='font-regular text-sm text-[#5E5E5E]'>See All</span>
          </div>
        </div>
        <div className='mt-8 flex gap-10'>
          {data.map((product) => {
            return (
              <DetailCard
                image={product.image}
                price={product.price}
                title={product.title}
                desc={product.desc}
              />
            );
          })}
        </div>
        <div className='mt-5 flex justify-center items-center'>
          <div className='flex gap-3'>
            <Button
              width='w-[40px]'
              height='h-[40px]'
              icon={<FaAngleLeft color='#C6C6C6' />}
              className='border-2 border-[#C6C6C6]'
            />
            <Button
              width='w-[40px]'
              height='h-[40px]'
              icon={<FaAngleRight color='#000000' />}
              className='border-2 border-[#A7A7A7]'
            />
          </div>
        </div>
      </div>
      {/* new this wee end */}
    </div>
  );
};
