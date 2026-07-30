'use client';
import Script from 'next/script';
import { usePathname } from 'next/navigation';

export default function Chatway() {
  const pathname = usePathname();
  if (pathname?.startsWith('/mission-2000')) return null;
  return (
    <Script
      src="https://cdn.chatway.app/widget.js?id=23D3hS7Mt4QI"
      strategy="lazyOnload"
      defer
    />
  );
}