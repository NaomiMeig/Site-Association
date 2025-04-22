import "../../styles/Footer.css"
import BottomFooter from "./BottomFooter/BottomFooter"
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Footer(){
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
      });

    return <motion.div
    ref={ref}
    initial={{ opacity: 0, y: 100 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="box"> 
   
    <div className="pieddepage">
        <img src="src/assets/AQJ_Logo-workjob.png" alt="LogoJob" />
    </div>
    <div className="flex items-center justify-center gap-30 p-15">
 
  <a href="https://www.instagram.com/">
  <img 
    src="src/assets/instagram.png" 
    alt="Instagram" 
    className="w-8 h-8 hover:scale-110 transition-transform" 
  />
  </a>
  <a href="https://x.com/">
  <img 
    src="src/assets/twitter.png" 
    alt="X (Twitter)" 
    className="w-8 h-8 hover:scale-110 transition-transform bg-white b-black" 
  /></a>
  
  <a href="https://www.linkedin.com/"><img 
    src="src/assets/Linkedin.png" 
    alt="LinkedIn" 
    className="w-8 h-8 hover:scale-110 transition-transform" 
  /></a>
  <a href="https://www.facebook.com/">
  <img 
    src="src/assets/communication.png" 
    alt="Facebook" 
    className="w-8 h-8 hover:scale-110 transition-transform" 
  />
  </a>
</div>
    <div className="second-footer">
        <BottomFooter />
        
    </div>
    </motion.div>
}

export default Footer