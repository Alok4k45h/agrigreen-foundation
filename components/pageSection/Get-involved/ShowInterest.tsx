"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Enter a valid email"),
  interest: z.enum(["volunteer", "partner", "donate"], {
    required_error: "Please select your interest",
  }),
  message: z.string().min(10, "Message is too short"),
  honey: z.string().optional(), // honeypot
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

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (data.honey) return; // spam detected


    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (res.ok) {
      toast.success("Message sent successfully!");
      reset();
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-green-700 text-center">Engage on our Agroforestry mission</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input type="text" {...register("honey")} className="hidden" />

        <div>
          <label className="block font-medium">Name</label>
          <input
            {...register("name")}
            className="w-full border rounded p-2 focus:outline-none focus:ring focus:border-green-600"
          />
          {errors.name && <p className="text-red-600 text-sm">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            {...register("email")}
            className="w-full border rounded p-2 focus:outline-none focus:ring focus:border-green-600"
          />
          {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block font-medium">Interest</label>
          <select
            {...register("interest")}
            className="w-full border rounded p-2 focus:outline-none focus:ring focus:border-green-600"
          >
            <option value="">Select Interest</option>
            <option value="volunteer">Volunteer</option>
            <option value="partner">Partner</option>
            <option value="donate">Donate</option>
          </select>
          {errors.interest && <p className="text-red-600 text-sm">{errors.interest.message}</p>}
        </div>

        <div>
          <label className="block font-medium">Message</label>
          <textarea
            {...register("message")}
            rows={5}
            className="w-full border rounded p-2 focus:outline-none focus:ring focus:border-green-600"
          />
          {errors.message && <p className="text-red-600 text-sm">{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 transition text-center"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>

      <p className="text-sm text-gray-600">
        We respect your privacy. Your email will never be shared.
      </p>
    </div>
  );
}
