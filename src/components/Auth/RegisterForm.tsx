'use client';
import Anchor from '@/components/ui/Anchor';
import BaseWrapper from '@/components/ui/BaseWrapper';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Typography from '@/components/ui/Typography';
import { FC, useState } from 'react';
type RegisterFormProps = {
  onLoginClick?: () => void;
};
const RegisterForm: FC<RegisterFormProps> = ({ onLoginClick }) => {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const handleRegister = () => {
    console.log({ email, password });
  };
  return (
    <BaseWrapper>
      <Input
        label='Email'
        type='text'
        placeholder='Enter your email or username'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        label='Username'
        type='text'
        placeholder='Chose your preferred username'
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <Input
        label='Password'
        type='password'
        placeholder='Choose a strong password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        rightTop={
          <Anchor href='#' className='text-xs'>
            Forgot password?
          </Anchor>
        }
      />
      <Button onClick={handleRegister}>Continue</Button>
      <div>
        <Anchor
          onClick={onLoginClick}
          href='#'
          leftContent={
            <Typography variant='caption'>Already have an account?</Typography>
          }
          rightContent={<i className='ri-arrow-right-line text-inherit' />}
        >
          Login
        </Anchor>
      </div>
    </BaseWrapper>
  );
};

export default RegisterForm;
