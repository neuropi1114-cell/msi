'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error('Unhandled runtime error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-orange-50 flex items-center justify-center py-16 px-4">
      <div className="max-w-md w-full bg-white border border-purple-100 rounded-3xl p-8 shadow-xl text-center">
        
        <div className="w-16 h-16 rounded-full bg-orange-100 text-msi-orange flex items-center justify-center mx-auto mb-5">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <h1 className="text-2xl sm:text-3xl font-linotte font-bold text-msi-purple uppercase mb-3">
          Something Went Wrong
        </h1>

        <p className="text-gray-600 text-sm sm:text-base mb-6 font-medium leading-relaxed">
          An unexpected error occurred while loading this page. Don't worry, our team has been notified.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => reset()}
            className="w-full sm:w-auto bg-msi-orange hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-full text-sm shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            Try Again
          </button>

          <Link
            href="/"
            className="w-full sm:w-auto bg-purple-50 hover:bg-purple-100 text-msi-purple border border-purple-200 font-bold px-6 py-3 rounded-full text-sm transition-all text-center"
          >
            Go to Homepage
          </Link>
        </div>

      </div>
    </div>
  );
}
