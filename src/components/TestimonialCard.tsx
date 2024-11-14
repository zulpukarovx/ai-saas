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
        <div className="leading-5">{text}</div>
        <div className="flex items-center gap-3 mt-5">
            <Image
                key={username} 
                src={imageSrc} 
                alt={`avatar of ${name}`} 
                className="rounded-full" 
                width={40}
                height={40}
            />
            <div className="flex flex-col">
              <div className="font-medium tracking-tight leading-5">{name}</div>
              <div className="leading-5 tracking-tight">{username}</div>
            </div>
        </div>
    </div>
  )
}

export default TestimonialCard