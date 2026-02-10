import { Card, CardContent } from "@/components/ui/card";
import { Home, Wrench, CreditCard, MessageCircle } from "lucide-react";

export default function Tenants() {
  const services = [
    { icon: <Home className="w-12 h-12 text-[var(--luxe-gold)]" />, title: "Quality Properties", description: "Access to well-maintained, premium properties in desirable locations." },
    { icon: <Wrench className="w-12 h-12 text-[var(--luxe-gold)]" />, title: "24/7 Maintenance", description: "Quick response to maintenance requests with professional service." },
    { icon: <CreditCard className="w-12 h-12 text-[var(--luxe-gold)]" />, title: "Easy Payments", description: "Convenient online rent payment options for your busy lifestyle." },
    { icon: <MessageCircle className="w-12 h-12 text-[var(--luxe-gold)]" />, title: "Responsive Support", description: "Dedicated team available to address your questions and concerns." },
  ];

  return (
    <div>
      <section className="bg-[var(--luxe-navy)] text-white py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">For Tenants</h1>
          <p className="text-xl max-w-3xl mx-auto">Experience exceptional service and quality living</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-center text-[var(--luxe-navy)] mb-16">What We Offer Our Tenants</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-[var(--luxe-navy)] mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-[var(--luxe-navy)] mb-6">Already a Tenant?</h2>
          <p className="text-lg text-gray-700 mb-8">Access your tenant portal to manage your lease, view payments, and submit maintenance requests.</p>
          <div className="flex gap-4 justify-center flex-wrap mb-12">
            <a href="/login" className="inline-block bg-[var(--luxe-gold)] hover:bg-[var(--luxe-gold)]/90 text-[var(--luxe-navy)] font-semibold px-8 py-4 rounded-lg transition-colors">Tenant Login</a>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-[var(--luxe-navy)] mb-6">Looking for a New Home?</h2>
          <p className="text-lg text-gray-700 mb-8">Browse our available properties or contact us to learn more about our rental communities.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/properties" className="inline-block bg-[var(--luxe-gold)] hover:bg-[var(--luxe-gold)]/90 text-[var(--luxe-navy)] font-semibold px-8 py-4 rounded-lg transition-colors">View Properties</a>
            <a href="/contact" className="inline-block border-2 border-[var(--luxe-navy)] hover:bg-[var(--luxe-navy)] hover:text-white text-[var(--luxe-navy)] font-semibold px-8 py-4 rounded-lg transition-colors">Contact Us</a>
          </div>
        </div>
      </section>
    </div>
  );
}
