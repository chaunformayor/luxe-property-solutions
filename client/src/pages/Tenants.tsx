import { Card, CardContent } from "@/components/ui/card";
import { Home, Wrench, CreditCard, MessageCircle, CheckCircle, Shield } from "lucide-react";

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
          <p className="text-xl max-w-3xl mx-auto mb-8">Experience exceptional service and quality living</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/apply" className="inline-block bg-[var(--luxe-gold)] hover:bg-[var(--luxe-gold)]/90 text-[var(--luxe-navy)] font-bold px-8 py-4 rounded-lg transition-colors text-lg">
              Apply Now
            </a>
            <a href="/properties" className="inline-block border-2 border-white/60 hover:border-white text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg">
              View Properties
            </a>
          </div>
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

      {/* Voucher Holders Section */}
      <section className="py-20 bg-[var(--luxe-navy)] text-white">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[var(--luxe-gold)]/20 border border-[var(--luxe-gold)]/40 text-[var(--luxe-gold)] px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
                <CheckCircle className="w-4 h-4" /> Vouchers Welcome
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                We Accept Housing Choice Vouchers
              </h2>
              <p className="text-white/80 text-lg mb-6">
                Luxe Property Solutions proudly works with Housing Choice Voucher (HCV) holders, including Section 8, VASH, and other housing assistance programs. All of our properties are voucher-eligible.
              </p>
              <ul className="space-y-2 mb-8">
                {["Section 8 / Housing Choice Voucher (HCV)", "VASH (Veterans Affairs Supportive Housing)", "Emergency Housing Vouchers (EHV)", "Other state and local assistance programs"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-white/80">
                    <CheckCircle className="w-4 h-4 text-[var(--luxe-gold)] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex gap-4 flex-wrap">
                <a href="/vouchers" className="inline-block bg-[var(--luxe-gold)] hover:bg-[var(--luxe-gold)]/90 text-[var(--luxe-navy)] font-bold px-6 py-3 rounded-lg transition-colors">
                  Voucher Holder Info
                </a>
                <a href="/apply" className="inline-block border-2 border-white/60 hover:border-white text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                  Apply Now
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-5">
                  <Shield className="w-8 h-8 text-[var(--luxe-gold)] mb-3" />
                  <h3 className="font-bold text-lg mb-2">Fair Housing Commitment</h3>
                  <p className="text-white/70 text-sm">We do not discriminate based on source of income. Voucher holders receive the same quality of service and access to properties as all other tenants.</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-5">
                  <CheckCircle className="w-8 h-8 text-[var(--luxe-gold)] mb-3" />
                  <h3 className="font-bold text-lg mb-2">HQS-Ready Properties</h3>
                  <p className="text-white/70 text-sm">Our properties are maintained to exceed Housing Quality Standards, making PHA inspections smooth and approvals fast.</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-5">
                  <CreditCard className="w-8 h-8 text-[var(--luxe-gold)] mb-3" />
                  <h3 className="font-bold text-lg mb-2">PHA Coordination</h3>
                  <p className="text-white/70 text-sm">Our leasing team handles all coordination with your PHA — from the RFTA form to HAP contract execution — so you can focus on your move.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--luxe-gold)]/10">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-[var(--luxe-navy)] mb-4">Ready to Find Your New Home?</h2>
          <p className="text-lg text-gray-700 mb-8">Start your application online in minutes. A $75 fee covers processing and your background check.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/apply" className="inline-block bg-[var(--luxe-navy)] hover:bg-[var(--luxe-navy)]/90 text-white font-bold px-10 py-4 rounded-lg transition-colors text-lg">
              Apply Now
            </a>
            <a href="/properties" className="inline-block bg-[var(--luxe-gold)] hover:bg-[var(--luxe-gold)]/90 text-[var(--luxe-navy)] font-semibold px-8 py-4 rounded-lg transition-colors">View Properties</a>
            <a href="/contact" className="inline-block border-2 border-[var(--luxe-navy)] hover:bg-[var(--luxe-navy)] hover:text-white text-[var(--luxe-navy)] font-semibold px-8 py-4 rounded-lg transition-colors">Contact Us</a>
          </div>
        </div>
      </section>
    </div>
  );
}
