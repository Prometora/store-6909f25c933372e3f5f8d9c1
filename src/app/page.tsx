import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - AI will customize this */}
      <Hero
        title="Welcome to DOGS 58"
        subtitle="marketplace for dog owners."
        buttonText="Get Started"
        buttonLink="/listings"
      />

      {/* Additional sections will be added by AI here */}

      <Footer />
    </main>
  );
}
