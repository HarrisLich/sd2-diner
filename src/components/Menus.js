
import B from "../imgs/Breakfeast1.jpeg"
import L from "../imgs/Lunch1.jpeg"
import T from "../imgs/Dinner2.webp"
import Footer from "./Footer";






function Menu() {
 return (
   <div className="flex flex-col justify-center items-center bg-gray-100" style={{height: "calc(110vh)"}}>
     <h1 className="mt-4 font-bold font-[MyFont] text-4xl">Menu</h1>
     <div className="flex flex-row gap-4 h-[80%] items-center justify-center w-full">
       <img src={B} className="h-[80%]"></img>
       <img src={L} className="h-[80%]"></img>
       <img src={T} className="h-[80%]"></img>
     </div>
     <Footer/>
   </div>
   
 );
}


export default Menu;