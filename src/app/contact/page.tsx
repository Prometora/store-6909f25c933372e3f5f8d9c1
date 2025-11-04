export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch with DOGS 58
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about buying or selling dog products, services, or connecting with fellow dog lovers? We're here to help your furry friend thrive.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Email Card */}
          <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600 mb-2">For marketplace inquiries and seller support</p>
            <a href="mailto:hello@dogs58.com" className="text-blue-600 font-medium hover:text-blue-700">
              hello@dogs58.com
            </a>
          </div>

          {/* Phone Card */}
          <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-4">
              <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
            <p className="text-gray-600 mb-2">Call us during business hours</p>
            <a href="tel:+1-800-DOGS-58" className="text-amber-600 font-medium hover:text-amber-700">
              +1 (800) 364-7758
            </a>
          </div>

          {/* Address Card */}
          <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Headquarters</h3>
            <p className="text-gray-600 mb-2">Visit our main office</p>
            <p className="text-blue-600 font-medium">
              San Francisco, CA 94105<br />
              <span className="text-sm text-gray-600">United States</span>
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="max-w-7xl mx-auto px-4 py-12 bg-gradient-to-r from-blue-50 to-amber-50 rounded-lg my-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">How Can We Help?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start">
            <span className="text-blue-600 text-xl mr-3">•</span>
            <p className="text-gray-700"><strong>Seller Support:</strong> List your dog products or services on our marketplace</p>
          </div>
          <div className="flex items-start">
            <span className="text-amber-600 text-xl mr-3">•</span>
            <p className="text-gray-700"><strong>Buyer Questions:</strong> Find trusted dog products and connect with verified sellers</p>
          </div>
          <div className="flex items-start">
            <span className="text-blue-600 text-xl mr-3">•</span>
            <p className="text-gray-700"><strong>Account Issues:</strong> Password resets, profile updates, or verification help</p>
          </div>
          <div className="flex items-start">
            <span className="text-amber-600 text-xl mr-3">•</span>
            <p className="text-gray-700"><strong>Community:</strong> Join our dog-loving community and share experiences</p>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="max-w-7xl mx-auto px-4 py-12 text-center">
        <p className="text-gray-600 mb-4">
          Expected response time: 24-48 hours on business days
        </p>
        <p className="text-sm text-gray-500">
          DOGS 58 © 2024 • Your trusted marketplace for dog owners
        </p>
      </section>
    </div>
  );
}