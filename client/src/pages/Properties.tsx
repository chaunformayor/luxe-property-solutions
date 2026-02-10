import { Card, CardContent } from "@/components/ui/card";

export default function Properties() {
  return (
    <div>
      <section className="bg-[var(--luxe-navy)] text-white py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Properties</h1>
          <p className="text-xl max-w-3xl mx-auto">Discover our portfolio of premium managed properties</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-[var(--luxe-navy)] mb-6">Featured Properties Under Management</h2>
            <p className="text-lg text-gray-700">We manage a diverse portfolio of premium residential and commercial properties, each maintained to the highest standards.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <span className="text-white text-4xl">🏢</span>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-[var(--luxe-navy)] mb-2">Modern Luxury Apartments</h3>
                <p className="text-gray-600 mb-4">Premium multi-family residence featuring state-of-the-art amenities and exceptional finishes.</p>
                <div className="text-sm text-gray-500 mb-4">
                  <p>• 24-hour concierge</p>
                  <p>• Fitness center & pool</p>
                  <p>• Covered parking</p>
                </div>
                <div className="border-t pt-4">
                  <p className="text-[var(--luxe-gold)] font-bold text-lg">$2,500 - $4,200/mo</p>
                  <button className="mt-3 w-full bg-[var(--luxe-gold)] hover:bg-[var(--luxe-gold)]/90 text-[var(--luxe-navy)] font-semibold py-2 rounded transition-colors">
                    Inquire Now
                  </button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                <span className="text-white text-4xl">🏡</span>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-[var(--luxe-navy)] mb-2">Executive Residences</h3>
                <p className="text-gray-600 mb-4">Upscale residential community designed for professionals seeking luxury and convenience.</p>
                <div className="text-sm text-gray-500 mb-4">
                  <p>• Smart home technology</p>
                  <p>• Gourmet kitchens</p>
                  <p>• Private balconies</p>
                </div>
                <div className="border-t pt-4">
                  <p className="text-[var(--luxe-gold)] font-bold text-lg">$3,500 - $5,500/mo</p>
                  <button className="mt-3 w-full bg-[var(--luxe-gold)] hover:bg-[var(--luxe-gold)]/90 text-[var(--luxe-navy)] font-semibold py-2 rounded transition-colors">
                    Inquire Now
                  </button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                <span className="text-white text-4xl">🏘️</span>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-[var(--luxe-navy)] mb-2">Premium Townhomes</h3>
                <p className="text-gray-600 mb-4">Elegant townhome community offering spacious living with modern amenities.</p>
                <div className="text-sm text-gray-500 mb-4">
                  <p>• Private garages</p>
                  <p>• Community clubhouse</p>
                  <p>• Pet-friendly</p>
                </div>
                <div className="border-t pt-4">
                  <p className="text-[var(--luxe-gold)] font-bold text-lg">$2,800 - $3,800/mo</p>
                  <button className="mt-3 w-full bg-[var(--luxe-gold)] hover:bg-[var(--luxe-gold)]/90 text-[var(--luxe-navy)] font-semibold py-2 rounded transition-colors">
                    Inquire Now
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-[var(--luxe-navy)] mb-6">Interested in Our Properties?</h2>
          <p className="text-lg text-gray-700 mb-8">Contact us to learn more about available units or to discuss adding your property to our portfolio.</p>
          <a href="/contact" className="inline-block bg-[var(--luxe-gold)] hover:bg-[var(--luxe-gold)]/90 text-[var(--luxe-navy)] font-semibold px-8 py-4 rounded-lg transition-colors">Get in Touch</a>
        </div>
      </section>
    </div>
  );
}
