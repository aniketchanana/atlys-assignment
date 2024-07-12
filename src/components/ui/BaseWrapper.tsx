import React from 'react';

type BaseWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

const BaseWrapper: React.FC<BaseWrapperProps> = ({
  children,
  className = '',
}: BaseWrapperProps) => {
  return (
    <div className={`bg-[#1f2937] w-full flex flex-col gap-4 ${className}`}>
      {children}
    </div>
  );
};

export default BaseWrapper;
