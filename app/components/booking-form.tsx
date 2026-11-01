"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
  "Carpet Cleaning",
  "Tile & Grout Cleaning",
  "Upholstery Cleaning",
  "Air Duct Cleaning",
  "Artificial Turf Cleaning",
  "Luxury Vinyl Plank",
  "Water Damage Restoration",
  "Mold Remediation"
];

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-6 shadow-soft md:p-8">
    <div className="mb-6">
      <p className="eyebrow">Booking request</p>
      <h2 className="mt-2 text-2xl font-black text-navy">Tell us what you need</h2>
      <p className="mt-2 text-sm leading-6 text-slate-500">Share your preferred service and timing. We’ll confirm availability with you.</p>
    </div>
    <div className="grid gap-4 sm:grid-cols-2">
      <label className="text-xs font-bold text-navy sm:col-span-2">Service
        <select className="field mt-2" name="service" required defaultValue="">
          <option value="" disabled>Select a service</option>
          {services.map(service => <option key={service} value={service}>{service}</option>)}
        </select>
      </label>
      <label className="text-xs font-bold text-navy">Preferred date
        <input className="field mt-2" type="date" name="date" required />
      </label>
      <label className="text-xs font-bold text-navy">Preferred time
        <select className="field mt-2" name="time" required defaultValue="">
          <option value="" disabled>Select a time window</option>
          <option>Morning (8am–12pm)</option>
          <option>Afternoon (12pm–6pm)</option>
          <option>Flexible</option>
        </select>
      </label>
      <label className="text-xs font-bold text-navy">Full name
        <input className="field mt-2" type="text" name="name" autoComplete="name" placeholder="Your name" required />
      </label>
      <label className="text-xs font-bold text-navy">Phone number
        <input className="field mt-2" type="tel" name="phone" autoComplete="tel" placeholder="Your phone number" required />
      </label>
      <label className="text-xs font-bold text-navy sm:col-span-2">Email address
        <input className="field mt-2" type="email" name="email" autoComplete="email" placeholder="you@example.com" required />
      </label>
      <label className="text-xs font-bold text-navy sm:col-span-2">Service address
        <input className="field mt-2" type="text" name="address" autoComplete="street-address" placeholder="Street address" required />
      </label>
      <label className="text-xs font-bold text-navy">City
        <input className="field mt-2" type="text" name="city" autoComplete="address-level2" placeholder="City" required />
      </label>
      <label className="text-xs font-bold text-navy">ZIP code
        <input className="field mt-2" type="text" name="postalCode" autoComplete="postal-code" inputMode="numeric" placeholder="ZIP code" required />
      </label>
      <label className="text-xs font-bold text-navy sm:col-span-2">Additional details <span className="font-normal text-slate-400">(optional)</span>
        <textarea className="field mt-2 min-h-24 resize-y" name="details" placeholder="Tell us about the areas or any special requests." />
      </label>
    </div>
    <button className="btn-primary mt-6 w-full" type="submit">REQUEST AVAILABILITY <ArrowRight size={15}/></button>
    {submitted && <div role="status" className="mt-4 rounded-xl bg-[#f7fbf3] p-4 text-sm text-navy">
      <p className="flex items-center gap-2 font-bold"><CheckCircle2 size={18} className="shrink-0 text-[#65b916]"/>Your booking request is ready.</p>
      <p className="mt-2 leading-6 text-slate-600">This website form does not send requests yet. Please call <a href="tel:5203909976" className="font-bold text-navy underline">520-390-9976</a> to confirm your appointment.</p>
    </div>}
  </form>;
}
