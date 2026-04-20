"use client";

import { useRef, useState } from "react";
import type { FormEvent } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import styles from "./page.module.css";

// TODO: Replace with real reCAPTCHA site key
// Get from: console.cloud.google.com
// APIs & Services → Credentials → Create Credentials → reCAPTCHA v2
const RECAPTCHA_SITE_KEY =
  "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

type Status = "idle" | "sending" | "sent" | "error";

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  topic: string;
  message: string;
}

const INITIAL_STATE: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  topic: "General inquiry",
  message: "",
};

export default function ContactForm() {
  const [state, setState] = useState<FormState>(INITIAL_STATE);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const captchaRef = useRef<ReCAPTCHA | null>(null);

  const update =
    (key: keyof FormState) =>
    (
      e:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>
        | React.ChangeEvent<HTMLSelectElement>,
    ) => {
      setState((prev) => ({ ...prev, [key]: e.target.value }));
    };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!recaptchaToken || status === "sending") return;

    setStatus("sending");
    // TODO: wire to real email service (Resend or SendGrid) in Session 22.
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus("sent");
  }

  function handleReset() {
    setState(INITIAL_STATE);
    setRecaptchaToken(null);
    setStatus("idle");
    captchaRef.current?.reset();
  }

  if (status === "sent") {
    return (
      <div className={styles.success}>
        <span className={styles.successCheck} aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M5 12l4 4 10-10" />
          </svg>
        </span>
        <h3 className={styles.successH3}>Message sent!</h3>
        <p className={styles.successP}>
          Thank you for reaching out. We&apos;ll be in touch within one
          business day.
        </p>
        <button
          type="button"
          onClick={handleReset}
          className={styles.successBtn}
        >
          Send another message
        </button>
      </div>
    );
  }

  const disabled = !recaptchaToken || status === "sending";

  return (
    <div className={styles.formWrap}>
      <h3 className={styles.formTitle}>Send us a message</h3>

      <form onSubmit={handleSubmit} className={styles.form} noValidate>
        <div className={`${styles.formRow} ${styles.formRow2}`}>
          <div className={styles.field}>
            <label htmlFor="c-first" className={styles.label}>
              First name
            </label>
            <input
              id="c-first"
              type="text"
              value={state.firstName}
              onChange={update("firstName")}
              required
              className={styles.input}
              autoComplete="given-name"
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="c-last" className={styles.label}>
              Last name
            </label>
            <input
              id="c-last"
              type="text"
              value={state.lastName}
              onChange={update("lastName")}
              required
              className={styles.input}
              autoComplete="family-name"
            />
          </div>
        </div>

        <div className={styles.field}>
          <label htmlFor="c-email" className={styles.label}>
            Email address
          </label>
          <input
            id="c-email"
            type="email"
            value={state.email}
            onChange={update("email")}
            required
            className={styles.input}
            autoComplete="email"
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="c-topic" className={styles.label}>
            Topic
          </label>
          <select
            id="c-topic"
            value={state.topic}
            onChange={update("topic")}
            className={styles.select}
            required
          >
            <option>General inquiry</option>
            <option>Partnership opportunity</option>
            <option>Technical support</option>
            <option>Press / media</option>
            <option>Careers</option>
            <option>Other</option>
          </select>
        </div>

        <div className={styles.field}>
          <label htmlFor="c-msg" className={styles.label}>
            Message
          </label>
          <textarea
            id="c-msg"
            value={state.message}
            onChange={update("message")}
            required
            className={styles.textarea}
          />
        </div>

        <div className={styles.captchaWrap}>
          <ReCAPTCHA
            ref={captchaRef}
            sitekey={RECAPTCHA_SITE_KEY}
            onChange={(token) => setRecaptchaToken(token ?? null)}
            onExpired={() => setRecaptchaToken(null)}
            theme="light"
          />
        </div>

        <button
          type="submit"
          disabled={disabled}
          className={styles.submitBtn}
        >
          {status === "sending" ? "Sending..." : "Send message →"}
        </button>

        {status === "error" && (
          <p className={styles.errorText}>
            Something went wrong. Please try again or email us directly at{" "}
            <a href="mailto:hello@finmagix.com" style={{ color: "inherit" }}>
              hello@finmagix.com
            </a>
            .
          </p>
        )}
      </form>
    </div>
  );
}
