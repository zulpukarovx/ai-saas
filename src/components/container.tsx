import { twMerge } from "tailwind-merge";

type Props = {
    children: React.ReactNode;
    className?: string;
}

function Container({children, className}: Props) {
  return (
    <div className={twMerge("mx-auto max-w-[980px] px-4", className)}>{children}</div>
  )
}

export default Container