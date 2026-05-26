import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "プライバシーポリシー | Coral Creative",
  description:
    "BabyLog Timer のプライバシーポリシーです。アプリ内データの保存方法および広告配信に関する情報を掲載しています。",
};

const contactEmail = "contact@coral-creative.com";

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 bg-white relative overflow-hidden">
        <div className="absolute -top-48 -left-48 w-[500px] h-[500px] rounded-full bg-emerald-100/40 blur-[100px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <AnimatedSection>
            <p className="text-xs font-semibold tracking-[0.2em] text-emerald-500 uppercase mb-6">
              Privacy Policy
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-8">
              プライバシーポリシー
            </h1>
            <p className="text-base text-slate-400">対象アプリ: BabyLog Timer</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="pb-32 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection>
            <div className="space-y-10 text-slate-600 leading-relaxed">

              <div className="space-y-3">
                <p>
                  BabyLog Timer（以下、「本アプリ」）は、Coral Creative が提供する育児記録アプリです。
                  本プライバシーポリシーでは、本アプリにおける情報の取り扱いについてご説明します。
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-lg font-semibold text-slate-900">収集するデータについて</h2>
                <p>
                  本アプリでは、授乳・おむつ・睡眠などの育児記録を端末内に保存します。
                  これらの記録データは、外部サーバーへ送信されません。
                </p>
                <p>
                  本アプリは、ユーザー登録やログイン機能を提供していません。また、氏名・住所・電話番号・メールアドレスなど、
                  個人を直接識別できる情報を本アプリ内で収集することはありません。
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-lg font-semibold text-slate-900">広告配信について（Google AdMob）</h2>
                <p>
                  本アプリでは、広告配信のために Google AdMob を使用しています。
                  AdMob は、広告配信・広告効果測定・不正利用防止などの目的で、広告ID・端末情報・利用状況に関する情報を収集する場合があります。
                </p>
                <p>
                  AdMob によるデータの取り扱いについては、Google のプライバシーポリシーをご確認ください。
                </p>
                <a
                  href="https://policies.google.com/privacy?hl=ja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-sky-600 hover:text-sky-700 transition-colors duration-200"
                >
                  Google プライバシーポリシー
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </div>

              <div className="space-y-3">
                <h2 className="text-lg font-semibold text-slate-900">お問い合わせ</h2>
                <p>本プライバシーポリシーに関するご質問は、以下のメールアドレスまでお気軽にお送りください。</p>
                <a
                  href={`mailto:${contactEmail}`}
                  className="inline-flex items-center gap-2 text-sm text-sky-600 hover:text-sky-700 transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  {contactEmail}
                </a>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <p className="text-sm text-slate-400">制定日: 2026年5月</p>
              </div>

            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
