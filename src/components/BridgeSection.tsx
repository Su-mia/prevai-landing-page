import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Stethoscope, User, Activity, Brain } from 'lucide-react'

const features = [
  {
    title: 'Real-Time Health Streams',
    desc: 'Continuous monitoring of 200+ biomarkers across multiple domains simultaneously.',
    color: 'bg-brand-brightblue/10 text-brand-brightblue',
    icon: <Activity size={18} />,
  },
  {
    title: 'Cross-Domain Synthesis',
    desc: 'Agents collaborate to surface correlations invisible to single-specialty care.',
    color: 'bg-brand-green/10 text-brand-green',
    icon: <Brain size={18} />,
  },
  {
    title: 'Physician-Grade Insights',
    desc: 'Every recommendation arrives with full chain-of-thought reasoning, evidence citations, and confidence scores.',
    color: 'bg-purple-100 text-purple-600',
    icon: <Stethoscope size={18} />,
  },
  {
    title: 'Patient-Centered Delivery',
    desc: "Complex insights translated into actionable, compassionate guidance at the patient's literacy level.",
    color: 'bg-orange-100 text-orange-600',
    icon: <User size={18} />,
  },
]

// Node positions at radius=115 around center (140,140), 60° apart
const NODES = [
  { cx: 255,   cy: 140,   color: '#1B3FBE' },
  { cx: 197.5, cy: 239.6, color: '#00d4a0' },
  { cx: 82.5,  cy: 239.6, color: '#8b5cf6' },
  { cx: 25,    cy: 140,   color: '#f59e0b' },
  { cx: 82.5,  cy: 40.4,  color: '#ef4444' },
  { cx: 197.5, cy: 40.4,  color: '#06b6d4' },
]

const AgentOrb = () => (
  /* Pure SVG — zero framer-motion transform conflicts */
  <div className="relative w-64 h-64 md:w-72 md:h-72 flex-shrink-0 select-none">
    <svg viewBox="0 0 280 280" width="100%" height="100%" overflow="visible">
      <defs>
        <radialGradient id="orbGrad" cx="38%" cy="38%">
          <stop offset="0%" stopColor="#2B55E8" />
          <stop offset="100%" stopColor="#1B3FBE" />
        </radialGradient>
        <filter id="nodeShadow" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#1B3FBE" floodOpacity="0.18" />
        </filter>
        <filter id="glowBlue">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* ── Outer dashed ring (slow CW) ── */}
      <g>
        <animateTransform attributeName="transform" type="rotate"
          from="0 140 140" to="360 140 140" dur="28s" repeatCount="indefinite" />
        <circle cx="140" cy="140" r="128" stroke="#1B3FBE" strokeWidth="1"
          strokeDasharray="6 5" fill="none" opacity="0.2" />
      </g>

      {/* ── Middle dashed ring (CCW) ── */}
      <g>
        <animateTransform attributeName="transform" type="rotate"
          from="0 140 140" to="-360 140 140" dur="20s" repeatCount="indefinite" />
        <circle cx="140" cy="140" r="100" stroke="#1B3FBE" strokeWidth="0.8"
          strokeDasharray="3 6" fill="none" opacity="0.12" />
      </g>

      {/* ── 6 orbiting agent nodes (all together, CW, 12s) ── */}
      <g>
        <animateTransform attributeName="transform" type="rotate"
          from="0 140 140" to="360 140 140" dur="12s" repeatCount="indefinite" />

        {NODES.map((n, i) => (
          <g key={i} transform={`translate(${n.cx} ${n.cy})`} filter="url(#nodeShadow)">
            {/* White pill bg */}
            <circle r="15" fill="white" stroke="#e8eeff" strokeWidth="1.5" />
            {/* Colored dot */}
            <circle r="6" fill={n.color} />
          </g>
        ))}
      </g>

      {/* ── Pulse rings ── */}
      <circle cx="140" cy="140" r="54" fill="none" stroke="#1B3FBE" strokeWidth="2" opacity="0">
        <animate attributeName="r" values="54;92" dur="2.6s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.45;0" dur="2.6s" repeatCount="indefinite" />
      </circle>
      <circle cx="140" cy="140" r="54" fill="none" stroke="#1B3FBE" strokeWidth="1.5" opacity="0">
        <animate attributeName="r" values="54;92" dur="2.6s" begin="1.3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.45;0" dur="2.6s" begin="1.3s" repeatCount="indefinite" />
      </circle>

      {/* ── Center orb ── */}
      <circle cx="140" cy="140" r="54" fill="url(#orbGrad)" filter="url(#glowBlue)" />

      {/* Subtle orb breathing */}
      <circle cx="140" cy="140" r="54" fill="none" stroke="white" strokeWidth="0.5" opacity="0.2">
        <animate attributeName="r" values="54;57;54" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="3s" repeatCount="indefinite" />
      </circle>

      {/* ── ECG waveform inside orb ── */}
      <polyline
        points="111,140 120,140 122,128 126,154 130,126 133,144 136,134 139,140 169,140"
        stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"
      />
      <circle cx="167" cy="140" r="3.5" fill="#00d4a0" />

    </svg>
  </div>
)

