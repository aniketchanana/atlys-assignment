'use client';
import Typography from '@/components/ui/Typography';
import React from 'react';
import ReactDOM from 'react-dom';

interface DialogProps {
  open: boolean;
  onClose?: () => void;
  title?: string;
  subTitle?: string;
  children: React.ReactNode;
  fullWidth?: boolean;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const getMaxWidthClass = (maxWidth?: string) => {
  switch (maxWidth) {
    case 'xs':
      return 'max-w-xs';
    case 'sm':
      return 'max-w-sm';
    case 'md':
      return 'max-w-md';
    case 'lg':
      return 'max-w-lg';
    case 'xl':
      return 'max-w-xl';
    default:
      return 'max-w-md';
  }
};

const Dialog: React.FC<DialogProps> = ({
  open,
  onClose,
  title,
  subTitle,
  children,
  fullWidth = false,
  maxWidth = 'md',
}) => {
  if (!open) return null;

  return ReactDOM.createPortal(
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <div
        className={`bg-[#1f2937] p-6 rounded-lg shadow-lg w-full ${
          fullWidth ? 'w-full' : ''
        } ${getMaxWidthClass(maxWidth)} relative`}
      >
        <div
          onClick={onClose}
          className='absolute top-4 right-4 bg-black p-4 rounded-full w-5 h-5 flex items-center justify-center cursor-pointer'
        >
          <i className='ri-close-line'></i>
        </div>
        <div className='flex items-center flex-col'>
          {title && (
            <Typography variant='caption' className='mb-1 uppercase'>
              {title}
            </Typography>
          )}
          {subTitle && (
            <Typography variant='body' className='text-white font-bold mb-6'>
              {subTitle}
            </Typography>
          )}
        </div>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Dialog;
