/* eslint-disable @next/next/no-img-element */
'use client';

import LoginForm from '@/components/Auth/LoginForm';
import RegisterForm from '@/components/Auth/RegisterForm';
import Dialog from '@/components/ui/Dialog';
import TextArea from '@/components/ui/TextArea';
import Typography from '@/components/ui/Typography';
import { useState } from 'react';
type UserPostProps = {
  userName: string;
  timeStamp: string;
  isEdited?: boolean;
};
function UserPost({ userName, timeStamp, isEdited = false }: UserPostProps) {
  const [postContent, setPostContent] = useState('');
  const [showRegisterDialog, setShowRegisterDialog] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const handlePost = () => {
    console.log('Post content:', postContent);
  };
  const handleLoginClick = () => {
    setShowRegisterDialog(false);
    setShowLoginForm(true);
  };
  const handleRegisterClick = () => {
    setShowRegisterDialog(true);
    setShowLoginForm(false);
  };

  return (
    <div className='bg-[#1f2937] p-4 rounded-lg shadow-lg w-full flex flex-col'>
      <div className='mb-4 flex justify-between items-center'>
        <div className='flex gap-3'>
          <img src='/assets/dummyUser.svg' alt='user' />
          <div className='flex flex-col gap-1'>
            <Typography variant='caption' className='text-gray-300'>
              {userName}
            </Typography>
            <Typography variant='caption'>{`${timeStamp} ${
              isEdited ? '• Edited' : ''
            }`}</Typography>
          </div>
        </div>
        <div
          className='cursor-pointer'
          onClick={() => setShowRegisterDialog(true)}
        >
          <svg
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M4.83337 10C4.83337 10.8284 4.1618 11.5 3.33337 11.5C2.50495 11.5 1.83337 10.8284 1.83337 10C1.83337 9.17157 2.50495 8.5 3.33337 8.5C4.1618 8.5 4.83337 9.17157 4.83337 10ZM11.5 10C11.5 10.8284 10.8285 11.5 10 11.5C9.17161 11.5 8.50004 10.8284 8.50004 10C8.50004 9.17157 9.17161 8.5 10 8.5C10.8285 8.5 11.5 9.17157 11.5 10ZM16.6667 11.5C17.4951 11.5 18.1667 10.8284 18.1667 10C18.1667 9.17157 17.4951 8.5 16.6667 8.5C15.8383 8.5 15.1667 9.17157 15.1667 10C15.1667 10.8284 15.8383 11.5 16.6667 11.5Z'
              fill='#C5C7CA'
            />
          </svg>
        </div>
      </div>
      <TextArea
        placeholder='How are you feeling today?'
        onChange={(e) => setPostContent(e.target.value)}
        className='mb-4'
        leftIcon={<span>👋</span>}
        editable={false}
        value='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.'
      />
      <Dialog
        open={showRegisterDialog}
        onClose={() => setShowRegisterDialog(false)}
        title='sign up'
        subTitle='Create an account to continue'
      >
        <RegisterForm onLoginClick={handleLoginClick} />
      </Dialog>
      <Dialog
        open={showLoginForm}
        onClose={() => setShowLoginForm(false)}
        title='welcome back'
        subTitle='Log into your account'
      >
        <LoginForm onRegisterClick={handleRegisterClick} />
      </Dialog>
    </div>
  );
}

export default UserPost;
