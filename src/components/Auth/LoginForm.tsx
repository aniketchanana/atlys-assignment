'use client';

import Anchor from '@/components/ui/Anchor';
import BaseWrapper from '@/components/ui/BaseWrapper';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Typography from '@/components/ui/Typography';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
    router.push('/home');
  };

  return (
    <BaseWrapper>
      <Typography variant='heading' className='font-bold !text-white'>
        Log into your account
      </Typography>
      <Input
        label='Email or Username'
        type='text'
        placeholder='Enter your email or username'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        label='Password'
        type='password'
        placeholder='Enter your password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        rightTop={
          <Anchor href='#' className='text-xs'>
            Forgot password?
          </Anchor>
        }
      />
      <Button onClick={handleLogin}>Login now</Button>
      <div>
        <Anchor
          href='#'
          leftContent={
            <Typography variant='caption'>Not registered yet?</Typography>
          }
          rightContent={<i className='ri-arrow-right-line text-inherit' />}
        >
          Register
        </Anchor>
      </div>
    </BaseWrapper>
  );
};

export default LoginForm;
