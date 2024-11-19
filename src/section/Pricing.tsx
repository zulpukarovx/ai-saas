import Container from "@/components/container"
import PricingCard from "@/components/PricingCard"
import { pricingTiers } from "@/constants/constants"

const Pricing = () => {
  return (
    <section id="pricing" className="bg-white">
        <Container>
            <div className="py-20">
                <div className="max-w-[500px] mx-auto text-center">
                    <span className="text-xs px-3 py-1 border rounded-md">Your Content Command Center</span>
                    <h3 className="font-semibold text-4xl mt-6">Simple, <br />Transparent Pricing.</h3>
                    <p className="mt-4 leading-5">Choose the plan that fits your needs. No hidden fees, <br /> no complicated contracts. Just powerful AI content tools at your fingertips.</p>
                </div>
                <div className="flex flex-col gap-6 items-center pt-14 lg:flex-row lg:items-end lg:justify-between">
                  {pricingTiers.map(({title, monthlyPrice, buttonText, popular, inverse, features}) => (
                    <PricingCard
                      key={title} 
                      title={title} 
                      monthlyPrice={monthlyPrice} 
                      buttonText={buttonText}
                      popular={popular}
                      inverse={inverse}
                      features={features}
                    />
                  ))}
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Pricing