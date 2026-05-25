import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Coral Creative へのお問い合わせ。iOSアプリ開発・AI活用・Webサービス開発のご依頼・ご相談はこちらから。",
};

const contactEmail = "contact@coral-creative.com";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-24 bg-white relative overflow-hidden">
        <div className="absolute -top-48 -right-48 w-[500px] h-[500px] rounded-full bg-sky-100/50 blur-[100px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <AnimatedSection>
            <p className="text-xs font-semibold tracking-[0.2em] text-sky-500 uppercase mb-6">
              Contact
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-8">
              お気軽にご相談ください。
            </h1>
            <div className="text-lg text-slate-500 max-w-md leading-relaxed space-y-3">
              <p>アプリ開発のご相談や、お仕事のご依頼など、お気軽にご連絡ください。</p>
              <p>内容を確認のうえ、できるだけ早くご返信いたします。</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="pb-32 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
            {/* Form */}
            <div className="md:col-span-3">
              <AnimatedSection>
                <ContactForm />
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-2 space-y-4">
              <AnimatedSection delay={0.1}>
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <h3 className="text-sm font-semibold text-slate-900 mb-4">直接メールで送る</h3>
                  <a
                    href={`mailto:${contactEmail}`}
                    className="flex items-center gap-3 text-sm text-sky-600 hover:text-sky-700 transition-colors duration-200"
                  >
                    <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-sky-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                    </div>
                    {contactEmail}
                  </a>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <h3 className="text-sm font-semibold text-slate-900 mb-4">
                    お問い合わせの例
                  </h3>
                  <ul className="space-y-2.5">
                    {[
                      "iOSアプリ開発のご依頼",
                      "AI機能の導入・相談",
                      "Webサイト・サービス開発",
                      "その他のご質問",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-xs text-slate-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <h3 className="text-sm font-semibold text-slate-900 mb-2">返信について</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    通常 2〜3 営業日以内にご返信します。
                    お急ぎの場合はその旨をメッセージにご記載ください。
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
