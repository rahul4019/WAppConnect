import React from 'react';
import Image from 'next/image';

interface ContainerProps {
  children: React.ReactNode;
}

const container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className='mx-auto w-full max-w-screen-2xl'>
      {children}
      {/* <Image
        src='/app_background.jpg'
        alt='app_background'
        fill
        className='absolute inset-0'
      /> */}
    </div>
  );
};

export default container;
