import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Coral Creative について。iOSアプリ開発・AI活用・Webサービス開発を手がける個人開発スタジオの紹介。",
};

const skills = [
  {
    category: "Mobile",
    iconColor: "text-sky-500",
    iconBg: "bg-sky-50",
    items: ["Swift / SwiftUI", "iOS SDK", "Xcode", "App Store Connect"],
  },
  {
    category: "AI / ML",
    iconColor: "text-violet-500",
    iconBg: "bg-violet-50",
    items: ["Claude API", "OpenAI API", "Prompt Engineering", "LLM Integration"],
  },
  {
    category: "Web",
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-50",
    items: ["Next.js / React", "TypeScript", "Tailwind CSS", "Node.js"],
  },
];

const values = [
  {
    title: "Craft",
    subtitle: "丁寧さ",
    description:
      "細部まで丁寧に作り込む姿勢を大切にしています。ユーザーが直接触れる部分はもちろん、コードの品質にも妥協しません。",
    color: "from-sky-400 to-blue-500",
  },
  {
    title: "Simplicity",
    subtitle: "シンプルさ",
    description:
      "複雑なものをシンプルに表現すること。デザインにも、コードにも、この考え方を一貫して持っています。",
    color: "from-green-400 to-emerald-500",
  },
  {
    title: "Independence",
    subtitle: "独立性",
    description:
      "個人開発者として、アイデアの発想から設計・実装・リリースまでを一貫して行います。小さくとも本物を作り続けます。",
    color: "from-violet-400 to-purple-500",
  },
];

const profileItems = [
  { label: "屋号", value: "Coral Creative" },
  { label: "所在", value: "Japan" },
  { label: "事業内容", value: "iOSアプリ開発 / AI活用 / Webサービス開発" },
  { label: "連絡先", value: "contact@coral-creative.com" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-24 bg-white relative overflow-hidden">
        <div className="absolute -top-48 -right-48 w-[500px] h-[500px] rounded-full bg-sky-100/50 blur-[100px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <AnimatedSection>
            <p className="text-xs font-semibold tracking-[0.2em] text-sky-500 uppercase mb-6">
              About
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[1.0] mb-8">
              一人だからこそ、
              <br />
              <span className="gradient-text">細部まで</span>
              <br />
              こだわれる。
            </h1>
            <div className="text-lg text-slate-500 max-w-xl leading-relaxed space-y-4">
              <p>
                Coral Creative は、個人でiOSアプリ・AI・Webサービス開発を行っているクリエイティブスタジオです。
              </p>
              <p>
                シンプルで使いやすく、長く愛される体験を目指して、企画から開発・公開まで一貫して取り組んでいます。
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Profile */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <img src="/favicon.svg" alt="" className="w-20 h-20 mb-8" />
              <h2 className="text-2xl font-bold text-slate-900 mb-5">Coral Creative</h2>
              <div className="space-y-4 text-sm text-slate-500 leading-relaxed">
                <p>
                  SwiftUIを中心としたiOSアプリ開発に加え、AIを活用したプロダクト設計やWebサービス開発にも取り組んでいます。
                </p>
                <p>
                  Apple Developerとして、新しい技術を活かした体験づくりを日々追求しています。
                </p>
                <p>
                  「使う人にとって、本当に心地よいものを作る。」
                </p>
                <p>
                  その想いを大切にしながら、アイデアの設計から開発・リリースまでを一人で行っています。
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
                {profileItems.map((item, i) => (
                  <div
                    key={item.label}
                    className={`flex gap-6 px-6 py-4 ${
                      i < profileItems.length - 1 ? "border-b border-slate-100" : ""
                    }`}
                  >
                    <span className="text-xs font-medium text-slate-400 w-20 flex-shrink-0 pt-0.5">
                      {item.label}
                    </span>
                    <span className="text-sm text-slate-700">{item.value}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection className="mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] text-sky-500 uppercase mb-4">
              Skills
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              技術・スキルセット
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {skills.map((skill, i) => (
              <AnimatedSection key={skill.category} delay={i * 0.08}>
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 h-full">
                  <h3 className="text-sm font-semibold text-slate-900 mb-5">{skill.category}</h3>
                  <ul className="space-y-2.5">
                    {skill.items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-slate-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection className="mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] text-sky-500 uppercase mb-4">
              Values
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              大切にしていること
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-8 border border-slate-100 h-full">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6`}
                  >
                    <span className="text-white font-bold text-sm">{i + 1}</span>
                  </div>
                  <p className="text-xs font-semibold text-slate-400 tracking-wide mb-1">
                    {value.title}
                  </p>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">{value.subtitle}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <AnimatedSection className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-slate-500 text-sm mb-6">
            お仕事のご依頼・ご相談はこちらから
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-slate-900 text-white rounded-full text-sm font-semibold hover:bg-slate-700 transition-all duration-200 hover:scale-105 active:scale-95"
          >
            お問い合わせ
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </AnimatedSection>
      </section>
    </>
  );
}
