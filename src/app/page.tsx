import type { Metadata } from "next";
import Link from "next/link";
import HomeHero from "@/components/HomeHero";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Coral Creative — iOS App Development Studio",
  description:
    "iOSアプリ開発・AI活用・Webサービス開発を手がける個人開発スタジオ。Build Simple, Beautiful Experiences.",
};

const features = [
  {
    title: "iOS App Development",
    description:
      "SwiftUIを中心に、直感的で美しいiOSアプリを設計・開発します。ユーザー体験を最優先にした丁寧な実装が強みです。",
    bg: "bg-sky-50",
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3"
        />
      </svg>
    ),
  },
  {
    title: "AI-powered Tools",
    description:
      "最新のAI・LLM技術を活用し、アプリやサービスにインテリジェントな機能を組み込みます。Claude APIなどの実装経験があります。",
    bg: "bg-violet-50",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
        />
      </svg>
    ),
  },
  {
    title: "Web Services",
    description:
      "Next.js・Reactを中心としたモダンなWebアプリ・サービスを構築します。パフォーマンスとデザインを両立した開発が得意です。",
    bg: "bg-emerald-50",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
        />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <>
      <HomeHero />

      {/* Features */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection className="text-center mb-20">
            <p className="text-xs font-semibold tracking-[0.2em] text-sky-500 uppercase mb-4">
              What We Build
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              使いやすく、美しい体験を
              <br />
              目指して。
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {features.map((feature, i) => (
              <AnimatedSection key={feature.title} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 h-full">
                  <div
                    className={`w-11 h-11 rounded-xl ${feature.iconBg} ${feature.iconColor} flex items-center justify-center mb-6`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser — dark */}
      <section className="py-32 bg-slate-950 relative overflow-hidden">
        <div className="absolute -top-48 -right-48 w-[500px] h-[500px] rounded-full bg-sky-500/8 blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-48 -left-48 w-[500px] h-[500px] rounded-full bg-green-500/8 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <AnimatedSection className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase mb-8">
              About
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.05] mb-8">
              個人の力で、
              <br />
              <span className="gradient-text">世界に届けるものを。</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-lg">
              Coral Creative は、iOSアプリ開発・AI活用・Webサービスを手がける個人事業です。
              一つひとつに丁寧に向き合い、使う人の心に残るものを作ることを大切にしています。
            </p>
            <Link
              href="/about/"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 group"
            >
              About Coral Creative
              <svg
                className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
              アイデアを、
              <br />
              <span className="gradient-text">形にします。</span>
            </h2>
            <p className="text-slate-500 text-lg mb-12 max-w-sm mx-auto leading-relaxed">
              アイデアをお気軽にシェアください。
              <br />
              一緒に形にしましょう。
            </p>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full text-sm font-semibold hover:bg-slate-700 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              お問い合わせ
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
