import Container from "@/components/container"
import TestimonialCard from "@/components/TestimonialCard";
import { testimonials } from "@/constants/constants"

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => {
  return (
    <section>
        <Container>
            <div className="py-10">
                <div className="max-w-[430px] mx-auto text-center">
                    <span className="text-xs px-3 py-1 border rounded-md">Testimonials</span>
                    <h3 className="font-semibold text-4xl mt-6">What our users say</h3>
                    <p className="mt-4 leading-5">
                        From intuitive design to powerful features, our app has become
                        an essential tool for users around the world.
                    </p>
                </div>
                <div>
                    {firstColumn.map(({ text, imageSrc, name, username }) => (
                        <TestimonialCard 
                            text={text} 
                            imageSrc={imageSrc} 
                            name={name}
                            username={username}
                        />
                    ))}
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Testimonials