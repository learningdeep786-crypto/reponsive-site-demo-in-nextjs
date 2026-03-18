import Image from "next/image";
import Logo from "../../public/Logo.svg";




import { IoChevronDown } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { IoWifiOutline } from "react-icons/io5";


export default function Footer(){
    return(
        <>
        


        
        
        <div id="footer" className="flex flex-col gap-y-14 pr-8 pl-8 pt-8 pb-8">
            
            <div id="logo" className="flex flex-col gap-y-14">
              <div id="logos" className="flex flex-row  items-center gap-x-1 ">
                <Image src={Logo} alt="logo" />
                <p  className="text-[#36485C]  font-bold text-[17px]  leading-6">YOUR SITE</p>
                
            
              </div>


              <div id="menu" className="flex flex-col gap-y-8 ">

                <div id="feature" className="flex flex-row justify-between">
                    <p className="text-[#36485C] text-2xl font-light leading-4">Features </p>
                    <p><span> <IoChevronDown /></span></p>
                </div>
                  


                    <div id="feature" className="flex flex-row justify-between">
                    <p className="text-[#36485C] text-2xl font-light leading-4">Pricing</p>
                    <p><span> <IoChevronDown /></span></p>
                </div>




                     <div id="feature" className="flex flex-row justify-between">
                    <p className="text-[#36485C] text-2xl font-light leading-4">Enterprise </p>
                    <p><span> <IoChevronDown /></span></p>
                </div>



                      <div id="feature" className="flex flex-row justify-between">
                    <p className="text-[#36485C] text-2xl font-light leading-4">Careers</p>
                    <p><span> <IoChevronDown /></span></p>
                </div>
                


                   


              </div>


        
    



            </div>


            <div id="copyright" className="flex flex-col gap-y-10  ">
                <p className="font-medium text-[14px]  leading-5.5 ">© Copyright 2024. Your Site. All rights reserved.</p>


              <div id="social" className="flex flex-row    gap-x-14 items-center justify-center">

                <span> <FaXTwitter />   </span>
                <span>  <FaFacebook /> </span>
                <span> <IoWifiOutline /> </span>
              </div>
     


            </div>
           

        </div>
        
        
        </>
    )
}
