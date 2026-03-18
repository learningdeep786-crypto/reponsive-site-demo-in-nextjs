import Image from "next/image";


import f1 from "../../public/f1.svg"
import f2 from "../../public/f2.svg"
import f3 from "../../public/f3.svg"
import c from "../../public/check.svg"
import bb from "../../public/bluebutton.svg"

export default function Features() {
  return (

    <>


        <div className="flex flex-col   gap-y-14
            pt-14 pr-5  pb-14 pl-5  lg:pt-30 lg:pr-20  lg:pb-30 lg:pl-20  lg:gap-y-20 lg:flex lg:flex-col
            
            " id="features">

                    <div className="flex flex-col gap-6 lg:flex lg:flex-row" id="feature 1">
                     <div className="lg:flex lg:flex-col lg:pt-14 lg:pb-14 lg:pr-14 lg:gap-8  lg:w-1/2">
                        <div className="gap-3 flex flex-col  lg:gap-4 " id="heading" >
                           <p className="text-[#0085FF] font-medium text-base leading-6 tracking-normal  lg:leading-6 lg:text-[18px] lg:font-medium"> Sale Mointoring</p> 

                             <p className="text-[#172026]  text-2xl 
                             font-medium leading-9 tracking-normal lg:font-medium lg:text-[42px] lg:leading-14.5">Simplify your sales monitoring</p>


                        </div>

                        <div id="image of f1" className="lg:hidden">
                            <Image src={f1} alt="f1pck" />
                        </div>

                        
                        <div id="text" className="">
                            <p className="leading-5 text-[16px] text-[#36485C] font-inter 
                            font-normal text-base tracking-normal 
                            lg:leading-7 lg:text-lg lg:font-normal">Stay on top of things and revamp your work process with our
                             game-changing feature. Get a bird's eye view with our customizable dashboard. </p>
                        </div>
                       
                    <div className="flex flex-col gap-3 lg:gap-5" id="checklist">

                    <div className="flex gap-6">
                            <Image src={c} alt="check" className=""/>

                          <p className="font-sans font-normal text-base leading-6 tracking-normal">Lorem ipsum dolor sit amet</p>
                    </div>

                    <div className="flex gap-6">
                            <Image src={c} alt="check" className=""/>

                     <p className="font-sans font-normal text-base leading-6 tracking-normal">Consectetur adipiscing elit</p>
                    </div>

                    <div className="flex gap-6">

                    <Image src={c} alt="check" className=""/>

                      <p className="font-sans font-normal text-base leading-6 tracking-normal">Sed do eiusmod tempor incididunt ut labore</p>
                    
                    </div>

                    </div>










                   


                    <div className="flex   pt-2 pb-2 gap-3 text-[#0085FF] lg:pt-6 lg:pb-6 lg:gap-3" id="arrow">
                       

                  <p className="font-inter font-medium text-base leading-6 tracking-normal">Learn More</p>
                   <Image src={bb} alt="jk"/>
                    </div>
                     </div>

         

                    
                            <Image src={f1} alt="f1pck"  className="hidden sm:w-1/2 sm:block rounded-2xl object-cover" />
                      
                       

                    </div>
        



                {/* feature 2 */}







                    <div className="flex flex-col gap-x-8.75 lg:flex lg:flex-row-reverse" id="feature 2">
                     <div className="lg:flex lg:flex-col lg:pt-14 lg:pb-14 lg:pr-14 lg:gap-8 lg:w-1/2">
                        <div className="gap-3 flex flex-col  lg:gap-4 " id="heading" >
                           <p className="text-[#00A424] font-medium text-base leading-6 tracking-normal  lg:leading-6 lg:text-[18px] lg:font-medium"> Customer Support</p> 

                             <p className="text-[#172026]  text-2xl 
                             font-medium leading-9 tracking-normal lg:font-medium lg:text-[42px] lg:leading-14.5">Get in touch with your customers</p>


                        </div>

                        <div id="image of f1" className="lg:hidden">
                            <Image src={f2} alt="f1pck" />
                        </div>

                        
                        <div id="text" className="">
                            <p className="leading-5 text-[16px] text-[#36485C] font-inter 
                            font-normal text-base tracking-normal 
                            lg:leading-7 lg:text-lg lg:font-normal">Stay on top of things and revamp your work process with our
                             game-changing feature. Get a bird's eye view with our customizable dashboard. </p>
                        </div>
                       
                    <div className="flex flex-col gap-3 lg:gap-5" id="checklist">

                    <div className="flex gap-6">
                            <Image src={c} alt="check" className=""/>

                          <p className="font-sans font-normal text-base leading-6 tracking-normal">Lorem ipsum dolor sit amet</p>
                    </div>

                    <div className="flex gap-6">
                            <Image src={c} alt="check" className=""/>

                     <p className="font-sans font-normal text-base leading-6 tracking-normal">Consectetur adipiscing elit</p>
                    </div>

                    <div className="flex gap-6">

                    <Image src={c} alt="check" className=""/>

                      <p className="font-sans font-normal text-base leading-6 tracking-normal">Sed do eiusmod tempor incididunt ut labore</p>
                    
                    </div>

                    </div>


                   <div className="flex   pt-2 pb-2 gap-3 text-[#0085FF] lg:pt-6 lg:pb-6 lg:gap-3" id="arrow">
                       

                  <p className=" text-[#00A424] font-inter font-medium text-base leading-6 tracking-normal">Learn More</p>
                   <Image src={bb} alt="jk"/>
                    </div>
                     </div>

         

                    
                            <Image src={f2} alt="f1pck"  className="hidden sm:w-1/2 sm:block rounded-2xl object-cover" />
                      
                       

                    </div>

                      {/* feature 3 */}    

                       <div className="flex flex-col gap-x-8.75 lg:flex lg:flex-row" id="feature 2">
                     <div className="lg:flex lg:flex-col lg:pt-14 lg:pb-14 lg:pr-14 lg:gap-8 lg:w-1/2">
                        <div className="gap-3 flex flex-col  lg:gap-4 " id="heading" >
                           <p className="text-[#EB2891] font-medium text-base leading-6 tracking-normal  lg:leading-6 lg:text-[18px] lg:font-medium"> Growth Mointoring</p> 

                             <p className="text-[#172026]  text-2xl 
                             font-medium leading-9 tracking-normal lg:font-medium lg:text-[42px] lg:leading-14.5">Monitor your site’s new subscribers.</p>


                        </div>

                        <div id="image of f1" className="lg:hidden">
                            <Image src={f3} alt="f1pck" />
                        </div>

                        
                        <div id="text" className="">
                            <p className="leading-5 text-[16px] text-[#36485C] font-inter 
                            font-normal text-base tracking-normal 
                            lg:leading-7 lg:text-lg lg:font-normal">Stay on top of things and revamp your work process with our
                             game-changing feature. Get a bird's eye view with our customizable dashboard. </p>
                        </div>
                       
                    {/* <div className="flex flex-col gap-3 lg:gap-5" id="checklist">

                    <div className="flex gap-6">
                            <Image src={c} alt="check" className=""/>

                          <p className="font-sans font-normal text-base leading-6 tracking-normal">Lorem ipsum dolor sit amet</p>
                    </div>

                    <div className="flex gap-6">
                            <Image src={c} alt="check" className=""/>

                     <p className="font-sans font-normal text-base leading-6 tracking-normal">Consectetur adipiscing elit</p>
                    </div>

                    <div className="flex gap-6">

                    <Image src={c} alt="check" className=""/>

                      <p className="font-sans font-normal text-base leading-6 tracking-normal">Sed do eiusmod tempor incididunt ut labore</p>
                    
                    </div>

                    </div> */}


                    <div id="statistics" className="pt-4 gap-x-6 flex flex-row ">

                        <div className="lg:flex  lg:flex-col lg:w-1/2">
                            <p className="font-medium text-[#172026]  leading-10 text-4xl">100+</p>
                            <p className="font-light text-[16px] text-[#5F7896]  ">Lorem ipsum dolor sit</p>
                        </div>


                           <div className="lg:flex  lg:flex-col lg:w-1/2">
                            <p className="font-medium text-[#172026]  leading-10 text-4xl">800+</p>
                            <p className="font-light text-[16px] text-[#5F7896]  ">Lorem ipsum dolor sit</p>
                        </div>
                    </div>


                   <div className="flex   pt-2 pb-2 gap-3 text-[#0085FF] lg:pt-6 lg:pb-6 lg:gap-3  mt-8" id="arrow">
                       

                  <p className=" text-[#EB2891] font-inter font-medium text-base leading-6 tracking-normal ">Learn More</p>
                   <Image src={bb} alt="jk"/>
                    </div>
                     </div>

         

                    
                            <Image src={f3} alt="f1pck"  className="hidden sm:w-1/2 sm:block rounded-2xl object-cover" />
                      
                       

                    </div>

                        
        


















































































































































                


            </div>










    
    </>
  )
}
    