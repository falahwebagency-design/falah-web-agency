import { NextRequest, NextResponse } from "next/server";
import { site } from "@/lib/site";

/**
 * Contact form API route.
 *
 * To wire this up in production, install nodemailer and configure an SMTP
 * provider (Gmail App Password, Resend, SendGrid, etc.), then replace the
 * placeholder block below with real sending logic.
 *
 * Environment variables to add in Vercel dashboard / .env.local:
 *   SMTP_HOST     – e.g. smtp.gmail.com
 *   SMTP_PORT     – e.g. 465
 *   SMTP_USER     – e.g. falahwebagency@gmail.com
 *   SMTP_PASS     – App Password from Google Account → Security → App passwords
 *   CONTACT_TO    – falahwebagency@gmail.com
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body as {
      name?: string;
      email?: string;
      message?: string;
    };

    // Basic server-side validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    /* ------------------------------------------------------------------ *
     * PRODUCTION: Replace this block with real email sending.
     *
     * Example using nodemailer:
     *
     * // Escape user-supplied values before inserting into HTML to prevent XSS.
     * function escapeHtml(str: string) {
     *   return str
     *     .replace(/&/g, "&amp;")
     *     .replace(/</g, "&lt;")
     *     .replace(/>/g, "&gt;")
     *     .replace(/"/g, "&quot;")
     *     .replace(/'/g, "&#039;");
     * }
     *
     * const safeName    = escapeHtml(name);
     * const safeEmail   = escapeHtml(email);
     * const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");
     *
     * const nodemailer = await import("nodemailer");
     * const transporter = nodemailer.createTransport({
     *   host: process.env.SMTP_HOST,
     *   port: Number(process.env.SMTP_PORT),
     *   secure: true,
     *   auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
     * });
     * await transporter.sendMail({
     *   from: `"${site.name} Website" <${process.env.SMTP_USER}>`,
     *   to: process.env.CONTACT_TO ?? site.email,
     *   replyTo: email,
     *   subject: `New inquiry from ${safeName}`,
     *   text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
     *   html: `<p><strong>Name:</strong> ${safeName}</p>
     *          <p><strong>Email:</strong> ${safeEmail}</p>
     *          <p><strong>Message:</strong></p>
     *          <p>${safeMessage}</p>`,
     * });
     * ------------------------------------------------------------------ */

    // ── STUB (no email provider configured yet) ──────────────────────────
    // Log the submission to the server console during development so you can
    // confirm the route is working before adding an SMTP provider.
    console.log("[Contact Form Submission]", {
      name,
      email,
      message,
      to: site.email,
      receivedAt: new Date().toISOString(),
    });
    // ─────────────────────────────────────────────────────────────────────

    return NextResponse.json({
      success: true,
      message:
        "Thank you! We received your message and will reply within 2 business days.",
    });
  } catch (err) {
    console.error("[Contact Route Error]", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again or email us directly." },
      { status: 500 }
    );
  }
}
