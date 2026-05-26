import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/products/", label: "Products" },
  { href: "/contact/", label: "Contact" },
  { href: "/privacy/", label: "プライバシーポリシー" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="inline-flex items-center gap-2 justify-center md:justify-start mb-3"
            >
              <img src="/favicon.svg" alt="" className="w-6 h-6" />
              <span className="font-semibold text-slate-900 text-sm">Coral Creative</span>
            </Link>
            <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
              iOSアプリ開発・AI・Webサービスを手がける
              <br />個人開発スタジオ
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-slate-400 hover:text-slate-700 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200/60 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} Coral Creative. All rights reserved.
          </p>
          <p className="text-xs text-slate-400">coral-creative.com</p>
        </div>
      </div>
    </footer>
  );
}
