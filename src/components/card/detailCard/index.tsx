import React from 'react';
import { productDetail } from '../../../types/productCard';
import Button from '../../form/button';
import { GoPlus } from 'react-icons/go';

export default ({ image, price, title, desc }: productDetail) => {
  return (
    <div className='w-[300px] h-[400px] overflow-hidden'>
      <div className='w-full h-[340px] border-2 relative'>
        <img src={image} alt='' className='w-full h-full object-cover' />
        <Button
          icon={<GoPlus color='#0C0C0C' size={18} />}
          height='h-[34px]'
          width='w-[34px]'
          className='bg-[#E8E8E8] absolute bottom-0 left-[45%]'
        />
      </div>
      <div className='flex justify-between items-end h-[60px] p-2'>
        <div>
          <p className='font-medium text-[12px] text-[#545454]'>{title}</p>
          <p className='font-medium text-sm'>{desc}</p>
        </div>
        <div>
          <span className='font-medium text-sm'>${price}</span>
        </div>
      </div>
    </div>
  );
};
