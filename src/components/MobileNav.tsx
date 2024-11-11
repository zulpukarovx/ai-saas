import { motion } from "framer-motion"
import Container from "./container";
import Link from "next/link";

interface MobileNavLinkProps {
    onClick: () => void;
    HeaderLinks: string[];
}

const MobileNav: React.FC<MobileNavLinkProps> = ({ onClick, HeaderLinks }) => {

    const menuVariants = {
        initial: { 
            scaleY: 0,
        },
        animate: { 
          scaleY: 1, 
          transition: { duration: 0.5, ease: "easeInOut" } 
        },
        exit: {
            scaleY: 0,
            transition: { duration: 0.5, ease: "easeInOut", delay: 0.2, } 
        }
    };

  return (
    <motion.div 
        className="absolute top-10 left-0 w-full h-screen bg-black origin-top z-20"
        variants={menuVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ type: 'tween', duration: 0.5 }}
    >
        <Container>
            <motion.nav 
                className="flex flex-col py-6 gap-4 items-center px-12"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0, transition: {delay: 0.5} }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
            >
                {HeaderLinks.map(link => (
                    <Link 
                        className="w-full text-white/50 hover:text-white transition-colors duration-300" 
                        key={link} 
                        href={link.toLowerCase()}
                        onClick={onClick}
                    >
                        {link}
                    </Link>
                ))}
            </motion.nav>
        </Container>
    </motion.div>
  )
}

export default MobileNav