const PersonCard = ({
  icon,
  title,
  subtitle,
  tags,
}: {
  icon: React.ReactNode
  title: string
  subtitle: string
  tags: string[]
}) => (
  <div className="flex flex-col items-center gap-3 text-center w-36 md:w-44 flex-shrink-0">
    <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-white shadow-lg border border-gray-100 flex items-center justify-center text-brand-brightblue">
      {icon}
    </div>
    <div>
      <p className="font-bold text-brand-navy text-sm md:text-base">{title}</p>
      <p className="text-xs text-gray-400 mt-0.5">{subtitle}</p>
    </div>
    <div className="flex flex-wrap gap-1.5 justify-center">
      {tags.map((t) => (
        <span key={t} className="text-xs bg-brand-lightbg text-brand-blue px-2.5 py-1 rounded-full font-medium">
          {t}
        </span>
      ))}
    </div>
  </div>
)

const DataFlow = ({ direction }: { direction: 'ltr' | 'rtl' }) => (
  <div className="relative w-16 md:w-28 flex items-center justify-center flex-shrink-0">
    <div className="w-full h-px bg-gradient-to-r from-brand-brightblue/20 via-brand-green/60 to-brand-brightblue/20" />
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 rounded-full bg-brand-green shadow shadow-brand-green/40"
        animate={{ x: direction === 'ltr' ? [-30, 30] : [30, -30], opacity: [0, 1, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.6, ease: 'easeInOut' }}
      />
    ))}
  </div>
)

const BridgeSection = () => {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="elder-care" className="py-24 bg-brand-lightbg relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-brightblue/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-badge mb-5 inline-flex">
            <Activity size={12} />
            Multi-Agentic Healthcare
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-brand-navy mb-5 leading-tight">
            The Missing Link Between{' '}
            <span className="text-brand-brightblue">Diagnosis</span> and{' '}
            <span className="text-brand-green">Prevention</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            PrevAI Health sits at the intersection of clinical intelligence and patient
            empowerment — a living, learning swarm that never sleeps and never
            silos data.
          </p>
        </motion.div>

        {/* Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-2 md:gap-6 mb-16 overflow-x-auto scrollbar-hide py-4"
        >
          <PersonCard
            icon={<Stethoscope size={34} />}
            title="Healthcare Provider"
            subtitle="Physician · Geriatrician · Nurse"
            tags={['Diagnostics', 'Care Plans', 'Review']}
          />
          <DataFlow direction="ltr" />
          <AgentOrb />
          <DataFlow direction="rtl" />
          <PersonCard
            icon={<User size={34} />}
            title="Patient & Family"
            subtitle="Elder · Caregiver · Loved One"
            tags={['Insights', 'Alerts', 'Wellness']}
          />
        </motion.div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${f.color}`}>
                {f.icon}
              </div>
              <h4 className="font-bold text-brand-navy text-sm mb-2">{f.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Proof bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-16 text-center"
        >
          {[
            { v: '6+', l: 'Specialized Agents' },
            { v: '200+', l: 'Biomarkers Tracked' },
            { v: '0.02s', l: 'Agent Response Time' },
            { v: '24/7', l: 'Continuous Monitoring' },
          ].map((item) => (
            <div key={item.l} className="flex flex-col items-center">
              <span className="text-3xl font-black text-brand-brightblue font-mono">{item.v}</span>
              <span className="text-xs text-gray-400 font-medium mt-1">{item.l}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default BridgeSection
