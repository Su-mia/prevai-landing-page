import { motion } from 'framer-motion'
import { Dna, Activity, Brain, Sparkles, ArrowRight, ChevronDown } from 'lucide-react'

const AgentCard = ({
  icon,
  name,
  status,
  delay,
  className,
}: {
  icon: React.ReactNode
  name: string
  status: string
  delay: number
  className: string
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ delay, duration: 0.5, ease: 'easeOut' }}
    className={`agent-badge absolute ${className}`}
    style={{ animation: `float ${3.5 + delay}s ease-in-out infinite` }}
  >
    <div className="w-9 h-9 rounded-xl bg-brand-lightbg flex items-center justify-center text-brand-brightblue">
      {icon}
    </div>
    <div>
      <p className="text-xs font-semibold text-brand-navy">{name}</p>
      <p className="text-xs text-gray-400 font-mono">{status}</p>
    </div>
    <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse flex-shrink-0" />
  </motion.div>
)

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-brand-lightbg bg-mesh overflow-hidden flex items-center">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-brand-brightblue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-brand-green/5 rounded-full blur-3xl" />
        <div className="absolute top-40 left-1/2 w-64 h-64 bg-brand-blue/4 rounded-full blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-5rem)]">

          {/* Left content */}
          <div className="flex flex-col justify-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-7"
            >
              <span className="section-badge">
                <Sparkles size={12} className="text-brand-brightblue" />
                Multi-Agentic Swarm Protocol Active
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-brand-navy mb-4">
                Precision AI.{' '}
                <span className="block text-brand-brightblue">Human Heart.</span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-500 text-lg leading-relaxed max-w-md mb-8"
            >
              Orchestrating a personalized swarm of specialized AI agents to
              support longevity, proactively monitor geriatric health, and
              empower compassionate human caregiving.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#elder-care">
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-primary flex items-center gap-2 text-base"
                >
                  Explore Geriatric Solutions
                  <ArrowRight size={16} />
                </motion.button>
              </a>
              <a href="#swarm">
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-ghost flex items-center gap-2 text-base"
                >
                  Meet the Swarm
                </motion.button>
              </a>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex items-center gap-6"
            >
              <div className="flex -space-x-2">
                {['bg-blue-400', 'bg-purple-400', 'bg-green-400', 'bg-pink-400'].map((c, i) => (
                  <div key={i} className={`w-8 h-8 rounded-full ${c} border-2 border-white`} />
                ))}
              </div>
              <p className="text-sm text-gray-500">
                <span className="font-semibold text-brand-navy">100,000+</span>{' '}
                early adopters on the waitlist
              </p>
            </motion.div>
          </div>

          {/* Right — hero visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            {/* Main image card */}
            <div className="relative w-full max-w-lg">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative rounded-3xl overflow-hidden shadow-2xl shadow-brand-navy/20"
              >
                <img
                  src="/hero-image.png"
                  alt="PrevAI Health — Precision AI for compassionate care"
                  className="w-full h-auto object-cover block"
                  draggable={false}
                />
                {/* Subtle gradient overlay at bottom for card blending */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/10 via-transparent to-transparent pointer-events-none" />
              </motion.div>

              {/* Floating agent cards */}
              <AgentCard
                icon={<Dna size={16} />}
                name="Genomic Agent"
                status="Synthesizing markers..."
                delay={0.5}
                className="-top-5 right-4 md:right-0 md:-right-6"
              />
              <AgentCard
                icon={<Activity size={16} />}
                name="Clinical Agent"
                status="Vitals stable. Alert off."
                delay={0.7}
                className="-bottom-4 left-2 md:-left-6"
              />
              <AgentCard
                icon={<Brain size={16} />}
                name="Cognitive Agent"
                status="Pattern analysis active"
                delay={0.9}
                className="top-1/2 -translate-y-1/2 -right-2 md:-right-8 hidden md:flex"
              />
            </div>

            {/* Background blob */}
            <div className="absolute -z-10 w-96 h-96 bg-brand-brightblue/8 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-400 font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={18} className="text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
