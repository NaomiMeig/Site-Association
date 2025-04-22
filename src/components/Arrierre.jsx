import Cadrant from './Cadrant'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Arrierre(){
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
    <div className="h-100vh bg-black ">
        <Cadrant />
    </div>
    </motion.div>
}
export default Arrierre