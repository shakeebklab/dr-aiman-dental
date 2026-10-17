"use client";

import { CircleCheck } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/Button";
import { clinic, services } from "@/lib/data";

// There is no booking backend yet, so a submitted request is handed to the
// visitor's email app, pre-filled and addressed to the clinic.
export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const field = (name: string) => String(data.get(name) ?? "").trim();

    const body = [
      `Name: ${field("name")}`,
      `Email: ${field("email")}`,
      `Phone: ${field("phone") || "-"}`,
      `Service: ${field("service")}`,
      "",
      field("message"),
    ].join("\n");

    const subject = `Appointment request: ${field("service")}`;
    window.location.href = `mailto:${clinic.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[24px] bg-white p-5 shadow-[0_24px_70px_rgba(14,56,76,0.1)] sm:rounded-[30px] sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-[#0E384C]">Full Name</span>
          <input
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your Name"
            className="form-field"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-[#0E384C]">Email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="Email Address"
            className="form-field"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-[#0E384C]">Phone</span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Phone Number"
            className="form-field"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-[#0E384C]">Service</span>
          <select name="service" className="form-field">
            {services.map((service) => (
              <option key={service.title} value={service.title}>
                {service.title.replace(/\b\w/g, (letter) => letter.toUpperCase())}
              </option>
            ))}
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-2 block text-sm font-medium text-[#0E384C]">Message</span>
          <textarea
            name="message"
            rows={6}
            required
            placeholder="Tell us a little about what you need"
            className="form-field"
          />
        </label>
      </div>
      <div className="mt-7">
        <Button type="submit">Make An Appointment</Button>
      </div>
      <AnimatePresence>
        {submitted && (
          <motion.p
            role="status"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-5 flex items-start gap-3 rounded-[18px] bg-[#EFF8FF] px-4 py-3 text-sm text-[#0E384C]"
          >
            <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#1E84B5]" />
            <span>
              Your email app should open with the request filled in. Just press send, or call us
              at{" "}
              <a href={clinic.phoneHref} className="font-semibold text-[#1E84B5] hover:underline">
                {clinic.phone}
              </a>
              .
            </span>
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
