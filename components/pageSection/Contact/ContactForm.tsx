"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  position: z.string().min(2, "Position is required"),
  address: z.string().min(5, "Address is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Phone number is required"),
  bestTimeToCall: z.string().optional(),
  query: z.string().min(10, "Query must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (res.ok) {
        toast.success("Your message has been sent!");
        reset();
      } else {
        toast.error(result.message || "Something went wrong");
      }
    } catch (err) {
      toast.error("Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-6 space-y-4"
    >
      {[
        { name: "name", type: "text", placeholder: "Your Name" },
        { name: "position", type: "text", placeholder: "Position" },
        { name: "address", type: "text", placeholder: "Address" },
        { name: "email", type: "email", placeholder: "Email" },
        { name: "phone", type: "tel", placeholder: "Phone Number" },
        { name: "bestTimeToCall", type: "text", placeholder: "Best Time to Call" },
      ].map(({ name, type, placeholder }) => (
        <div key={name}>
          <input
            {...register(name as keyof FormData)}
            type={type}
            placeholder={placeholder}
            className="w-full border-b-2 border-gray-300 bg-transparent text-green-800 placeholder-gray-500 py-2 px-1 focus:outline-none focus:border-green-500"
          />
          {errors[name as keyof FormData] && (
            <p className="text-red-500 text-sm mt-1">
              {errors[name as keyof FormData]?.message as string}
            </p>
          )}
        </div>
      ))}

      <div>
        <textarea
          {...register("query")}
          placeholder="Write your query..."
          className="w-full border-b-2 border-gray-300 bg-transparent text-green-800 placeholder-gray-500 py-2 px-1 h-28 resize-none focus:outline-none focus:border-green-500"
        />
        {errors.query && (
          <p className="text-red-500 text-sm mt-1">{errors.query.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 text-white font-bold rounded-md bg-green-600 hover:bg-green-700 transition"
      >
        {loading ? "Sending..." : "Submit"}
      </button>
    </form>
  );
}
