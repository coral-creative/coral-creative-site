import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Coral Creative のプロダクト一覧。iOSアプリ・AIツール・Webサービスを個人開発しています。",
};

const placeholderApps = [
  {
    id: 1,
    category: "iOS App",
    categoryBg: "bg-sky-100",
    categoryColor: "text-sky-700",
    iconGradient: "from-sky-400 to-blue-500",
    description: "SwiftUIで作るiOSネイティブアプリ。シンプルで直感的な体験を届けます。",
  },
  {
    id: 2,
    category: "AI Tool",
    categoryBg: "bg-violet-100",
    categoryColor: "text-violet-700",
    iconGradient: "from-violet-400 to-purple-500",
    description: "AIを活用したツール。日常のワークフローをスマートに改善します。",
  },
  {
    id: 3,
    category: "Web Service",
    categoryBg: "bg-emerald-100",
    categoryColor: "text-emerald-700",
    iconGradient: "from-emerald-400 to-green-500",
    description: "Next.jsで作るモダンなWebサービス。使いやすさを最優先に設計します。",
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-24 bg-white relative overflow-hidden">
        <div className="absolute -top-48 -left-48 w-[500px] h-[500px] rounded-full bg-green-100/50 blur-[100px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <AnimatedSection>
            <p className="text-xs font-semibold tracking-[0.2em] text-sky-500 uppercase mb-6">
              Products
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[1.0] mb-8">
              Building what
              <br />
              <span className="gradient-text">matters.</span>
            </h1>
            <p className="text-lg text-slate-500 max-w-xl leading-relaxed">
              iOSアプリ・AIツール・Webサービスを個人開発しています。
              すべてのプロダクトは、自分が使いたいものを作るところから始まります。
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection className="mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] text-slate-400 uppercase mb-4">
              Coming Soon
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              開発中のプロダクト
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {placeholderApps.map((app, i) => (
              <AnimatedSection key={app.id} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all duration-300 h-full">
                  {/* App icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${app.iconGradient} mb-5 shadow-sm`}
                  />

                  {/* Category badge */}
                  <span
                    className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium ${app.categoryBg} ${app.categoryColor} mb-4`}
                  >
                    {app.category}
                  </span>

                  {/* Status */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    <span className="text-xs font-medium text-slate-400">In Development</span>
                  </div>

                  <p className="text-sm text-slate-500 leading-relaxed">
                    {app.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Apple Developer */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute -top-48 -right-48 w-[500px] h-[500px] rounded-full bg-sky-500/8 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-center gap-10">
              <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.78 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase mb-3">
                  Apple Developer
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
                  App Store に向けて
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                  Coral Creative は Apple Developer Organization として登録予定。
                  App Store での公開に向けて、iOSアプリの開発を進めています。
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <AnimatedSection className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            一緒にプロダクトを
            <br />
            作りませんか
          </h2>
          <p className="text-slate-500 text-sm mb-10">
            開発のご依頼・ご相談はお気軽にどうぞ。
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-slate-900 text-white rounded-full text-sm font-semibold hover:bg-slate-700 transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Get in Touch
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </AnimatedSection>
      </section>
    </>
  );
}
