// Assuming UserPost is already defined and imported
import UserPost from './UserPost';

const userPosts = [
  {
    isEdited: false,
    userName: 'Theresa Webb',
    timeStamp: '5mins ago',
  },
  {
    isEdited: true,
    userName: 'Marvin McKinney',
    timeStamp: '8mins ago',
  },
];

const UserPostList = () => {
  return (
    <div className='flex flex-col gap-3'>
      {userPosts.map((post, index) => (
        <UserPost
          key={index}
          isEdited={post.isEdited}
          userName={post.userName}
          timeStamp={post.timeStamp}
        />
      ))}
    </div>
  );
};

export default UserPostList;
