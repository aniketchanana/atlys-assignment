'use client';
import Button from '@/components/ui/Button';
import TextArea from '@/components/ui/TextArea';
import Typography from '@/components/ui/Typography';
import React, { useState } from 'react';

const CreatePost: React.FC = () => {
  const [postContent, setPostContent] = useState('');

  const handlePost = () => {
    console.log('Post content:', postContent);
  };

  return (
    <div className='bg-[#1f2937] p-4 rounded-lg shadow-lg w-full flex flex-col'>
      <Typography variant='subheading' className='mb-3 text-gray-300'>
        Create post
      </Typography>
      <TextArea
        placeholder='How are you feeling today?'
        onChange={(e) => setPostContent(e.target.value)}
        className='mb-4'
        leftIcon={<span>💬</span>}
      />
      <Button onClick={handlePost} className='!w-fit p-4 self-end'>
        Post
      </Button>
    </div>
  );
};

export default CreatePost;
