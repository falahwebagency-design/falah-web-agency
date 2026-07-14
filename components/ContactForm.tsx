"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm({
  submitLabel = "Get my free audit",
  messagePlaceholder = "Link to your current site, or tell us what you're looking for.",
}: {
  submitLabel?: string;
  messagePlaceholder?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Request failed.");
      setStatus("success");
      form.reset();
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-falah-border p-8"
    >
      <div className="space-y-5">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-sm font-medium text-falah-text"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            disabled={status === "loading"}
            className="w-full rounded-lg border border-falah-border bg-transparent px-4 py-2.5 text-sm text-falah-text outline-none transition focus:border-falah-accentSoft disabled:opacity-50"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-falah-text"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            disabled={status === "loading"}
            className="w-full rounded-lg border border-falah-border bg-transparent px-4 py-2.5 text-sm text-falah-text outline-none transition focus:border-falah-accentSoft disabled:opacity-50"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-1.5 block text-sm font-medium text-falah-text"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            disabled={status === "loading"}
            placeholder={messagePlaceholder}
            className="w-full resize-none rounded-lg border border-falah-border bg-transparent px-4 py-2.5 text-sm text-falah-text outline-none placeholder:text-falah-subtext/50 transition focus:border-falah-accentSoft disabled:opacity-50"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-glow w-full rounded-full bg-gradient-to-r from-falah-accent to-[#5B45E0] px-6 py-3 text-sm font-semibold text-white disabled:opacity-60"
        >
          {status === "loading" ? "Sending…" : submitLabel}
        </button>

        {status === "success" && (
          <p
            role="status"
            className="rounded-lg border border-falah-accent/30 bg-falah-accent/10 px-4 py-3 text-sm text-falah-accentSoft"
          >
            ✓ Message received — we&apos;ll be in touch within 2 business days.
          </p>
        )}

        {status === "error" && (
          <p role="alert" className="text-sm text-red-400">
            {errorMsg}
          </p>
        )}
      </div>
    </form>
  );
}
