import { motion } from 'framer-motion'
import { Mail, ArrowUpRight, ExternalLink } from 'lucide-react'
import Logo from './Logo'

const footerLinks = {
  Product: ['Technology', 'Elder Care', 'Our Swarm', 'Process', 'Pricing'],
  Company: ['About Us', 'Careers', 'Press', 'Blog', 'Partners'],
  Legal: ['Privacy Policy', 'Terms of Service', 'HIPAA Notice', 'Cookie Policy'],
  Support: ['Documentation', 'API Reference', 'Status Page', 'Contact Us'],
}

const socials = [
  { icon: <ExternalLink size={16} />, href: '#', label: 'Twitter' },
  { icon: <ExternalLink size={16} />, href: '#', label: 'LinkedIn' },
  { icon: <ExternalLink size={16} />, href: '#', label: 'GitHub' },
  { icon: <Mail size={16} />, href: '#', label: 'Email' },
]

const Footer = () => (
  <footer className="bg-brand-dark border-t border-white/6">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      {/* Top */}
      <div className="py-14 grid sm:grid-cols-2 lg:grid-cols-6 gap-10">
        {/* Brand col */}
        <div className="sm:col-span-2 lg:col-span-2">
          <Logo variant="light" />
          <p className="text-gray-400 text-sm leading-relaxed mt-4 mb-6 max-w-xs">
            Orchestrating a personalized swarm of specialized AI agents to
            support longevity and proactively monitor geriatric health.
          </p>
          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                whileHover={{ scale: 1.1, y: -1 }}
                aria-label={s.label}
                className="w-9 h-9 rounded-xl bg-white/6 border border-white/8 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category}>
            <h5 className="text-white text-xs font-semibold tracking-widest uppercase mb-4">
              {category}
            </h5>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    {link}
                    <ArrowUpRight
                      size={10}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Bottom */}
      <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} PrevAI Health, Inc. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2 text-xs text-gray-500">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
            All systems operational
          </span>
          <span className="text-xs text-gray-600">HIPAA · SOC 2 · GDPR</span>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
