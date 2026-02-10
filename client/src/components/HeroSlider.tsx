import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  ctaLink: string;
}

const slides: Slide[] = [
  {
    image: "/images/hero-professional.jpg",
    title: "Luxe Property Solutions",
    subtitle: "Premium Asset Management for Your Exceptional Properties",
    description:
      "Experience unparalleled asset management services tailored to discerning property owners who demand excellence, transparency, and exceptional results.",
    cta: "Request Free Consultation",
    ctaLink: "/contact",
  },
  {
    image: "/images/hero-building.jpg",
    title: "Maximize Your Investment Returns",
    subtitle: "Professional Asset Management Services",
    description:
      "Our team of experienced professionals combines cutting-edge technology with personalized service to deliver results that exceed expectations.",
    cta: "Explore Our Services",
    ctaLink: "/services",
  },
  {
    image: "/images/hero-agent.jpg",
    title: "Your Assets. Our Expertise.",
    subtitle: "Comprehensive Asset Management Solutions",
    description:
      "From tenant screening to maintenance coordination, we handle every aspect of asset management with precision and care.",
    cta: "Learn More",
    ctaLink: "/about",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-[var(--luxe-navy)]/60" />

          {/* Content */}
          <div className="relative z-20 h-full flex items-center justify-center text-center px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
                {slide.title}
              </h1>
              <h2 className="text-2xl md:text-3xl text-[var(--luxe-gold)] mb-6 animate-fade-in animation-delay-200">
                {slide.subtitle}
              </h2>
              <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto animate-fade-in animation-delay-400">
                {slide.description}
              </p>
              <a href={slide.ctaLink}>
                <Button
                  size="lg"
                  className="bg-[var(--luxe-gold)] hover:bg-[var(--luxe-gold)]/90 text-[var(--luxe-navy)] font-semibold text-lg px-8 py-6 animate-fade-in animation-delay-600"
                >
                  {slide.cta}
                </Button>
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-[var(--luxe-gold)]/80 hover:bg-[var(--luxe-gold)] text-white p-3 rounded-full transition-all hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-[var(--luxe-gold)]/80 hover:bg-[var(--luxe-gold)] text-white p-3 rounded-full transition-all hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-[var(--luxe-gold)] scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

