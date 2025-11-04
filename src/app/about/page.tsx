export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to DOGS 58
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl">
            Your trusted marketplace connecting dog owners with premium products, services, and a vibrant community dedicated to canine wellness and happiness.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Mission</h2>
          <div className="bg-white rounded-lg shadow-sm p-8 border-l-4 border-amber-400">
            <p className="text-lg text-gray-700 leading-relaxed">
              At DOGS 58, we believe every dog deserves the best. We're building the ultimate marketplace where dog owners can discover trusted sellers, quality products—from premium kibble to innovative toys—and expert services like training, grooming, and veterinary care. We're here to simplify pet ownership and strengthen the bond between dogs and their humans.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Why Choose DOGS 58?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-blue-50 rounded-lg p-8 hover:shadow-md transition">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Vetted Sellers</h3>
              <p className="text-gray-700">
                Every seller on our platform is carefully verified to ensure your dog receives only safe, high-quality products and services from trusted professionals.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-amber-50 rounded-lg p-8 hover:shadow-md transition">
              <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">♥</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Dog-Centric Community</h3>
              <p className="text-gray-700">
                Connect with fellow dog lovers, share experiences, get recommendations, and access expert advice from trainers, vets, and experienced owners.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-blue-50 rounded-lg p-8 hover:shadow-md transition">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">🛡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Buyer Protection</h3>
              <p className="text-gray-700">
                Shop with confidence. Our secure platform, buyer guarantees, and responsive support team ensure every transaction is smooth and worry-free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Story</h2>
          <div className="bg-white rounded-lg shadow-sm p-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              DOGS 58 was born from a simple observation: dog owners deserve a one-stop destination where quality, trust, and community converge. We saw fragmented marketplaces, unreliable sellers, and dog owners struggling to find the right products and services for their beloved companions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Today, DOGS 58 is the go-to marketplace for thousands of dog owners seeking everything from premium nutrition and innovative gear to professional grooming, training, and veterinary services. We're proud to be part of your dog's journey.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-blue-600 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the DOGS 58 Community</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Discover trusted sellers, quality products, and expert services—all designed with your dog in mind.
          </p>
          <button className="bg-amber-400 text-gray-900 font-semibold px-8 py-3 rounded-lg hover:bg-amber-300 transition">
            Start Exploring
          </button>
        </div>
      </section>
    </div>
  );
}