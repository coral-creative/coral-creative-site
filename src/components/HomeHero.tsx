import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background orbs */}
      <div className="absolute -top-48 -right-48 w-[700px] h-[700px] rounded-full bg-sky-100/60 blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-48 -left-48 w-[600px] h-[600px] rounded-full bg-green-100/60 blur-[110px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <p className="text-xs font-semibold tracking-[0.25em] text-slate-400 uppercase mb-8">
          Coral Creative
        </p>

        <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-bold tracking-tight text-slate-900 leading-[1.0] mb-8">
          Build Simple,
          <br />
          <span className="gradient-text">Beautiful</span>
          <br />
          Experiences.
        </h1>

        <p className="text-lg md:text-xl text-slate-500 max-w-md mx-auto mb-10 leading-relaxed">
          独立したアプリ開発スタジオ。
          <br className="hidden sm:block" />
          iOSアプリ、AI、Webサービスを手掛けます。
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {["iOS App Development", "AI-powered Tools", "Web Services"].map((tag) => (
            <span
              key={tag}
              className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200/80"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/products/"
            className="px-8 py-3.5 bg-slate-900 text-white rounded-full text-sm font-semibold hover:bg-slate-700 transition-all duration-200 hover:scale-105 active:scale-95"
          >
            See Products
          </Link>
          <Link
            href="/contact/"
            className="px-8 py-3.5 bg-white text-slate-700 rounded-full text-sm font-semibold border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <svg
          className="w-5 h-5 text-slate-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
