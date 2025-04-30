import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import '../styles/Equipe.css'

function Equipe() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
      });

    const [choix, setChoix] = useState(null);
      const membres = [
        {
            id : 1 ,
            name : "Mme. Oumayma OUGUENNOUS",
            image : 'src/assets/blocPhoto/prof2.jpeg',
            description :"Spécialiste des méthodologies d'apprentissage innovantes avec 15 ans d'expérience.", 
            contact : 'Membre1@partners.org',
            role: "Présidente",
        },
        {
            id : 2 ,
            name : "Mme. Bouchra BEN AMMA",
            image : 'src/assets/blocPhoto/prof1.jpeg',
            description :"Spécialiste des méthodologies d'apprentissage innovantes avec 15 ans d'expérience.", 
            contact : 'Membre2@partners.org',
            role: "Sécrétaire Générale",

        },
        {
            id : 3 ,
            name : "Mme. Rihab MAHDAD",
            image : 'src/assets/blocPhoto/prof3.jpeg',
            description :"Spécialiste des méthodologies d'apprentissage innovantes avec 15 ans d'expérience.", 
            contact : 'Membre3@partners.org',
            role: "Trésoriere",
        },
        {
            id : 4 ,
            name : "Mme. Awatif BOUSSETTA",
            image : 'src/assets/blocPhoto/prof2.jpeg',
            description :"Spécialiste des méthodologies d'apprentissage innovantes avec 15 ans d'expérience.", 
            contact : 'Membre1@partners.org',
            role: "Conseillere",
        },
        {
            id : 5 ,
            name : "Mr. Rachid ENNAJI ",
            image : 'src/assets/blocPhoto/prof1.jpeg',
            description :"Spécialiste des méthodologies d'apprentissage innovantes avec 15 ans d'expérience.", 
            contact : 'Membre2@partners.org',
            role: "Conseiller",

        },
        {
            id : 6 ,
            name : "Mr. Rachid EL HABIB",
            image : 'src/assets/blocPhoto/prof3.jpeg',
            description :"Spécialiste des méthodologies d'apprentissage innovantes avec 15 ans d'expérience.", 
            contact : 'Membre3@partners.org',
            role: "Directeur exécutif",
        },
      ];


    const equipes = [
        {
            id: 1,
            name: "Mr. Youssef LOUTA ",
            role: "Chargé des R.P., partenariat et communication",
            image: 'src/assets/blocPhoto/prof1.jpeg',
            description: "Spécialiste des méthodologies d'apprentissage innovantes avec 15 ans d'expérience.",
            contact: "prof1@partners.org"
        },
        {
            id: 2,
            name: "Mr. Omar AMINE ",
            role: "Coach",
            image: 'src/assets/blocPhoto/prof2.jpeg',
            description: "Pionnier dans les technologies éducatives et la recherche appliquée.",
            contact: "prof2@partners.org"
        },
        {
            id: 3,
            name: "Mr. Anass AZIZI ",
            role: "Assistant admin et finance",
            image: 'src/assets/blocPhoto/prof3.jpeg',
            description: "Spécialiste en développement des compétences et orientation professionnelle.",
            contact: "prof3@partners.org"
        },
        {
            id: 4,
            name: "Mme. Fatima Zahra MAHDAD ",
            role: "chargée de projet",
            image: 'src/assets/blocPhoto/prof1.jpeg',
            description: "Spécialiste des méthodologies d'apprentissage innovantes avec 15 ans d'expérience.",
            contact: "prof1@partners.org"
        },
        {
            id: 5,
            name: "Mme. Meryem TAOUSS ",
            role: "Coordinatrice de projet",
            image: 'src/assets/blocPhoto/prof2.jpeg',
            description: "Pionnier dans les technologies éducatives et la recherche appliquée.",
            contact: "prof2@partners.org"
        },
        {
            id: 6,
            name: "Mme. Narimane TAHIRI",
            role: "Assistante bureau",
            image: 'src/assets/blocPhoto/prof3.jpeg',
            description: "Spécialiste en développement des compétences et orientation professionnelle.",
            contact: "prof3@partners.org"
        },
        {
          id: 6,
          name: "Mme. Soumaya SALHI ",
          role: "Responsable admin et finance",
          image: 'src/assets/blocPhoto/prof3.jpeg',
          description: "Spécialiste en développement des compétences et orientation professionnelle.",
          contact: "prof3@partners.org"
      },
    ];

    const handleClick = (personne, type) => {
        setChoix({ ...personne, type });
    };

    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,  // Pour afficher les flèches
        centerMode: true, // Pour centrer les éléments du Slider
        focusOnSelect: true, // Pour sélectionner un élément au centre
        centerPadding: '10%', // Espace autour de l'élément centré
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
    };
    
    return (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="box"
        > 
          <div className="bg-gray-400 pt-20 pb-20">
            <div className="flex flex-row gap-12 ml-[9%] mr-[9%]">
      
              {/* Partie gauche : Équipes */}
              <div className="flex flex-col w-[70%]">
                <h1 className="text-cyan-300 pt-[5%] h-[70px] font-extrabold text-4xl">
                  Equipe éxécutive
                </h1>
                <div className="w-full mt-4">
                  <Slider {...settings}>
                  {equipes.map((equipe) => (
                    <div 
                      key={equipe.id}
                      onClick={() => handleClick(equipe, 'equipe')}
                      className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                        choix?.id === equipe.id && choix?.type === 'equipe' ?  'ring-4 ring-cyan-300' : ''
                      }`}
                    >
                      <img 
                        src={equipe.image} 
                        alt={equipe.name} 
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <h3 className="text-white mt-2 font-bold">{equipe.name}</h3>
                      <p className="text-white text-sm">{equipe.role}</p>
                    </div>
                  ))}
                </Slider>
                </div>
      
                <h1 className="text-cyan-300 mt-8 h-[70px] font-extrabold text-4xl">
                  Equipe de Travail
                </h1>
                <div className="w-full mt-4">
                 <Slider {...settings}>
                  {membres.map((membre) => (
                    <div 
                      key={membre.id}
                      onClick={() => handleClick(membre , 'membre')}
                      className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                        choix?.id === membre.id && choix?.type === 'membre' ? 'ring-4 ring-cyan-300' : ''
                      }`}
                    >
                      <img 
                        src={membre.image} 
                        alt={membre.name} 
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <h3 className="text-white mt-2 font-bold">{membre.name}</h3>
                      <p className="text-white text-sm">{membre.role}</p>
                    </div>
                  ))}
                </Slider>
                </div>
              </div>
      
              {/* Partie droite : Profil sélectionné */}
              <div className="bg-gray-900 p-6 rounded-lg h-fit lg:w-[30%] mt-50">
                {choix ? (
                  <div className="text-white">
                    <div className="flex items-center mb-6">
                      <img 
                        src={choix.image} 
                        alt={choix.name} 
                        className="w-24 h-24 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h2 className="text-2xl font-bold">{choix.name}</h2>
                        <p className="text-cyan-300">{choix.role}</p>
                      </div>
                    </div>
                    <div className="mb-4">
                      <h3 className="font-bold text-lg mb-2">Description</h3>
                      <p className="text-gray-300">{choix.description}</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Contact</h3>
                      <a 
                        href={`mailto:${choix.contact}`} 
                        className="text-cyan-300 hover:underline"
                      >
                        {choix.contact}
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="text-gray-400 h-full flex items-center justify-center">
                    <p>Sélectionnez un partenaire pour voir son profil</p>
                  </div>
                )}
              </div>
      
            </div> {/* fin flex-row */}
          </div> {/* fin bg-black */}
        </motion.div>
   
      );
      
      
}

export default Equipe;