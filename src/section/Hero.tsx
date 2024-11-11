'use client'
import Container from "@/components/container"
import { motion } from "framer-motion"
import Link from "next/link"

function Hero() {
  return (
    <section>
      <div className="bg-hero-pattern h-[89svh] bg-[length:70px_70px]">
        <Container className="px-6">
          <motion.div
            initial={{opacity: 0, y: -20}} 
            whileInView={{opacity: 1, y: 0}}
            viewport={{margin: "-300px"}}
            className="pt-48"
          >
            <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#2FD8FE)] text-transparent bg-clip-text [-webkit-background-clip:text]
            border rounded-lg py-1 px-3 text-sm">Version 2.0 is here</span>
            <h1 className="font-bold text-4xl md:text-5xl mt-4 mb-12">
                AI-Driven Saas Studio.<br />
                Simplify Your Content Workflow.
            </h1>
            <Link href="#" className="border rounded-lg px-3 py-1 bg-white hover:shadow-md transition-shadow duration-200">
              Start free trial
            </Link>
          </motion.div>
        </Container>
      </div>
    </section>
  )
}

export default Hero