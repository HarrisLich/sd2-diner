import img from "../imgs/waffles2.jpg"
import { InlineWidget } from "react-calendly";
import { SiDoordash } from "react-icons/si";
import { SiGrubhub } from "react-icons/si";
import { SiUbereats } from "react-icons/si";
import Footer from "../components/Footer";
import img1 from "../imgs/waffles1.png"
import img2 from "../imgs/slider1.jpg"
import React from 'react';



function Home(){

    

    const imgs = [
        img, img2
    ]

    const [currImg, setCurrImg] = React.useState(imgs[0]);
    
    let currIndex = 0;

    window.onload = () => {
        setInterval(()=>{
            if(currIndex < 1){
                currIndex += 1;
                setCurrImg(imgs[currIndex])
            }else if(currIndex === 1){
                currIndex = 0;
                setCurrImg(imgs[currIndex])
            }
        }, 5000)
    }


    return(
        <div className="flex flex-col font-['MyFont']">
            <div className="flex" style={{height: "calc(100vh)"}}>
                <img src={imgs[0]} alt="home" className="w-full h-full transition duration-150 transition-all ease-in-out"></img>
                <div className="w-full h-full absolute items-start justify-center py-16 font-bold text-4xl flex flex-col">
                    <div className="px-24">Tom's Diner</div>
                    <div className="w-full px-24 flex flex-row items-start justify-start text-2xl font-normal gap-12 mt-10">
                        <a href="/menu">Menus</a>
                        <a href="/reservation">Reservations</a>
                        <a href="/contactus">Contact Us</a>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 max-w-full bg-gray-100" style={{height: "calc(90vh)"}}>
                <div className="font-bold text-2xl mt-24 px-10 h-full justify-center flex flex-col">
                    <div className="flex w-full justify-center mb-10">Reservations</div>
                    <InlineWidget url="https://calendly.com/harris-lichstein" />

                </div>
                <div className="font-bold text-2xl py-24 px-10 flex justify-center items-center h-full flex-col gap-2 items-start">
                    <div className="justify-center flex items-start mb-10 w-full">Delivery</div>
                    <div className="flex flex-row gap-8 w-full justify-center mb-8">
                        <a href="https://www.doordash.com/"><SiDoordash size={48}></SiDoordash></a>
                        <a href="https://www.grubhub.com/"><SiGrubhub size={48}></SiGrubhub></a>
                        
                    </div>
                    <div className="flex flex-row w-full justify-center">
                        <a href="https://www.ubereats.com/"><SiUbereats size={48}></SiUbereats></a>
        
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;