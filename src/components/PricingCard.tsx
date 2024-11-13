import { Check } from "lucide-react";
import { twMerge } from "tailwind-merge";

interface PricingCardProps {
    title: string;
    monthlyPrice: number; 
    buttonText: string;
    popular: boolean;
    inverse: boolean;
    features: string[];
}

const PricingCard: React.FC<PricingCardProps> = ({title, monthlyPrice, buttonText, popular, inverse, features}) => {
  return (
    <div className={twMerge("card", 
        inverse === true && "border-black bg-black text-white")}>
        <div className="flex justify-between">
            <h3 className={twMerge("text-lg font-bold text-black/50", inverse && "text-white/60")}>{title}</h3>
            {popular === true && (
                <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                    <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#2FD8FE,#EAEAEA)] 
                    text-transparent bg-clip-text tracking-wide">Popular</span>
                </div>
            )}
        </div>
        <div className="flex items-baseline gap-1 mt-[20px] font-bold">
            <span className="text-4xl tracking-tighter leading-none">${monthlyPrice}</span>
            <span className={twMerge("tracking-tight text-black/50", inverse && "text-white/60")}>/month</span>
        </div>
        <button className={twMerge("btn btn-primary w-full mt-[20px]", inverse && "bg-white text-black")}>{buttonText}</button>
        <ul className="flex flex-col gap-4 mt-8">
            {features.map(feature => (
                <li className="text-sm flex items-center gap-4" key={feature}>
                    <Check />
                    <span>{feature}</span>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default PricingCard