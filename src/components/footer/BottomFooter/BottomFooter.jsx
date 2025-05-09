import "../../../styles/BottomFooter.css"

function BottomFooter(){

    return <div className="bloc-footer">
        <div>
          <h3 className="social-title">Suivez-nous</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com/aqj__bm?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
              <img
                src="src/assets/instagram.png"
                alt="Instagram"
                className="social-icon"
              />
            </a>
            <a href="https://www.facebook.com/AQJ.BM/">
              <img
                src="src/assets/communication.png"
                alt="Facebook"
                className="social-icon"
              />
            </a>
            <a href="https://www.youtube.com/@AQJ-BM">
              <img
                src="src/assets/youtube.png"
                alt="YouTube"
                className="social-icon"
              />
            </a>
            <a href="https://x.com/">
              <img
                src="src/assets/twitter.png"
                alt="Twitter"
                className="social-icon"
              />
            </a>
            <a href="https://www.linkedin.com/">
              <img
                src="src/assets/Linkedin.png"
                alt="LinkedIn"
                className="social-icon"
              />
            </a>
          </div>
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