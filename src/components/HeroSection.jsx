import { Button } from "@/components/ui/button";
const HeroSection = () => {
  return (
    <section className="relative bg-gray-900 text-white h-screen flex items-center justify-center">
      <div className="container mx-auto text-center px-6">
        {/* Hero Content */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Welcome to SenseMarket
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-300">
          Empowering the visually impaired with intuitive shopping experiences.
        </p>

        {/* Call to Action */}
        <div className="mt-8 space-x-4">
          
          <Button
            size="lg"
            className="bg-teal-500 hover:bg-teal-400 transition-colors"
          >
            Shop Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-black border-white hover:bg-white hover:text-gray-900 transition-colors"
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* Background Design */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
    </section>
  );
};

export default HeroSection;
