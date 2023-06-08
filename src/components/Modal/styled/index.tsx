'use-client';

import tw from 'twin.macro';
import React from 'react';

export const ModalBox = tw.div`
    bg-white
    // p-1
    w-2/3
    sm:w-1/2
    md:w-1/4
    h-auto
    rounded-lg
`;

export const ModalHeader = tw.div`
    w-full 
    border-b-2 
    rounded-t-lg
    text-white
    p-4 
    flex 
    justify-between 
    items-center 
    bg-violet-800
`;

export const ModalContent = tw.div`w-full p-4 h-auto`;

export interface ModalWrapperProps {
  shown: boolean;
}

export interface ModalProps extends ModalWrapperProps {
  children: React.ReactNode;
  onClose: () => any;
  title: string;
}

export const ModalWrapper = ({ shown, children }: any) => {
  return (
    <div
      css={[
        tw`
    absolute
    z-10
    inset-0
    w-full
    h-screen
    flex
    justify-center
    items-center
    backdrop-opacity-30 backdrop-invert bg-white/30
`,
        shown || tw`hidden`,
      ]}
    >
      {children}
    </div>
  );
};

export const ModalClose = tw.div`
    text-red-500
    rounded-lg
    px-3
    py-1
    hover:border-red-500
    hover:transition-all
    hover:cursor-pointer
`;
