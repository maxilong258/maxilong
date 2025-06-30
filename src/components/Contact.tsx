"use client";

import { useRef, useState } from "react";

import TitleHeader from "@/components/TitleHeader";
import ContactExperience from "@/components/models/contact/ContactExperience";
import { Button } from "./ui/button";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", form); // Optional: show toast
  };

  return (
    <section
      id="contact"
      className="flex justify-center items-center px-5 md:px-10 md:mt-40 mt-20"
    >
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 mt-16">
          <div className="xl:col-span-5">
            <div className="flex justify-center items-center border border-black-50 bg-black-100 rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label className="block text-white-50 mb-2" htmlFor="name">Your name</label>
                  <input
                    className="w-full px-4 py-4 md:text-base text-sm rounded-md border-1 border-black-50"
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
                  <label className="block text-white-50 mb-2" htmlFor="email">Your Email</label>
                  <input
                    className="w-full px-4 py-4 md:text-base text-sm rounded-md border-1 border-black-50"
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
                  <label className="block text-white-50 mb-2" htmlFor="message">Your Message</label>
                  <textarea
                    className="w-full px-4 py-4 md:text-base text-sm rounded-md border-1 border-black-50"
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
          <div className="xl:col-span-7 min-h-96">
            <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
