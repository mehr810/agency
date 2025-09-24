/* eslint-disable */
"use client";

import React, { JSX, useMemo, useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["100", "400", "700"] });

type FaqItem = { id: string; question: string; answer: string };

export default function ContactFaq(): JSX.Element {
  const [activeIds, setActiveIds] = useState<Set<string>>(new Set(["q1"]));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subscribe, setSubscribe] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [toast, setToast] = useState<string>("");
  const [submitting, setSubmitting] = useState(false);

  const toggleId = (id: string) => {
    setActiveIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const faqs: FaqItem[] = useMemo(
    () => [
      {
        id: "q1",
        question: "What Services Do You Offer?",
        answer:
          "We provide full-funnel support including digital marketing, branding, social media management, SEO, website development, service design, and 24/7 customer support. Each solution is tailored to help businesses grow leads, conversions, and customer loyalty.",
      },
      {
        id: "q2",
        question: "How Long Does A Website Project Take?",
        answer:
          "Most websites take 4–8 weeks depending on complexity, features, and client feedback. Smaller sites may be ready faster, while advanced e-commerce or custom builds can take longer. We’ll give you a clear timeline after reviewing your project.",
      },
      {
        id: "q3",
        question: "Do You Work With International Clients?",
        answer:
          "Yes. We work with clients worldwide, offering flexible communication channels and 24/7 support. Our team manages time zone differences seamlessly, ensuring smooth collaboration and timely delivery no matter where you are.",
      },
      {
        id: "q4",
        question: "Can You Redesign My Existing Website?",
        answer:
          "Absolutely. We specialize in refreshing outdated websites with modern, responsive designs. Whether you need a visual update, better performance, or SEO optimization, we can rebuild your site to meet today’s digital standards and attract more visitors.",
      },
      {
        id: "q5",
        question: "How Do I Get Started?",
        answer:
          "Simply reach out via our contact form, email, or phone. We’ll schedule a quick discovery call to understand your goals and recommend the right services. From there, we provide a tailored plan and get started.",
      },
      {
        id: "q6",
        question: "Do You Provide Ongoing Support After The Launch?",
        answer:
          "Yes. We offer maintenance packages, SEO monitoring, and customer support to ensure your website and campaigns keep performing. Our 24/7 team is available for troubleshooting, updates, and continued optimization after launch.",
      },
    ],
    []
  );

  function validate(): boolean {
    const next: typeof errors = {};
    if (!name.trim()) next.name = "Please enter your name";
    if (!/\S+@\S+\.\S+/.test(email)) next.email = "Enter a valid email";
    if (message.trim().length < 10) next.message = "Message should be at least 10 characters";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    try {
      setSubmitting(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, subscribe }),
      });

      if (!res.ok) {
        const { error } = await res.json();
        throw new Error(error || "Failed to send message");
      }

      setName("");
      setEmail("");
      setMessage("");
      setSubscribe(false);
      setToast("Message sent!");
      setTimeout(() => setToast(""), 2500);
    } catch (err: any) {
      setToast(`Error: ${err.message}`);
      setTimeout(() => setToast(""), 3000);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className={`${inter.className} min-h-screen text-white`}>
      <main className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-8 md:grid-cols-[590px_1fr] md:px-6 md:py-12 items-start">
        {/* Contact Card */}
        <section
          aria-labelledby="contact-heading"
          className="w-full max-w-[590px] min-h-[630px] rounded-2xl bg-[#1b1b1e] p-6 shadow-2xl md:p-7"
        >
          <div className="mb-1 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-300 shadow-[0_0_0_6px_rgba(255,210,46,0.15)]" />
            <h2 id="contact-heading" className="text-lg font-semibold tracking-wide text-[#DCDCDC]">
              Get in touch
            </h2>
          </div>
          <h3 className="mt-1 text-xl font-bold sm:text-2xl">Tell Details About Your Project</h3>
          <p className="mt-2 text-sm text-zinc-400">
            Connect with us for smart digital marketing solutions that grow your brand.
          </p>

          <form onSubmit={onSubmit} className="mt-6 grid gap-4" noValidate>
            <label className="grid gap-2">
              <span className="text-sm">Full Name</span>
              <input
                className="w-full border-b-2 border-[#2b2b2f] bg-transparent py-2 text-zinc-100 outline-none transition focus:border-yellow-300"
                value={name}
                onChange={e => setName(e.target.value)}
                name="name"
                autoComplete="name"
                required
              />
              <small className="h-4 text-xs text-rose-300">{errors.name}</small>
            </label>

            <label className="grid gap-2">
              <span className="text-sm">Your Email</span>
              <input
                className="w-full border-b-2 border-[#2b2b2f] bg-transparent py-2 text-zinc-100 outline-none transition focus:border-yellow-300"
                value={email}
                onChange={e => setEmail(e.target.value)}
                name="email"
                type="email"
                autoComplete="email"
                required
              />
              <small className="h-4 text-xs text-rose-300">{errors.email}</small>
            </label>

            <label className="grid gap-2">
              <span className="text-sm">Message</span>
              <textarea
                className="w-full resize-y border-b-2 border-[#2b2b2f] bg-transparent text-zinc-100 outline-none transition focus:border-yellow-300"
                rows={3}
                value={message}
                onChange={e => setMessage(e.target.value)}
                name="message"
                required
              />
              <small className="h-4 text-xs text-rose-300">{errors.message}</small>
            </label>

            <label className="flex items-center gap-2 text-sm text-zinc-400">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-2 border-zinc-600 text-yellow-300 focus:ring-yellow-200"
                checked={subscribe}
                onChange={e => setSubscribe(e.target.checked)}
                name="subscribe"
              />
              <span>Subscribe to Newsletter</span>
            </label>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex h-[54px] w-full items-center justify-center gap-2 rounded-full bg-yellow-300 font-semibold text-black shadow-yellow-300/30 transition hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,210,46,0.35)] disabled:opacity-70 sm:w-[181px]"
              >
                <span className="grid h-7 w-7 place-items-center rounded-full bg-white">➜</span>
                <span>{submitting ? "Sending…" : "Submit Now"}</span>
              </button>
            </div>
          </form>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="mb-3 text-2xl font-bold text-[#2c2d31] sm:text-4xl">
            Learn More From FAQs
          </h2>

          <div
            role="tablist"
            aria-label="FAQ categories"
            className="relative inline-flex items-center gap-7 border-b border-[#2b2b2f] pb-3"
          >
            <button role="tab" aria-selected className="font-bold text-lg text-[#2A2A2A] sm:text-2xl">
              General Ask
            </button>
            <span aria-hidden className="absolute -bottom-[2px] left-0 h-[3px] w-[141px] rounded bg-yellow-300" />
          </div>

          <div role="tabpanel" aria-labelledby="faq-heading" className="mt-2">
  <div className="space-y-2 sm:space-y-3">
    {faqs.map(item => {
      const open = activeIds.has(item.id);
      return (
        <div
          key={item.id}
          className="overflow-hidden rounded-xl border border-[#2c2d31] bg-[#222327]"
        >
          <button
            type="button"
            onClick={() => toggleId(item.id)}
            className="flex w-full items-center gap-2 sm:gap-3 p-3 sm:p-4 text-left"
            aria-expanded={open}
            aria-controls={`panel-${item.id}`}
          >
            <span className="rounded-md bg-[#2b2c30] px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-xs font-bold text-zinc-200">
              {item.id.slice(1).padStart(2, "0")}
            </span>
            <span className="font-medium text-sm sm:text-base md:text-lg">
              {item.question}
            </span>
            <span
              aria-hidden
              className="ml-auto grid h-7 w-7 sm:h-[29px] sm:w-[29px] place-items-center rounded-full bg-[#FFDE21] text-base sm:text-lg font-bold text-black"
            >
              {open ? "✕" : "+"}
            </span>
          </button>
          {open && (
  <div
    id={`panel-${item.id}`}
    className="px-3 sm:px-4 pb-3 sm:pb-4 text-sm sm:text-base leading-relaxed text-white break-words"
  >
    {item.answer}
  </div>
)}

        </div>
      );
    })}
  </div>
</div>

        </section>
      </main>

      {/* Toast */}
      {toast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-5 right-5 rounded-lg border border-emerald-800/60 bg-[#1f1f22] px-4 py-3 text-emerald-100 shadow-2xl"
        >
          {toast}
        </div>
      )}
    </div>
  );
}
