import { Link } from "wouter";
import { Terminal, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-card/30 mt-20">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2 text-white">
              <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center border border-primary/20">
                <Terminal className="w-4 h-4 text-primary" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight">Binary Brothers</span>
            </Link>
            <p className="text-white/60 max-w-sm">
              The future of web development. AI-powered precision, unmatched speed, and premium digital experiences for tomorrow's leading brands.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-display font-semibold text-white">Navigation</h4>
            <div className="flex flex-col gap-2">
              {["/", "/services", "/about", "/contact"].map((href, i) => (
                <Link key={href} href={href} className="text-white/60 hover:text-primary transition-colors">
                  {["Home","Services","About Us","Contact"][i]}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-display font-semibold text-white">Contact</h4>
            <div className="flex flex-col gap-3 text-white/60 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>145/1 Sonarkhola Dakshin Khan,<br/>Dhaka 1230, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:bbrothers439@gmail.com" className="hover:text-primary transition-colors">
                  bbrothers439@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 text-center text-white/40 text-sm">
          &copy; {new Date().getFullYear()} Binary Brothers Agency. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
