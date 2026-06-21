import React from 'react';
import SEO from '../components/SEO';
import FadeIn from '../components/FadeIn';

export default function ViewPrivacyPolicy() {
  return (
    <div className="pt-40 pb-20 max-w-4xl mx-auto">
      <SEO 
        title="Privacy Policy" 
        description="Privacy Policy for Avlance - detailing how we collect, store, and protect your information." 
      />
      <FadeIn>
        <div className="prose prose-invert max-w-none">
          <h1 className="text-4xl md:text-5xl font-garamond text-white font-medium mb-4">Privacy Policy</h1>
          <p className="text-neutral-400 text-sm mb-12">Last Updated: June 21, 2026</p>

          <div className="space-y-10 text-neutral-300 leading-relaxed text-sm md:text-base">
            <section>
              <h2 className="text-xl md:text-2xl text-[#c9a96e] font-garamond font-medium mb-3">1. Introduction</h2>
              <p>
                Welcome to Avlance. We value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or interact with our freelance technical agency services.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl text-[#c9a96e] font-garamond font-medium mb-3">2. Information We Collect</h2>
              <p className="mb-4">
                We collect information directly from you when you interact with us, including:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Contact Information:</strong> Name, email address, company name, phone number, and any details you provide via our contact forms or direct communications.</li>
                <li><strong>Project Details:</strong> Briefs, requirements, budget goals, and assets shared with us for the purpose of receiving a project proposal.</li>
                <li><strong>Usage Data:</strong> Technical information automatically collected via cookies and analytics tools, including your IP address, browser type, pages visited, and duration of visit.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl text-[#c9a96e] font-garamond font-medium mb-3">3. How We Use Your Information</h2>
              <p className="mb-4">
                We process your personal information to:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Respond to inquiries, provide project quotes, and deliver our services.</li>
                <li>Manage, personalize, and improve our website performance and user experience.</li>
                <li>Communicate project updates, invoices, and service-related notifications.</li>
                <li>Comply with legal obligations or enforce our terms of service.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl text-[#c9a96e] font-garamond font-medium mb-3">4. Cookies and Tracking</h2>
              <p>
                We use cookies to analyze web traffic and optimize your browsing experience. You can choose to accept or decline cookies through our cookie consent banner or by modifying your browser settings. Declining cookies may limit certain functionalities of our website.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl text-[#c9a96e] font-garamond font-medium mb-3">5. Data Sharing and Security</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share data with trusted service providers who assist us in operating our website, conducting our business, or servicing you, provided those parties agree to keep this information confidential. We implement industry-standard security measures to safeguard your information against unauthorized access, disclosure, or alteration.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl text-[#c9a96e] font-garamond font-medium mb-3">6. Your Rights</h2>
              <p>
                Depending on your location, you may have the right to access, correct, delete, or limit the use of your personal data. To exercise any of these rights, please contact us at the email listed below.
              </p>
            </section>

            <section className="border-t border-neutral-900 pt-8 mt-12">
              <h2 className="text-xl md:text-2xl text-[#c9a96e] font-garamond font-medium mb-3">7. Contact Us</h2>
              <p>
                If you have any questions or concerns regarding this Privacy Policy, please reach out to us:
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
