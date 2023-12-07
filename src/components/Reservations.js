import { InlineWidget } from 'react-calendly';
import Footer from './Footer';



function Reservations() {
 return (
   <div className="bg-grey-100 w-full flex flex-col justify-center items-center bg-gray-100" style={{height: "calc(110vh)"}}>
<div className = "flex flex-col justify-center items-center mb-28">


 <h1 className='font-bold mb-14 font-[MyFont] text-4xl'>
   Reservations
 </h1>
 <InlineWidget url="http://calendly.com/harris-lichstein"> </InlineWidget>
</div>
<Footer/>
   </div>
 );
}


export default Reservations;