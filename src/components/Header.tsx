'use client'

import { ArrowRight, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Container from "./container";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import MobileNav from "./MobileNav";
import { UserButton } from "@clerk/nextjs";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const HeaderLinks = ['Features', 'Pricing', 'Customers', 'Dashboard', 'Sign-in'];

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
        return () => { 
          document.body.style.overflow = 'auto';
        };
      }, [isOpen]);

      
  return (
    <>
        <div className="py-1 bg-backgroundContrast flex gap-2 justify-center items-center text-white text-sm">
            <p>Try our demo for free</p>
            <span><ArrowRight className="w-4"/></span>
        </div>
        <header className="sticky top-0 bg-black z-20">
            <Container className="py-3">
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <Image 
                            src='/logosaas.png'
                            alt="Saas logo"
                            width={24}
                            height={24}
                        />
                        <span className="sr-only">Back to home</span>
                    </Link>
                    <button onClick={() => setIsOpen(prev => !prev)}>
                        <Menu className="md:hidden" size={24} />
                    </button>
                    <nav className="hidden md:flex gap-6 items-center">
                        {HeaderLinks.map(link => (
                            <Link 
                                className={link === "Sign-in" ? "bg-white text-textColor px-4 py-1 rounded-lg" : "text-white/70 hover:text-white duration-200 transition-colors"} 
                                key={link} href={link.toLowerCase()}
                            >
                                {link}
                            </Link>
                        ))}
                        <UserButton afterSwitchSessionUrl="/" />
                    </nav>
                </div>
            </Container>
            <AnimatePresence>
                {isOpen && (
                    <MobileNav onClick={() => setIsOpen(false)} HeaderLinks={HeaderLinks} />
                )}
            </AnimatePresence>
        </header>
    </>
  )
};

export default Header;