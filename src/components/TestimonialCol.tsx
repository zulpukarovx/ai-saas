import { testimonials } from "@/constants/constants"
import TestimonialCard from "./TestimonialCard"
import { twMerge } from "tailwind-merge";

const TestimonialCol = (props: {className?: string; testimonials: typeof testimonials}) => {
  return (
    <div 
      className={twMerge("flex flex-col gap-6 pt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] z-0",
        props.className
      )}
    >
        {props.testimonials.map(({ text, imageSrc, name, username }) => (
            <TestimonialCard 
                text={text} 
                imageSrc={imageSrc} 
                name={name}
                username={username}
            />
        ))}
    </div>
  )
}

export default TestimonialCol