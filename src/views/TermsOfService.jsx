import React from 'react';
import SEO from '../components/SEO';
import FadeIn from '../components/FadeIn';

export default function ViewTermsOfService() {
  return (
    <div className="pt-40 pb-20 max-w-4xl mx-auto">
      <SEO 
        title="Terms of Service" 
        description="Terms of Service for Avlance - outlining project terms, intellectual property, payments, and agency regulations." 
      />
      <FadeIn>
        <div className="prose prose-invert max-w-none">
          <h1 className="text-4xl md:text-5xl font-garamond text-white font-medium mb-4">Terms of Service</h1>
          <p className="text-neutral-400 text-sm mb-12">Last Updated: June 21, 2026</p>

          <div className="space-y-10 text-neutral-300 leading-relaxed text-sm md:text-base">
            <section>
              <h2 className="text-xl md:text-2xl text-[#c9a96e] font-garamond font-medium mb-3">1. Agreement to Terms</h2>
              <p>
                By accessing or using the website or engaging the services of Avlance ("Agency", "we", "us", or "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl text-[#c9a96e] font-garamond font-medium mb-3">2. Service Description</h2>
              <p>
                Avlance provides digital strategy, website and mobile development, branding, design, search engine optimization, automation, and AI integration services. All services are governed by a separate client agreement, statement of work (SOW), or proposal that details specific deliverables, timelines, and costs.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl text-[#c9a96e] font-garamond font-medium mb-3">3. Payments and Billing</h2>
              <p>
                Clients agree to pay all fees associated with the project as specified in the agreed-upon proposal or SOW. Payment milestones and terms (e.g., net-15, net-30) will be outlined in individual agreements. Late payments may result in suspension of services or project delays.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl text-[#c9a96e] font-garamond font-medium mb-3">4. Intellectual Property</h2>
              <p>
                Unless stated otherwise in a written contract:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Deliverables:</strong> Upon receipt of full payment, all intellectual property rights for the finalized, custom digital deliverables transfer to the Client.</li>
                <li><strong>Agency IP:</strong> Any pre-existing tools, libraries, workflows, codebase structures, or foundational software used by Avlance to build your product remain the property of Avlance. We grant the Client a non-exclusive, royalty-free, perpetual license to use such elements as incorporated into the deliverables.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl text-[#c9a96e] font-garamond font-medium mb-3">5. Warranties and Limitation of Liability</h2>
              <p>
                Our services are provided on an "as is" and "as available" basis. While we strive to build high-quality, secure, and bug-free digital solutions, we do not warrant that our deliverables will be entirely error-free or uninterrupted. To the maximum extent permitted by law, Avlance's total liability for any claim arising out of these terms or our services shall not exceed the amount paid by the Client to Avlance for the specific service under dispute.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl text-[#c9a96e] font-garamond font-medium mb-3">6. Confidentiality</h2>
              <p>
                We agree to protect and treat as confidential all proprietary or non-public business information shared by our clients. This confidentiality obligation does not apply to information that is publicly known, already in our possession, or independently developed without reference to the client's information.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl text-[#c9a96e] font-garamond font-medium mb-3">7. Governing Law</h2>
              <p>
                These Terms of Service and any separate agreements shall be governed by and construed in accordance with the laws of [Governing Law State/Country], without regard to conflict of law principles.
              </p>
            </section>

            <section className="border-t border-neutral-900 pt-8 mt-12">
              <h2 className="text-xl md:text-2xl text-[#c9a96e] font-garamond font-medium mb-3">8. Contact Information</h2>
              <p>
                For questions, clarifications, or support regarding our terms, please contact:
              </p>
              <p className="mt-3">
                <strong>Email:</strong> <a href="mailto:[Contact Email]" className="text-[#c9a96e] hover:underline">[Contact Email]</a>
              </p>
            </section>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
