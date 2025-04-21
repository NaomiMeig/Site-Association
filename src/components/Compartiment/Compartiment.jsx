import { useState } from "react";

function Compartiment() {
    const [choix, setChoix] = useState(null);

    const equipes = [
        {
            id: 1,
            name: "Professeur 1",
            role: "Expert en Éducation",
            image: 'src/assets/blocPhoto/prof1.jpeg',
            description: "Spécialiste des méthodologies d'apprentissage innovantes avec 15 ans d'expérience.",
            contact: "prof1@partners.org"
        },
        {
            id: 2,
            name: "Professeur 2",
            role: "Directeur de Recherche",
            image: 'src/assets/blocPhoto/prof2.jpeg',
            description: "Pionnier dans les technologies éducatives et la recherche appliquée.",
            contact: "prof2@partners.org"
        },
        {
            id: 3,
            name: "Professeur 3",
            role: "Conseiller Pédagogique",
            image: 'src/assets/blocPhoto/prof3.jpeg',
            description: "Spécialiste en développement des compétences et orientation professionnelle.",
            contact: "prof3@partners.org"
        }
    ];

    const handleClick = (partenaire) => {
        setChoix(partenaire);
    }

    return (
        <div className="bg-black pt-20 pb-20">
            <h1 className="text-cyan-300 ml-[9%] pt-[5%] h-[70px] font-extrabold text-4xl">
                Our Members
            </h1>

            <div className="flex flex-wrap md:flex-nowrap gap-8 mt-12 ml-[9%] mr-[9%]">
                <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {equipes.map((equipe) => ( 
                        <div 
                            key={equipe.id}
                            onClick={() => handleClick(equipe)}
                            className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                                choix?.id === equipe.id ? 'ring-4 ring-cyan-300' : ''
                            }`}
                        >
                            <img 
                                src={equipe.image} 
                                alt={equipe.name} 
                                className="w-full h-48 object-cover rounded-lg"
                            />
                            <h3 className="text-white mt-2 font-bold">{equipe.name}</h3>
                            <p className="text-gray-400 text-sm">{equipe.role}</p>
                        </div>
                    ))}
                </div>
                <div className="w-full md:w-1/2 bg-gray-900 p-6 rounded-lg sticky top-20 h-fit">
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
            </div>
        </div>
    );
}

export default Compartiment;