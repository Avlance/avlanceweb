import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, Globe, Plus, Minus } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import SectionLabel from '../components/SectionLabel';
import CustomSelect from '../components/CustomSelect';
import servicesData from '../data/services';
import faqs from '../data/faqs';

const ViewContact = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle'); // idle | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.target);
    formData.append("access_key", "072e7c1b-9ff4-4ccb-9cf7-78e2ea9a981f");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await res.json();
      if (data.success) {
        setSubmitStatus('success');
        e.target.reset(); // clear form
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col gap-20 sm:gap-32 pb-20">
      <section className="pt-40 relative">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#c9a96e]/10 blur-[100px] rounded-full pointer-events-none -z-10" />
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[22vw] font-bold tracking-[0.1em] whitespace-nowrap pointer-events-none select-none" style={{ fontFamily: "'Barlow Condensed', sans-serif", color: 'rgba(255,255,255,0.015)' }}>AVLANCE</span>
        <FadeIn>
          <SectionLabel>Contact</SectionLabel>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] mb-8 max-w-3xl">
            Let's bring your vision to life.
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl leading-relaxed mb-12">
            Whether you have a detailed brief or just a rough idea — we'd love to hear from you. Fill in the form below, drop us a message, or reach out directly. We promise a real response within 24 hours, no automated replies, no runaround.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl">
            {[
              { t: '24hr response', d: 'Every enquiry gets a genuine, personalised reply within 24 hours.' },
              { t: 'No obligation', d: 'Reaching out is just a conversation — zero pressure, zero commitment.' },
              { t: 'Globally available', d: 'We work across time zones and serve clients from every corner of the world.' }
            ].map((p, i) => (
              <div key={i} className="border-l border-[#c9a96e]/40 pl-5">
                <h4 className="text-sm font-medium mb-2 text-[#c9a96e]">{p.t}</h4>
                <p className="text-xs text-neutral-500 leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-7">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-medium mb-8">Tell us about your project</h2>
            {submitStatus === 'success' ? (
              <div className="bg-[#c9a96e]/10 border border-[#c9a96e]/30 rounded-2xl p-8 text-center max-w-2xl">
                <div className="w-16 h-16 bg-[#c9a96e]/20 rounded-full flex items-center justify-center mx-auto mb-6 text-[#c9a96e]">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-2xl font-medium text-white mb-3">Enquiry Sent Successfully</h3>
                <p className="text-neutral-400">Thank you for reaching out. A specialist from our team will review your details and get back to you within 24 hours.</p>
                <button onClick={() => setSubmitStatus('idle')} className="mt-8 text-sm text-[#c9a96e] hover:text-white transition-colors">Send another enquiry</button>
              </div>
            ) : (
              <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="relative group">
                    <input type="text" name="name" id="name" required className="w-full bg-transparent border-b border-neutral-800 py-3 text-sm text-white focus:outline-none focus:border-[#c9a96e] transition-colors peer placeholder-transparent" placeholder="Name" />
                    <label htmlFor="name" className="absolute left-0 -top-3.5 text-xs text-neutral-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-neutral-600 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#c9a96e]">Your name *</label>
                  </div>
                  <div className="relative group">
                    <input type="text" name="company" id="company" className="w-full bg-transparent border-b border-neutral-800 py-3 text-sm text-white focus:outline-none focus:border-[#c9a96e] transition-colors peer placeholder-transparent" placeholder="Company" />
                    <label htmlFor="company" className="absolute left-0 -top-3.5 text-xs text-neutral-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-neutral-600 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#c9a96e]">Company / Business name</label>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="relative group">
                    <input type="email" name="email" id="email" required className="w-full bg-transparent border-b border-neutral-800 py-3 text-sm text-white focus:outline-none focus:border-[#c9a96e] transition-colors peer placeholder-transparent" placeholder="Email" />
                    <label htmlFor="email" className="absolute left-0 -top-3.5 text-xs text-neutral-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-neutral-600 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#c9a96e]">Email address *</label>
                  </div>
                  <div className="relative group">
                    <input type="tel" name="phone" id="phone" className="w-full bg-transparent border-b border-neutral-800 py-3 text-sm text-white focus:outline-none focus:border-[#c9a96e] transition-colors peer placeholder-transparent" placeholder="Phone" />
                    <label htmlFor="phone" className="absolute left-0 -top-3.5 text-xs text-neutral-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-neutral-600 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#c9a96e]">Phone / WhatsApp</label>
                  </div>
                </div>

                <CustomSelect
                  name="service_interest"
                  required={true}
                  placeholder="Select a service..."
                  label="Service(s) you're interested in"
                  hint="Can't find what you need? Just describe it in the message below."
                  options={servicesData.map(s => ({ value: s.title, label: s.title }))}
                />

                <div className="relative group mt-2">
                  <textarea name="message" id="message" rows="4" required className="w-full bg-transparent border-b border-neutral-800 py-3 text-sm text-white focus:outline-none focus:border-[#c9a96e] transition-colors peer placeholder-transparent resize-none" placeholder="Message"></textarea>
                  <label htmlFor="message" className="absolute left-0 -top-3.5 text-xs text-neutral-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-neutral-600 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#c9a96e]">Tell us about your project *</label>
                </div>

                {submitStatus === 'error' && (
                  <p className="text-red-400 text-sm mt-2">Something went wrong. Please try again or email us directly.</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-white text-black py-4 px-8 rounded-full text-sm font-medium hover:bg-[#c9a96e] transition-colors mt-4 w-full sm:w-auto self-start disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : 'Send My Enquiry →'}
                </button>
                <p className="text-[11px] text-neutral-600 text-center sm:text-left">We'll respond within 24 hours. Your information is kept private.</p>
              </form>
            )}
          </FadeIn>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-12">
          <FadeIn delay={200}>
            <h3 className="text-xl font-medium mb-6">Direct contact</h3>
            <div className="flex flex-col gap-4">
              {[
                { icon: <Mail className="w-4 h-4" />, type: 'Email', val: 'office@avlance.studio', note: 'Best for detailed enquiries', href: 'mailto:office@avlance.studio' },
                { icon: <Phone className="w-4 h-4" />, type: 'Phone', val: '+91 99947 39537', note: 'Mon–Sat, 9am–7pm IST', href: 'tel:+919994739537' },
                { icon: <MessageCircle className="w-4 h-4" />, type: 'WhatsApp', val: '+91 99947 39537', note: 'Fastest way to reach us', href: 'https://wa.me/919994739537' }
              ].map((c, i) => (
                <a
                  key={i}
                  href={c.href}
                  target={c.type === 'WhatsApp' ? "_blank" : undefined}
                  rel={c.type === 'WhatsApp' ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-5 rounded-2xl border border-neutral-800 hover:border-[#c9a96e]/40 transition-colors bg-neutral-900/30 group cursor-pointer block"
                >
                  <div className="w-10 h-10 rounded-full border border-[#c9a96e]/30 bg-[#c9a96e]/10 flex items-center justify-center text-[#c9a96e] group-hover:bg-[#c9a96e] group-hover:text-black transition-colors shrink-0">{c.icon}</div>
                  <div>
                    <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">{c.type}</p>
                    <p className="text-sm font-medium text-white mb-0.5">{c.val}</p>
                    <p className="text-[11px] text-neutral-600">{c.note}</p>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-3 px-4 py-3 rounded-full border border-[#c9a96e]/30 bg-[#c9a96e]/5 text-xs text-[#c9a96e] w-max">
              <Globe className="w-3.5 h-3.5" /> Serving clients across every time zone
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <h3 className="text-xl font-medium mb-6">Questions before reaching out?</h3>
            <div className="flex flex-col border-t border-neutral-900">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-neutral-900">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full text-left py-5 flex items-center justify-between gap-4 group"
                  >
                    <span className="text-sm font-medium group-hover:text-[#c9a96e] transition-colors pr-4">{faq.q}</span>
                    <span className="text-[#c9a96e] shrink-0">
                      {openFaq === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-sm text-neutral-500 leading-relaxed pr-8">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default ViewContact;
