import Footer from '../components/footer/Footer';
import '../styles/ActionsRealisee.css';  
import { actions } from '../variables/action'; 

function Actions() {
  return (
    <div className="actions-container">
      <h2 className="actions-title">Nos actions réalisées</h2>
      <p className="actions-subtitle">Découvrez nos actions passées et leur impact</p>
      
      <div className="actions-list">
        {actions.map((action) => (
          <div key={action.id} className="action-card">
            <img 
              src={action.image} 
              alt={`Action réalisée : ${action.title}`} 
              className="action-image"
            />
            <div className="action-content">
              <div className="action-title">{action.title}</div>
              <div className="action-short-desc">{action.shortDesc}</div>
              <div className="action-date">{action.date}</div>
              <div className="action-location">{action.location}</div>
              <div className="action-full-desc">{action.fullDesc}</div>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default Actions;
