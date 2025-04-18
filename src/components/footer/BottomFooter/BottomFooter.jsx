import "../../../styles/BottomFooter.css"

function BottomFooter(){

    return <div className="bloc-footer">
        <div > 
            <h1 className="text-white text-2xl md:text-3xl font-bold mb-25">Our Social Media</h1><br/>
            <img src="src/assets/youtube.png" alt="YouTube" className="youtube-icon" />
                    <img src="src/assets/instragram.png" alt="Instagram" className="instagram-icon" />
                    <img src="src/assets/X.png" alt="X (Twitter)" className="x-icon" />
                    <img src="src/assets/likedin.png" alt="LinkedIn" className="linkedin-icon" />
                    <img src="src/assets/facebbok.png" alt="Facebook" className="facebook-icon" />
        </div>
        <div>
        <h1 className="text-cyan-300 text-3xl  font-bold mb-25">COMPANY</h1><br/>
        <p className="text-gray-400 text-2xl mb-9 justify-center ml-5">About</p>
        <p className="text-gray-400 text-2xl mb-9 justify-center ml-5 ">Features</p>
        <p className="text-gray-400 text-2xl mb-9 justify-center ml-5">Works</p>
        <p className="text-gray-400 text-2xl mb-9 justify-center ml-5">Career</p>
        </div>

        <div>
        <h1 className="text-cyan-300 text-3xl  font-bold mb-25 ml-10">HELP</h1><br/>
        <p className="text-gray-400 text-2xl mb-9 justify-center ml-5">Customers supports</p>
        <p className="text-gray-400 text-2xl mb-9 justify-center ml-5 ">Delivery Details</p>
        <p className="text-gray-400 text-2xl mb-9 justify-center ml-5">Terms conditions</p>
        <p className="text-gray-400 text-2xl mb-9 justify-center ml-5">Privacy policy</p>
        </div>

        <div>
        <h1 className="text-cyan-300 text-3xl  font-bold mb-25 ml-5">RESSOURCES</h1><br/>
        <p className="text-gray-400 text-2xl mb-9 justify-center ml-5">Free e-books</p>
        <p className="text-gray-400 text-2xl mb-9 justify-center ml-5 ">Develoment tutorial</p>
        <p className="text-gray-400 text-2xl mb-9 justify-center ml-5">How to-Blog</p>
        <p className="text-gray-400 text-2xl mb-9 justify-center ml-5 pb-25">Youtube playlist</p>
        </div>
    </div>
}
export default BottomFooter