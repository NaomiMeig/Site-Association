import Bloc1 from "./Bloc/Bloc1"

function Compartiment() {
    const style = {
        color : "#2de6ff",
        marginLeft : "9%",
        paddingTop: "5%",
        height : "50px",
        fontWeight: "800",
        fontSize : "40px"
    }

    return <div className="bg-black mt-20 h-150">
        <h1 style={style}>Our partners</h1> <br /><br /><br /><br /><br />
        <Bloc1 /><br /><br /><br /><br />
        <p style={{color : "#2de6ff" ,maxWidth : "1000px" , width:"40%", marginLeft : "9%",fontWeight: "600"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quod tempore illum asperiores 
            itaque ab inventore, nam et eligendi nostrum beatae, enim vitae eum illo unde natus velit dolorem cumque.
        </p>
        <button className='bg-cyan-300 text-white p-4 pl-10 pr-10 rounded-2xl hover:bg-white hover:text-cyan-300 duration-500 mt-[50px] ml-28 '>Read more</button>
    </div>
}
export default Compartiment