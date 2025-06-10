import { cn } from "../lib/utils"

interface SectionTitleProps {
  title: string
  subtitle?: string
  center?: boolean
  className?: string
}

const SectionTitle = ({ title, subtitle, center = false, className }: SectionTitleProps) => {
  return (
    <div className={cn("mb-10", center ? "text-center mx-auto" : "", className)}>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="text-[#D1D1D1] mt-6 max-w-2xl">{subtitle}</p>}
    </div>
  )
}

export default SectionTitle
