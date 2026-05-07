"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How do I book an appointment?",
      answer: "Simply download the app, search for your preferred salon or barber, select a service, and pick a time slot that works for you. Your booking will be confirmed instantly.",
    },
    {
      question: "Can I cancel or reschedule my booking?",
      answer: "Yes, you can manage your bookings directly from the 'My Bookings' section in the app. Cancellations are free up to 24 hours before the appointment.",
    },
    {
      question: "How do I pay for the services?",
      answer: "You can pay securely within the app using credit/debit cards, Apple Pay, or Google Pay. Some salons also offer the option to pay at the venue.",
    },
    {
      question: "Are the barbers on the platform verified?",
      answer: "Absolutely. We verify every barber and salon on our platform. You can also view their portfolios and read reviews from other clients before booking.",
    },
    {
      question: "How can I get support for a technical issue?",
      answer: "If you encounter any technical issues with the app, you can contact our support team via the 'Contact Us' form on our website or through the 'Help' section in the app settings.",
    },
  ];

  return (
    <section className="py-24 bg-[#0B0B0C]">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-glass rounded-2xl border border-white/5 overflow-hidden transition-all"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-bold">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-accent" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6 text-gray-400 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
