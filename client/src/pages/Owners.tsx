import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Clock, Shield, BarChart } from "lucide-react";

export default function Owners() {
  const benefits = [
    { icon: <TrendingUp className="w-12 h-12 text-[var(--luxe-gold)]" />, title: "Maximize Returns", description: "Strategic pricing and marketing to optimize rental income and property value." },
    { icon: <Clock className="w-12 h-12 text-[var(--luxe-gold)]" />, title: "Save Time", description: "We handle all day-to-day operations so you can focus on growing your portfolio." },
    { icon: <Shield className="w-12 h-12 text-[var(--luxe-gold)]" />, title: "Protect Your Investment", description: "Rigorous tenant screening and property maintenance preserve your asset value." },
    { icon: <BarChart className="w-12 h-12 text-[var(--luxe-gold)]" />, title: "Transparent Reporting", description: "Detailed financial reports and real-time access to property performance data." },
  ];

  return (
    <div>
      <section className="bg-[var(--luxe-navy)] text-white py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">For Property Owners</h1>
          <p className="text-xl max-w-3xl mx-auto">Partner with us to maximize your investment returns</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-[var(--luxe-navy)] mb-8 text-center">Why Property Owners Choose Us</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-12 text-center">As a property owner, your time is valuable and your investment deserves professional management. We provide comprehensive services that maximize returns while minimizing your involvement in day-to-day operations.</p>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">{benefit.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-[var(--luxe-navy)] mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-[var(--luxe-navy)] mb-6">Already a Property Owner?</h2>
          <p className="text-lg text-gray-700 mb-8">Access your owner portal to manage properties, track tenants, and view financial reports.</p>
          <a href="/owner-login" className="inline-block bg-[var(--luxe-gold)] hover:bg-[var(--luxe-gold)]/90 text-[var(--luxe-navy)] font-semibold px-8 py-4 rounded-lg transition-colors">Owner Login</a>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-[var(--luxe-navy)] mb-6">Ready to Partner With Us?</h2>
          <p className="text-lg text-gray-700 mb-8">Schedule a consultation to discuss how we can help you achieve your investment goals.</p>
          <a href="/contact" className="inline-block bg-[var(--luxe-gold)] hover:bg-[var(--luxe-gold)]/90 text-[var(--luxe-navy)] font-semibold px-8 py-4 rounded-lg transition-colors">Schedule Consultation</a>
        </div>
      </section>
    </div>
  );
}
