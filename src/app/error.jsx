'use client';

export default function Error({ error, reset }) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-white px-4">
      <h2 className="text-xl font-bold text-gray-900 mb-2">Something went wrong</h2>
      <p className="text-gray-500 mb-6 text-center max-w-md">{error?.message || 'An unexpected error occurred.'}</p>
      <button
        onClick={() => reset()}
        className="px-6 py-2 bg-[#024ad8] text-white font-bold text-xs uppercase tracking-widest rounded-sm"
      >
        Try again
      </button>
    </div>
  );
}
