import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  Phone,
  FileText,
  Home,
  ClipboardCheck,
  DollarSign,
  HelpCircle,
  Shield,
} from "lucide-react";
import Layout from "@/components/Layout";

const steps = [
  {
    icon: FileText,
    step: "01",
    title: "Obtain Your Voucher",
    description:
      "Contact your local Public Housing Authority (PHA) to apply for a Housing Choice Voucher. Once approved, you will receive a voucher specifying the bedroom size and payment standard.",
  },
  {
    icon: Home,
    step: "02",
    title: "Find a Property",
    description:
      "Browse our available properties that meet your voucher's bedroom size and rent requirements. All Luxe Property Solutions properties are HCV-eligible.",
  },
  {
    icon: Phone,
    step: "03",
    title: "Contact Us",
    description:
      "Reach out to our leasing team. We are experienced in working with Housing Choice Voucher programs and will walk you through what documents we need from you and your PHA.",
  },
  {
    icon: ClipboardCheck,
    step: "04",
    title: "Complete Your Application",
    description:
      "Submit our standard rental application online. Select 'I have a housing voucher' to include your voucher details. The same $75 application fee applies.",
  },
  {
    icon: Shield,
    step: "05",
    title: "HQS Inspection",
    description:
      "Your PHA will schedule a Housing Quality Standards (HQS) inspection of the unit. Our properties are maintained to exceed HQS requirements, making approval straightforward.",
  },
  {
    icon: DollarSign,
    step: "06",
    title: "Execute Lease & Move In",
    description:
      "Once the inspection passes, we execute the lease and a Housing Assistance Payments (HAP) contract with your PHA. You pay only your portion of the rent directly to us.",
  },
];

const faqs = [
  {
    q: "Do you accept Section 8 / Housing Choice Vouchers?",
    a: "Yes. Luxe Property Solutions proudly works with Housing Choice Voucher (HCV) holders, including Section 8, VASH (Veterans Affairs Supportive Housing), and other housing assistance programs.",
  },
  {
    q: "Which properties are voucher-eligible?",
    a: "All of our rental properties are available to voucher holders, provided the unit meets your voucher's bedroom size and the rent is within your PHA's approved payment standard.",
  },
  {
    q: "Does my voucher cover the full rent?",
    a: "Your PHA determines the Housing Assistance Payment (HAP) based on local payment standards and your household income. You are responsible for paying the difference between the HAP and the contract rent directly to us.",
  },
  {
    q: "Is there still an application fee?",
    a: "Yes. A $75 non-refundable application fee covers processing and a background/credit check for all applicants, including voucher holders.",
  },
  {
    q: "What documents will I need to provide?",
    a: "You will need your voucher paperwork from your PHA (including Request for Tenancy Approval / RFTA form), a valid photo ID, proof of income, and contact information for your PHA case worker.",
  },
  {
    q: "How long does the HQS inspection take?",
    a: "Inspection scheduling depends on your PHA, but typically takes 5–10 business days after the tenancy approval is submitted. Our properties are well-maintained and almost always pass on the first inspection.",
  },
  {
    q: "Who do I contact at my PHA?",
    a: "Your PHA should have assigned you a case worker when your voucher was issued. If you are unsure, contact your PHA's main office and provide your voucher number. We are happy to assist in coordinating with your PHA.",
  },
];

const accepted = [
  "Section 8 / Housing Choice Voucher (HCV)",
  "Veterans Affairs Supportive Housing (VASH)",
  "Emergency Housing Vouchers (EHV)",
  "Project-Based Vouchers (PBV)",
  "Other local or state housing assistance programs",
];

