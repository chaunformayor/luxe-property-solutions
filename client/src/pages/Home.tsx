import HeroSlider from "@/components/HeroSlider";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, CheckCircle, DollarSign, Wrench } from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: <Building2 className="w-12 h-12 text-[var(--luxe-gold)]" />,
      title: "Property Marketing",
      description:
        "Professional photography, virtual tours, and targeted advertising campaigns to attract premium tenants quickly.",
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-[var(--luxe-gold)]" />,
      title: "Tenant Screening",
      description:
        "Rigorous background checks, credit verification, and employment validation to ensure quality tenants.",
    },
    {
      icon: <DollarSign className="w-12 h-12 text-[var(--luxe-gold)]" />,
      title: "Financial Management",
      description:
        "Efficient rent collection, detailed financial reporting, and transparent accounting for complete peace of mind.",
    },
    {
      icon: <Wrench className="w-12 h-12 text-[var(--luxe-gold)]" />,
      title: "Maintenance & Repairs",
      description:
        "24/7 emergency response, preventive maintenance, and a network of trusted, vetted contractors.",
    },
  ];

  const testimonials = [
    {
      quote:
        "Luxe transformed how I manage my investment portfolio. Their asset management expertise and attention to detail are unmatched. My properties have never been in better condition.",
      author: "Michael Thompson",
      role: "Property Investor",
    },
    {
      quote:
        "Outstanding service from start to finish. Their comprehensive asset management approach handles everything so I can focus on growing my portfolio without stress.",
      author: "Sarah Williams",
      role: "Real Estate Developer",
    },
    {
      quote:
        "As a busy professional, I needed someone I could trust with my rental properties. Luxe exceeded my expectations. Tenant satisfaction is at an all-time high.",
      author: "James Rodriguez",
      role: "Corporate Executive",
    },
    {
      quote:
        "The financial reporting and transparency from their asset management services is incredible. I know exactly where my money is and how my properties perform.",
      author: "Jennifer Chen",
      role: "Investment Manager",
    },
    {
      quote:
        "We managed multiple properties for years, but Luxe system is the most efficient we have used. Their team is responsive and professional.",
      author: "David Martinez",
      role: "Multi-Property Owner",
    },
    {
      quote:
        "From maintenance coordination to tenant communication, Luxe handles every aspect of asset management flawlessly. Highly recommend their services.",
      author: "Patricia Anderson",
      role: "Residential Property Owner",
    },
  ];

  return (
    <div>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Why Choose Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[var(--luxe-navy)] mb-6">
            Why Choose Luxe Property Solutions?
          </h2>
          <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-16">
            We specialize in providing comprehensive asset management
            services that maximize your investment returns while minimizing your
            stress. Our team of experienced professionals combines cutting-edge
            technology with personalized service to deliver results that exceed
            expectations.
          </p>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[var(--luxe-navy)] mb-16">
            Our Core Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-2 hover:border-[var(--luxe-gold)] transition-all hover:shadow-xl"
              >
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-[var(--luxe-navy)] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--luxe-navy)] mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from property owners who have transformed their asset management experience with Luxe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-t-4 border-[var(--luxe-gold)] hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[var(--luxe-gold)]">★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-[var(--luxe-navy)]">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--luxe-navy)] text-white text-center">
        <div className="container max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--luxe-gold)] mb-6">
            Ready to Experience Premium Asset Management?
          </h2>
          <p className="text-lg mb-8">
            Let us show you how our comprehensive asset management services
            can maximize your investment returns and provide complete peace of
            mind.
          </p>
          <a href="/contact">
            <Button
              size="lg"
              className="bg-[var(--luxe-gold)] hover:bg-[var(--luxe-gold)]/90 text-[var(--luxe-navy)] font-semibold text-lg px-8 py-6"
            >
              Get Started Today
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
