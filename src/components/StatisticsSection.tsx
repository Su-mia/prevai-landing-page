import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { AlertTriangle, Database, TrendingDown, Shield, Zap } from 'lucide-react'

type Stat = {
  value: number
  suffix: string
  label: string
  sub: string
  color: string
  border: string
  bg: string
  sourceLabel: string
  sourceUrl: string
}

const useCountUp = (target: number, duration: number, start: boolean) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return

    let startTime: number | null = null

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
  }, [start, target, duration])

  return count
}

const stats: Stat[] = [
  {
    value: 40,
    suffix: '%',
    label: 'Cancers Preventable',
    sub: 'WHO estimates 40–50% of cancer cases worldwide are preventable through lifestyle changes and early intervention.',
    color: 'text-brand-brightblue',
    border: 'border-brand-brightblue/20',
    bg: 'bg-brand-brightblue/5',
    sourceLabel: 'WHO fact sheet',
    sourceUrl: 'https://www.who.int/news-room/fact-sheets/detail/cancer',
  },
  {
    value: 58,
    suffix: '%',
    label: 'Diabetes Risk Reduced',
    sub: 'The DPP Trial (NEJM 2002) showed lifestyle modification cuts Type 2 diabetes incidence by 58% in at-risk adults.',
    color: 'text-brand-green',
    border: 'border-brand-green/20',
    bg: 'bg-brand-green/5',
    sourceLabel: 'NEJM DPP trial',
    sourceUrl: 'https://www.nejm.org/doi/full/10.1056/NEJMoa012512',
  },
  {
    value: 80,
    suffix: '%',
    label: 'CVD Deaths Preventable',
    sub: 'AHA reports up to 80% of premature cardiovascular disease deaths could be prevented with known lifestyle strategies.',
    color: 'text-purple-500',
    border: 'border-purple-200',
    bg: 'bg-purple-50',
    sourceLabel: 'AHA prevention guidance',
    sourceUrl: 'https://www.heart.org/en/healthy-living/healthy-lifestyle/prevent-heart-disease-and-stroke',
  },
  {
    value: 5,
    suffix: '.6x',
    label: 'Prevention ROI',
    sub: 'Every $1 invested in preventive health returns $5.60 in reduced treatment, hospitalization and productivity costs (CDC).',
    color: 'text-orange-500',
    border: 'border-orange-200',
    bg: 'bg-orange-50',
    sourceLabel: 'CDC prevention economics',
    sourceUrl: 'https://www.cdc.gov/chronicdisease/programs-impact/prevention-economics/index.htm',
  },
]

const problems = [
  {
    icon: <AlertTriangle size={20} />,
    title: 'The Latency Crisis',
    desc: 'Standard blood panels miss 85% of early-stage metabolic shifts because they view snapshots, not continuous streams.',
    color: 'bg-brand-brightblue/10 text-brand-brightblue',
  },
  {
    icon: <Database size={20} />,
    title: 'Information Overload',
    desc: 'The average human generates 2TB of health data annually. No single clinician can synthesize this in a 15-minute consult.',
    color: 'bg-brand-green/10 text-brand-green',
  },
  {
    icon: <TrendingDown size={20} />,
    title: 'Fragmented Care',
    desc: 'Patient data is siloed across 18+ providers on average. Critical cross-domain correlations are invisible to any single doctor.',
    color: 'bg-purple-100 text-purple-600',
  },
]

const StatCard = ({ stat, index, inView }: { stat: Stat; index: number; inView: boolean }) => {
  const count = useCountUp(stat.value, 2, inView)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.6 }}
      className={`stat-card ${stat.bg} ${stat.border} border-2`}
    >
      <div className={`text-4xl md:text-5xl font-black ${stat.color} mb-1 font-mono`}>
        {count}
        {stat.suffix}
      </div>
      <div className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-3">
        {stat.label}
      </div>
      <p className="text-sm text-gray-500 leading-relaxed">{stat.sub}</p>
      <div className="mt-4 pt-3 border-t border-black/5 text-[11px] text-gray-400 flex items-center justify-between gap-2">
        <span>Source</span>
        <a
          href={stat.sourceUrl}
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-brand-navy hover:text-brand-brightblue transition-colors"
        >
          {stat.sourceLabel}
        </a>
      </div>
    </motion.div>
  )
}

const StatisticsSection = () => {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="technology" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-brightblue/20 to-transparent" />
      <div className="absolute -top-40 right-0 w-96 h-96 bg-brand-lightbg rounded-full blur-3xl opacity-60" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="section-badge mb-5 inline-flex">
              <Shield size={12} />
              The Prevention Imperative
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-brand-navy leading-tight mb-6">
              Human health is too complex for{' '}
              <span className="text-brand-brightblue">human linear thinking.</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Traditional diagnostics wait for clear symptoms. By the time a metric
              &quot;breaks range,&quot; the systemic drift has been occurring for years.
              We need a swarm that never sleeps.
            </p>

            <div className="space-y-4">
              {problems.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-brand-lightbg transition-colors group"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${p.color}`}>
                    {p.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-navy text-sm mb-1">{p.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} index={i} inView={inView} />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-brand-navy via-brand-blue to-brand-brightblue text-white flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center">
              <Zap size={22} className="text-brand-green" />
            </div>
            <div>
              <p className="text-sm text-white/60 font-medium">KEY INSIGHT</p>
              <p className="text-lg font-bold">
                Early prevention can reduce chronic disease burden by up to{' '}
                <span className="text-brand-green">70%</span>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-center px-6 border-l border-white/20">
              <p className="text-3xl font-black text-brand-green">30%</p>
              <p className="text-xs text-white/50 font-medium">of global deaths preventable (WHO)</p>
            </div>
            <div className="text-center px-6 border-l border-white/20">
              <p className="text-3xl font-black text-yellow-300">99%</p>
              <p className="text-xs text-white/50 font-medium">5yr survival for localized breast cancer</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default StatisticsSection
