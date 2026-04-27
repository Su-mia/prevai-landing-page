import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Dna, Activity, Brain, Eye, Shield, Cpu, Zap, Lock, Users } from 'lucide-react'

const NODE_POSITIONS = [
  { x: 50, y: 50, size: 14, delay: 0 },
  { x: 25, y: 30, size: 10, delay: 0.3 },
  { x: 72, y: 25, size: 8, delay: 0.6 },
  { x: 80, y: 65, size: 12, delay: 0.2 },
  { x: 35, y: 72, size: 9, delay: 0.8 },
  { x: 18, y: 58, size: 7, delay: 1.0 },
  { x: 62, y: 82, size: 10, delay: 0.4 },
  { x: 88, y: 42, size: 8, delay: 0.7 },
  { x: 10, y: 20, size: 6, delay: 1.2 },
  { x: 55, y: 12, size: 9, delay: 0.5 },
  { x: 92, y: 78, size: 7, delay: 0.9 },
  { x: 42, y: 45, size: 6, delay: 1.1 },
]

const CONNECTIONS = [
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 5],
  [1, 5], [1, 9], [2, 7], [2, 9],
  [3, 7], [3, 10], [4, 6], [4, 5],
  [6, 10], [7, 10], [9, 11], [0, 11],
]

const agentCards = [
  { icon: <Dna size={16} />, name: 'Genomic Agent', task: 'SNP risk profiling...', color: 'bg-blue-500' },
  { icon: <Activity size={16} />, name: 'Clinical Agent', task: 'Vitals stream: nominal', color: 'bg-green-500' },
  { icon: <Brain size={16} />, name: 'Cognitive Agent', task: 'Neuro pattern scan +', color: 'bg-purple-500' },
  { icon: <Eye size={16} />, name: 'Imaging Agent', task: 'Retinal analysis done', color: 'bg-yellow-500' },
  { icon: <Shield size={16} />, name: 'Risk Agent', task: 'CVD score: low (2.1%)', color: 'bg-red-400' },
  { icon: <Cpu size={16} />, name: 'Metabolic Agent', task: 'HbA1c trend stable', color: 'bg-cyan-500' },
]

const features = [
  {
    icon: <Lock size={18} />,
    title: 'Zero-Knowledge Proof Swarm',
    desc: 'Raw health data never leaves your device. Only anonymized conclusions are shared.',
  },
  {
    icon: <Zap size={18} />,
    title: 'Orb-to-Orb Communication',
    desc: '0.02s latency for real-time risk cross-referencing between specialized agents.',
  },
  {
    icon: <Users size={18} />,
    title: 'Collaborative Intelligence',
    desc: 'Six agents peer-review each insight, eliminating single-point diagnostic failures.',
  },
]

const SwarmViz = ({ inView }: { inView: boolean }) => (
  <div className="relative w-full aspect-square max-w-md mx-auto">
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
      {/* Connection lines */}
      {CONNECTIONS.map(([a, b], i) => (
        <motion.line
          key={i}
          x1={NODE_POSITIONS[a].x}
          y1={NODE_POSITIONS[a].y}
          x2={NODE_POSITIONS[b].x}
          y2={NODE_POSITIONS[b].y}
          stroke="rgba(59,91,255,0.25)"
          strokeWidth="0.3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ delay: 0.5 + i * 0.08, duration: 0.8 }}
        />
      ))}

      {/* Animated data packets on lines */}
      {CONNECTIONS.slice(0, 6).map(([a, b], i) => (
        <motion.circle
          key={`packet-${i}`}
          r="0.8"
          fill="#00d4a0"
          filter="url(#glow)"
          animate={
            inView
              ? {
                  cx: [NODE_POSITIONS[a].x, NODE_POSITIONS[b].x, NODE_POSITIONS[a].x],
                  cy: [NODE_POSITIONS[a].y, NODE_POSITIONS[b].y, NODE_POSITIONS[a].y],
                  opacity: [0, 1, 1, 0],
                }
              : {}
          }
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.7,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Nodes */}
      {NODE_POSITIONS.map((n, i) => (
        <g key={i}>
          <motion.circle
            cx={n.x}
            cy={n.y}
            r={n.size / 2.5}
            fill={i === 0 ? '#1B3FBE' : 'rgba(27,63,190,0.5)'}
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: n.delay + 0.3, duration: 0.4 }}
          />
          {i === 0 && (
            <motion.circle
              cx={n.x}
              cy={n.y}
              r={n.size / 1.8}
              fill="none"
              stroke="#1B3FBE"
              strokeWidth="0.5"
              opacity={0.4}
              animate={{ scale: [1, 1.8], opacity: [0.4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
            />
          )}
        </g>
      ))}

      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="0.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </svg>

    {/* Center orb label */}
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-brand-brightblue shadow-xl shadow-brand-brightblue/50 flex items-center justify-center"
    >
      <Cpu size={20} className="text-white" />
    </motion.div>
  </div>
)

const SwarmSection = () => {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="swarm" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-brand-brightblue/8 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-brand-green/6 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="section-badge mb-6 inline-flex bg-brand-brightblue/15 text-brand-brightblue border-brand-brightblue/25">
              <Zap size={12} />
              Live Swarm Activity
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              The Swarm is{' '}
              <span className="text-gradient">Collaborating</span>{' '}
              Right Now.
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Our architecture isn't a central brain — it's a distributed network.
              Each 'Orb' processes locally, keeping your raw data private,
              only sharing conclusions with the swarm to protect your identity.
            </p>

            {/* Features */}
            <div className="space-y-5 mb-10">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-brightblue/15 flex items-center justify-center text-brand-brightblue flex-shrink-0 border border-brand-brightblue/20">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm mb-1">{f.title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Agent status pills */}
            <div className="flex flex-wrap gap-2">
              {agentCards.map((a, i) => (
                <motion.div
                  key={a.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1.5"
                >
                  <span className={`w-2 h-2 rounded-full ${a.color} animate-pulse`} />
                  <span className="text-xs text-gray-300 font-medium">{a.name.split(' ')[0]}</span>
                  <span className="text-xs text-gray-500 font-mono">{a.task}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — network visualization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden bg-brand-darkcard border border-white/8 p-6 shadow-2xl">
              <SwarmViz inView={inView} />

              {/* Live indicator */}
              <div className="flex items-center justify-center gap-2 mt-4">
                <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                <span className="text-xs text-gray-400 font-medium font-mono">
                  SWARM ACTIVE · 6 AGENTS · 0 ANOMALIES
                </span>
              </div>
            </div>

            {/* Floating stat */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-4 -left-4 bg-brand-darkcard border border-white/10 rounded-2xl p-4 shadow-xl"
            >
              <p className="text-xs text-gray-400 mb-1">ACCURACY RATING</p>
              <p className="text-2xl font-black text-brand-green font-mono">99.8%</p>
              <p className="text-xs text-gray-500 mt-1">Peer-reviewed precision</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default SwarmSection
