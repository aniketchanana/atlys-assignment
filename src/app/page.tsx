/* eslint-disable @next/next/no-img-element */
import LoginForm from '@/components/Auth/LoginForm';

export default function Home() {
  return (
    <div className='w-full h-full items-center justify-center flex flex-col gap-14'>
      <img src='/assets/loginPage.svg' alt='Login page svg' />
      <div className='w-[500px] rounded-lg'>
        <LoginForm className='p-8 rounded-lg' />
      </div>
    </div>
  );
}
