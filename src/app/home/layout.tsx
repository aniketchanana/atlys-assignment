export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex justify-center h-full'>
      <div className='w-[712px] p-16'>{children}</div>
    </div>
  );
}
