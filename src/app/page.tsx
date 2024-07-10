import LoginForm from '@/components/Auth/LoginForm';

export default function Home() {
  return (
    <div className='w-full h-full items-center justify-center flex flex-col'>
      <div className='w-[500px]'>
        <LoginForm />
      </div>
    </div>
  );
}
