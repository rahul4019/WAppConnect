import React from 'react';
import Image from 'next/image';

interface ContainerProps {
  children: React.ReactNode;
}

const container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="mx-auto h-full w-full max-w-screen-2xl ">{children}</div>
  );
};

export default container;
