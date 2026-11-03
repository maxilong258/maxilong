"use client";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

import ContactExperience from "@/components/models/contact/ContactExperience";
import { Button } from "./ui/button";
import { toast } from "sonner";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", form); // Optional: show toast
    try {
      setLoading(true);
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setForm({
        name: "",
        email: "",
        message: "",
      });
      toast.success("Message sent successfully");
    } catch (error) {
      console.error("EMAILJS ERROR", error);
      toast.error("Message sending failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="mt-16 w-full px-5 py-10 md:px-20 md:py-12"
    >
      <div className="mx-auto w-full max-w-7xl">
        <header className="flex flex-col items-center gap-4">
          <p className="rounded-full bg-gray-200 px-4 py-2 text-center text-sm text-gray-600 dark:bg-[#1e1f21] dark:text-gray-400">
            💬 Have questions or ideas? Let’s talk! 🚀
          </p>
          <h2 id="contact-heading" className="text-center text-2xl md:text-3xl">
            Get in Touch – Let’s Connect
          </h2>
        </header>
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex h-full justify-center items-center border border-black-50 bg-black-100 rounded-xl p-5 md:p-6">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-4"
              >
                <div>
                  <label className="block text-white-50 text-sm mb-1.5" htmlFor="name">
                    Your name
                  </label>
                  <input
                    className="w-full px-3 py-2.5 text-sm rounded-md border-1 border-black-50"
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What’s your good name?"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white-50 text-sm mb-1.5" htmlFor="email">
                    Your Email
                  </label>
                  <input
                    className="w-full px-3 py-2.5 text-sm rounded-md border-1 border-black-50"
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What’s your email address?"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white-50 text-sm mb-1.5" htmlFor="message">
                    Your Message
                  </label>
                  <textarea
                    className="w-full px-3 py-2.5 text-sm rounded-md border-1 border-black-50"
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows={4}
                    required
                  />
                </div>

                <Button type="submit" disabled={loading} className="h-10 text-sm bg-orange-400 hover:bg-orange-500">
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
          <div className="h-64 sm:h-72 lg:col-span-7 lg:h-auto lg:min-h-80">
            <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
