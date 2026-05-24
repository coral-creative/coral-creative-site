"use client";

import { useState } from "react";

const contactEmail = "develop@coral-creative.com";

const inputClass =
  "w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-sky-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-100 transition-all duration-200 text-sm text-slate-900 placeholder:text-slate-400";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `お名前: ${name}\nメールアドレス: ${email}\n\n${message}`
    );
    const mailtoUrl = `mailto:${contactEmail}?subject=${encodeURIComponent(
      subject || "Coral Creative へのお問い合わせ"
    )}&body=${body}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-sky-50 border border-sky-100 rounded-2xl p-10 text-center">
        <div className="w-14 h-14 rounded-full bg-sky-100 flex items-center justify-center mx-auto mb-5">
          <svg
            className="w-7 h-7 text-sky-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">メーラーを起動しました</h3>
        <p className="text-sm text-slate-500">
          メールアプリからそのまま送信してください。
          <br />
          直接メールを送る場合は{" "}
          <a
            href={`mailto:${contactEmail}`}
            className="text-sky-600 hover:text-sky-700 underline"
          >
            {contactEmail}
          </a>
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-xs text-slate-400 hover:text-slate-700 transition-colors duration-200"
        >
          フォームに戻る
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1.5">
            お名前 <span className="text-sky-500">*</span>
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="山田 太郎"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1.5">
            メールアドレス <span className="text-sky-500">*</span>
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-slate-600 mb-1.5">件名</label>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="お問い合わせ内容の件名"
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-slate-600 mb-1.5">
          メッセージ <span className="text-sky-500">*</span>
        </label>
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={7}
          placeholder="お気軽にご相談ください。"
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="w-full py-3.5 bg-slate-900 text-white rounded-full text-sm font-semibold hover:bg-slate-700 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
      >
        メーラーで送信する
      </button>
      <p className="text-xs text-slate-400 text-center">
        送信ボタンでメールアプリが起動します。直接の場合は{" "}
        <a href={`mailto:${contactEmail}`} className="text-sky-600 hover:underline">
          {contactEmail}
        </a>
      </p>
    </form>
  );
}
