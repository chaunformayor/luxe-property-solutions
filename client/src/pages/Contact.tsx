import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";
import { trpc } from "@/lib/trpc";

interface FormData {
  name: string;
  email: string;
  phone: string;
  propertyType: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    message: "",
  });

  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Use tRPC mutation for contact form submission
  const submitContactMutation = trpc.contact.submitForm.useMutation({
    onSuccess: () => {
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", phone: "", propertyType: "", message: "" });
      setSubmitError(null);
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    },
    onError: (error) => {
      setSubmitError(error.message || "Failed to submit form. Please try again.");
      console.error("Error submitting form:", error);
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    
    try {
      await submitContactMutation.mutateAsync({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || undefined,
        propertyType: formData.propertyType || undefined,
        message: formData.message,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      <section className="bg-[var(--luxe-navy)] text-white py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">Get in touch with our team</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[var(--luxe-navy)] mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name *</label>
                  <Input 
                    required 
                    value={formData.name} 
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                    placeholder="Your name"
                    disabled={submitContactMutation.isPending}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email *</label>
                  <Input 
                    required 
                    type="email" 
                    value={formData.email} 
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                    placeholder="your@email.com"
                    disabled={submitContactMutation.isPending}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Phone</label>
                  <Input 
                    value={formData.phone} 
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })} 
                    placeholder="(555) 123-4567"
                    disabled={submitContactMutation.isPending}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Property Type</label>
                  <select 
                    className="w-full px-3 py-2 border rounded-md" 
                    value={formData.propertyType} 
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    disabled={submitContactMutation.isPending}
                  >
                    <option value="">Select property type</option>
                    <option value="single-family">Single Family Home</option>
                    <option value="multi-family">Multi-Family</option>
                    <option value="condo">Condo/Townhome</option>
                    <option value="commercial">Commercial</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Message *</label>
                  <Textarea 
                    required 
                    value={formData.message} 
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
                    placeholder="Tell us about your asset management needs..." 
                    rows={5}
                    disabled={submitContactMutation.isPending}
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={submitContactMutation.isPending}
                  className="w-full bg-[var(--luxe-gold)] hover:bg-[var(--luxe-gold)]/90 text-[var(--luxe-navy)] font-semibold text-lg py-6 disabled:opacity-50"
                >
                  {submitContactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
                
                {submitSuccess && (
                  <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-semibold text-green-800">Message Sent!</p>
                      <p className="text-sm text-green-700">Thank you for reaching out. We'll be in touch soon.</p>
                    </div>
                  </div>
                )}

                {submitError && (
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    <div>
                      <p className="font-semibold text-red-800">Error</p>
                      <p className="text-sm text-red-700">{submitError}</p>
                    </div>
                  </div>
                )}
              </form>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[var(--luxe-navy)] mb-6">Contact Information</h2>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-[var(--luxe-gold)] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Address</h3>
                      <p className="text-gray-600">555 Washington Ave<br />Suite 310<br />St. Louis, MO 63101</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-[var(--luxe-gold)] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Phone</h3>
                      <p className="text-gray-600">314-201-1239</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-[var(--luxe-gold)] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Email</h3>
                      <p className="text-gray-600">info@luxepropertysolutions.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-[var(--luxe-gold)] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Business Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM<br />Sunday: Closed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
