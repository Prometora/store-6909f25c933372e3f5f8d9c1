import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - AI will customize this */}
      <Hero
        title="Welcome to {{STORE_NAME}}"
        subtitle="{{STORE_DESCRIPTION}}"
        buttonText="Get Started"
        buttonLink="/listings"
      />

      {/* Additional sections will be added by AI here */}

      <Footer />
    </main>
  );
}
