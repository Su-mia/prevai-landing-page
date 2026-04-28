const Logo = ({ variant = 'dark' }: { variant?: 'dark' | 'light' }) => {
  return (
    <a href="#" className="flex items-center gap-2.5 group">
      <img
        src="/prevai_logo.png"
        alt="PrevAI Health"
        className="w-18 md:w-24 md:mt-2 object-contain"
        style={variant === 'light' ? { filter: 'brightness(0) invert(1)' } : undefined}
      />
      {/* <span
        className={`text-lg font-bold tracking-tight ${
          variant === 'light' ? 'text-white' : 'text-brand-navy'
        }`}
      >
        PrevAI<span className="text-brand-brightblue">Health</span>
      </span> */}
    </a>
  )
}

export default Logo
