type BaseWrapperProps = {
  children: React.ReactNode;
};
function BaseWrapper({ children }: BaseWrapperProps) {
  return (
    <div className='bg-[#27292D] p-8 w-full flex flex-col gap-4 rounded-lg'>
      {children}
    </div>
  );
}

export default BaseWrapper;
