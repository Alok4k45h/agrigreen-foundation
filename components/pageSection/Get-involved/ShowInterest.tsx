"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Enter a valid email"),
  interest: z.enum(["volunteer", "partner", "donate"], {
    required_error: "Please select your interest",
  }),
  message: z.string().min(10, "Message is too short"),
  honey: z.string().optional(), // honeypot
  resume: z.any().optional(),
  screenshot: z.any().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function ShowInterest() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const [selectedInterest, setSelectedInterest] = useState("");

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (data.honey) return; // spam detected

    try {
      const formData = new FormData();

      // Attach normal fields
      Object.entries(data).forEach(([key, value]) => {
        if (value && !(value instanceof FileList)) {
          formData.append(key, value as string);
        }
      });

      // Handle file validations
      if (data.resume && data.resume[0]) {
        if (data.resume[0].size > 1024 * 1024) {
          toast.error("❌ Resume/CV must be less than 1MB.");
          return;
        }
        formData.append("resume", data.resume[0]);
      }

      if (data.screenshot && data.screenshot[0]) {
        if (data.screenshot[0].size > 500 * 1024) {
          toast.error("❌ Payment screenshot must be less than 500KB.");
          return;
        }
        formData.append("screenshot", data.screenshot[0]);
      }

      // Send request
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        toast.success("Message sent successfully! A confirmation email has been sent to your inbox.");
        reset();
        setSelectedInterest("");
      } else {
        const { error } = await res.json();
        toast.error(error || "❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("❌ Network error. Please try again.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-green-700 text-center">
        Engage with our Agri Green Initiative
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input type="text" {...register("honey")} className="hidden" />

        {/* Name */}
        <div>
          <label className="block font-medium">Name</label>
          <input
            {...register("name")}
            className="w-full border rounded p-2 focus:outline-none focus:ring focus:border-green-600"
          />
          {errors.name && <p className="text-red-600 text-sm">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            {...register("email")}
            className="w-full border rounded p-2 focus:outline-none focus:ring focus:border-green-600"
          />
          {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
        </div>

        {/* Interest */}
        <div>
          <label className="block font-medium">Interest</label>
          <select
            {...register("interest")}
            value={selectedInterest}
            onChange={(e) => setSelectedInterest(e.target.value)}
            className="w-full border rounded p-2 focus:outline-none focus:ring focus:border-green-600"
          >
            <option value="">Select Interest</option>
            <option value="volunteer">Volunteer</option>
            <option value="partner">Partner</option>
            <option value="donate">Donate</option>
          </select>
          {errors.interest && <p className="text-red-600 text-sm">{errors.interest.message}</p>}
        </div>

        {/* Conditional Attachments */}
        {selectedInterest === "volunteer" && (
          <div>
            <label className="block font-medium">Upload Resume (Max 1MB)</label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              {...register("resume")}
              className="w-full border rounded p-2"
            />
          </div>
        )}

        {selectedInterest === "donate" && (
          <div>
            <label className="block font-medium">Upload Payment Screenshot (Max 500KB)</label>
            <input
              type="file"
              accept="image/*"
              {...register("screenshot")}
              className="w-full border rounded p-2"
            />
          </div>
        )}

        {/* Message */}
        <div>
          <label className="block font-medium">Message</label>
          <textarea
            {...register("message")}
            rows={5}
            className="w-full border rounded p-2 focus:outline-none focus:ring focus:border-green-600"
          />
          {errors.message && <p className="text-red-600 text-sm">{errors.message.message}</p>}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 transition text-center w-full"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>

      <p className="text-sm text-gray-600 text-center">
        We respect your privacy. Your email will never be shared.
      </p>
    </div>
  );
}
