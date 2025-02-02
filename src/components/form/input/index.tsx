import React from 'react';
import { Input } from '../../../types/input';

export default ({ placeholder, className, type, height, width }: Input) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${height} ${width} p-6 border-2 border-[#D9D9D9] text-[#5E5E5E] outline-none ${className}`}
    />
  );
};
