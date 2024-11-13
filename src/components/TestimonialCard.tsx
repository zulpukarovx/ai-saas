import Image from "next/image";

interface TestimonialCardProps {
    text: string;
    imageSrc: string;
    name: string;
    username: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({text, imageSrc, name, username}) => {
  return (
    <div className="card">
        <div>{text}</div>
        <div>
            <Image 
                src={imageSrc} 
                alt={`avatar of ${name}`} 
                className="rounded-full" 
                width={40}
                height={40}
            />
        </div>
    </div>
  )
}

export default TestimonialCard