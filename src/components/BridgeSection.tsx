import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Stethoscope, User, Dna, Activity, Brain, Eye, Shield, Cpu } from 'lucide-react'

const agents = [
  { icon: <Dna size={13} />, label: 'Genomic', angle: 0 },
  { icon: <Activity size={13} />, label: 'Clinical', angle: 60 },
  { icon: <Brain size={13} />, label: 'Cognitive', angle: 120 },
  { icon: <Eye size={13} />, label: 'Imaging', angle: 180 },
  { icon: <Shield size={13} />, label: 'Risk', angle: 240 },
  { icon: <Cpu size={13} />, label: 'Metabolic', angle: 300 },
]

const features = [
  {
    title: 'Real-Time Health Streams',
    desc: 'Continuous monitoring of 200+ biomarkers across genomic, metabolic, and clinical domains simultaneously.',
    color: 'bg-brand-brightblue/10 text-brand-brightblue',
  },
  {
    title: 'Cross-Domain Synthesis',
    desc: 'Agents collaborate to surface correlations invisible to single-specialty care — the way a team of specialists would.',
    color: 'bg-brand-green/10 text-brand-green',
  },
  {
    title: 'Physician-Grade Insights',
    desc: 'Every recommendation arrives with full chain-of-thought reasoning, evidence citations, and confidence scores for clinician review.',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    title: 'Patient-Centered Delivery',
    desc: "Complex insights translated into actionable, compassionate guidance at the patient's literacy level.",
    color: 'bg-orange-100 text-orange-600',
  },
]

const AgentOrb = () => (
  <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
    {/* Outer ring */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      className="absolute inset-0 rounded-full border border-dashed border-brand-brightblue/30"
    />
    {/* Middle ring */}
    <motion.div
      animate={{ rotate: -360 }}
      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      className="absolute inset-4 rounded-full border border-dashed border-brand-green/20"
    />

    {/* Center orb */}
    <motion.div
      animate={{ scale: [1, 1.06, 1] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute inset-12 rounded-full bg-gradient-to-br from-brand-blue to-brand-brightblue shadow-2xl shadow-brand-brightblue/40 flex items-center justify-center"
    >
      <svg width="40" height="28" viewBox="0 0 40 28" fill="none">
        <polyline
          points="1,14 7,14 9,5 12,23 15,8 18,20 21,10 24,17 27,14 39,14"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="37" cy="14" r="2.5" fill="#00d4a0" />
      </svg>
    </motion.div>

    {/* Orbiting agent nodes */}
    {agents.map((agent, i) => {
      const rad = (agent.angle * Math.PI) / 180
      const r = 88
      const x = Math.cos(rad) * r
      const y = Math.sin(rad) * r
      return (
        <motion.div
          key={agent.label}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 + i * 0.1 }}
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
          }}
        >
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
            className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-brand-brightblue"
            title={agent.label}
          >
            {agent.icon}
          </motion.div>
        </motion.div>
      )
    })}

    {/* Pulse rings */}
    {[0, 1].map((i) => (
      <motion.div
        key={i}
        className="absolute inset-12 rounded-full border-2 border-brand-brightblue/30"
        animate={{ scale: [1, 2.2], opacity: [0.5, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut', delay: i * 1.25 }}
      />
    ))}
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
  <motion.div
    className="flex flex-col items-center gap-4 text-center max-w-[160px] md:max-w-[200px]"
  >
    <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-gradient-to-br from-brand-lightbg to-white shadow-xl border border-white flex items-center justify-center text-brand-brightblue">
      {icon}
    </div>
    <div>
      <p className="font-bold text-brand-navy text-sm md:text-base">{title}</p>
      <p className="text-xs text-gray-400 mt-1">{subtitle}</p>
    </div>
    <div className="flex flex-wrap gap-1.5 justify-center">
      {tags.map((t) => (
        <span key={t} className="text-xs bg-brand-lightbg text-brand-blue px-2.5 py-1 rounded-full font-medium">
          {t}
        </span>
      ))}
    </div>
  </motion.div>
)

const DataFlow = ({ direction }: { direction: 'ltr' | 'rtl' }) => (
  <div className="relative w-24 md:w-36 flex items-center justify-center">
    <div className="w-full h-px bg-gradient-to-r from-brand-brightblue/20 via-brand-green/50 to-brand-brightblue/20" />
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 rounded-full bg-brand-green shadow-md shadow-brand-green/50"
        animate={{
          x: direction === 'ltr' ? [-40, 40] : [40, -40],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: i * 0.65,
          ease: 'easeInOut',
        }}
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
            PrevAI sits at the intersection of clinical intelligence and patient
            empowerment — a living, learning swarm that never sleeps, never
            silos, never misses a pattern.
          </p>
        </motion.div>

        {/* Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-4 md:gap-8 mb-16 flex-wrap"
        >
          <PersonCard
            icon={<Stethoscope size={36} />}
            title="Healthcare Provider"
            subtitle="Physician · Geriatrician · Nurse"
            tags={['Diagnostics', 'Care Plans', 'Review']}
          />
          <DataFlow direction="ltr" />
          <AgentOrb />
          <DataFlow direction="rtl" />
          <PersonCard
            icon={<User size={36} />}
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
                {i === 0 ? <Activity size={18} /> : i === 1 ? <Brain size={18} /> : i === 2 ? <Stethoscope size={18} /> : <User size={18} />}
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
          className="mt-12 flex flex-wrap items-center justify-center gap-8 text-center"
        >
          {[
            { v: '6', u: '+', l: 'Specialized Agents' },
            { v: '200', u: '+', l: 'Biomarkers Tracked' },
            { v: '0.02', u: 's', l: 'Agent Response Time' },
            { v: '24', u: '/7', l: 'Continuous Monitoring' },
          ].map((item) => (
            <div key={item.l} className="flex flex-col items-center">
              <span className="text-3xl font-black text-brand-brightblue font-mono">
                {item.v}<span className="text-brand-green">{item.u}</span>
              </span>
              <span className="text-xs text-gray-400 font-medium mt-1">{item.l}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default BridgeSection
