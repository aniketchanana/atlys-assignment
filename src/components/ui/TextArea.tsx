'use client';
import Typography from '@/components/ui/Typography';
import React from 'react';

interface TextareaProps {
  label?: string;
  rightTop?: React.ReactNode;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  leftIcon?: React.ReactNode;
  editable?: boolean;
}

const Textarea: React.FC<TextareaProps> = ({
  placeholder,
  value,
  onChange,
  label,
  rightTop = null,
  leftIcon = null,
  className = '',
  editable = true,
}) => {
  return (
    <div
      className={`w-full flex flex-col ${
        label || rightTop ? 'gap-2' : ''
      } ${className}`}
    >
      <div className='flex w-full justify-between'>
        {label && (
          <Typography variant='caption' className='text-indigo-50'>
            {label}
          </Typography>
        )}
        <span className=''>{rightTop}</span>
      </div>
      <div
        className={`relative flex items-center ${
          editable ? '' : 'pointer-events-none'
        }`}
      >
        {leftIcon && (
          <div className='absolute left-3 flex items-center justify-center w-12 h-12 rounded-full bg-gray-600'>
            {leftIcon}
          </div>
        )}
        <textarea
          rows={20}
          {...(value ? { value } : {})}
          {...(onChange ? { onChange } : {})}
          {...(placeholder ? { placeholder } : {})}
          className={`w-full h-20 px-4 py-2 text-gray-300 border-[#1f2937] border-[1px] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-[#191920] resize-none ${
            leftIcon ? 'pl-20' : ''
          }`}
        />
      </div>
    </div>
  );
};

export default Textarea;
