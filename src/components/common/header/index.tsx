import React from 'react';
import { CgMenuLeftAlt } from 'react-icons/cg';
import Navbar from './navbar';
import { TiHeartOutline } from 'react-icons/ti';
import Button from '../../form/button';
import { MdShoppingBag } from 'react-icons/md';
import { FaRegUser } from 'react-icons/fa';

export default () => {
  return (
    <div className='flex justify-between items-center py-5'>
      <div className='flex justify-start items-center gap-5'>
        <CgMenuLeftAlt size={26} />
        <Navbar />
      </div>
      <div className='flex justify-start items-center gap-5'>
        <Button
          width='w-[50px]'
          height='h-[50px]'
          icon={<TiHeartOutline size={21} />}
          className='flex justify-center items-center rounded-full bg-[#000000] text-white'
        />
        <Button
          width='w-[100px]'
          height='h-[50px]'
          icon={<MdShoppingBag size={21} />}
          label='Cart'
          className='flex justify-center items-center rounded-full bg-[#000000] text-white font-medium'
        />
        <Button
          width='w-[50px]'
          height='h-[50px]'
          icon={<FaRegUser size={18} />}
          className='flex justify-center items-center rounded-full bg-[#000000] text-white font-medium'
        />
      </div>
    </div>
  );
};
