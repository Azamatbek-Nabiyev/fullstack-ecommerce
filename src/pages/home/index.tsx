import React from 'react';
import { CiSearch } from 'react-icons/ci';
import Button from '../../components/form/button';
import { FaAngleLeft } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';
import man from '../../assets/images/man.png';
import man2 from '../../assets/images/man2.png';
import DetailCard from '../../components/card/detailCard';
import { data } from './data';
import approach1 from '../../assets/images/approach1.png';
import approach2 from '../../assets/images/approach2.png';
import approach3 from '../../assets/images/approach3.png';
import approach4 from '../../assets/images/approach4.png';

export default () => {
  return (
    <div className='p-2'>
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
      <div className='flex py-6'>
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
      <div className='p-2 mt-16'>
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

      {/* our approach start */}
      <div className='p-2 mt-16 h-[760px]'>
        <div className='flex flex-col items-center gap-5 text-center'>
          <h1 className='uppercase font-regular text-5xl'>
            our approach to fashion design
          </h1>
          <p className='w-[640px] font-light'>
            at elegant vogue , we blend creativity with craftsmanship to create
            fashion that transcends trends and stands the test of time each
            design is meticulously crafted, ensuring the highest quelity
            exqulsite finish
          </p>
        </div>
        <div className='mt-16 flex justify-evenly h-[500px]'>
          <div className='h-[420px] w-[330px]'>
            <img src={approach1} alt='' className='w-full h-full object-fill' />
          </div>
          <div className='h-[420px] w-[330px] translate-y-16'>
            <img src={approach2} alt='' className='w-full h-full object-fill' />
          </div>
          <div className='h-[420px] w-[330px]'>
            <img src={approach3} alt='' className='w-full h-full object-fill' />
          </div>
          <div className='h-[420px] w-[330px] translate-y-16'>
            <img src={approach4} alt='' className='w-full h-full object-fill' />
          </div>
        </div>
      </div>
      {/* our approach end */}
      {/* new this wee start */}
      <div className='p-2 mt-16'>
        <div className='flex justify-between items-end'>
          <div className='font-extrabold text-5xl leading-10'>
            <p>XIV</p>
            <p>COLLECTIONS</p>
            <p>24-25</p>
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
      </div>
      {/* new this wee end */}
    </div>
  );
};
