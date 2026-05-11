"use client";

import {
  MessageSquare,
  Star,
  Bell,
  Zap,
  BarChart3,
  Link,
  ShieldAlert,
  CheckCircle2,
  Clock,
  Users,
  TrendingUp,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

export default function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f0fdf4] text-[#14532d]">
      {/* NavBar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-[#bbf7d0] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#15803d] rounded-lg flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-[#14532d]">ReviewReply</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm font-medium hover:text-[#15803d] transition-colors">Features</a>
              <a href="#how-it-works" className="text-sm font-medium hover:text-[#15803d] transition-colors">How It Works</a>
              <a href="#pricing" className="text-sm font-medium hover:text-[#15803d] transition-colors">Pricing</a>
              <a href="#" className="text-sm font-medium hover:text-[#15803d] transition-colors">Login</a>
              <a href="#pricing" className="px-4 py-2 bg-[#15803d] text-white text-sm font-semibold rounded-lg hover:bg-[#14532d] transition-colors">
                Try Free
              </a>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-[#bbf7d0] px-4 py-4 flex flex-col gap-4">
            <a href="#features" className="text-sm font-medium" onClick={() => setMobileOpen(false)}>Features</a>
            <a href="#how-it-works" className="text-sm font-medium" onClick={() => setMobileOpen(false)}>How It Works</a>
            <a href="#pricing" className="text-sm font-medium" onClick={() => setMobileOpen(false)}>Pricing</a>
            <a href="#" className="text-sm font-medium">Login</a>
            <a href="#pricing" className="px-4 py-2 bg-[#15803d] text-white text-sm font-semibold rounded-lg text-center">
              Try Free
            </a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#bbf7d0] text-[#15803d] text-sm font-semibold rounded-full mb-6">
          <Star className="w-4 h-4 fill-current" />
          AI-Powered Review Responses
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-[#14532d]">
          Respond to every review.<br />
          <span className="text-[#15803d]">Without the writer&apos;s block.</span>
        </h1>
        <p className="text-lg sm:text-xl text-[#4d7c0f] max-w-2xl mx-auto mb-10">
          Stop staring at blank screens. ReviewReply AI generates personalized, professional responses to Google, Yelp, and Facebook reviews — in seconds.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#pricing" className="px-8 py-4 bg-[#15803d] text-white font-semibold rounded-xl hover:bg-[#14532d] transition-all shadow-lg hover:shadow-xl">
            Start for Free
          </a>
          <a href="#how-it-works" className="px-8 py-4 bg-white text-[#15803d] font-semibold rounded-xl hover:bg-[#f0fdf4] transition-all border-2 border-[#bbf7d0]">
            See How It Works
          </a>
        </div>
        <p className="mt-6 text-sm text-[#4d7c0f]">No credit card required · 14-day free trial</p>
      </section>

      {/* Review Example */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#14532d]">From &quot;Ugh, another review&quot; to &quot;Done.&quot;</h2>
          <p className="text-[#4d7c0f]">See the transformation in seconds</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Before */}
          <div className="bg-white rounded-2xl p-6 lg:p-8 border border-[#bbf7d0]">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-full bg-[#dc2626] flex items-center justify-center">
                <X className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-semibold text-[#dc2626]">Raw Review</span>
            </div>
            <p className="text-[#14532d] text-lg mb-4">
              &quot;The service was really slow today. Waited 40 minutes for our food and when it came it was cold. Disappointed.&quot;
            </p>
            <div className="flex items-center gap-2 text-sm text-[#4d7c0f]">
              <Star className="w-4 h-4 fill-[#15803d] text-[#15803d]" />
              <Star className="w-4 h-4 fill-[#15803d] text-[#15803d]" />
              <span className="ml-1">2 stars · Google</span>
            </div>
          </div>

          {/* After */}
          <div className="bg-white rounded-2xl p-6 lg:p-8 border-2 border-[#15803d] relative">
            <div className="absolute -top-3 right-4 bg-[#15803d] text-white text-xs font-bold px-3 py-1 rounded-full">
              AI Response
            </div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-full bg-[#16a34a] flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-semibold text-[#16a34a]">Generated Response</span>
            </div>
            <p className="text-[#14532d] text-lg mb-4">
              &quot;Hi there, thank you for taking the time to share your feedback — I&apos;m truly sorry to hear about your experience today. That&apos;s not the standard of service we strive for, and I personally apologize for the long wait and cold food. I&apos;ve shared this with our team so we can make immediate improvements. We&apos;d love the chance to serve you again under better circumstances. Please reach out to us directly so we can make it right.&quot;
            </p>
            <div className="flex items-center gap-2 text-sm text-[#16a34a]">
              <CheckCircle2 className="w-4 h-4" />
              <span>Sent in 3 seconds · Ready to post</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-4 text-[#14532d]">Everything you need to stay on top of your reputation</h2>
          <p className="text-[#4d7c0f] max-w-xl mx-auto">Powerful features built for local businesses that take reviews seriously.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <MessageSquare className="w-6 h-6 text-[#15803d]" />,
              title: "Google, Yelp & Facebook Sync",
              desc: "Connect all three platforms in one dashboard. See every review as it comes in — no more logging into three separate accounts.",
            },
            {
              icon: <Zap className="w-6 h-6 text-[#15803d]" />,
              title: "AI Response Generator",
              desc: "Instantly generate thoughtful, on-brand responses for both positive and negative reviews. Just click to post.",
            },
            {
              icon: <BarChart3 className="w-6 h-6 text-[#15803d]" />,
              title: "Sentiment Dashboard",
              desc: "Track your review sentiment over time. Spot trends, catch problems early, and show stakeholders real data.",
            },
            {
              icon: <CheckCircle2 className="w-6 h-6 text-[#15803d]" />,
              title: "Auto-Templates",
              desc: "Save your best responses as templates. Tweak slightly for repeat scenarios — professional every time.",
            },
            {
              icon: <Link className="w-6 h-6 text-[#15803d]" />,
              title: "Review Link Generator",
              desc: "Generate direct links to your review pages. Share via email, SMS, or social to boost your review count.",
            },
            {
              icon: <ShieldAlert className="w-6 h-6 text-[#15803d]" />,
              title: "Negative Review Alerts",
              desc: "Get real-time alerts for low-star reviews so you can respond fast, de-escalate, and protect your reputation.",
            },
          ].map((f, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-[#bbf7d0] hover:shadow-lg hover:border-[#15803d] transition-all">
              <div className="w-12 h-12 bg-[#f0fdf4] rounded-lg flex items-center justify-center mb-4">{f.icon}</div>
              <h3 className="font-bold text-lg mb-2 text-[#14532d]">{f.title}</h3>
              <p className="text-sm text-[#4d7c0f]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-white py-20 border-y border-[#bbf7d0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4 text-[#14532d]">Up and running in 4 steps</h2>
            <p className="text-[#4d7c0f]">No complex setup. No training required. Just results.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Connect Platforms", desc: "Link your Google, Yelp, and Facebook accounts in one click.", icon: <Link className="w-7 h-7 text-white" /> },
              { step: 2, title: "AI Reads Reviews", desc: "Our AI automatically pulls in new reviews and analyzes sentiment.", icon: <BarChart3 className="w-7 h-7 text-white" /> },
              { step: 3, title: "Generate Response", desc: "Click a review and get a polished, ready-to-post response instantly.", icon: <Zap className="w-7 h-7 text-white" /> },
              { step: 4, title: "Reply in 1 Click", desc: "Review the response, make any edits, and post it directly.", icon: <CheckCircle2 className="w-7 h-7 text-white" /> },
            ].map((s) => (
              <div key={s.step} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#15803d] rounded-full flex items-center justify-center mb-4">{s.icon}</div>
                <div className="text-sm font-bold text-[#4d7c0f] mb-1">Step {s.step}</div>
                <h3 className="font-bold text-lg mb-2 text-[#14532d]">{s.title}</h3>
                <p className="text-sm text-[#4d7c0f]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 border-b border-[#bbf7d0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: "2M+", label: "Reviews Responded To", icon: <MessageSquare className="w-6 h-6 text-[#15803d]" /> },
              { metric: "18hrs", label: "Saved Per Business Monthly", icon: <Clock className="w-6 h-6 text-[#15803d]" /> },
              { metric: "12,000+", label: "Local Businesses", icon: <Users className="w-6 h-6 text-[#15803d]" /> },
              { metric: "4.9★", label: "Average User Rating", icon: <TrendingUp className="w-6 h-6 text-[#15803d]" /> },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="flex justify-center mb-2">{stat.icon}</div>
                <div className="text-3xl lg:text-4xl font-bold text-[#15803d] mb-1">{stat.metric}</div>
                <div className="text-sm text-[#4d7c0f]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-4 text-[#14532d]">Loved by local business owners</h2>
          <p className="text-[#4d7c0f]">Don&apos;t take our word for it — hear from the people who use it every day.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              quote: "I used to dread checking my reviews. Now I respond to all of them in under 5 minutes. My customers notice, and my ratings are climbing.",
              name: "Maria Santos",
              business: "Santos Tacos & Tequila",
              avatar: "MS",
            },
            {
              quote: "The negative review alerts alone are worth it. I caught a bad experience the same day and turned that customer into one of our advocates.",
              name: "James Okafor",
              business: "Okafor Dental Studio",
              avatar: "JO",
            },
            {
              quote: "I manage reviews for 6 locations. Without ReviewReply, this would be a full-time job. With it, I handle everything in 20 minutes a day.",
              name: "Priya Nair",
              business: "Glow Spa & Wellness",
              avatar: "PN",
            },
          ].map((t, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-[#bbf7d0]">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-[#15803d] text-[#15803d]" />
                ))}
              </div>
              <p className="text-[#14532d] mb-6 text-sm leading-relaxed">&quot;{t.quote}&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#15803d] rounded-full flex items-center justify-center text-white font-bold text-sm">{t.avatar}</div>
                <div>
                  <div className="font-semibold text-sm text-[#14532d]">{t.name}</div>
                  <div className="text-xs text-[#4d7c0f]">{t.business}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-white py-20 border-y border-[#bbf7d0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4 text-[#14532d]">Simple, transparent pricing</h2>
            <p className="text-[#4d7c0f]">Start free. Scale as you grow. Cancel anytime.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter */}
            <div className="bg-[#f0fdf4] rounded-2xl p-8 border border-[#bbf7d0]">
              <div className="text-sm font-semibold text-[#4d7c0f] mb-1">Starter</div>
              <div className="flex items-end gap-1 mb-4">
                <span className="text-4xl font-bold text-[#14532d]">$19</span>
                <span className="text-[#4d7c0f] mb-1">/mo</span>
              </div>
              <p className="text-sm text-[#4d7c0f] mb-6">Perfect for solo business owners just getting started with review management.</p>
              <ul className="space-y-3 mb-8">
                {["50 reviews/month", "1 platform", "AI response generation", "Email support"].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[#14532d]">
                    <CheckCircle2 className="w-4 h-4 text-[#15803d] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#" className="block w-full py-3 text-center bg-white border-2 border-[#15803d] text-[#15803d] font-semibold rounded-xl hover:bg-[#f0fdf4] transition-colors">
                Get Started
              </a>
            </div>

            {/* Business */}
            <div className="bg-[#15803d] rounded-2xl p-8 border-2 border-[#15803d] relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#f0fdf4] text-[#15803d] text-xs font-bold px-3 py-1 rounded-full border border-[#bbf7d0]">
                Most Popular
              </div>
              <div className="text-sm font-semibold text-[#bbf7d0] mb-1">Business</div>
              <div className="flex items-end gap-1 mb-4">
                <span className="text-4xl font-bold text-white">$49</span>
                <span className="text-[#bbf7d0] mb-1">/mo</span>
              </div>
              <p className="text-sm text-[#bbf7d0] mb-6">For growing businesses that need all platforms and advanced insights.</p>
              <ul className="space-y-3 mb-8">
                {["200 reviews/month", "All 3 platforms", "Sentiment tracking", "Auto-templates", "Priority support"].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white">
                    <CheckCircle2 className="w-4 h-4 text-[#bbf7d0] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#" className="block w-full py-3 text-center bg-white text-[#15803d] font-semibold rounded-xl hover:bg-[#f0fdf4] transition-colors">
                Get Started
              </a>
            </div>

            {/* Agency */}
            <div className="bg-[#f0fdf4] rounded-2xl p-8 border border-[#bbf7d0]">
              <div className="text-sm font-semibold text-[#4d7c0f] mb-1">Agency</div>
              <div className="flex items-end gap-1 mb-4">
                <span className="text-4xl font-bold text-[#14532d]">$129</span>
                <span className="text-[#4d7c0f] mb-1">/mo</span>
              </div>
              <p className="text-sm text-[#4d7c0f] mb-6">For agencies managing multiple client locations at scale.</p>
              <ul className="space-y-3 mb-8">
                {["Unlimited reviews", "10 locations", "All platforms", "Negative review alerts", "Dedicated account manager"].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[#14532d]">
                    <CheckCircle2 className="w-4 h-4 text-[#15803d] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#" className="block w-full py-3 text-center bg-white border-2 border-[#15803d] text-[#15803d] font-semibold rounded-xl hover:bg-[#f0fdf4] transition-colors">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#14532d] mb-4">Ready to never stress about reviews again?</h2>
          <p className="text-[#4d7c0f] mb-8 max-w-lg mx-auto">Join 12,000+ local businesses that respond to every review — and look great doing it.</p>
          <a href="#pricing" className="inline-block px-10 py-4 bg-[#15803d] text-white font-semibold rounded-xl hover:bg-[#14532d] transition-all shadow-lg hover:shadow-xl">
            Start Your Free Trial
          </a>
          <p className="mt-4 text-sm text-[#4d7c0f]">14 days free · No credit card required</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#14532d] text-[#bbf7d0] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[#15803d] rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-lg text-white">ReviewReply</span>
              </div>
              <p className="text-sm text-[#bbf7d0]">AI-powered review responses for local businesses that care about their reputation.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#4d7c0f] pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} ReviewReply. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
