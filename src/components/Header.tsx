import { ArrowRight } from "lucide-react";

function Header() {
  return (
    <>
        <header className="py-1 bg-backgroundContrast text-white flex gap-2 justify-center">
            <p>Try our demo for free</p>
            <span><ArrowRight className="w-4"/></span>
        </header>
        <div></div>
    </>
  )
};

export default Header;