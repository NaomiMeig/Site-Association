import React from 'react';
import '../../styles/Stats.css';
import Counter from './Counter'
import { FaUsers, FaImage, FaCalendarAlt, FaHandshake } from 'react-icons/fa';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Stats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (<motion.div
    ref={ref}
    initial={{ opacity: 0, y: 100 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="box"> 
    <section className="social-proof">
      <div className="proof-container">
        <div className="proof-item">
          <FaUsers className="stat-icon" />
          <p className="stat-number"><Counter end={10} /></p>
          <p className="stat-label">Members</p>
        </div>
        <div className="proof-item">
          <FaImage className="stat-icon" />
          <p className="stat-number"><Counter end={200}/></p>
          <p className="stat-label">Photo</p>
        </div>
        <div className="proof-item">
          <FaCalendarAlt className="stat-icon" />
          <p className="stat-number"><Counter end={30}/>+</p>
          <p className="stat-label">Event</p>
        </div>
        <div className="proof-item">
          <FaHandshake className="stat-icon" />
          <p className="stat-number"><Counter end={7}/>+</p>
          <p className="stat-label">Partners</p>
        </div>
      </div>
    </section>
    </motion.div>
  );
}

