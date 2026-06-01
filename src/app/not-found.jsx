import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-white px-4">
      <h1 className="text-4xl font-black text-black mb-2">404</h1>
      <p className="text-gray-500 mb-6">Page not found</p>
      <Link href="/" className="px-6 py-2 bg-[#024ad8] text-white font-bold text-xs uppercase tracking-widest rounded-sm">
        Go Home
      </Link>
    </div>
  );
}
