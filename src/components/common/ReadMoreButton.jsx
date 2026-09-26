import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ReadMoreButton({
  href,
  text = 'Read More',
  children,
  bgColor = 'bg-msi-blue hover:bg-msi-blue/90',
  className = '',
  target,
  rel,
  onClick,
  showArrow = true,
  ...props
}) {
  const content = children || text;
  const baseClasses = `group font-linotte inline-flex items-center justify-center gap-2 text-white font-bold text-sm sm:text-base py-2.5 px-7 rounded-full shadow-md hover:shadow-lg hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer w-fit self-start ${bgColor} ${className}`;

  const innerContent = (
    <>
      <span className="text-center">{content}</span>
      {showArrow && (
        <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

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
          {innerContent}
        </a>
      );
    }
    return (
      <Link href={href} target={target} rel={rel} className={baseClasses} {...props}>
        {innerContent}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={baseClasses} {...props}>
      {innerContent}
    </button>
  );
}
