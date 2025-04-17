import React from 'react';
import '../../styles/Stats.css';
import Counter from './Counter'
import { FaUsers, FaImage, FaCalendarAlt, FaHandshake } from 'react-icons/fa';

export default function Stats() {
  return (
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
  );
}

