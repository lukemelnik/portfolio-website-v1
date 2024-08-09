"use client";

import { useSectionInView } from "@/lib/hooks";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { sendEmail } from "@/app/actions/send-email";
import { useFormState } from "react-dom";
import { cn } from "@/lib/utils";
import ContactFormButton from "./contact-form-button";
import toast from "react-hot-toast";
import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.75);
  const [formState, action] = useFormState(sendEmail, { errors: {} });
  const [firstRender, setFirstRender] = useState(true);

  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
      return;
    }
    if (Object.keys(formState.errors).length > 0) {
      toast.error("There was an error sending your message.");
    } else {
      toast.success("Your message was sent successfully.");
      if (form.current) {
        form.current?.reset();
      }
    }
  }, [formState.errors]);

  return (
    <section
      ref={ref}
      className="max-w-3xl scroll-mt-10 p-5 pt-10 md:scroll-mt-44 md:pt-20"
      id="contact"
    >
      <h1 className="mb-5 text-center text-2xl font-bold">Contact Me</h1>
      <p className="mb-4">
        You can reach me directly by email at{" "}
        <a className="underline" href="mailto:luke@lukemelnik.co">
          luke@lukemelnik.co
        </a>{" "}
        or through the form below:
      </p>
      <form action={action} className="flex flex-col gap-4" ref={form}>
        <Label htmlFor="name">Name</Label>
        <Input
          className={cn("border-2", formState.errors.name && "border-red-500")}
          type="text"
          id="name"
          name="name"
          required
        />
        {formState.errors.name && (
          <p className="text-red-500">{formState.errors.name?.join(", ")}</p>
        )}
        <Label htmlFor="email">Email</Label>
        <Input
          className={cn("border-2", formState.errors.email && "border-red-500")}
          type="text"
          id="email"
          name="email"
          required
        />
        {formState.errors.email && (
          <p className="text-red-500">{formState.errors.email?.join(", ")}</p>
        )}
        <Label htmlFor="message">Message</Label>
        <Textarea
          className={cn(
            "border-2",
            formState.errors.message && "border-red-500",
          )}
          id="message"
          name="message"
          required
        />
        {formState.errors.message && (
          <p className="text-red-500">{formState.errors.message?.join(", ")}</p>
        )}
        {formState.errors._form && (
          <p className="text-red-500">{formState.errors._form?.join(", ")}</p>
        )}
        <ContactFormButton />
      </form>
    </section>
  );
}
