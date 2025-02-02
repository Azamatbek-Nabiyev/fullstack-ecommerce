import React from 'react';
import NavItem from './navItem';

const navs = ['Home', 'Collections', 'New'];

export default () => {
  return (
    <div>
      <ul className='flex justify-start items-center gap-6'>
        {navs.map((nav) => (
          <NavItem title={nav} />
        ))}
      </ul>
    </div>
  );
};
