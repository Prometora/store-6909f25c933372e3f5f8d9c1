export default function HomePage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-12 md:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Your Complete Dog Marketplace
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Connect with trusted sellers, find premium dog products, services, and connect with other dog lovers in your community.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Start Exploring
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Why Choose Dogs 58?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🐕</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Verified Sellers
              </h3>
              <p className="text-gray-600">
                Shop from trusted dog breeders, pet shops, and service providers vetted by our community.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🛍️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Everything for Dogs
              </h3>
              <p className="text-gray-600">
                From puppies and breeds to food, toys, grooming, training, and veterinary services all in one place.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Dog Lover Community
              </h3>
              <p className="text-gray-600">
                Connect with other dog owners, share experiences, find local events, and build lasting friendships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Join the Pack?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Discover amazing products and services for your furry friends today.
          </p>
          <button className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors">
            Browse Marketplace
          </button>
        </div>
      </section>
    </main>
  );
}