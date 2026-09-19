import React from 'react';
import Link from 'next/link';

export default function ReadMoreButton({
  href,
  text = 'Read More',
  children,
  bgColor = 'bg-msi-blue hover:bg-msi-blue/90',
  className = '',
  target,
  rel,
  onClick,
  ...props
}) {
  const content = children || text;
  const baseClasses = `font-linotte inline-block w-fit self-start text-white font-[200] py-3 px-10 rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300 ${bgColor} ${className}`;

  if (href) {
    const isExternal = href.startsWith('http://') || href.startsWith('https://');
    if (isExternal) {
      return (
        <a
          href={href}
          target={target || '_blank'}
          rel={rel || 'noopener noreferrer'}
          className={baseClasses}
          {...props}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} target={target} rel={rel} className={baseClasses} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={baseClasses} {...props}>
      {content}
    </button>
  );
}
