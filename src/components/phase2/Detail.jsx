import '../../styles/Detail.css'
import { Link } from 'react-router-dom';


function Detail (){

    return <div className ="paragraphe">
        <h2 className="text-cyan-300 text-3xl sticky font-bold">Notre association</h2><br/>
        <h2 className="text-2xl sticky font-bold">Association Qualification des Jeunes</h2>
        <br/>
        <p className='duration-500'>L’Association des Quartiers de la Jeunesse (AQJ) est une organisation marocaine à but non lucratif, engagée depuis [année de création] pour l’épanouissement, l’inclusion et la participation active des jeunes à la vie sociale, économique et culturelle.
          Portée par des jeunes pour les jeunes, notre association agit comme un catalyseur de talents, de solidarité et de citoyenneté responsable.</p>
        <p className='duration-500'>Accompagner, former et mobiliser la jeunesse autour de projets porteurs de sens, afin de renforcer leur pouvoir d’agir et leur engagement dans le développement durable de leurs territoires.</p> <br /> <br />
        <Link 
            to="/about" 
            onClick={() => window.scrollTo(0, 0)}
            className="bg-cyan-300 text-white p-3 pl-10 pr-10 rounded-2xl hover:bg-blue-600 duration-500 mt-[50px]"
        >
             Read more
        </Link>

    </div>
}
export default Detail



