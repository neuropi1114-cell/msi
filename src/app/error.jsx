'use client';

export default function Error({ error, reset }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f7f9fc]">
      <div className="text-center px-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Something went wrong</h1>
        <p className="text-gray-500 mb-8">An unexpected error occurred. Please try again.</p>
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
