import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Shield, Target } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Shield className="w-10 h-10 text-[var(--luxe-gold)]" />,
      title: "Integrity",
      description: "We operate with complete transparency and honesty in all our dealings.",
    },
    {
      icon: <Target className="w-10 h-10 text-[var(--luxe-gold)]" />,
      title: "Excellence",
      description: "We strive for perfection in every aspect of asset management.",
    },
    {
      icon: <Heart className="w-10 h-10 text-[var(--luxe-gold)]" />,
      title: "Care",
      description: "We treat every property as if it were our own, with meticulous attention to detail.",
    },
    {
      icon: <Award className="w-10 h-10 text-[var(--luxe-gold)]" />,
      title: "Results",
      description: "We deliver measurable outcomes that exceed our clients' expectations.",
    },
  ];

  return (
    <div>
      <section className="bg-[var(--luxe-navy)] text-white py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-xl max-w-3xl mx-auto">Your trusted partner in premium asset management</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-[var(--luxe-navy)] mb-8">Our Story</h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>Luxe Property Solutions was founded with a singular vision: to revolutionize asset management by combining cutting-edge technology with personalized, white-glove service.</p>
            <p>Since our inception, we've built a reputation for delivering exceptional results through our commitment to transparency, professionalism, and innovation.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="border-t-4 border-[var(--luxe-gold)]">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[var(--luxe-navy)] mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">To provide property owners with comprehensive, transparent, and results-driven asset management services that maximize investment returns.</p>
              </CardContent>
            </Card>
            <Card className="border-t-4 border-[var(--luxe-gold)]">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[var(--luxe-navy)] mb-4">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">To be the most trusted asset management company, known for our unwavering commitment to excellence and client satisfaction.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-center text-[var(--luxe-navy)] mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-[var(--luxe-navy)] mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

