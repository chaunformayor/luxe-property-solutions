import { Card, CardContent } from "@/components/ui/card";
import { Building2, CheckCircle, DollarSign, FileText, Home, Users, Wrench, Shield } from "lucide-react";

export default function Services() {
  const services = [
    { icon: <Building2 className="w-12 h-12 text-[var(--luxe-gold)]" />, title: "Property Marketing", description: "Professional photography, virtual tours, and targeted advertising campaigns to attract premium tenants quickly." },
    { icon: <CheckCircle className="w-12 h-12 text-[var(--luxe-gold)]" />, title: "Tenant Screening", description: "Rigorous background checks, credit verification, and employment validation to ensure quality tenants." },
    { icon: <DollarSign className="w-12 h-12 text-[var(--luxe-gold)]" />, title: "Financial Management", description: "Efficient rent collection, detailed financial reporting, and transparent accounting for complete peace of mind." },
    { icon: <Wrench className="w-12 h-12 text-[var(--luxe-gold)]" />, title: "Maintenance & Repairs", description: "24/7 emergency response, preventive maintenance, and a network of trusted, vetted contractors." },
    { icon: <FileText className="w-12 h-12 text-[var(--luxe-gold)]" />, title: "Lease Administration", description: "Professional lease preparation, renewals, and enforcement to protect your interests." },
    { icon: <Users className="w-12 h-12 text-[var(--luxe-gold)]" />, title: "Tenant Relations", description: "Responsive communication and professional service to maintain high tenant satisfaction and retention." },
    { icon: <Home className="w-12 h-12 text-[var(--luxe-gold)]" />, title: "Property Inspections", description: "Regular inspections to ensure property condition and identify maintenance needs early." },
    { icon: <Shield className="w-12 h-12 text-[var(--luxe-gold)]" />, title: "Legal Compliance", description: "Stay compliant with all local, state, and federal regulations affecting rental properties." },
  ];

  return (
    <div>
      <section className="bg-[var(--luxe-navy)] text-white py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">Comprehensive asset management solutions tailored to your needs</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-center text-[var(--luxe-navy)] mb-16">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-[var(--luxe-gold)] transition-all hover:shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-[var(--luxe-navy)] mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-[var(--luxe-navy)] mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-700 mb-8">Contact us today to learn how we can help manage your assets.</p>
          <a href="/contact" className="inline-block bg-[var(--luxe-gold)] hover:bg-[var(--luxe-gold)]/90 text-[var(--luxe-navy)] font-semibold px-8 py-4 rounded-lg transition-colors">Contact Us</a>
        </div>
      </section>
    </div>
  );
}
