import { BrainCog } from "lucide-react"

interface FeatureCardProps {
    title: string,
    description: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({title, description}) => {
  return (
    <div className="cursor-default w-[230px] bg-[#0D0D0D] text-center px-4 py-6 rounded-md border border-gray-500/40">
        <div className="inline-flex bg-white text-black p-2 rounded-lg">
            <BrainCog />
        </div>
        <h3 className="text-white mt-6">{title}</h3>
        <p className="text-white/70 mt-2 text-sm">{description}</p>
    </div>
  )
}

export default FeatureCard