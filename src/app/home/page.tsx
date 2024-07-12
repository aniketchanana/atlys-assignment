import CreatePost from '@/components/Home/CreatePost';
import UserPostList from '@/components/Home/UserPostList';
import Typography from '@/components/ui/Typography';

export default function Home() {
  return (
    <div className='w-full'>
      <div className='mb-10'>
        <Typography variant='heading'>Hello Jane</Typography>
        <Typography variant='body'>
          How are you doing today? Would you like to share something with the
          community? <span>🙋‍♂️</span>
        </Typography>
      </div>
      <div className='flex flex-col gap-3'>
        <CreatePost />
        <UserPostList />
      </div>
    </div>
  );
}
