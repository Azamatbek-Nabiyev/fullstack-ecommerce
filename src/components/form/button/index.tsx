import React from 'react';
import { Button } from '../../../types/button';

export default ({
  label,
  icon,
  width = 'w-[100px]',
  height = 'h-[24px]',
  className,
}: Button) => {
  return (
    <div
      className={`${width} ${height} ${className} flex justify-center items-center gap-2`}
    >
      {icon && <span>{icon}</span>}
      {label && <span>{label}</span>}
    </div>
  );
};
