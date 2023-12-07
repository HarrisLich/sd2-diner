import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";


function Footer(){
    return (
        <div className="w-full flex flex-col justify-start py-6 items-center gap-4" style={{height: "calc(20vh)"}}>
            <div className="flex flex-row w-full items-center justify-center gap-4">
                <a href="https://www.instagram.com/" className="p-2 rounded-full outline outline-black"><FiInstagram size={28}></FiInstagram></a>
                <a href="https://www.facebook.com/" className="p-2 rounded-full outline outline-black"><FaFacebookF size={28}></FaFacebookF></a>
                <a href="mailto:johndoe@gmail.com" className="p-2 rounded-full outline outline-black"><FaEnvelope size={28}></FaEnvelope></a>
            </div>
            <div className="flex flex-row w-full items-center justify-center gap-4">
                <a href="/">Home</a>
                <a href="/menu">Menus</a>
                <a href="/reservation">Reservations</a>
                <a href="/contactus">Contact Us</a>
            </div>

            <div className="flex flex-row w-full items-center justify-center gap-4 text-xs mt-4">
                <h1>Harris Lichstein</h1>
                <h1>Nicholas Jackson</h1>
                <h1>Erick Perez</h1>
                <h1>David Matute Jimenez</h1>
            </div>

        </div>
    )
}

export default Footer;