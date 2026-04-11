"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  travelDates: string;
  travellers: string;
  holidayType: string;
  message: string;
}

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data: FormData) => {
    console.log("Form submitted:", data);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-dark mb-2">Thank You!</h3>
        <p className="text-dark/60">
          Your enquiry has been received. Michael will be in touch within 24 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 text-terra hover:text-terra-dark font-semibold"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-dark mb-1">Name *</label>
          <input
            {...register("name", { required: "Name is required" })}
            className="w-full border border-border rounded px-4 py-2.5 text-[15px] focus:outline-none focus:ring-2 focus:ring-terra/30 focus:border-terra"
            placeholder="Your full name"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-dark mb-1">Email *</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="w-full border border-border rounded px-4 py-2.5 text-[15px] focus:outline-none focus:ring-2 focus:ring-terra/30 focus:border-terra"
            placeholder="you@example.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-dark mb-1">Phone</label>
          <input
            {...register("phone")}
            className="w-full border border-border rounded px-4 py-2.5 text-[15px] focus:outline-none focus:ring-2 focus:ring-terra/30 focus:border-terra"
            placeholder="+1 234 567 890"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-dark mb-1">Travel Dates</label>
          <input
            {...register("travelDates")}
            className="w-full border border-border rounded px-4 py-2.5 text-[15px] focus:outline-none focus:ring-2 focus:ring-terra/30 focus:border-terra"
            placeholder="e.g. March 2026"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-dark mb-1">Number of Travellers</label>
          <input
            {...register("travellers")}
            className="w-full border border-border rounded px-4 py-2.5 text-[15px] focus:outline-none focus:ring-2 focus:ring-terra/30 focus:border-terra"
            placeholder="e.g. 2 adults, 1 child"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-dark mb-1">Holiday Type</label>
          <select
            {...register("holidayType")}
            className="w-full border border-border rounded px-4 py-2.5 text-[15px] focus:outline-none focus:ring-2 focus:ring-terra/30 focus:border-terra bg-white"
          >
            <option value="">Select a type...</option>
            <option value="lifestyle">Lifestyle Holiday</option>
            <option value="family">Family Holiday</option>
            <option value="honeymoon">Honeymoon</option>
            <option value="australia-nz">Australia & New Zealand</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-dark mb-1">Message</label>
        <textarea
          {...register("message")}
          rows={5}
          className="w-full border border-border rounded px-4 py-2.5 text-[15px] focus:outline-none focus:ring-2 focus:ring-terra/30 focus:border-terra"
          placeholder="Tell us about your dream Australian holiday..."
        />
      </div>
      <button
        type="submit"
        className="bg-terra text-white px-8 py-3 rounded font-semibold hover:bg-terra-dark transition-colors"
      >
        Send Enquiry
      </button>
    </form>
  );
}
