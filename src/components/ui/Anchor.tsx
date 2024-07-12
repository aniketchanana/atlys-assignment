import Link from 'next/link';
import React from 'react';

interface AnchorProps {
  href: string;
  children: React.ReactNode;
  rightContent?: React.ReactNode;
  leftContent?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Anchor: React.FC<AnchorProps> = ({
  href,
  children,
  rightContent = null,
  leftContent = null,
  className,
  onClick,
}) => {
  return (
    <Link href={href} {...(onClick ? { onClick } : {})}>
      <span
        className={`text-blue-400 hover:text-blue-200 transition-all duration-300 flex items-center space-x-1 ${className}`}
      >
        {leftContent}
        <span>{children}</span>
        {rightContent}
      </span>
    </Link>
  );
};

export default Anchor;
