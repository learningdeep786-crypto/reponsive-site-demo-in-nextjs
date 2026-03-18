import { IoIosCheckmark, IoMdArrowForward, IoMdCheckmark } from "react-icons/io"; // Ionicons

export default function Plans(){
    return(
        <>


            <div id="plans" className="flex flex-col pt-12 pr-5 pl-5  pb-10 gap-y-10 lg:flex-col lg:pt-16 lg:pb-20 lg:pl-20 lg:pr-20 lg:gap-y-20 ">

            <div id="heading" className="flex flex-col gap-y-4 items-center justify-center lg:gap-y-4">
                <p className="text-[#172026] text-2xl leading-9 font-medium lg:font-medium lg:text-5xl lg:leading-14 ">Flexible plans for you</p>
                <p className="font-light  text-[#36485C] text-[16px] leading-6 lg:leading-7 lg:font-light lg:text-[#36485C] ">No hidden fees!</p>
            </div>


              <div className="   lg:grid  lg:grid-cols-3 lg:gap-x-6">

            <div id="one" className="flex flex-col rounded p-6 gap-y-4 bg-[#F5F4FF] ">
              <div id="namedescription" className="flex flex-col gap-y-2">

                <p className="text-[#4328EB] text-[18px] leading-6 font-medium ">Free Trial</p>
                
                <p className="text-[#36485C] leading-6 text-[16px] font-light">Perfect for testing the waters</p>

            </div>

            <div id="pricing" className="flex flex-row gap-x-0.5">
                <p><span className="text-[#172026] font-medium text-2xl leading-9 ">$0</span><span className="text-[#5F7896] font-medium text-2xl">/mo</span></p>

            </div>

            <div id="pricing" className="flex flex-col gap-y-2">
                <p className="flex flex-row items-center  gap-x-2"> <span><IoMdCheckmark/></span><span className="text-[#36485C]">Lorem ipsum dolor sit amet</span></p>
                 <p className="flex flex-row items-center  gap-x-2"> <span><IoMdCheckmark/></span><span className="text-[#36485C]">Lorem ipsum dolor sit amet</span></p>
                  <p className="flex flex-row items-center  gap-x-2"> <span><IoMdCheckmark/></span><span className="text-[#36485C]">Lorem ipsum dolor sit amet</span></p>


            </div>
         
            <button className="bg-[#FFFFFF] text-[#4328EB] font-medium text-[16px] leading-6  hover:bg-red-300 py-2 px-4 rounded transition duration-300   ">Start Trial</button>
           




            </div>



             <div id="two" className="flex flex-col rounded p-6 gap-y-4 bg-[#4328EB]">
              <div id="namedescription" className="flex flex-col gap-y-2">

                <p className="text-[#FFFFFF] text-[18px] leading-6 font-medium ">Business</p>
                
                <p className="text-[#F4F8FA] leading-6 text-[16px] font-light">Perfect for testing the waters</p>

            </div>

            <div id="pricing" className="flex flex-row gap-x-0.5">
                <p><span className="text-[#FFFFFF] font-medium text-2xl leading-9 ">$550</span><span className="text-[#FFFF] font-medium text-2xl">/mo</span></p>

            </div>

            <div id="pricing" className="flex flex-col gap-y-2 text-[#F4F8FA] font-light">
                <p className="flex flex-row items-center  gap-x-2"> <span><IoMdCheckmark/></span><span >Lorem ipsum dolor sit amet</span></p>
                 <p className="flex flex-row items-center  gap-x-2"> <span><IoMdCheckmark/></span><span >Lorem ipsum dolor sit amet</span></p>
                  <p className="flex flex-row items-center  gap-x-2"> <span><IoMdCheckmark/></span><span >Lorem ipsum dolor sit amet</span></p>
                    <p className="flex flex-row items-center  gap-x-2"> <span><IoMdCheckmark/></span><span >Lorem ipsum dolor sit amet</span></p>
                    <p className="flex flex-row items-center  gap-x-2"> <span><IoMdCheckmark/></span><span >Lorem ipsum dolor sit amet</span></p>
                    <p className="flex flex-row items-center  gap-x-2"> <span><IoMdCheckmark/></span><span >Lorem ipsum dolor sit amet</span></p>


            </div>
            <button className="bg-[#FFFFFF] text-[#4328EB] font-medium text-[16px] leading-6  hover:bg-red-300 py-2 px-4 rounded transition duration-300">Get Started</button>





            </div>





             <div id="three" className="flex flex-col rounded p-6 gap-y-4 bg-[#F5F4FF]">
              <div id="namedescription" className="flex flex-col gap-y-2">

                <p className="text-[#4328EB] text-[18px] leading-6 font-medium ">Enterprise</p>
                
                <p className="text-[#36485C] leading-6 text-[16px] font-light">Perfect for testing the waters</p>

            </div>

            <div id="pricing" className="flex flex-row gap-x-0.5">
                <p className="text-[#172026] font-medium text-2xl leading-9 ">Custom</p>

            </div>

            <div id="pricing" className="flex flex-col gap-y-2 ">
               <p className="text-[#36485C] leading-7 space-y-4 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. <br />

                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>


            </div>
            <button className="bg-[#FFFFFF] text-[#4328EB] font-medium text-[16px] leading-6  hover:bg-red-300 py-2 px-4 rounded transition duration-300">Contact Us</button>






            </div>


            </div>



        </div>
        
        
        </>
    )
}