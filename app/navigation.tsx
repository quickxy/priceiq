import Link from 'next/link'

export default function Navigation() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-indigo-600">
              PriceIQ
            </Link>
          </div>
          <div className="flex items-center">
            <nav className="hidden md:flex space-x-8">
              <Link href="#" className="text-gray-600 hover:text-indigo-600 transition">
                Features
              </Link>
              <Link href="#" className="text-gray-600 hover:text-indigo-600 transition">
                How It Works
              </Link>
              <Link href="#" className="text-gray-600 hover:text-indigo-600 transition">
                Pricing
              </Link>
            </nav>
            <div className="flex items-center">
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
                <Link href="/dashboard">Get Started</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
