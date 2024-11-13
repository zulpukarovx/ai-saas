'use client'
import Container from "@/components/container"
import FeatureCard from "@/components/FeatureCard"
import { features } from "@/constants/constants"
import { motion } from "framer-motion"

const Features = () => {
  return (
    <section className="bg-black">
      <Container>
        <motion.div
          initial={{opacity: 0, y: 20}} 
          whileInView={{opacity: 1, y: 0}}
          viewport={{margin: "-400px"}}
          className="py-20 w-[400px] text-white mx-auto text-center"
        >
          <h2 className="font-bold text-4xl mb-6">Your Content <br /> Command Center</h2>
          <p className="text-white/70">
            Generate high-quality content, organize your ideas, 
            and plan your content calendar—all in one place. Craft compelling copy, 
            brainstorm new topics, and optimize your content for maximum impact.
          </p>
        </motion.div>
        <div className="pb-20 flex flex-col md:flex-row items-center justify-center gap-4">
          {features.map(({title, description}) => (
            <FeatureCard key={title} title={title} description={description}  />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Features