export default function Vouchers() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-[var(--luxe-navy)] text-white py-20">
        <div className="container text-center">
          <div className="inline-flex items-center gap-2 bg-[var(--luxe-gold)]/20 border border-[var(--luxe-gold)]/40 text-[var(--luxe-gold)] px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <CheckCircle className="w-4 h-4" /> Vouchers Welcome
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Housing Choice Voucher Holders
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-white/80">
            Luxe Property Solutions proudly accepts Section 8, HCV, VASH, and other housing assistance vouchers. We are committed to fair housing and making quality homes accessible to all residents.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <a
              href="/apply"
              className="inline-block bg-[var(--luxe-gold)] hover:bg-[var(--luxe-gold)]/90 text-[var(--luxe-navy)] font-bold px-8 py-4 rounded-lg transition-colors"
            >
              Apply Now
            </a>
            <a
              href="/contact"
              className="inline-block border-2 border-white/60 hover:border-white text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Contact Our Leasing Team
            </a>
          </div>
        </div>
      </section>

      {/* Accepted Programs */}
      <section className="py-16 bg-[var(--luxe-gold)]/10 border-y border-[var(--luxe-gold)]/20">
        <div className="container max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-[var(--luxe-navy)] mb-6">Voucher Programs We Accept</h2>
          <ul className="space-y-3">
            {accepted.map((program) => (
              <li key={program} className="flex items-center gap-3 justify-center text-gray-700 text-lg">
                <CheckCircle className="w-5 h-5 text-[var(--luxe-gold)] flex-shrink-0" />
                {program}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[var(--luxe-navy)] mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From voucher in hand to keys in hand — here is the step-by-step process for renting with a housing voucher through Luxe Property Solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((s) => {
              const Icon = s.icon;
              return (
                <Card key={s.step} className="relative hover:shadow-xl transition-shadow border-t-4 border-[var(--luxe-gold)]">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--luxe-navy)] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[var(--luxe-gold)]" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[var(--luxe-gold)] tracking-widest mb-1">STEP {s.step}</p>
                        <h3 className="text-lg font-bold text-[var(--luxe-navy)] mb-2">{s.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{s.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* What to Bring */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-bold text-[var(--luxe-navy)] mb-6">What to Bring</h2>
              <p className="text-gray-600 mb-6">
                To get started, please have the following ready when you contact us or submit your application:
              </p>
              <ul className="space-y-3">
                {[
                  "Current housing voucher issued by your PHA",
                  "Request for Tenancy Approval (RFTA) form",
                  "Valid government-issued photo ID",
                  "PHA case worker name and contact info",
                  "Recent proof of income (pay stubs, benefits letter, etc.)",
                  "Completed online rental application",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-[var(--luxe-gold)] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <Card className="border-2 border-[var(--luxe-navy)]">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[var(--luxe-navy)] mb-4">Our Commitment to Fair Housing</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Luxe Property Solutions is committed to equal housing opportunity. We do not discriminate on the basis of race, color, religion, sex, national origin, disability, familial status, source of income, or any other protected class under federal, state, or local law.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Voucher holders are welcome in all of our properties. We are experienced in working with PHAs across the region and are here to make the process as smooth as possible for you.
                </p>
                <div className="mt-5 pt-4 border-t flex items-center gap-3 text-[var(--luxe-navy)]">
                  <Shield className="w-5 h-5 text-[var(--luxe-gold)]" />
                  <span className="text-sm font-semibold">Equal Housing Opportunity Provider</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <HelpCircle className="w-10 h-10 text-[var(--luxe-gold)] mx-auto mb-3" />
            <h2 className="text-4xl font-bold text-[var(--luxe-navy)]">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group border rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-[var(--luxe-navy)] hover:bg-gray-50 transition list-none">
                  {faq.q}
                  <span className="ml-3 text-[var(--luxe-gold)] text-xl group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <div className="px-5 pb-5 text-gray-600 leading-relaxed text-sm">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--luxe-navy)] text-white text-center">
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--luxe-gold)] mb-4">
            Ready to Find Your New Home?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Start your application today. Select the voucher option in the form and enter your PHA details — we'll take it from there.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/apply"
              className="inline-block bg-[var(--luxe-gold)] hover:bg-[var(--luxe-gold)]/90 text-[var(--luxe-navy)] font-bold px-8 py-4 rounded-lg transition-colors"
            >
              Start Application
            </a>
            <a
              href="/contact"
              className="inline-block border-2 border-white/60 hover:border-white text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
