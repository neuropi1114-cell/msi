import Link from 'next/link';

const colorMap = {
  yellow: {
    text: 'text-msi-yellow',
    border: 'border-msi-yellow group-hover:border-msi-yellow/80',
  },
  green: {
    text: 'text-msi-green',
    border: 'border-msi-green group-hover:border-msi-green/80',
  },
  purple: {
    text: 'text-msi-purple',
    border: 'border-msi-purple group-hover:border-msi-purple/80',
  },
  blue: {
    text: 'text-msi-blue',
    border: 'border-msi-blue group-hover:border-msi-blue/80',
  },
  orange: {
    text: 'text-msi-orange',
    border: 'border-msi-orange group-hover:border-msi-orange/80',
  },
};

export default function UnderlineArrowLink({
  href = '/book-your-tour',
  text = 'BOOK A SCHOOL TOUR',
  color = 'yellow',
  className = '',
}) {
  const { text: textColorClass, border: borderColorClass } =
    colorMap[color] || colorMap.yellow;

  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 font-medium text-base md:text-lg ${textColorClass} transition-colors whitespace-nowrap ${className}`}
    >
      <span className={`border-b-2 ${borderColorClass} pb-0.5`}>
        {text}
      </span>
      <svg
        className="w-4 h-4 transition-transform group-hover:translate-x-1 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </Link>
  );
}
