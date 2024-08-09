"use server";
import { revalidatePath } from "next/cache";
import { Resend } from "resend";
import { z } from "zod";
import ContactFormEmail from "../email/contact-form-email";
import React from "react";

const SendEmailSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  message: z.string().min(10),
});

type SendEmailFormState = {
  errors: {
    name?: string[];
    email?: string[];
    message?: string[];
    _form?: string[];
  };
};

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (
  formState: SendEmailFormState,
  formData: FormData
): Promise<SendEmailFormState> => {
  if (!formData) {
    return { errors: { _form: ["No form data provided"] } };
  }
  const result = SendEmailSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors };
  }

  try {
    await resend.emails.send({
      from: "Portfolio Site <onboarding@resend.dev>",
      to: ["luke.melnik@gmail.com"],
      subject: "Message from contact form",
      reply_to: result.data.email,
      react: React.createElement(ContactFormEmail, { submission: result.data }),
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { errors: { _form: [error.message] } };
    } else {
      return { errors: { _form: ["An unknown error occurred"] } };
    }
  }

  revalidatePath("/");
  return { errors: {} };
};
