// In apps/frontend/src/components/ConsultationForm.tsx
"use client";

import {useState, FormEvent} from "react";
import {useMutation} from "@tanstack/react-query";

// --- The Mutation Function (remains the same) ---
type SubmissionData = {name: string; email: string; phone: string};

const submitBookingForm = async (formData: SubmissionData) => {
  const data = new FormData();
  data.append("your-name", formData.name);
  data.append("your-email", formData.email);
  data.append("your-phone", formData.phone);

  // IMPORTANT: Replace '123' with your actual Contact Form 7 ID
  const response = await fetch(
    "http://localhost:8080/wp-json/contact-form-7/v1/contact-forms/123/feedback",
    {
      method: "POST",
      body: data,
    },
  );

  const responseData = await response.json();
  if (responseData.status !== "mail_sent") {
    throw new Error(responseData.message || "An error occurred.");
  }
  return responseData;
};
// ----------------------------------------------------

export default function FormBooking() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const {
    mutate,
    isPending,
    isSuccess,
    isError,
    error,
    data: successData,
  } = useMutation({
    mutationFn: submitBookingForm,
    onSuccess: () => {
      // This code block will run only after the API call succeeds.
      console.log("Submission successful! Resetting form.");

      // Clear the form fields by resetting their state variables
      setName("");
      setEmail("");
      setPhone("");
    },
    onError: (error) => {
      console.error("An error occurred:", error);
    },
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutate({name, email, phone});
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row items-center gap-4 md:max-h-[44px] h-[3vw]"
      >
        <input
          type="text"
          name="your-name"
          placeholder="Name"
          value={name} // The value is tied to state
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full h-full md:w-1/3 bg-transparent border border-primary-mid-pink rounded-[5px] text-sm text-white placeholder:text-white px-5 py-1 focus:outline-none focus:border-primary-mid-pink transition-colors"
        />
        <input
          type="email"
          name="your-email"
          placeholder="Email"
          value={email} // The value is tied to state
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full h-full md:w-1/3 bg-transparent border border-primary-mid-pink rounded-[5px] text-sm text-white placeholder:text-white px-5 py-1 focus:outline-none focus:border-primary-mid-pink transition-colors"
        />
        <input
          type="tel"
          name="your-phone"
          placeholder="Phone"
          value={phone} // The value is tied to state
          onChange={(e) => setPhone(e.target.value)}
          required
          className="w-full h-full md:w-1/3 bg-transparent border border-primary-mid-pink rounded-[5px] text-sm text-white placeholder:text-white px-5 py-1 focus:outline-none focus:border-primary-mid-pink transition-colors"
        />
        <button
          type="submit"
          disabled={isPending}
          className="bg-linear-to-b from-pink-light to-pink-dark rounded-button w-[7.9vw] max-w-[109px] h-full text-center align-middle text-sm px-1 py-3"
        >
          {isPending ? "Submitting..." : "SUBMIT"}
        </button>
      </form>

      {/* Display success or error messages */}
      {isSuccess && (
        <div className="mt-4 text-center text-lg text-green-400">
          {successData?.message || "Thank you! Your message has been sent."}
        </div>
      )}
      {isError && (
        <div className="mt-4 text-center text-lg text-red-400">{error.message}</div>
      )}
    </div>
  );
}
