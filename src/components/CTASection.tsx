import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle, Mail, Shield, Lock } from 'lucide-react'

const CTASection = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  return (
    <section id="waitlist" className="py-16 px-6 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-blue to-brand-brightblue" />

          {/* Decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand-brightblue/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-brand-green/20 rounded-full blur-3xl" />
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)`,
                backgroundSize: '28px 28px',
              }}
            />
          </div>

          <div className="relative px-8 md:px-16 py-16 md:py-20 text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-4 py-1.5 text-xs font-semibold text-white tracking-wider uppercase mb-8"
            >
              <Shield size={11} />
              Limited Clinical Slots Available
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-6xl font-black text-white leading-tight mb-4"
            >
              Start preventing.
              <br />
              Not just treating.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-white/70 text-lg mb-10 max-w-md mx-auto"
            >
              Join the 100,000+ early adopters securing their future. Limited
              clinical slots available for Q2 2025.
            </motion.p>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-green/20 border-2 border-brand-green flex items-center justify-center">
                    <CheckCircle size={28} className="text-brand-green" />
                  </div>
                  <p className="text-white text-xl font-bold">You're on the list!</p>
                  <p className="text-white/60 text-sm">We'll notify you when your slot opens.</p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
                >
                  <div className="flex-1 relative">
                    <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full pl-10 pr-4 py-4 rounded-full bg-white/10 border border-white/25 text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/60 focus:bg-white/15 transition-all"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    disabled={loading}
                    className="bg-white text-brand-navy font-bold text-sm px-8 py-4 rounded-full hover:bg-brand-lightbg transition-all flex items-center justify-center gap-2 flex-shrink-0 disabled:opacity-70"
                  >
                    {loading ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-4 h-4 border-2 border-brand-navy/30 border-t-brand-navy rounded-full"
                      />
                    ) : (
                      <>
                        Join Waitlist
                        <ArrowRight size={14} />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Trust bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-6 text-white/40 text-xs font-semibold tracking-widest uppercase"
            >
              <span className="flex items-center gap-1.5">
                <Lock size={10} />
                No credit card required
              </span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="flex items-center gap-1.5">
                <Shield size={10} />
                HIPAA Compliant
              </span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>SOC 2 Type II</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>Zero-Knowledge Architecture</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
