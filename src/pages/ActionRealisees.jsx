import { useState } from "react";
import Footer from "../components/footer/Footer";

export default function ActionsRealisees() {
  const [expandedAction, setExpandedAction] = useState(null);

  const actions = [
    {
      id: 1,
      title: "Programmes sur les politiques publiques jeunesse",
      image: "/images/action1.jpg", 
      shortDesc: "Sensibilisation des jeunes aux politiques publiques qui les concernent",
      fullDesc: "Une série d'ateliers et de séminaires organisés pour informer les jeunes sur leurs droits et les politiques publiques qui les concernent, avec la participation d'experts et de décideurs politiques.",
      date: "15 Mars 2023",
      location: "Béni-Mellal"
    },
    {
      id: 2,
      title: "Formations pour l'inclusion économique",
      image: "/images/action2.jpg", 
      shortDesc: "Formations professionnelles pour jeunes défavorisés",
      fullDesc: "Programme intensif de 3 mois visant à fournir des compétences professionnelles à des jeunes issus de milieux défavorisés, avec un taux de placement de 75% après formation.",
      date: "Octobre 2022 - Janvier 2023",
      location: "Béni-Mellal"
    },
    {
      id: 3,
      title: "Leadership féminin",
      image: "/images/action3.jpg", 
      shortDesc: "Autonomisation des jeunes femmes leaders",
      fullDesc: "Cycle de formation dédié au développement du leadership chez les jeunes femmes, incluant des modules sur la prise de parole en public, la négociation et la gestion de projet.",
      date: "8 Mars 2023",
      location: "Béni-Mellal"
    },
    {
      id: 4,
      title: "Échanges culturels",
      image: "/images/action4.jpg", 
      shortDesc: "Programme d'échange interculturel pour jeunes",
      fullDesc: "Organisation d'un échange culturel entre jeunes de différentes régions du Maroc, favorisant le dialogue et la compréhension mutuelle à travers des activités artistiques et culturelles.",
      date: "Juillet 2022",
      location: "Multi-régions"
    }
  ];

  const toggleExpand = (id) => {
    if (expandedAction === id) {
      setExpandedAction(null);
    } else {
      setExpandedAction(id);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-blue-700 mb-8 text-center">Actions Réalisées par AQJ</h1>
      
      <p className="text-gray-700 text-center mb-12 max-w-3xl mx-auto leading-relaxed">
        Découvrez les différentes actions et projets que nous avons menés pour renforcer les capacités des jeunes,
        promouvoir leur participation citoyenne et contribuer au développement de notre région.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {actions.map((action) => (
          <div key={action.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="h-48 overflow-hidden">
              <img 
                src={action.image} 
                alt={action.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-blue-700 mb-2">{action.title}</h2>
              <p className="text-gray-600 mb-4">{action.shortDesc}</p>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{action.date} • {action.location}</span>
                
                <button 
                  onClick={() => toggleExpand(action.id)}
                  className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  {expandedAction === action.id ? 'Voir moins' : 'Voir plus'}
                  <svg 
                    className={`w-4 h-4 ml-1 transition-transform duration-300 ${expandedAction === action.id ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              
              {expandedAction === action.id && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-gray-700 mb-3">{action.fullDesc}</p>
                  <a 
                    href="https://www.facebook.com/AQJ.BM/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm"
                  >
                    Voir les photos sur Facebook
                    <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10 0-5.523-4.477-10-10-10zm-.293 15.707a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414L11 14.586V7a1 1 0 1 1 2 0v7.586l1.293-1.293a1 1 0 0 1 1.414 1.414l-3 3z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mb-12">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Retrouvez toutes nos actions</h2>
        <a 
          href="https://www.facebook.com/AQJ.BM/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
          </svg>
          Page Facebook AQJ
        </a>
      </div>

      <Footer />
    </div>
  );
}
  