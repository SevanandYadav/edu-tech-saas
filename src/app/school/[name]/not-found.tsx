import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-400 mb-4">404</h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
          School Not Found
        </h2>
        <p className="text-gray-600 mb-8 text-sm sm:text-base">
          The school you're looking for doesn't exist in our system.
        </p>
        <Link
          href="/"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200 text-sm sm:text-base"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}