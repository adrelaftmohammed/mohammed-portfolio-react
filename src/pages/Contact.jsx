import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import { useApp } from "../AppContext";
import { db } from "../firebase";

export default function Contact() {
  const { t } = useApp();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name || !email || !message) {
      setStatus("error");
      setErrorMessage(
        t(
          "Please complete all required fields.",
          "يرجى تعبئة جميع الحقول المطلوبة."
        )
      );
      return;
    }

    try {
      setStatus("loading");
      setErrorMessage("");

      await addDoc(collection(db, "messages"), {
        name,
        email,
        message,
        createdAt: serverTimestamp(),
        isRead: false,
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setStatus("success");
    } catch (error) {
      console.error("Failed to save message:", error);

      setStatus("error");
      setErrorMessage(
        t(
          "The message could not be sent. Please try again.",
          "تعذر إرسال الرسالة. حاول مرة أخرى."
        )
      );
    }
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="kicker">{t("CONTACT", "تواصل")}</span>

          <h1>
            {t(
              "Let’s discuss your next project.",
              "دعنا نناقش مشروعك القادم."
            )}
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-box">
            <a
              className="contact-item"
              href="mailto:mohammedalyazje87@gmail.com"
            >
              <small>Email</small>
              <strong>mohammedalyazje87@gmail.com</strong>
            </a>

            <a className="contact-item" href="tel:+972595031617">
              <small>{t("Phone", "الهاتف")}</small>
              <strong>+972 59 503 1617</strong>
            </a>

            <a
              className="contact-item"
              href="https://wa.me/972595031617"
              target="_blank"
              rel="noreferrer"
            >
              <small>WhatsApp</small>
              <strong>
                {t("Start a conversation", "ابدأ محادثة")}
              </strong>
            </a>

            <a
              className="contact-item"
              href="https://linkedin.com/in/mohammed-alyazje"
              target="_blank"
              rel="noreferrer"
            >
              <small>LinkedIn</small>
              <strong>mohammed-alyazje</strong>
            </a>
          </div>

          <form className="card form" onSubmit={handleSubmit}>
            <label>
              <span>{t("Name", "الاسم")}</span>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                maxLength={80}
                required
              />
            </label>

            <label>
              <span>{t("Email", "البريد الإلكتروني")}</span>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                maxLength={150}
                required
              />
            </label>

            <label>
              <span>{t("Message", "الرسالة")}</span>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                maxLength={2000}
                required
              />
            </label>

            <button
              className="btn primary"
              type="submit"
              disabled={status === "loading"}
            >
              {status === "loading"
                ? t("Sending...", "جارٍ الإرسال...")
                : t("Send Message", "إرسال الرسالة")}
            </button>

            {status === "success" && (
              <p className="success-message">
                {t(
                  "Your message was sent successfully.",
                  "تم إرسال رسالتك بنجاح."
                )}
              </p>
            )}

            {status === "error" && (
              <p className="error-message">{errorMessage}</p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}