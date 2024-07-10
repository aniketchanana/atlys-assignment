'use client';
import Typography from '@/components/ui/Typography';
import React, { useState } from 'react';

interface InputProps {
  label?: string;
  rightTop?: React.ReactNode;
  type?: 'text' | 'password';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  label,
  rightTop = null,
}) => {
  const [isPassword, setIsPassword] = useState(type === 'password');
  const togglePasswordVisibility = () => setIsPassword(!isPassword);
  return (
    <div className='w-full flex flex-col gap-2'>
      <div className='flex w-full justify-between'>
        {label && (
          <Typography variant='caption' className='text-indigo-50'>
            {label}
          </Typography>
        )}
        <span className=''>{rightTop}</span>
      </div>
      <div className='relative'>
        <input
          type={isPassword ? 'password' : 'text'}
          {...(value ? { value } : {})}
          {...(onChange ? { onChange } : {})}
          {...(placeholder ? { placeholder } : {})}
          className='w-full px-4 py-2 border-[#35373B] border-[1px] rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-transparent'
        />
        {type === 'password' && (
          <div
            onClick={togglePasswordVisibility}
            className='absolute inset-y-1/2 right-0 flex items-center pr-3 cursor-pointer'
          >
            {isPassword ? (
              <i className='ri-eye-line text-white' />
            ) : (
              <i className='ri-eye-off-line text-white' />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
